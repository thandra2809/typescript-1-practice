import {AxiosPromise, AxiosResponse} from "axios";


interface ModelAttributes<T> {
    set(update: T): void

    getAll(): T

    get<K extends keyof T>(key: K): T[K]
}

interface Synch<T> {
    fetch(id: number): AxiosPromise

    save(data: T): AxiosPromise
}

interface Events {
    on(eventName: string, callBack: () => void): void

    trigger(eventName: string): void
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(private attributes: ModelAttributes<T>,
                private events: Events,
                private synch: Synch<T>) {
    }

    /*
    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;
    */

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');

        if (typeof id !== 'number') {
            throw new Error('can not fetch without an ID');
        }

        this.synch.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })

    }

    save(): void {
        this.synch.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            }).catch(() => {
            this.trigger('error');
        });

    }


}

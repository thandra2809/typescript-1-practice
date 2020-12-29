import {Eventing} from "./Eventing";
import axios, {AxiosResponse} from "axios";

export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(
        public rootURL: string,
        public deserialize: (json: K) => T) {
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootURL)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: K) => {
                    /*const user = T.buildUser(value)*/
                    this.models.push(this.deserialize(value))
                });

                this.trigger('change')

            })
    }

}

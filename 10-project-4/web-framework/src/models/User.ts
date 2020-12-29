import {Eventing} from "./Eventing";
import {Synch} from "./Synch";
import {Attributes} from "./Attributes";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User {

    public events: Eventing = new Eventing();
    public synch: Synch<UserProps> = new Synch<UserProps>(rootURL);
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs)
    }

    /** Accessor method for Event.on*/

    /*on(eventName: string, callback: CallBack): void {
        this.events.on(eventName, callback)
    }*/

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProps): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    /*
    constructor(private data: UserProps) {
    }

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }
*/

    /*
        fetch(): void {

            axios.get(`http://localhost:3000/users/${this.get('id')}`)
                .then((response: AxiosResponse): void => {
                    /!** should contain id name and age **!/
                    console.log(response.data);
                    this.set(response.data);

                })

        }

        save(): void {

            const id = this.get('id')
            if (id) {
                /!** PUT as user already exist*!/
                axios.put(`http://localhost:3000/users/${id}`, this.data)
                    .then((response: AxiosResponse): void => {
                        console.log(response.data)
                    })
            } else {
                /!** POST as user does not already exist*!/
                axios.post(`http://localhost:3000/users`, this.data)
                    .then((response: AxiosResponse): void => {
                        console.log(response.data)
                    })
            }

        }
    */

}


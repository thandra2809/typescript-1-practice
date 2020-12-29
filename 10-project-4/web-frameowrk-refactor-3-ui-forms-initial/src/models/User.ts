import {Eventing} from "./Eventing";
import {APISynch} from "./APISynch";
import {Attributes} from "./Attributes";
import {Model} from "./Model";
import {Collection} from "./Collection";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(new Attributes<UserProps>(attrs),
            new Eventing(),
            new APISynch<UserProps>(rootURL))
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootURL,
            (json: UserProps) => User.buildUser(json))

    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({age});
    }

}

/*    public events: Eventing = new Eventing();
    public synch: APISynch<UserProps> = new APISynch<UserProps>(rootURL);
    public attributes: Attributes<UserProps>;*/

/** after creating a model*/
/*constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
}*/

/** Accessor method for Event.on*/

/*on(eventName: string, callback: CallBack): void {
    this.events.on(eventName, callback)
}*/

/** After creating a model class */
/*
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

}*/


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




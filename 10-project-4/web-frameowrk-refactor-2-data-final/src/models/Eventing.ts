type Callback = () => void;

export class Eventing {

    events: { [key: string]: Callback[] } = {};

    /** synonymous to addEventListener('change',callBack function)**/
    on = (eventName: string, callBack: Callback): void => {
        const handlers = this.events[eventName] || [];

        handlers.push(callBack);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        })
    }
}

/**
 *  Option-1 : accept dependencies as a second argument some thing like below
 *   *  constructor(private data: UserProps, private events: Eventing) {
    }

 *  Option-2 : static method
 *  define a static class method to pre-configure user and assign properties afterwards
 *
 *  static fromUserData( data: UserProps){
        const user = new User(new Eventing())
        user.set(data);
        return user;
    }

 constructor( private events: Eventing) {
    }
 *
 * Option-3 : only accept properties into constructor Hard code dependencies as class props
 *
 * events: Eventing = new Eventing();
 constructor(private data: UserProps) {
    }
 *
 * **/

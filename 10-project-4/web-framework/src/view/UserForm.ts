import {User} from "../models/User";

export class UserForm {

    constructor(public parent: Element, public model: User) {
        this.model.on('change', () => {
            this.render();
        })
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
        }
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if (input) {
            const newName = input.value;
            this.model.set({name: newName})
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }


    template(): string {
        return `
        <div>
        <h2>User Form</h2>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <br>
        <input/>
        <button class="set-name">Change Name</button>
        <br>
        <button class="set-age">Set Random Age</button>
        </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (const eventsKey in eventsMap) {
            const [eventName, selector] = eventsKey.split(':');

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventsKey]);
            })

        }
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }

}

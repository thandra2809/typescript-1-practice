import {Model} from "../models/Model";

interface ModelForView {
    on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K> {

    constructor(public parent: Element, public model: T) {
        this.model.on('change', () => {
            this.render();
        })
    }


    abstract template(): string;

    eventMap(): { [key: string]: () => void } {
        return {}
    };

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventMap();

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

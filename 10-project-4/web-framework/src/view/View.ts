import {Model} from "../models/Model";

interface ModelForView {
    on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K> {

    regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.model.on('change', () => {
            this.render();
        })
    }


    abstract template(): string;

    regionsMap(): { [key: string]: string } {
        return {};
    }

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

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];

            // @ts-ignore
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }

    }

    onRender(): void {
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        /** View Nesting */
        this.onRender();

        this.parent.append(templateElement.content);
    }


}

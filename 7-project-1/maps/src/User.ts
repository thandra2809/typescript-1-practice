// @ts-ignore
import faker from 'faker';
import {Mappable} from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.findName(1);
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }

    markerContent() {
        return `
        <div>
            <h3>Company Name: ${this.name}</h3>
        </div>`;
    }

}

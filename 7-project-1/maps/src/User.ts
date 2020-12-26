// @ts-ignore
import faker from 'faker';

export class User {
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

}

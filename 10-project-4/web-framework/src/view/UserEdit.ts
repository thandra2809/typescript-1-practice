import {User, UserProps} from "../models/User";
import {View} from "./View";

export class UserEdit extends View<User, UserProps> {

    /*    eventMap(): { [key: string]: () => void } {
            return {}
        }*/

    template(): string {

        return `
          <div>
          <h2>User Details</h2>
          <div>User Name: ${this.model.get('name')}</div>
          <div>User Age: ${this.model.get('age')}</div>
          <br>
          </div>
          `;
    }

}

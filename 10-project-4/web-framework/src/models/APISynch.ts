import axios, {AxiosPromise} from "axios";

interface HasId {
    id?: number;
}

export class APISynch<T extends HasId> {

    constructor(public rootUrl: string) {

    }

    fetch(id: number): AxiosPromise {


        /*       axios.get(`${this.rootUrl}/${id}`)
                   .then((response: AxiosResponse): void => {
                       /!** should contain id name and age **!/
                       console.log(response.data);
                       this.set(response.data);

                   })*/

        return axios.get(`${this.rootUrl}/${id}`);

    }

    save(data: T): AxiosPromise {

        const {id} = data;
        if (id) {

            return axios.put(`${this.rootUrl}/${id}`, data)

            /** PUT as user already exist
             axios.put(`${this.rootUrl}/${id}`, data)
             .then((response: AxiosResponse): void => {
                    console.log(response.data)
                })*/
        } else {

            return axios.post(`${this.rootUrl}`, data)

            /** POST as user does not already exist
             axios.post(`${this.rootUrl}`, data)
             .then((response: AxiosResponse): void => {
                    console.log(response.data)
                })*/
        }

    }
}

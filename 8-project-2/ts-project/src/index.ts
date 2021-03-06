/*
class Sorter {

    constructor(public collection: number[] | string) {
    }

    sort(): void {

        const {length} = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                if (this.collection instanceof Array) {
                    // Type of collection is Array
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }

        // String Implementation
        if(typeof this.collection ==='string'){

        }

    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection)
*/
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {Sorter} from "./Sorter";

const numbersCollection = new NumbersCollection([10,3,-5,0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data)

/** Characters Collection **/
const charactersCollection = new CharactersCollection('Xaayb');
const sorterChars = new Sorter(charactersCollection);
sorterChars.sort();

console.log(charactersCollection.data)

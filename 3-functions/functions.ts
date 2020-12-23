const add = (a: number, b: number): number => {
    return a + b;
}


console.log('Added value is: ', add(3, 4))

/** never type for functions that is throwing errors **/

const throwError = (message: string): never => {
    throw new Error(message);
}

console.log(throwError('This is error occurred while learning typescript'));

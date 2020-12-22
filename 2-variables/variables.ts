let apples: number = 5;
console.log(apples)

let colors: string[] = ['test']
console.log(colors)

let object: { x: number, y: number } = {
    x: 10,
    y: 20
}
console.log(object.x)


console.log(JSON.parse('false'))
console.log(typeof (JSON.parse('5')))


const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
    return 1;
}

console.log(logNumber(2))
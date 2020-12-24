interface Vehicle {
    name: string,
    year: number,
    broken: boolean
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
    console.log('Vehicle Name:', vehicle.name);
    console.log('make year:', vehicle.year);
    console.log('broken:', vehicle.broken);
}

printVehicle(oldCivic)

const printVehicleWithType = (vehicle: Vehicle): void => {
    console.log('Vehicle Name:', vehicle.name);
    console.log('make year:', vehicle.year);
    console.log('broken:', vehicle.broken);
}
console.log('*****************************');
printVehicleWithType(oldCivic)

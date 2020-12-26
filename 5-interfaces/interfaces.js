var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log('Vehicle Name:', vehicle.name);
    console.log('make year:', vehicle.year);
    console.log('broken:', vehicle.broken);
};
printVehicle(oldCivic);
var printVehicleWithType = function (vehicle) {
    console.log('Vehicle Name:', vehicle.name);
    console.log('make year:', vehicle.year);
    console.log('broken:', vehicle.broken);
};
console.log('*****************************');
printVehicleWithType(oldCivic);

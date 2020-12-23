const add = (a: number, b: number): number => {
    return a + b;
}


console.log('Added value is: ', add(3, 4))

/** never type for functions that is throwing errors **/

const throwError = (message: string): never => {
    throw new Error(message);
}

// console.log(throwError('This is error occurred while learning typescript'));


const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(todayWeather)


const logWeatherDestructured = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeatherDestructured(todayWeather)

/*
import fs from 'fs';


const matches = fs.readFileSync('football.csv', {encoding: 'utf-8'}).split("\n").map((row: string): string[] => {
    return row.split(',')
})


console.log(matches)

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}


let manUnitedWIns = 0;

for (const match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWIns++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWIns++;
    }
}

console.log(`Man United won ${manUnitedWIns}`)

*/

import {CSVFileReader} from "./CSVFileReader";
import {MatchResult} from "./MatchResult";

const reader = new CSVFileReader('football.csv');
reader.read();


let manUnitedWIns = 0;

for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWIns++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWIns++;
    }
}

console.log(`Man United won ${manUnitedWIns}`)

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWIns = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWIns++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWIns++;
    }
}
console.log("Man United won " + manUnitedWIns);

// @ts-ignore
import fs from 'fs';

export abstract class CSVFileReader<T> {

    data: T[] = [];

    constructor(public filename: string) {
    }

    abstract mapARow(row: string[]): T

    read(): void {
        this.data = fs.readFileSync(this.filename, {encoding: 'utf-8'})
            .split("\n")
            .map((row: string): string[] => {
                return row.split(',')
            })
            .map(this.mapARow);
    }

}

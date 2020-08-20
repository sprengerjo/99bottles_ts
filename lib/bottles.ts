import { downTo } from './helpers';

export class Bottles {

    song(): string {
        return this.verses(99, 0);
    }
    verses(max: number, min: number): string {
        return downTo(max, min)
            .map(this.verse)
            .join('\n');
    }
    verse(number: number): string {
        let result;

        if (number === 0) {
            result =
                'No more bottles of beer on the wall, ' +
                'no more bottles of beer.\n' +
                'Go to the store and buy some more, ' +
                '99 bottles of beer on the wall.\n';
        } else if (number === 1) {
            result =
                '1 bottle of beer on the wall, ' +
                '1 bottle of beer.\n' +
                'Take it down and pass it around, ' +
                'no more bottles of beer on the wall.\n';
        } else if (number === 2) {
            result =
                '2 bottles of beer on the wall, ' +
                '2 bottles of beer.\n' +
                'Take one down and pass it around, ' +
                '1 bottle of beer on the wall.\n';
        } else {
            result = `${number} bottles of beer on the wall, ` +
                `${number} bottles of beer.\n` +
                'Take one down and pass it around, ' +
                `${number - 1} bottles of beer on the wall.\n`;
        }
        return result
    }
}


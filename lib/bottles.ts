import { downTo, capitalize } from './helpers';

export class Bottles {

    song(): string {
        return this.verses(99, 0);
    }
    verses(max: number, min: number): string {
        return downTo(max, min)
            .map(number => this.verse(number))
            .join('\n');
    }
    verse(number: number): string {
        const result = `${this.quantity(number)} ${this.container(number)} of beer on the wall, ` +
            `${this.quantity(number)} ${this.container(number)} of beer.\n` +
            `${this.action(number)}` +
            `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.\n`;

        return capitalize(result)
    }

    container(number: number): string {
        return number === 1 ? 'bottle' : 'bottles';
    }

    quantity(number: number): string {
        return number === 0 ? 'no more' : number.toString();
    }

    pronoun(number: number): string {
        return number === 1 ? 'it' : 'one';
    }

    action(number: number): string {
        return number === 0 ? 'Go to the store and buy some more, ' : `Take ${this.pronoun(number)} down and pass it around, `;
    }

    successor(number: number): number {
        return number === 0 ? 99 : number - 1;
    }

}


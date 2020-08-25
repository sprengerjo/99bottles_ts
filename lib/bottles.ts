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
        const bottleNumber = BottleNumber.for(number);

        const result = `${bottleNumber} of beer on the wall, ` +
            `${bottleNumber} of beer.\n` +
            `${bottleNumber.action()}` +
            `${bottleNumber.successor()} of beer on the wall.\n`;

        return capitalize(result)
    }
}

class BottleNumber {

    static for<T extends BottleNumber>(number: number): T | BottleNumber {
        let BottleNumberClass;

        if (number === 0) {
            BottleNumberClass = BottleNumber0;
        } else if (number === 1) {
            BottleNumberClass = BottleNumber1;
        } else if (number === 6) {
            BottleNumberClass = BottleNumber6;
        } else {
            BottleNumberClass = BottleNumber;
        }
        return new BottleNumberClass(number);
    }

    constructor(private number: number) { }

    container(): string {
        return 'bottles';
    }

    quantity(): string {
        return this.number.toString();
    }
    
    successor() {
        return BottleNumber.for(this.number - 1);
    }
    
    action(): string {
        return `Take ${this.pronoun()} down and pass it around, `;
    }
    
    toString() {
        return `${this.quantity()} ${this.container()}`;
    }
    
    protected pronoun(): string {
        return 'one';
    }
}

class BottleNumber0 extends BottleNumber {
    quantity(): string {
        return 'no more';
    }
    
    successor() {
        return BottleNumber.for(99);
    }
    
    action(): string {
        return 'Go to the store and buy some more, ';
    }
}

class BottleNumber1 extends BottleNumber {
    container(): string {
        return 'bottle';
    }
    
    protected pronoun(): string {
        return 'it';
    }
}
class BottleNumber6 extends BottleNumber {
    container(): string {
        return 'six-pack';
    }

    quantity(): string {
        return '1';
    }
}

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
        const bottleNumber = BottleNumner.for(number);

        const result = `${bottleNumber} of beer on the wall, ` +
            `${bottleNumber} of beer.\n` +
            `${bottleNumber.action()}` +
            `${bottleNumber.successor()} of beer on the wall.\n`;

        return capitalize(result)
    }
}

class BottleNumner {

    static for<T extends BottleNumner>(number: number): T | BottleNumner {
        let BottleNumberClass;

        if (number === 0) {
            BottleNumberClass = BottleNumber0;
        } else if (number === 1) {
            BottleNumberClass = BottleNumber1;
        } else if (number === 6) {
            BottleNumberClass = BottleNumber6;
        } else {
            BottleNumberClass = BottleNumner;
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
        return BottleNumner.for(this.number - 1);
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

class BottleNumber0 extends BottleNumner {
    quantity(): string {
        return 'no more';
    }
    
    successor() {
        return BottleNumner.for(99);
    }
    
    action(): string {
        return 'Go to the store and buy some more, ';
    }
}

class BottleNumber1 extends BottleNumner {
    container(): string {
        return 'bottle';
    }
    
    protected pronoun(): string {
        return 'it';
    }
}
class BottleNumber6 extends BottleNumner {
    container(): string {
        return 'six-pack';
    }

    quantity(): string {
        return '1';
    }
}

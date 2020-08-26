import { downTo, capitalize } from './helpers';

export interface VerseTemplate {
    lyrics: (number: number) => string;
}

export class CountdownSong {
    constructor(private verseTemplate: VerseTemplate = BottleVerse, private max = 999999, private min = 0) { }

    song(): string {
        return this.verses(this.max, this.min);
    }
    verses(max: number, min: number): string {
        return downTo(max, min)
            .map(number => this.verse(number))
            .join('\n');
    }
    verse(number: number): string {
        return this.verseTemplate.lyrics(number)
    }
}

export class BottleVerse implements VerseTemplate{
    /**
     *  rigorously separate object creation from object use
     */
    static for(number: number) {
        return new BottleVerse(BottleNumber.for(number));
    }

    constructor(private bottleNumber: any) { }

    static lyrics(number: number): string {
        return BottleVerse.for(number).lyrics();
    }

    lyrics(): string {
        const result = `${this.bottleNumber} of beer on the wall, ` +
            `${this.bottleNumber} of beer.\n` +
            `${this.bottleNumber.action()}` +
            `${this.bottleNumber.successor()} of beer on the wall.\n`;

        return capitalize(result)
    }
}

export class BottleNumber {

    static for<T extends BottleNumber>(number: number): T | BottleNumber {
        let bottleNumberClass;

        if (number === 0) {
            bottleNumberClass = BottleNumber0;
        } else if (number === 1) {
            bottleNumberClass = BottleNumber1;
        } else if (number === 6) {
            bottleNumberClass = BottleNumber6;
        } else {
            bottleNumberClass = BottleNumber;
        }
        return new bottleNumberClass(number);
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

export class BottleNumber0 extends BottleNumber {
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

export class BottleNumber1 extends BottleNumber {
    container(): string {
        return 'bottle';
    }

    protected pronoun(): string {
        return 'it';
    }
}
export class BottleNumber6 extends BottleNumber {
    container(): string {
        return 'six-pack';
    }

    quantity(): string {
        return '1';
    }
}

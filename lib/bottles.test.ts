import * as bottles from "./bottles"

// @ponicode
describe("song", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.CountdownSong(undefined, -Infinity, -Infinity)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.song()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("verses", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.CountdownSong(undefined, NaN, NaN)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.verses(-100, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.verses(-100, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.verses(-1, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.verses(-1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.verses(1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.verses(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("verse", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.CountdownSong(undefined, -Infinity, -Infinity)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.verse(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.verse(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.verse(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.verse(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.verse(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.verse(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("bottles.BottleVerse.for", () => {
    test("0", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.for(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.for(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.for(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.for(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.for(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.for(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("bottles.BottleVerse.lyrics", () => {
    test("0", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.lyrics(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.lyrics(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.lyrics(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.lyrics(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.lyrics(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            bottles.BottleVerse.lyrics(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("lyrics", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleVerse(12345)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.lyrics()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("bottles.BottleNumber.for", () => {
    test("0", () => {
        let callFunction: any = () => {
            bottles.BottleNumber.for(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            bottles.BottleNumber.for(7)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            bottles.BottleNumber.for(6)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            bottles.BottleNumber.for(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            bottles.BottleNumber.for(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            bottles.BottleNumber.for(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("container", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber(100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.container()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("quantity", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber(-5.48)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.quantity()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("successor", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber(0)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.successor()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("action", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber(-5.48)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.action()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("toString", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber(100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.toString()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("pronoun", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber(100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.pronoun()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("quantity", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber0(-5.48)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.quantity()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("successor", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber0(100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.successor()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("action", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber0(0)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.action()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("container", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber1(1)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.container()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("pronoun", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber1(-100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.pronoun()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("container", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber6(100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.container()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("quantity", () => {
    let inst: any

    beforeEach(() => {
        inst = new bottles.BottleNumber6(100)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.quantity()
        }
    
        expect(callFunction).not.toThrow()
    })
})

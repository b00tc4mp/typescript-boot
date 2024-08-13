interface ICharacter {
    name: string
    LVL: number
    attributes: {
        strength: number,
        agility: number,
        toughness: number,
    },
    inventory: Item[],
    stats: {
        HP: number,
        DEF: number
        ATK: number
        SPEED: number
    }
};
type ItemType = "Armor" | "Weapon" | "Consumible";

class Item {
    type: ItemType
    name: string
    description: string
    attributes: {
        durability: number,
        DEF?: number,
        ATK?: number,
        USES?: number,
        levelRequirement?: number
    }

    constructor(type: ItemType, name: string, description: string, attributes: { durability: number, DEF?: number, levelRequirement?: number, ATK?: number, USES?: number }) {
        this.type = type
        this.name = name
        this.description = description
        this.attributes = attributes
    }
};

abstract class Hobbit implements ICharacter {
    name: string
    LVL: number
    attributes: { strength: number; agility: number; toughness: number }
    inventory: Item[]
    stats: { HP: number; DEF: number; ATK: number; SPEED: number }

    constructor(name: string, LVL: number, inventory: Item[]) {
        this.name = name
        this.LVL = LVL

        this.attributes = {
            strength: 10,
            agility: 60,
            toughness: 20
        }

        this.inventory = inventory

        let HP: number = 100
        HP += this.attributes.strength * 1 / 20 + this.attributes.toughness * 2 / 10

        let DEF: number = 0
        let ATK: number = this.attributes.strength * 1 / 10
        this.inventory.forEach((item: Item) => {
            if (item.type === 'Armor')
                DEF += item.attributes.DEF || 0
            else if (item.type === 'Weapon')
                ATK += item.attributes.ATK || 0
        })

        let SPEED: number = this.attributes.agility * 1 / 100 + this.attributes.toughness * 1 / 20

        this.stats = {
            HP,
            DEF,
            ATK,
            SPEED
        }
    }
}

class FrodoBuggy extends Hobbit {
    constructor() {
        super('Frodo Buggy', 1, [
            new Item('Armor', 'Leather Armor', 'Armor made of Cow Leather', { durability: 100, DEF: 35 }),
            new Item('Weapon', 'Small Knife', 'Knife to cut food', { durability: 100, ATK: 5 })
        ])
    }
}

class BilboBuggy extends Hobbit {
    constructor() {
        super('Frodo Buggy', 1, [
            new Item('Consumible', 'Ring', 'Makes us invisible', { durability: 100, USES: 3 })
        ])
    }
}

const frodo: ICharacter = new FrodoBuggy
const bilbo: ICharacter = new BilboBuggy

console.log(frodo)
console.log(bilbo)
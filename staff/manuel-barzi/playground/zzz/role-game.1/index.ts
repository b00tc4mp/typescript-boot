interface ICharacter {
    name: string,
    attributes: {
        strength: number,
        agility: number,
        toughness: number
    },
    inventory: Item[],
    stats: {
        healthPoints: number,
        defense: number,
        attack: number,
        speed: number
    }
}

type ItemType = 'Armor' | 'Weapon' | 'Consumible'

class Item {
    type: ItemType
    name: string
    description: string
    attributes: {
        durability: number,
        defense?: number,
        strengthRequirement?: number,
        attack?: number
    }

    constructor(type: ItemType, name: string, description: string, attributes: { durability: number, defense?: number, strengthRequirement?: number, attack?: number }) {
        this.type = type
        this.name = name
        this.description = description
        this.attributes = attributes
    }
}

class FrodoBuggy implements ICharacter {
    name: string
    attributes: { strength: number; agility: number; toughness: number }
    inventory: Item[]
    stats: { healthPoints: number; defense: number; attack: number; speed: number }

    constructor() {
        this.name = 'Frodo Buggy'

        this.attributes = {
            strength: 20,
            agility: 55,
            toughness: 40
        }

        this.inventory = [
            new Item('Armor', 'Leader Armor', 'Armor made of Cow Leader', { durability: 100, defense: 35 }),
            new Item('Weapon', 'Small Knife', 'Knife to cut food', { durability: 100, attack: 20 })
        ]

        let healthPoints: number = 100
        healthPoints += this.attributes.strength * 1 / 20 + this.attributes.toughness * 2 / 10

        let defense: number = 0
        let attack: number = this.attributes.strength * 1 / 10
        this.inventory.forEach((item: Item) => {
            if (item.type === 'Armor')
                defense += item.attributes.defense || 0
            else if (item.type === 'Weapon')
                attack += item.attributes.attack || 0
        })

        let speed: number = this.attributes.agility * 1 / 100 + this.attributes.toughness * 1 / 20

        this.stats = {
            healthPoints,
            defense,
            attack,
            speed
        }
    }
}

const frodo: ICharacter = new FrodoBuggy

console.log(frodo)
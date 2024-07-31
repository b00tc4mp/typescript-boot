var Item = /** @class */ (function () {
    function Item(type, name, description, attributes) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
    return Item;
}());
var FrodoBuggy = /** @class */ (function () {
    function FrodoBuggy() {
        this.name = 'Frodo Buggy';
        this.attributes = {
            strength: 20,
            agility: 55,
            toughness: 40
        };
        this.inventory = [
            new Item('Armor', 'Leader Armor', 'Armor made of Cow Leader', { durability: 100, defense: 35 }),
            new Item('Weapon', 'Small Knife', 'Knife to cut food', { durability: 100, attack: 20 })
        ];
        var healthPoints = 100;
        healthPoints += this.attributes.strength * 1 / 20 + this.attributes.toughness * 2 / 10;
        var defense = 0;
        var attack = this.attributes.strength * 1 / 10;
        this.inventory.forEach(function (item) {
            if (item.type === 'Armor')
                defense += item.attributes.defense || 0;
            else if (item.type === 'Weapon')
                attack += item.attributes.attack || 0;
        });
        var speed = this.attributes.agility * 1 / 100 + this.attributes.toughness * 1 / 20;
        this.stats = {
            healthPoints: healthPoints,
            defense: defense,
            attack: attack,
            speed: speed
        };
    }
    return FrodoBuggy;
}());
var frodo = new FrodoBuggy;
console.log(frodo);

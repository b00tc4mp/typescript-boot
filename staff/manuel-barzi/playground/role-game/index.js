var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = /** @class */ (function () {
    function Item(type, name, description, attributes) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
    return Item;
}());
var Hobbit = /** @class */ (function () {
    function Hobbit(name, inventory) {
        this.name = name;
        this.attributes = {
            strength: 20,
            agility: 55,
            toughness: 40
        };
        this.inventory = inventory;
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
    return Hobbit;
}());
var FrodoBuggy = /** @class */ (function (_super) {
    __extends(FrodoBuggy, _super);
    function FrodoBuggy() {
        return _super.call(this, 'Frodo Buggy', [
            new Item('Armor', 'Leader Armor', 'Armor made of Cow Leader', { durability: 100, defense: 35 }),
            new Item('Weapon', 'Small Knife', 'Knife to cut food', { durability: 100, attack: 20 })
        ]) || this;
    }
    return FrodoBuggy;
}(Hobbit));
var BilboBuggy = /** @class */ (function (_super) {
    __extends(BilboBuggy, _super);
    function BilboBuggy() {
        return _super.call(this, 'Frodo Buggy', [
            new Item('Armor', 'Ring', 'Makes us invisible', { durability: 100, defense: 50 })
        ]) || this;
    }
    return BilboBuggy;
}(Hobbit));
var frodo = new FrodoBuggy;
var bilbo = new BilboBuggy;
console.log(frodo);
console.log(bilbo);

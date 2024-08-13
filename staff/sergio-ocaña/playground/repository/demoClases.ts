const arr: readonly number[] = [1, 2, 3, 4];
// arr.push(2)
console.log(arr);

type Tuple = [number, boolean, string];

let tuple1: Tuple;
tuple1 = [8, true, "finally tuples :)"];

let tuple2: Tuple;
tuple2 = [10, false, "finally tuples :)"];

const arrTuple: Tuple[] = [tuple1, tuple2];

arrTuple.push([2, false, "only tuples"]);

const nameAge: { [index: string]: number } = {};

nameAge.Jack = 25;
// nameAge.Mark = "fifty"

const recordObj: Record<string, number> = {};

recordObj.Pepito = 10;

// recordObj.Alejandro = "ale ale"

enum CardinalDirections {
    North = 0,
    East,
    South,
    West
};

// logs 0
console.log(CardinalDirections.North);
// logs 3
console.log(CardinalDirections.West);




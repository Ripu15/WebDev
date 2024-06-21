enum Direction {
    Up, //0
    Down,//1
    Left,//2
    Right//3
}

function doSomething(keyPressed: Direction) {
	console.log("ENUMS");
}

doSomething(Direction.Up)
console.log(Direction.Up)

console.log(Direction.Left);
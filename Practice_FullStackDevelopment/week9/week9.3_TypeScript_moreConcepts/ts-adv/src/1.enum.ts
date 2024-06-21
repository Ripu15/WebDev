//relecement for using direct constant literals
enum Direction{
    Up,
    Down,
    Left =4,
    Right
}

enum Direction1{
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething(keyPressed: Direction){
    if(keyPressed == Direction.Up){
        console.log(Direction.Up);
        console.log(Direction1.Up);
    }
    else if(keyPressed == Direction.Down){
        console.log(Direction.Down);
        console.log(Direction1.Down);
    }
    else if(keyPressed == Direction.Left){
        console.log(Direction.Left);
        console.log(Direction1.Left);
    }
    else {
        console.log(Direction.Right);
        console.log(Direction1.Right);
    }
}
//calling function 'doSomething'
doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);
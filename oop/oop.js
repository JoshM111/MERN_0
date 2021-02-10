var myList=[2,4,6,8,10];
myList.push(12);
myList.length;

class User {
    constructor(name,guess) {
        this.name=name;
        this.guess=guess;
        this.
    }
    sayHello(otherUser){
        console.log(`${this.name} says hello to ${otherUser.name}!`)
    }
    editGuess(num){
        this.guess=num;
    }
}

var sara= new User("Sara", 2);
var karen = new User("Karen", 8);
console.log(sara.guess);

karen.sayHello(sara);
sara.editGuess(5);
console.log(sara.guess);

class Game {
    constructor(){
        this.randomNum= Math.floor((Math.random() * 10) + 1);
        this.numOrGuesses=0;
    }
    gameplay(guess){
        if(this.guess==this.randomNum){
            console.log("YOU WON!!")
        }else{
            console.log("YOU LOST!!")
        }
        return this
    }
}

var newGame=new Game();
var anotherGame=new Game();
console.log(newGame);
console.log(anotherGame);

newGame.gameplay(sara.guess);













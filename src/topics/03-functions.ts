interface Character {
    name:string;
    hp:number;
    showHp: () => void
}

function addNumbers(a:number, b:number): number {
    return a + b;
}

const addNumbersArrow = (a:number, b:number):number => a + b;

const multiply = (num1:number, num2?:number, base:number = 2) => {
    return num1 *  base;
};

const result = addNumbers(1, 2);

const result2 = addNumbersArrow(2, 5);

const multiplyRes = multiply(2);

console.log({result, result2, multiplyRes});


const healCharacter = ( character: Character, amount:number) => character.hp += amount;

const frodo:Character = {
    name: "Frodo Bolson",
    hp: 80,
    showHp() {
        console.log(`Vida ${ this.hp }`);
        
    }
};

healCharacter(frodo, 20);

frodo.showHp();



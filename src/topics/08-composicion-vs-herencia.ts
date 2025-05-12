export class Person {

    constructor(
        public name: string,
        private address?: string
    ) {
    }

}

export class Hero {

    public person: Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string
    ) {
        
        this.person = new Person(alterEgo);
    }
}
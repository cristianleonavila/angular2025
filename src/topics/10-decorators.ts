function classDecorator<T extends { new (...args:any[]) : {}}>(
    constructor: T
) {

    return class extends constructor {
        newProp = "New Property";
        hello = "Override";
    }
}

@classDecorator
export class SuperClass {

    public myProp:string = "Abc123";

    print() {
        console.log("Hello World");
        
    }
}
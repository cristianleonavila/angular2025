export interface Passenger {
    name: string;
    children?:string[]
}

const pasajero1: Passenger = {
    name: "Cristian Leon",
    children: ["Frodo", "Lunita", "Simba"]
}

const howManyChildren = ( pass: Passenger ): number =>  pass.children?.length || 0;

console.log(howManyChildren(pasajero1));



export function whatsMyType<T>(argument:T):T {
    return argument;
}

let amIString = whatsMyType("Cristian Leon");

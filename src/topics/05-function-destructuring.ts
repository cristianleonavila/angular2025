export interface Product {
    description:string;
    price:number;
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

const phone: Product = {
    description: "Samsung A55",
    price: 50.0
};

const tablet: Product = {
    description: "Samsung A25",
    price: 25.0
};

const shoppingCart = [phone, tablet];

function taxCalculation(options: TaxCalculationOptions):number[] {
    return [];
}
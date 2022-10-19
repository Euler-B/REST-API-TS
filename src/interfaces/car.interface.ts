export interface Car {
    brand: string;
    name: string;
    color: string;
    gas: 'gasoline' | 'diesel' | 'electric';
    year: number;
    description: string;
    price: number;
}
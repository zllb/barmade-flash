export class Ingredient { 
    constructor(
        public id: number, 
        public name: string, 
        public description: string, 
        public amount?: number, 
        public categories?: number
    ){}
}
export class Ingredient {
    constructor(public id: number,
                public name: string,
                public description: string,
                public required?: boolean,
                public amount?: number,
                // public measure?: string,
                // public ratio?: number,
                public categories?: string[]) {}
}


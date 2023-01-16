export interface Pets {
    pets: Array<Pet>;
}

export interface Pet {
    id: string;
    name: string;
    location: string;
    type: string;
    pity: number;
    equipped: any;
    expedition: any;
    rarity: number;
}

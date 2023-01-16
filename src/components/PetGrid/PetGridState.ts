import { Combos } from "../../models/Combos";
import { Pet } from "../../models/Pets";

export interface PetGridState {
    pets: Array<Pet>;
    filteredPets: Array<Pet>;
    bonusFilter: string[];
    tabValue: number;
    combos: any;
    searchTerm: string;
}
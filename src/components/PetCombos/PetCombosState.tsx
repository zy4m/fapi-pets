import { Pet } from "../../models/Pets";

export interface PetComboState {
    openDialog: boolean;
    selectedPet: Pet;
}
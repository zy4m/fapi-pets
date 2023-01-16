import { Pet } from "../../models/Pets";

export interface PetCardDialogProps {
    openDialog: boolean;
    handleClose: () => void;
    selectedPet: Pet;
}
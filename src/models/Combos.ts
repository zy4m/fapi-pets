export interface Combos {
    base_residue?: Array<Combo>;
    equipment_rarity?: Array<Combo>;
    drop_chance?: Array<Combo>;
    potatoes_spawn?: Array<Combo>;
    potatoes_per_wave?: Array<Combo>;
    potatoes_spawn_speed?: Array<Combo>;
    expedition_reward?: Array<Combo>;
    expedition_damage?: Array<Combo>;
    breed_timer?: Array<Combo>;
    milk_timer?: Array<Combo>;
    attack_speed?: Array<Combo>;
    whack_buff_duration?: Array<Combo>;
}
export interface Combo {
    id: string;
    pet_ids: Array<number>;
    bonuses: any;
}

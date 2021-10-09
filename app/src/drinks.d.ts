type DrinkSize =
    'Short'
    | 'Tall'
    | 'Grande'
    | 'Venti'
    | 'Venti®'
    | 'Trenta'
    | 'N/A'
    | 'Solo'
    | 'Doppio'
    | 'Triple'
    | 'Quad';
type Milk = 'Soy' | 'Coconut' | 'Nonfat' | 'Oat' | 'Whole' | '2%';

type Drink = {
    name: string
    size: DrinkSize
    milk: Milk
    whip: boolean
    kcal: number
};

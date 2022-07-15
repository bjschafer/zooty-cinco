export class ProgressionItem {
    Name: string;
    Image?: URL;
}

export const ProgressionItems: ProgressionItem[] = [
    {Name: "Hookshot",},
    {Name: "Longshot",},
    {
        Name:  "Hammer",
        Image: new URL("../img/hammer.png", import.meta.url)
    },
    {Name: "Kokiri Sword",},
    {Name: "Master Sword",},
    {Name: "Biggoron Sword",},
    {Name: "Bow",},
    {Name: "Slingshot",},
    {Name: "Fire Arrows",},
    {Name: "Ice Arrows",},
    {Name: "Light Arrows",},
    {Name: "Boomerang",},
    {Name: "Mirror Shield",},
    {Name: "Ocarina of Time",},
    {Name: "Bombs",},
    {Name: "Magic",},
    {Name: "Iron Boots",},
    {Name: "Hover Boots",},
    {Name: "Zora Tunic",},
    {Name: "Goron Tunic",},
    {Name: "Goron Bracelet",},
    {Name: "Silver Gauntlets",},
    {Name: "Golden Gauntlets",},
    {Name: "Silver Scale",},
    {Name: "Golden Scale",}
]

function random(seed: number): number {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffle<T>(array: T[], seed: number): T[] {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(random(seed) * currentIndex--);

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    ++seed;

    return array;
}

export function ValidateSeed(seed?: number): number {
    if (!seed) {
        seed = Math.ceil(999999 * Math.random())
    }

    // ensure seed is integer
    seed = Math.ceil(seed)

    return seed;
}

export function Init(seed: number): ProgressionItem[] {
    const cardItems = shuffle(ProgressionItems, seed).slice(0, 5);
    return cardItems;
}

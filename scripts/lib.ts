export class ProgressionItem {
    Name: string;
    ImageName?: string;

    constructor(name: string, imageName?: string) {
        this.Name = name;
        this.ImageName = imageName;
    }

    GetImageURL(): string {
        if (this.ImageName) {
            return `./img/${this.ImageName}.png`;
        } else {
            return `./img/${this.Name.toLowerCase()}.png`;
        }
    }
}

export const ProgressionItems: ProgressionItem[] = [
    // Items
    new ProgressionItem("Hookshot"),
    new ProgressionItem("Longshot"),
    new ProgressionItem("Hammer"),
    new ProgressionItem("Slingshot"),

    new ProgressionItem("Bow"),
    new ProgressionItem("Fire Arrows", "firearrow"),
    new ProgressionItem("Ice Arrows", "icearrow"),
    new ProgressionItem("Light Arrows", "lightarrow"),


    new ProgressionItem("Fairy Ocarina", "fairyocarina"),
    new ProgressionItem("Ocarina of Time", "ocarina"),

    new ProgressionItem("Boomerang"),
    new ProgressionItem("Deku Nuts", "nut"),
    new ProgressionItem("Deku Sticks", "stick"),
    new ProgressionItem("Beans", "bean"),
    new ProgressionItem("Lens of Truth", "lens"),
    new ProgressionItem("Bottle"),

    new ProgressionItem("Din's Fire", "din"),
    new ProgressionItem("Farore's Wind", "farore"),
    new ProgressionItem("Nayru's Love", "nayru"),

    // Equipment
    new ProgressionItem("Kokiri Sword", "sword1"),
    new ProgressionItem("Master Sword", "sword2"),
    new ProgressionItem("Biggoron Sword", "sword3"),

    new ProgressionItem("Deku Shield", "shield1"),
    new ProgressionItem("Hylian Shield", "shield2"),
    new ProgressionItem("Mirror Shield", "shield3"),

    new ProgressionItem("Bomb Bag", "bomb"),
    new ProgressionItem("Quiver", "cow"), // lol couldn't find quiver
    new ProgressionItem("Magic", "magic1"),

    new ProgressionItem("Adult Wallet", "wallet2"),
    new ProgressionItem("Giant Wallet", "wallet3"),

    new ProgressionItem("Iron Boots", "ironboots"),
    new ProgressionItem("Hover Boots", "hoverboots"),

    new ProgressionItem("Zora Tunic", "bluetunic"),
    new ProgressionItem("Goron Tunic", "redtunic"),

    new ProgressionItem("Goron Bracelet", "lift1"),
    new ProgressionItem("Silver Gauntlets", "lift2"),
    new ProgressionItem("Golden Gauntlets", "lift3"),

    new ProgressionItem("Silver Scale", "scale1"),
    new ProgressionItem("Golden Scale", "scale2"),

    new ProgressionItem("Stone of Agony", "agony"),
    new ProgressionItem("A Little Guy", "sold_out"), // lolwut, blame mikachu

    // Songs
    new ProgressionItem("Bolero of Fire", "song_bolero"),
    new ProgressionItem("Minuet of Forest", "song_minuet"),
    new ProgressionItem("Nocturne of Shadow", "song_nocturne"),
    new ProgressionItem("Prelude of Light", "song_prelude"),
    new ProgressionItem("Requiem of Spirit", "song_requiem"),
    new ProgressionItem("Serenade of Water", "song_serenade"),
    new ProgressionItem("Epona's Song", "song_epona"),
    new ProgressionItem("Saria's Song", "song_saria"),
    new ProgressionItem("Song of Storms", "song_storms"),
    new ProgressionItem("Sun's Song", "song_sun"),
    new ProgressionItem("Song of Time", "song_time"),
    new ProgressionItem("Zelda's Lullaby", "song_zelda"),

    // Stones / Medallions
    new ProgressionItem("Kokiri's Emerald", "emerald"),
    new ProgressionItem("Zora's Sapphire", "sapphire"),
    new ProgressionItem("Goron's Ruby", "ruby"),

    new ProgressionItem("Light Medallion", "lightmedallion"),
    new ProgressionItem("Water Medallion", "watermedallion"),
    new ProgressionItem("Fire Medallion", "firemedallion"),
    new ProgressionItem("Forest Medallion", "forestmedallion"),
    new ProgressionItem("Shadow Medallion", "shadowmedallion"),
    new ProgressionItem("Spirit Medallion", "spiritmedallion"),

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

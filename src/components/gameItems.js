import react from 'react';

export const gameItems = {
    rawMaterials: [
        //Crystals
        //id.1
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Lunar Gemstone", name: ["Moon Crystal"], rarity: "Mundane", level: '1', description: "Can be refined into Lunar Gemstone"},
        //id.2
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Solar Gemstones", name: ["Sun Crystal"], rarity: "Mundane", level: '2', description: "Can be refined into Solar Gemstones"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Solar Gemstones", name: ["Sun Crystal"], rarity: "Uncommon", level: '2', description: "Can be refined into Solar Gemstones"},
        //id.3
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Starlight Gemstone", name: ["Star Crystal"], rarity: "Mundane", level: '3', description: "Can be refined into Starlight Gemstone"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Starlight Gemstone", name: ["Star Crystal"], rarity: "Uncommon", level: '3', description: "Can be refined into Starlight Gemstone"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Starlight Gemstone", name: ["Star Crystal"], rarity: "Rare", level: '3', description: "Can be refined into Starlight Gemstone"},
        //id.4
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Cometfall Gemstone", name: ["Comet Shard"], rarity: "Mundane", level: '4', description: "Can be refined into Cometfall Gemstone"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Cometfall Gemstone", name: ["Comet Shard"], rarity: "Uncommon", level: '4', description: "Can be refined into Cometfall Gemstone"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Cometfall Gemstone", name: ["Comet Shard"], rarity: "Rare", level: '4', description: "Can be refined into Cometfall Gemstone"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Cometfall Gemstone", name: ["Comet Shard"], rarity: "Exotic", level: '4', description: "Can be refined into Cometfall Gemstone"},
        //id.5
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Aurora Heart Gem", name: ["Aurora Stone"], rarity: "Mundane", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Aurora Heart Gem", name: ["Aurora Stone"], rarity: "Uncommon", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Aurora Heart Gem", name: ["Aurora Stone"], rarity: "Rare", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Aurora Heart Gem", name: ["Aurora Stone"], rarity: "Exotic", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Aurora Heart Gem", name: ["Aurora Stone"], rarity: "Mythic", level: '5', description: "Can be refined into Aurora Heart Gem"},
        //id.6
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Shadow Eclipse Crystal", name: ["Eclipse Pebble"], rarity: "Arcane", level: '6', description: "Can be refined into Shadow Eclipse Crystal"},
        //id.7
        { archetype: "Crystals", type: "Rarity", refinedProduct: "Cosmic Nebula Stone", name: ["Nebula Opal"], rarity: "Celestial", level: '7', description: "Can be refined into Cosmic Nebula Stone"},
       //Herb to Potion:
        //id.8
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Clarity Concoction", name: "Dewpetal", rarity: "Mundane", level: '1', description: "Can be refined into Lunar Gemstone"},
        //id.9
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Frostbite Healing Elixir", name: "Icecap Flower", rarity: "Mundane", level: '2', description: "Can be refined into Solar Gemstones"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Frostbite Healing Elixir", name: "Icecap Flower", rarity: "Uncommon", level: '2', description: "Can be refined into Solar Gemstones"},
        //id.10
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Windrush Draught", name: "Galegrass", rarity: "Mundane", level: '3', description: "Can be refined into Starlight Gemstone"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Windrush Draught", name: "Galegrass", rarity: "Uncommon", level: '3', description: "Can be refined into Starlight Gemstone"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Windrush Draught", name: "Galegrass", rarity: "Rare", level: '3', description: "Can be refined into Starlight Gemstone"},
        //id.11
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Fire Shield Tonic", name: "Blaze Petal", rarity: "Mundane", level: '4', description: "Can be refined into Cometfall Gemstone"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Fire Shield Tonic", name: "Blaze Petal", rarity: "Uncommon", level: '4', description: "Can be refined into Cometfall Gemstone"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Fire Shield Tonic", name: "Blaze Petal", rarity: "Rare", level: '4', description: "Can be refined into Cometfall Gemstone"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Fire Shield Tonic", name: "Blaze Petal", rarity: "Exotic", level: '4', description: "Can be refined into Cometfall Gemstone"},
        //id.12
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Barrier Brew", name: "Thornleaf", rarity: "Mythic", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Barrier Brew", name: "Thornleaf", rarity: "Mundane", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Barrier Brew", name: "Thornleaf", rarity: "Mythic", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Barrier Brew", name: "Thornleaf", rarity: "Uncommon", level: '5', description: "Can be refined into Aurora Heart Gem"},
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Barrier Brew", name: "Thornleaf", rarity: "Mythic", level: '5', description: "Can be refined into Aurora Heart Gem"},
        //id.13
        { archetype: "Herbs", type: "Rarity", refinedProduct: "Water Breathing Potion", name: "Tidebloom", rarity: "Arcane", level: '6', description: "Can be refined into Shadow Eclipse Crystal"},
        //id.14
        { archetype: "Herbs", type: "Rarity", refinedProduct:"Luminous Elixir", name: "Sunspire Herb", rarity: "Celestial", level: '7', description: "Can be refined into Cosmic Nebula Stone"},
        // Bones
        { archetype: "Bones", type: "Rarity", refinedProduct:"Earthshaker Stone", name: "Troll Knuckle", rarity: "Mundane", level: '1', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Swiftwing Blessing", name: "Griffon Pinion", rarity: "Uncommon", level: '2', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Swiftwing Blessing", name: "Griffon Pinion", rarity: "Uncommon", level: '2', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Skybound Wind Enchantment", name: "Wyvern Wingbone", rarity: "Rare", level: '3', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Skybound Wind Enchantment", name: "Wyvern Wingbone", rarity: "Rare", level: '3', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Skybound Wind Enchantment", name: "Wyvern Wingbone", rarity: "Rare", level: '3', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Ocean's Wrath Charm", name: "Leviathan Scale", rarity: "Mundane", level: '4', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Ocean's Wrath Charm", name: "Leviathan Scale", rarity: "Uncommon", level: '4', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Ocean's Wrath Charm", name: "Leviathan Scale", rarity: "Rare", level: '4', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Ocean's Wrath Charm", name: "Leviathan Scale", rarity: "Exotic", level: '4', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Wavecaller's Blessing", name: "Serpent Spine",rarity: "Mundane", level: '5', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Wavecaller's Blessing", name: "Serpent Spine",rarity: "Uncommon", level: '5', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Wavecaller's Blessing", name: "Serpent Spine",rarity: "Rare",  level: '5', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Wavecaller's Blessing", name: "Serpent Spine",rarity: "Exotic", level: '5', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Wavecaller's Blessing", name: "Serpent Spine",rarity: "Mythic",  level: '5', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Stoneheart Infusion", name: "Giant's Marrow", rarity: "Celestial", level: '6', description: "Can be refined into "},
        { archetype: "Bones", type: "Rarity", refinedProduct:"Inferno's Grasp Charm", name: "Dragon Tooth", rarity: "Celestial", level: '7', description: "Can be refined into "},
        // Souls
       { archetype: "Souls", type: "Rarity", refinedProduct:"Spectral Light Essence", name: "Ethereal Sprite", rarity: "Mundane", level: '1', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Mystic Spirit", name: "Mystic Spirit", rarity: "Uncommon", level: '2', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Mystic Spirit", name: "Mystic Spirit", rarity: "Uncommon", level: '2', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Mystic Spirit", name: "Mystic Spirit", rarity: "Rare", level: '3', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Mystic Spirit", name: "Mystic Spirit", rarity: "Rare", level: '3', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Mystic Spirit", name: "Mystic Spirit", rarity: "Rare", level: '3', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Tidal Surge Essence", name: "Oceanid Soul", rarity: "Mundane", level: '4', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Tidal Surge Essence", name: "Oceanid Soul", rarity: "Uncommon", level: '4', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Tidal Surge Essence", name: "Oceanid Soul", rarity: "Rare", level: '4', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Tidal Surge Essence", name: "Oceanid Soul", rarity: "Exotic", level: '4', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Veil Shroud Essence", name: "Phantom Whisper",rarity: "Mundane", level: '5', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Veil Shroud Essence", name: "Phantom Whisper",rarity: "Uncommon", level: '5', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Veil Shroud Essence", name: "Phantom Whisper",rarity: "Rare",  level: '5', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Veil Shroud Essence", name: "Phantom Whisper",rarity: "Exotic", level: '5', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Veil Shroud Essence", name: "Phantom Whisper",rarity: "Mythic",  level: '5', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Wild Fury Essence", name: "Beast Spirit", rarity: "Celestial", level: '6', description: "Can be refined into "},
       { archetype: "Souls", type: "Rarity", refinedProduct:"Cosmic Gleam Essence", name: "Starlight Wisp", rarity: "Celestial", level: '7', description: "Can be refined into "},
    ],
    weapons: [
        { name: "Daggers", variations: ["Shadow Dagger", "Frostbite Shiv", "Venomous Stiletto"] },
        { name: "Staves", variations: ["Sage's Staff", "Thundercaller's Rod", "Druidic Branch"] },
        { name: "Greatswords", variations: ["Doombringer Blade", "Glacial Greatsword", "Sword of the Phoenix"] },
        { name: "Wands", variations: ["Wand of Wonders", "Abyssal Wand", "Celestial Wand"] },
        { name: "Polearms", variations: ["Spear of Destiny", "Halberd of Horrors", "Trident of Tides"] }
    ],
    armor: [
        { material: "Leather", name: "Mystic Leather Hood" },
        { material: "Leather", name: "Mystic Leather Tunic" },
        { material: "Leather", name: "Mystic Leather Boots" },
        { material: "Cloth", name: "Arcane Cloth Hat" },
        { material: "Cloth", name: "Arcane Cloth Robes" },
        { material: "Cloth", name: "Arcane Cloth Slippers" },
        { material: "Metal", name: "Eternal Metal Helmet" },
        { material: "Metal", name: "Eternal Metal Chestplate" },
        { material: "Metal", name: "Eternal Metal Greaves" },
    ],
    consumables: [
        { type: "Healing", name: "Lesser Healing Salve"},
        { type: "Healing", name: "Sacred Healing Potion"},
        { type: "Healing", name: "Divine Healing Elixir"},
        { type: "Mana", name: "Minor Mana Phial"},
        { type: "Mana", name: "Enchanted Mana Flask"},
        { type: "Mana", name: "Grand Mana Crystal"},
        { type: "Buff", name: "Elixir of Giants"},
        { type: "Buff", name: "Potion of Speed"},
        { type: "Buff", name: "Draught of Shadows"},
        { type: "Regen", name: "Regrowth Seed"},
        { type: "Regen", name: "Heartbeat Drum"},
        { type: "Regen", name: "Lifeforce Pendant"},
    ]
};
export const weapons = {
    Swords: [
        { name: "Trainee's Blade", rarity: "Mundane", level: 1 },
        { name: "Guard's Longsword", rarity: "Uncommon", level: 2 },
        { name: "Knight's Sabre", rarity: "Rare", level: 3 },
        { name: "Duelist's Rapier", rarity: "Exotic", level: 4 },
        { name: "Dragonslayer's Greatsword", rarity: "Mythic", level: 5 },
        { name: "Sorcerer's Blade", rarity: "Arcane", level: 6 },
        { name: "Lightbringer", rarity: "Celestial", level: 7 }
    ],
    Bows: [
        { name: "Hunter's Shortbow", rarity: "Mundane", level: 1 },
        { name: "Ranger's Recurve", rarity: "Uncommon", level: 2 },
        { name: "Eagle-eye Longbow", rarity: "Rare", level: 3 },
        { name: "Shadow Striker", rarity: "Exotic", level: 4 },
        { name: "Wyvern Wing", rarity: "Mythic", level: 5 },
        { name: "Netherwarp Bow", rarity: "Arcane", level: 6 },
        { name: "Celestial Bow", rarity: "Celestial", level: 7 }
    ],
    Staffs: [
        { name: "Apprentice's Staff", rarity: "Mundane", level: 1 },
        { name: "Acolyte's Rod", rarity: "Uncommon", level: 2 },
        { name: "Wizard's Staff", rarity: "Rare", level: 3 },
        { name: "Chaos Wand", rarity: "Exotic", level: 4 },
        { name: "Archmage's Cane", rarity: "Mythic", level: 5 },
        { name: "Aetheric Orb Staff", rarity: "Arcane", level: 6 },
        { name: "Staff of the Cosmos", rarity: "Celestial", level: 7 }
    ]
};

export const armors = {
    Leather: [
        { name: "Scout's Gear", rarity: "Mundane", level: 1 },
        { name: "Thief's Attire", rarity: "Uncommon", level: 2 },
        { name: "Ranger's Outfit", rarity: "Rare", level: 3 },
        { name: "Assassin's Suit", rarity: "Exotic", level: 4 },
        { name: "Shadowmaster's Garb", rarity: "Mythic", level: 5 },
        { name: "Ethereal Leather", rarity: "Arcane", level: 6 },
        { name: "Celestial Skins", rarity: "Celestial", level: 7 }
    ],
    Metal: [
        { name: "Squire's Plate", rarity: "Mundane", level: 1 },
        { name: "Warrior's Mail", rarity: "Uncommon", level: 2 },
        { name: "Knight's Armor", rarity: "Rare", level: 3 },
        { name: "Champion's Plate", rarity: "Exotic", level: 4 },
        { name: "King's Guard", rarity: "Mythic", level: 5 },
        { name: "Arcane Steel", rarity: "Arcane", level: 6 },
        { name: "Heavenly Iron", rarity: "Celestial", level: 7 }
    ],
    Cloth: [
        { name: "Novice's Robe", rarity: "Mundane", level: 1 },
        { name: "Monk's Habit", rarity: "Uncommon", level: 2 },
        { name: "Mage's Garment", rarity: "Rare", level: 3 },
        { name: "Sorcerer's Cloak", rarity: "Exotic", level: 4 },
        { name: "Archon Robes", rarity: "Mythic", level: 5 },
        { name: "Dimensional Attire", rarity: "Arcane", level: 6 },
        { name: "Celestial Vestments", rarity: "Celestial", level: 7 }
    ]
};

export const consumables = {
    Healing: [
        { name: "Lesser Healing Potion", rarity: "Mundane", level: 1 },
        { name: "Healing Salve", rarity: "Uncommon", level: 2 },
        { name: "Greater Healing Potion", rarity: "Rare", level: 3 },
        { name: "Elixir of Restoration", rarity: "Exotic", level: 4 },
        { name: "Mythic Life Draught", rarity: "Mythic", level: 5 },
        { name: "Arcane Rejuvenation", rarity: "Arcane", level: 6 },
        { name: "Celestial Nectar", rarity: "Celestial", level: 7 }
    ],
    Mana: [
        { name: "Lesser Mana Potion", rarity: "Mundane", level: 1 },
        { name: "Mana Elixir", rarity: "Uncommon", level: 2 },
        { name: "Greater Mana Potion", rarity: "Rare", level: 3 },
        { name: "Elixir of Arcana", rarity: "Exotic", level: 4 },
        { name: "Mythic Mana Brew", rarity: "Mythic", level: 5 },
        { name: "Arcane Essence", rarity: "Arcane", level: 6 },
        { name: "Celestial Ambrosia", rarity: "Celestial", level: 7 }
    ],
    Buffs: [
        { name: "Endurance Tonic", rarity: "Mundane", level: 1 },
        { name: "Strength Draft", rarity: "Uncommon", level: 2 },
        { name: "Potion of Vigor", rarity: "Rare", level: 3 },
        { name: "Elixir of Power", rarity: "Exotic", level: 4 },
        { name: "Mythic Fortitude", rarity: "Mythic", level: 5 },
        { name: "Arcane Empowerment", rarity: "Arcane", level: 6 },
        { name: "Celestial Blessing", rarity: "Celestial", level: 7 }
    ]
};

import { StringMappingType } from "typescript";
import EMOJIS from "../../../Discord/View/enum/EMOJIS";
import { Gathering, Location } from "../../../Model/Guildwars/Gathering";

export const GW_GATHERING: Gathering = {
    'Ascalon': {
        'Forager': { waypoint: "Loreclaw Waypoint — [&BMcDAAA=]", description: "Potato patch to the south" },
        'Lumberer': { waypoint: "Apostate Waypoint — [&BB0CAAA=]", description: "There are usually quite a few trees in the area around the waypoint." },
        'Miner': { waypoint: "Helliot Mine Waypoint — [&BEsBAAA=]", description: "Rich iron above and to the south" },
        'Viewer': { waypoint: "Memorial Waypoint — [&BKYDAAA=]", description: "To the northeast" },
    },
    'Kryta': {
        'Forager': { waypoint: "Beetletun Waypoint — [&BPoAAAA=]", description: "Run south, there are lettuce patches in the fields there." },
        'Lumberer': { waypoint: "Wynchona Rally Point Waypoint — [&BKgAAAA=]", description: "There is always a lot of trees around this waypoint, especially to East" },
        'Miner': { waypoint: "Cereboth Waypoint — [&BBIAAAA=]", description: "Rich node, either Iron or Silver, in the cave at the bottom of the waterfall to the north" },
        'Viewer': { waypoint: "Beetletun Waypoint — [&BPoAAAA=]", description: "To the southeast" },
    },
    'Maguuma': {
        'Forager': { waypoint: "Akk Wilds Waypoint — [&BEIAAAA=]", description: "To the North is a platform with a farm" },
        'Lumberer': { waypoint: "Broken Arrow Waypoint — [&BNACAAA=]", description: "Usually a fair bunch of trees between this waypoint and Ashen Waypoint — [&BM4CAAA=]." },
        'Miner': { waypoint: "Gallowfields Waypoint — [&BGMAAAA=]", description: "Rich Iron to the west, halfway down the canyon" },
        'Viewer': { waypoint: "Upper Commons Waypoint — [&BLoEAAA=]", description: "Just run northeast, no jumping required." },
    },
    'Orr': {
        'Forager': { waypoint: "Plinth Timberland Waypoint — [&BFgGAAA=]", description: "Several nodes south. There is a patch of 8 Artichokes to the northeast." },
        'Lumberer': { waypoint: "Pagga's Waypoint — [&BKYCAAA=]", description: "West there are loads of trees near the statue of Melandru" },
        'Miner': { waypoint: "Plinth Timberland Waypoint — [&BFgGAAA=]", description: "Mithril nodes to the south all the way to Thunderhead Waypoint — [&BPACAAA=]. (There might be some in the Lightfoot Passage cave too.)" },
        'Viewer': { waypoint: "Fort Trinity Waypoint — [&BO4CAAA=]", description: "To the west, on the airship prow" },
    },
    'Shiverpeaks': {
        'Forager': { waypoint: "Demon's Maw Waypoint — [&BOYAAAA=]", description: "Run north, 7 permanent grape nodes west of Greybeard's Landing." },
        'Lumberer': { waypoint: "Serpent Waypoint — [&BEUCAAA=]", description: "Up to five trees around the waypoint" },
        'Miner': { waypoint: "Snowhawk Landing Waypoint — [&BL8AAAA=]", description: "A lot of nodes south and a Rich Iron Vein in cave." },
        'Viewer': { waypoint: "Southern Watchpost Waypoint — [&BI4DAAA=]", description: "North, one jump" },
    },
    'Maguuma_Wastes': {
        'Lumberer': { waypoint: "Camp Resolve Waypoint — [&BH8HAAA=]", description: "No particular area, but follow the south path and look beyond the Red Rock Bastion." },
        'Miner': { waypoint: "Camp Resolve Waypoint — [&BH8HAAA=]", description: "Follow the south path west, usually a rich node near the Vinewrath area." },
        'Forager': { waypoint: "Vine Bridge Waypoint — [&BIYHAAA=]", description: "North, at the skritt farm" },
        'Viewer': { waypoint: "Camp Resolve Waypoint — [&BH8HAAA=]", description: "On top of the buildings to the west" },
    },
    'Heart_of_Maguuma': {
        'Forager': { waypoint: "Jaka Itzel Waypoint — [&BOAHAAA=]", description: "Jump off the platform north of the waypoint, then fall and glide to the northeast-east, while avoiding the branches. Deep below, on the ground level there are 8 permanent Flax nodes." },
        'Lumberer': { waypoint: "Eastwatch Waypoint — [&BGwIAAA=]", description: "Should be various nodes in the general area.  However, lots of mobs around as well." },
        'Miner': { waypoint: "Pact Encampment Waypoint — [&BAgIAAA=]", description: "Directly south and far below the waypoint in the ravine, on a platform with Mordrem Snipers." },
        'Viewer': { waypoint: "Jaka Itzel Waypoint — [&BOAHAAA=]", description: "Next to the waypoint. Just climb the branch, you don't actually need to jump to the Vista." },
    },
    'Desert': {
        'Lumberer': { waypoint: "Highjump Ranch Waypoint — [&BJ0KAAA=]", description: "No particular area, walk around the area in a circle" },
        'Miner': { waypoint: "Augury's Shadow Waypoint — [&BFMKAAA=]", description: "Head east to the Adisa Heart. Mine any regular nodes, but also destroy the Brand Battleshards. Upon destruction they become gathering nodes that count toward the daily." },
        'Forager': { waypoint: "Atholma Waypoint — [&BEMLAAA=]", description: "There are many vegetable fields east of the village." },
        'Viewer': { waypoint: "Amnoon Waypoint — [&BLsKAAA=]", description: "South, much quicker to reach with Springer." },
    }
}

export const GW_PUZZLES: Record<string, Location> = {
    "Loreclaw_Expanse": {
        waypoint: "Loreclaw Waypoint — [&BMcDAAA=]",
        description: "Entrance under the water east of the waypoint, or up the cliff southeast of it."
    },
    "Crimson_Plateau": {
        waypoint: "Redreave Mill Waypoint — [&BMYDAAA=]",
        description: "Rock structure south of the waypoint, entrance is on its southeast corner."
    },
    "Grendich_Gamble": {
        waypoint: "Blasted Moors Waypoint — [&BNoAAAA=]",
        description: "Just north of the waypoint. This ends with a Rich Silver Vein, no chest."
    },
    "Wall_Breach_Blitz": {
        waypoint: "Breached Wall Waypoint — [&BGEBAAA=]",
        description: "Southwest of the waypoint (part of nearby vista). This ends with a Hero Challenge, no chest."
    },
    "Branded_Mine": {
        waypoint: "Tenaebron Waypoint — [&BNcAAAA=]",
        description: "Southwest of Varim's Run."
    },
    "Behem_Gauntlet": {
        waypoint: "Behem Waypoint — [&BP0BAAA=]",
        description: "Behind the spider cave east of the waypoint."
    },
    "Craze's_Folly": {
        waypoint: "Terra Carorunda Waypoint — [&BAECAAA=]",
        description: "Northeast of the waypoint."
    },
    "Chaos_Crystal_Cavern": {
        waypoint: "Old Piken Ruins Waypoint — [&BOQBAAA=]",
        description: "West of the waypoint, down a deep pit."
    },
    "Pig_Iron_Quarry": {
        waypoint: "Severed Breach Waypoint — [&BBkCAAA=]",
        description: "Northeast of the waypoint on top of the island."
    },
    "Troll's_Revenge": {
        waypoint: "Fort Marriner Waypoint — [&BDAEAAA=]",
        description: "Start off at the Fort Marriner Waypoint, run along the bridge until you reach the last archway on the right side. The jumping puzzle starts after jumping over the barrels to the wooden planks on the left."
    },
    "Urmaug's_Secret": {
        waypoint: "Guild Bluff Waypoint — [&BA0EAAA=]",
        description: "In the northeast, starting behind Urmaug."
    },
    "Weyandt's_Revenge": {
        waypoint: "Farshore Waypoint — [&BDMEAAA=]",
        description: "In the Sharkmaw Caverns, starting behind Tokk's Mill."
    },
    "Demongrub_Pits": {
        waypoint: "Godslost Waypoint — [&BPwAAAA=]",
        description: "In the southeast."
    },
    "The_Collapsed_Observatory": {
        waypoint: "Cereboth Waypoint — [&BBIAAAA=]",
        description: "In the southeast."
    },
    "Swashbuckler's_Cove": {
        waypoint: "Cornucopian Fields Waypoint — [&BOMAAAA=]",
        description: "Roughly south of Stonefish Beach point of interest."
    },
    "Not_So_Secret": {
        waypoint: "Broadhollow Waypoint — [&BOEAAAA=]",
        description: "Follow the noises south of Broadhollow Waypoint to a mechanical jump pad."
    },
    "Fawcett's_Bounty": {
        waypoint: "Arcallion Waypoint — [&BMMAAAA=]",
        description: "North of Arca Lake. If you fall into a pit near the start, you will earn the Fawcett's Revenge achievement."
    },
    "Professor_Portmatt's_Lab": {
        waypoint: "Sorrowful Waypoint — [&BKQBAAA=]",
        description: "West of the waypoint. The whole puzzle is underwater."
    },
    "Skipping_Stones": {
        waypoint: "Lion Point Waypoint — [&BNAGAAA=]",
        description: "In the cave south of the waypoint."
    },
    "Under_New_Management": {
        waypoint: "Pearl Islet Waypoint — [&BNUGAAA=]",
        description: "East of the waypoint."
    },
    "Dark_Reverie": {
        waypoint: "Spiral Waypoint — [&BDUBAAA=]",
        description: "Immediately after the Morgan's Leap jumping puzzle, inside the Dreamdark Enclave."
    },
    "Morgan's_Leap": {
        waypoint: "Spiral Waypoint — [&BDUBAAA=]",
        description: "At the Morgan's Spiral hero point."
    },
    "Spekks's_Laboratory": {
        waypoint: "Gleaner's Cove Waypoint — [&BDcBAAA=]",
        description: "In Sandycove Beach, follow the river west from Bay Haven to its source."
    },
    "Spelunker's_Delve": {
        waypoint: "Astorea Waypoint — [&BDQBAAA=]",
        description: "South of the point of interest Danador's Kennel. Follow the road south through the Jungle Trolls."
    },
    "Goemm's_Lab": {
        waypoint: "Cuatl Waypoint — [&BLIEAAA=]",
        description: "South of the waypoint, hidden by trees; entrance between rocks."
    },
    "Conundrum_Cubed": {
        waypoint: "Govoran Waypoint — [&BMgCAAA=]",
        description: "Through a small passage directly north of the waypoint."
    },
    "Hidden_Garden": {
        waypoint: "Criterion Waypoint — [&BMkCAAA=] Avernan Waypoint — [&BM8CAAA=] Oxbow Isle Waypoint — [&BNECAAA=] Irwin Isle Waypoint — [&BNICAAA=]",
        description: "Accessed through the Mysterious Portal, after killing one of four Keepers."
    },
    "Hexfoundry_Unhinged": {
        waypoint: "Darkweather Waypoint — [&BM0BAAA=]",
        description: "In the southeast."
    },
    "Vizier's_Tower": {
        waypoint: "Lone Post Waypoint — [&BPcCAAA=]",
        description: "On the island directly east of the waypoint. This ends with a hero challenge, a vista, and, if it's not on cooldown, an Orrian Chest that can be triggered to activate an event that spawns a Grand Chest."
    },
    "Antre_of_Adjournment": {
        waypoint: "Valley of Lyss Waypoint — [&BKoCAAA=]",
        description: "A tunnel in the water north of the bridge directly east of the Valley of Lyss Waypoint."
    },
    "Scavenger's_Chasm": {
        waypoint: "Valley of Lyss Waypoint — [&BKoCAAA=]",
        description: "South of the map near Hope Falls point of interest you can drop down to a Mithril Ore."
    },
    "Buried_Archives": {
        waypoint: "Shipwreck Rock Waypoint — [&BOQGAAA=]",
        description: "On the west shore of Mausollus Sea, about midway between the Cathedral of Silence and Mausollus Sea."
    },
    "Shaman's_Rookery": {
        waypoint: "Zelechor Hot Springs Waypoint — [&BHcBAAA=]",
        description: "North of The Osenfold Shear."
    },
    "King_Jalis's_Refuge": {
        waypoint: "Snowhawk Landing Waypoint — [&BL8AAAA=]",
        description: "Central east area."
    },
    "Griffonrook_Run": {
        waypoint: "False Lake Waypoint — [&BOgAAAA=]",
        description: "Southwest of the waypoint. Entrance is in the water south of the waypoint - look for the purple glow to the right of the wooden house ruins."
    },
    "Tribulation_Caverns": {
        waypoint: "Sorrow's Embrace Waypoint — [&BD8FAAA=]",
        description: "Immediately after the Tribulation Rift Scaffolding jumping puzzle, a cleft west of the vista."
    },
    "Tribulation_Rift_Scaffolding": {
        waypoint: "Sorrow's Embrace Waypoint — [&BD8FAAA=]",
        description: "Southwest corner at the vista."
    },
    "Coddler's_Cove": {
        waypoint: "Okarinoo Waypoint — [&BEYCAAA=]",
        description: "Inside Mellagan's Grotto: the entrance starts directly south of the Okarinoo point of interest."
    },
    "Only_Zuhl": {
        waypoint: "Foundation 86 Waypoint — [&BE4CAAA=]",
        description: "North of the waypoint, inside a big cave."
    },
    "Shattered_Ice_Ruins": {
        waypoint: "Ice Floe Waypoint — [&BH4CAAA=]",
        description: "East of the waypoint, starting underwater."
    },
}

export const GW_MINIDUNGEONS: Record<string, Location> = {
    "Rebel's_Seclusion": {
        waypoint: "Breaktooth's Waypoint — [&BBoCAAA=]",
        description: "Northeast, look for a cave entrance guarded by Separatists."
    },
    "Vexa's_Lab": {
        waypoint: "Breaktooth's Waypoint — [&BBoCAAA=]",
        description: "Travel west across Sloven Pitch to the vista. Cave with a portal is southwest."
    },
    "Goff's_Loot": {
        waypoint: "Gap Waypoint — [&BLoDAAA=]",
        description: `North of the waypoint at ${EMOJIS['POI']}Goff's Bandits.`
    },
    "Bad_Neighborhood": {
        waypoint: "Ojon's Lumbermill Waypoint — [&BPkAAAA=]",
        description: "Northwest across Lake Delavan. Look for a door embedded in the wall."
    },
    "Don't_Touch_the_Shiny": {
        waypoint: "Mabon Waypoint — [&BDoBAAA=]",
        description: "North of the waypoint, the entrance is above the last 'n' of 'Unseen' on the map."
    },
    "Tears_of_Itlaocol": {
        waypoint: "Falias Thorp Waypoint — [&BD4BAAA=]",
        description: "Sound the gong behind the hylek chief south of the waypoint."
    },
    "Grounded": {
        waypoint: "Shipwreck Rock Waypoint — [&BOQGAAA=]",
        description: "Head northwest until the shipwreck is on your left."
    },
    "Forgotten_Stream": {
        waypoint: "Verdance Waypoint — [&BBsDAAA=]",
        description: "Head northeast into the water. Swim under the wreckage directly ahead and you should surface in a large tunnel."
    },
    "Ship_of_Sorrows": {
        waypoint: "Royal Forum Waypoint — [&BPMCAAA=]",
        description: `In a sunken ship west of the ${EMOJIS['POI']}Plaza of Lost Wisdom.`
    },
    "The_Long_Way_Around": {
        waypoint: "Vesper Bell Waypoint — [&BPICAAA=]",
        description: "Way too much trouble for a minidungeon honestly."
    },
    "Forsaken_Fortune": {
        waypoint: "Wyrmblood Waypoint — [&BGUCAAA=]",
        description: "Way too much trouble for a minidungeon honestly."
    },
    "Magellan's_Memento": {
        waypoint: "Arundon Waypoint — [&BHgCAAA=]",
        description: `Northeast, between ${EMOJIS['POI']}Safewatch Vale and ${EMOJIS['POI']}Offering Stone.`
    },
    "Windy_Cave_Treasure": {
        waypoint: "Mistriven Waypoint — [&BJkBAAA=]",
        description: "Head south and then make a right going west."
    },
}


export const GW_HEARTS: Record<string, Location> = {
    "Elon_Riverlands": {
        waypoint: "Olishar's Oasis Camp Waypoint — [&BCgKAAA=]",
        description: "Help Ebele prepare the way north for defectors"
    },
    "Desolation": {
        waypoint: "Bonestrand Waypoint — [&BNwKAAA=]",
        description: "Help Kisha Odili keep the village running"
    }
}

// each day has a preset activity
export const GW_ACTIVITIES: string[] = ["Keg Brawl", "Crab Toss", "Sanctum Sprint", "Southsun Survival", "Crab Toss", "Sanctum Sprint", "Southsun Survival"];

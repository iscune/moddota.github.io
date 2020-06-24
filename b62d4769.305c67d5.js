(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return o}));var n=a(2),l=(a(0),a(177));a(178),a(179);const i={title:"Unit KeyValues",author:"Noya",steamId:"76561198046984233",date:"22.04.2015"},b={id:"units/unit-keyvalues",isDocsHomePage:!1,title:"Unit KeyValues",description:"This document covers every keyvalue of the npcunitscustom file",source:"@site/_articles/units/unit-keyvalues.md",permalink:"/units/unit-keyvalues",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/unit-keyvalues.md",sidebar:"tutorials",previous:{title:"Physics Ability Example - Exorcism",permalink:"/abilities/datadriven/physics-ability-example-exorcism"},next:{title:"Unit producing buildings",permalink:"/units/unit-producing-buildings"}},r=[{value:"General",id:"general",children:[{value:"Base Classes",id:"base-classes",children:[]},{value:"Level",id:"level",children:[]},{value:"Model and Scale",id:"model-and-scale",children:[]},{value:"Minimap Icons",id:"minimap-icons",children:[]},{value:"Unit Label",id:"unit-label",children:[]}]},{value:"Boolean Values and Flags",id:"boolean-values-and-flags",children:[]},{value:"Selection properties",id:"selection-properties",children:[]},{value:"Sounds",id:"sounds",children:[]},{value:"Abilities",id:"abilities",children:[]},{value:"Stats",id:"stats",children:[{value:"Physical and Magical protection",id:"physical-and-magical-protection",children:[]},{value:"Attack Capabilities",id:"attack-capabilities",children:[]},{value:"Attribute Stats",id:"attribute-stats",children:[]},{value:"Bounty",id:"bounty",children:[]}]},{value:"Bounds",id:"bounds",children:[]},{value:"Movement",id:"movement",children:[]},{value:"Health and Mana",id:"health-and-mana",children:[{value:"Rarely used:",id:"rarely-used",children:[]}]},{value:"Armor and Attack Types",id:"armor-and-attack-types",children:[{value:"Attack Types Table",id:"attack-types-table",children:[]},{value:"Armor Types Table",id:"armor-types-table",children:[]}]},{value:"Vision",id:"vision",children:[]},{value:"Lua VScript AI",id:"lua-vscript-ai",children:[]},{value:"Neutral Behavior",id:"neutral-behavior",children:[]}],c={rightToc:r};function o({components:e,...t}){return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document covers every keyvalue of the npc_units_custom file"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/T7W828Q.png",alt:"img"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##general"}),"General")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##flags"}),"Boolean Values and Flags")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##selection"}),"Selection Properties")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##sounds"}),"Sounds")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##abilities"}),"Abilities")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##general"}),"Stats")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##bounds"}),"Bounds")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##movement"}),"Movement")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##healthmana"}),"Health and Mana")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##armorattack"}),"Armor and Attack Types")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##vision"}),"Vision")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##AI"}),"Lua VScript AI")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#Comment_763"}),"Creature Block"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"##wearables"}),"AttachWearables"))))),Object(l.b)("h2",{id:"general"},"General"),Object(l.b)("p",null,'Most unit names start with "npc_" but this isn\'t necessary. A basic unit definition looks like this:'),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pastebin.com/KB7EsSLF"}),"https://pastebin.com/KB7EsSLF")),Object(l.b)("p",null,"The definition of the default dota units can be found in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/dotabuff/d2vpk/blob/master/dota_pak01/scripts/npc/npc_units.txt"}),"npc_units.txt")),Object(l.b)("h3",{id:"base-classes"},"Base Classes"),Object(l.b)("p",null,"There are a lot of classes for units, the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://moddota.com/forums/discussion/comment/746/#Comment_746"}),"complete list can be found in here"),", but as we don't have much control over their properties, only a few are really useful for custom units in general:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"npc_dota_creature"))),Object(l.b)("p",{parentName:"li"},"The most useful baseclass, it doesn't have any critical hardcoded property so it's the go-to unit type for most units. It also allows the usage of the \"Creature\" block, which will is reviewed in the next section. It's linked to the ",Object(l.b)("inlineCode",{parentName:"p"},'"DOTA_UNIT_TARGET_BASIC"')," target type in abilities."),Object(l.b)("p",{parentName:"li"},"There is however one simple property imposed to this unit type, which for the most part it's useful but it's good to keep in mind, and it's that ",Object(l.b)("strong",{parentName:"p"},"abilities are automatically skilled")," up to the MaxLevel if possible (limited by the Level*2 of the creature, meaning a Level 1 creature will autolearn its abilities upto the 2nd rank). This can be of course modified through Lua ",Object(l.b)("inlineCode",{parentName:"p"},"SetLevel")," on each ability.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"npc_dota_building"))),Object(l.b)("p",{parentName:"li"},"  Linked to ",Object(l.b)("inlineCode",{parentName:"p"},'"DOTA_UNIT_TARGET_BUILDING"'),", this baseclass can prove useful in many situations. "),Object(l.b)("p",{parentName:"li"},"  It has the following properties imposed to it, which we have ",Object(l.b)("strong",{parentName:"p"},"no control")," over them:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Invulnerable by default. Very annoying, it can be removed through Lua with ",Object(l.b)("inlineCode",{parentName:"li"},'building_handle:RemoveModifierByName("modifier_invulnerable")')),Object(l.b)("li",{parentName:"ul"},"Visible through fog. This is troublesome, and forces any game that wants to have building strategies to use npc_dota_creature and define custom building damage, with some other downsides."),Object(l.b)("li",{parentName:"ul"},"No visual turning, even if internally the unit is actually changing its forward vector. Usually a good thing, the creature equivalent behavior for this is the stunned state.",Object(l.b)("br",null),"Worth mentioning `npc_dota_tower` is a subclass of building, and is coded to trigger stuff like the announcers, team gold sharing and aggro AI. Use npc_dota_building with attack to make towers that aren't forced to use those mechanics."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"npc_dota_thinker"))),Object(l.b)("p",{parentName:"li"},"For dummy units. More on this later"))),Object(l.b)("br",null),'For the rest of this guide, we\'ll be assuming a `"BaseClass" "npc_dota_creature"`',Object(l.b)("h3",{id:"level"},"Level"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"Level"                        "32"\n')),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho10S/fe733ccd2e.jpg",alt:"img"}))),Object(l.b)("p",null,"This level can be accessed and modified with Lua though various creature functions."),Object(l.b)("h3",{id:"model-and-scale"},"Model and Scale"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"Model"                        "models/heroes/dragon_knight/dragon_knight.vmdl"\n"ModelScale"                    "0.8"\n')),Object(l.b)("p",null,'Self explanatory, get the models through the asset browser and set its size (it will use "1" by omission).'),Object(l.b)("p",null,"Creatures using models that are broken down for cosmetic equipment will be 'naked' unless we attach them wearables. More on this later."),Object(l.b)("h3",{id:"minimap-icons"},"Minimap Icons"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"MinimapIcon"               "minimap_candybucket"\n"MinimapIconSize"           "1000"\n')),Object(l.b)("p",null,"Produces:\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho19t/c5c7f7bb39.jpg",alt:"img"}))),Object(l.b)("h3",{id:"unit-label"},"Unit Label"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"UnitLabel"                    "healing_ward"\n')),Object(l.b)("p",null,"This can be any name, its only useful purpose is to use with Lua ",Object(l.b)("inlineCode",{parentName:"p"},"GetUnitLabel()")," which can work as an easy method of tagging units."),Object(l.b)("h2",{id:"boolean-values-and-flags"},"Boolean Values and Flags"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"HasInventory"                "1"\n')),Object(l.b)("p",null,"Associated Lua functions: ",Object(l.b)("inlineCode",{parentName:"p"},"HasInventory()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"SetHasInventory(bool)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," ",Object(l.b)("inlineCode",{parentName:"p"},"SetHasInventory(true)")," won't work on units that didn't have ",Object(l.b)("inlineCode",{parentName:"p"},'"HasInventory"  "1"')," previously defined."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"IsSummoned"                "1"\n"CanBeDominated"            "0"\n')),Object(l.b)("p",null,"Self explanatory, the default values are 0 for summoned (so the lua IsSummoned will always return false unless you set this), and 1 for dominated creaturesl"),Object(l.b)("br",null),'``` "ConsideredHero"  "1" ```',Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'"DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO"')," datadriven flag. Gives the unit a hero styled health bar:"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho2pt/c687566db4.jpg",alt:"img"}))),Object(l.b)("br",null),'``` "IsAncient"                    "1" ``` Associated Lua function: `IsAncient()`',Object(l.b)("br",null),'`"DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS"` datadriven flag.',Object(l.b)("br",null),'``` "IsNeutralUnitType"            "1" ```',Object(l.b)("p",null,"Associated Lua function: ",Object(l.b)("inlineCode",{parentName:"p"},"IsNeutralUnitType()")),Object(l.b)("br",null),'``` "CanBeDominated"               "0" ```',Object(l.b)("p",null,"Helm of the Dominator specific. No associated Lua function, but it's easy to make one to read from this value if you wish."),Object(l.b)("br",null),'``` "AutoAttacksByDefault"         "0" ```',Object(l.b)("p",null,"Ignores Auto Attack Behavior setting, forces to not autoattack. Used on Visage Familiars."),Object(l.b)("br",null),'``` "ShouldDoFlyHeightVisual"      "0" ```',Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho2MV/7f3e6d0fd8.jpg",alt:"img"}))),Object(l.b)("p",null,"Seems broken, no noticeable difference."),Object(l.b)("br",null),'``` "WakesNeutrals"                "1" ```',Object(l.b)("p",null,"Unit won't aggro units on the Neutral team within their acquisition range."),Object(l.b)("h2",{id:"selection-properties"},"Selection properties"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"SelectionGroup"               "string"              \n"SelectOnSpawn"                "1"\n"IgnoreAddSummonedToSelection" "1"\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"SelectionGroup")," will make it so that all the units of this type are in a group which can be accessed through tab.")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho1rl/d0d5e48cd3.jpg",alt:"img"})),"\n",Object(l.b)("em",{parentName:"p"},"I pressed tab once and all these units got selected after defining them in the same control group")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"SelectOnSpawn"),' forces the unit into the selection of the hero, even if the "Auto Select Summoned Units" setting is turned off. It\'s used on Visage Familiars.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"IgnoreAddSummonedToSelection"),' if set to 1, makes the "Auto Select Summoned Units" ignore this unit when it spawns. It\'s used on Brewmaster Primal Split units.'))),Object(l.b)("h2",{id:"sounds"},"Sounds"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"SoundSet"                     "Hero_DragonKnight"\n"GameSoundsFile"               "soundevents/game_sounds_heroes/game_sounds_dragon_knight.vsndevts"\n"IdleSoundLoop"                "Hero_DragonKnight.Tutorial_Intro"\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"SoundSet")," with the correct ",Object(l.b)("strong",{parentName:"p"},"GameSoundsFile")," associated takes care of sounds like attacks and walking footsteps. The SoundSet string should be the first part of each of the hero sounds, which can be easily seen through the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pingzing/dota2-sound-editor"}),"Dota 2 Sound Editor"),". ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://puu.sh/ho4KA/f7ad0ff2ca.png"}),"Example"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"IdleSoundLoop")," will be played constantly after the unit spawns. Some heroes don't have a loop sound defined, but as in the example above it's possible to use this as an Spawn sound for the unit if you add the string of a non-loopable sound."))),Object(l.b)("h2",{id:"abilities"},"Abilities"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"AbilityLayout"               "4"\n"Ability1"                    ""            // Ability 1.\n//"Ability2" ... up to "Ability16"\n')),Object(l.b)("p",null,"The unit can hold up to 16 abilities at any time being."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'"AbilityLayout"')," is used for the built-in Flash UI to change how many abilities it can display, and currently its limited to 4, 5 and 6 (anything else will malfunction)"),Object(l.b)("h2",{id:"stats"},"Stats"),Object(l.b)("p",null,"Because of :valve: - reasons  , unit stats aren't hover-able, but they are there."),Object(l.b)("h3",{id:"physical-and-magical-protection"},"Physical and Magical protection"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"ArmorPhysical"                "0"\n"MagicalResistance"            "0"\n')),Object(l.b)("h3",{id:"attack-capabilities"},"Attack Capabilities"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"AttackCapabilities"         "DOTA_UNIT_CAP_NO_ATTACK"\n')),Object(l.b)("p",null,"List of Attack Capabilities:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_UNIT_CAP_NO_ATTACK")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_UNIT_CAP_MELEE_ATTACK")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_UNIT_CAP_RANGED_ATTACK"))),Object(l.b)("h4",{id:"other-attack-stats"},"Other Attack Stats:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"AttackDamageMin"            "50"       // Damage range min.\n"AttackDamageMax"            "40"       // Damage range max.\n"AttackRate"                 "1.7"     // Speed of attack.\n"AttackAnimationPoint"       "0.75"    // Normalized time in animation cycle to attack.\n"AttackAcquisitionRange"     "800"     // Range within a target can be acquired.\n"AttackRange"                "600"     // Range within a target can be attacked.\n"AttackRangeBuffer"          "250"     // Extra range the target can move without canceling the attack\n')),Object(l.b)("h4",{id:"ranged-attack-projectiles"},"Ranged Attack Projectiles"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"ProjectileModel"            "particles/units/heroes/hero_lina/lina_base_attack.vpcf"\n"ProjectileSpeed"            "900"\n')),Object(l.b)("p",null,'Find hero/unit attack particles with the asset browser, filtering for the hero name + "attack vpcf" '),Object(l.b)("p",null,'If you have any "Melee to Ranged" mechanic, the unit definition should have a projectile speed, else it will default to 0, effectively making them never reach its target.'),Object(l.b)("h4",{id:"the-things-we-could-do"},"The things we could do..."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"AttackDamageType"           "DAMAGE_TYPE_ArmorPhysical"\n')),Object(l.b)("p",null,"This is seen in every unit file, but worthless/unsupported. In the future, we could see it being used to easily define Air/Ground attacks, Magic Attacks, etc, which currently require scripted abilities to simulate those behaviors."),Object(l.b)("h3",{id:"attribute-stats"},"Attribute Stats"),Object(l.b)("p",null,"Attributes are ignored for anything that isn't a hero unit, but because anything used to define units can also be used for npc_heroes_custom, these are the keyvalues, all self explanatory:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"AttributePrimary"             "DOTA_ATTRIBUTE_STRENGTH"\n"AttributeBaseStrength"        "0"            // Base strength\n"AttributeStrengthGain"        "0"            // Strength bonus per level.\n"AttributeBaseAgility"         "0"            // Base agility\n"AttributeAgilityGain"         "0"            // Agility bonus per level.\n"AttributeBaseIntelligence"    "0"            // Base intelligence\n"AttributeIntelligenceGain"    "0"            // Intelligence bonus per level.\n')),Object(l.b)("h3",{id:"bounty"},"Bounty"),Object(l.b)("p",null,"If you want to make any complex rule for XP/Gold, for example, give less XP from this unit to heroes at a certain level, it's better to leave the values at 0 and grant it through lua."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"BountyXP"                    "0"            // Experience earn.\n"BountyGoldMin"                "0"           // Gold earned min.\n"BountyGoldMax"                "0"           // Gold earned max.\n')),Object(l.b)("h2",{id:"bounds"},"Bounds"),Object(l.b)("p",null,"This defines the unit collision with other units."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"BoundsHullName"            "DOTA_HULL_SIZE_HERO"\n')),Object(l.b)("p",null,"Bound Size Reference:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Radius in Hammer units"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_SMALL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_REGULAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_SIEGE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_HERO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_HUGE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_BUILDING"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"81")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_FILLER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"96")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_BARRACKS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"144")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HULL_SIZE_TOWER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"144")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Lua ",Object(l.b)("inlineCode",{parentName:"li"},"SetHullRadius(float)")," can change this to any value in between or even above 144.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"RingRadius"                "70"\n')),Object(l.b)("p",null,"  The visible selection ring when the unit is selected"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho2lF/02ab15803e.jpg",alt:"img"}))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"HealthBarOffset"           "250"\n')),Object(l.b)("p",null,'The height from the ground at which the Health Bar should be placed. By default this value is set to "-1" to use the models default height. The bigger the Model and ModelScale, this should be adjusted to a higher number so it doesn\'t look weird.'),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/ho2CK/8ae5a734d8.jpg",alt:"img"}))),Object(l.b)("h2",{id:"movement"},"Movement"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"MovementCapabilities"        "DOTA_UNIT_CAP_MOVE_NONE"\n"MovementSpeed"               "300"       // Speed\n"MovementTurnRate"            "0.5"       // Turning rate.\n')),Object(l.b)("p",null,"List of Movement Capabilities"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_UNIT_CAP_MOVE_NONE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_UNIT_CAP_MOVE_GROUND")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_UNIT_CAP_MOVE_FLY"))),Object(l.b)("h5",{id:"less-used-movement-related-values"},"Less used movement-related values:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"HasAggressiveStance"         "0"\n')),Object(l.b)("p",null,"Plays alternate idle/run animation when near enemies, e.g. Abaddon model"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"FollowRange"                 "100"\n')),Object(l.b)("p",null,"Distance to keep when following. Healing Ward/Sigil have it set at 250."),Object(l.b)("h2",{id:"health-and-mana"},"Health and Mana"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"StatusHealth"                "150"       // Base health.\n"StatusHealthRegen"           "0"         // Health regeneration rate.\n"StatusMana"                  "0"         // Base mana.\n"StatusManaRegen"             "0"         // Mana regeneration rate.\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Notes:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Negative Health/Mana Regen doesn't work."),Object(l.b)("li",{parentName:"ul"},"Setting StatusMana on 0 will make it not have a mana bar."),Object(l.b)("li",{parentName:"ul"},"There is currently ",Object(l.b)("strong",{parentName:"li"},"no way of Setting MAX Mana")," in Lua! Unit mana pool modification has to be done with the Creature block and Levels.")),Object(l.b)("h3",{id:"rarely-used"},"Rarely used:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"StatusStartingMana"          "-1"\n')),Object(l.b)("p",null,"-1 means default to full mana, which is the default. It can be changed to any integer value so the units don't spawn with a filled pool."),Object(l.b)("h2",{id:"armor-and-attack-types"},"Armor and Attack Types"),Object(l.b)("p",null,"The Table of Physical Attacks vs Armor Types can be found ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dota2.gamepedia.com/Damage_types#Effective_Physical_Damage_by_Attack_Type_and_Armor_Type"}),"here in this link to the dota wiki")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"CombatClassAttack"           "DOTA_COMBAT_CLASS_ATTACK_HERO"\n"CombatClassDefend"           "DOTA_COMBAT_CLASS_DEFEND_HERO"\n')),Object(l.b)("h3",{id:"attack-types-table"},"Attack Types Table"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dota Equivalent"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Normal"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_ATTACK_BASIC")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pierce"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_ATTACK_PIERCE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Siege"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_ATTACK_SIEGE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Chaos"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_ATTACK_LIGHT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hero"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_ATTACK_HERO")))),Object(l.b)("h3",{id:"armor-types-table"},"Armor Types Table"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dota Equivalent"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unarmored"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_DEFEND_SOFT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Light"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_DEFEND_WEAK")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Medium"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_DEFEND_BASIC")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Heavy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_DEFEND_STRONG")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fortified"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_DEFEND_STRUCTURE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hero"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_COMBAT_CLASS_DEFEND_HERO")))),Object(l.b)("h2",{id:"vision"},"Vision"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"VisionDaytimeRange"        "1200"        // Range of vision during day light.\n"VisionNighttimeRange"      "1800"        // Range of vision at night time.\n')),Object(l.b)("p",null,"Vision on any unit can't exceed 1800, any value above that will just default to 1800."),Object(l.b)("br",null),"## Unit Relationship Class",Object(l.b)("p",null,"This doesn't seem to make any difference, might be deprecated or just used for tagging stuff internally."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"UnitRelationshipClass"       "DOTA_NPC_UNIT_RELATIONSHIP_TYPE_DEFAULT"\n')),Object(l.b)("p",null,"List:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BARRACKS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BUILDING")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_COURIER")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_DEFAULT")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_HERO")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_SIEGE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD"))),Object(l.b)("h2",{id:"lua-vscript-ai"},"Lua VScript AI"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"vscripts"                    "path_to_ai_script.lua"\n')),Object(l.b)("p",null,"This will load a lua script file as soon as the unit is spawned. With a Spawn ( entityKeyValues ) function one can initiate a thinker to do any sort of logic, this is a very simple example for a unit that goes through a series of waypoints while casting spells anytime its possible: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MNoya/Warchasers/blob/master/game/dota_addons/warchasers/scripts/vscripts/ai_tank_miniboss.lua"}),"ai_tank_miniboss.lua"),"."),Object(l.b)("h2",{id:"neutral-behavior"},"Neutral Behavior"),Object(l.b)("p",null,"When you add a creep to the map and set it to the neutral team, the default is to turn it to a neutral. If you wan't to use a custom behavior, turn it off:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"UseNeutralCreepBehavior"   "0"\n')))}o.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),s=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,O=u["".concat(b,".").concat(d)]||u[d]||p[d]||i;return a?l.a.createElement(O,r(r({ref:t},o),{},{components:a})):l.a.createElement(O,r({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,b[1]=r;for(var o=2;o<i;o++)b[o]=a[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n);function i({id:e,aspectRatio:t=4/3}){return l.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},l.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n);function i({id:e,playlistId:t,aspectRatio:a=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return l.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},l.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);
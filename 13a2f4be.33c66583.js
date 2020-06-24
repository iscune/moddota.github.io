(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=(n(0),n(177)),o=n(178);n(179);const r={title:"Item KeyValues",author:"Noya",steamId:"76561198046984233",date:"01.12.2014"},l={id:"abilities/item-keyvalues",isDocsHomePage:!1,title:"Item KeyValues",description:"A comprehensive guide to npcitemscustom and coding items",source:"@site/_articles/abilities/item-keyvalues.md",permalink:"/abilities/item-keyvalues",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/item-keyvalues.md",sidebar:"tutorials",previous:{title:"Ability KeyValues",permalink:"/abilities/ability-keyvalues"},next:{title:"The importance of AbilitySpecial values",permalink:"/abilities/the-importance-of-abilityspecial-values"}},c=[{value:"General",id:"general",children:[{value:"Basic Rules",id:"basic-rules",children:[]},{value:"Stock",id:"stock",children:[]},{value:"Ownership",id:"ownership",children:[]},{value:"Charges",id:"charges",children:[]},{value:"Stacking, Consumable",id:"stacking-consumable",children:[]},{value:"Auto Cast",id:"auto-cast",children:[]},{value:"Upgradeable items",id:"upgradeable-items",children:[]},{value:"Recipes",id:"recipes",children:[]},{value:"Disassembling",id:"disassembling",children:[]}]},{value:"Common Modifier Key Values for items",id:"common-modifier-key-values-for-items",children:[]},{value:"Adding spell functionality",id:"adding-spell-functionality",children:[]},{value:"Icons and Custom Shops",id:"icons-and-custom-shops",children:[]},{value:"Cosmetic Values: Models, Effects, Tags and others.",id:"cosmetic-values-models-effects-tags-and-others",children:[{value:"Sounds when Picked, Dropped",id:"sounds-when-picked-dropped",children:[]},{value:"Model and Glow in the world.",id:"model-and-glow-in-the-world",children:[]},{value:"Change the displayed color of the item",id:"change-the-displayed-color-of-the-item",children:[]},{value:"Tags &amp; Alias",id:"tags--alias",children:[]},{value:"Restrictions",id:"restrictions",children:[]}]},{value:"Alt-Click",id:"alt-click",children:[{value:"PingOverrideText",id:"pingoverridetext",children:[]},{value:"ItemAlertable",id:"itemalertable",children:[]}]}],s={rightToc:c};function b({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A comprehensive guide to npc_items_custom and coding items"),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("p",null,'Start with "item',Object(i.b)("em",{parentName:"p"},'" and your item name. If you ',Object(i.b)("strong",{parentName:"em"},"don't")," put `item"),"` at the begging of an item, bad things happen\x0f"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"item_custom"\n{ ... }')),Object(i.b)("p",null,"Each item needs its proper ID for purchasing on the shop, although you can define items without an ID if you only plan to create them through Lua.\nDo not override Dota IDs, use IDs between 1000~2000"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"ID" "1100"')),Object(i.b)("p",null,"Next is the BaseClass. It can be DataDriven, or overriding an existing item from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotabuff/d2vpk/blob/master/dota_pak01/scripts/npc/items.txt"}),"default dota item_names"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"BaseClass" "item_datadriven"\n            "item_aegis"\n')),Object(i.b)("p",null,"If you want to override an item, you won't be able to change/add abilities, you'll be limited to change values from items.txt (and some values can't even be changed)\nSo it's recommended to always try to make a datadriven version of the item if you want to have complete freedom on what your item does."),Object(i.b)("p",null,"Now that we settled that, I'll review the most common key values seen in items."),Object(i.b)("h3",{id:"basic-rules"},"Basic Rules"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemCost" "322"\n"ItemKillable" "0" \n"ItemSellable" "1"\n"ItemPurchasable" "1"\n"ItemDroppable" "1"\n')),Object(i.b)("p",null,"ItemKillable lets both allies and enemies destroy the dropped item by attacking it."),Object(i.b)("h3",{id:"stock"},"Stock"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemStockMax" "1" \n"ItemStockTime" "100"\n"ItemStockInitial" "3"\n')),Object(i.b)("h3",{id:"ownership"},"Ownership"),Object(i.b)("p",null,"If you omit the following, its behavior will be NOT_SHAREABLE"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemShareability" "ITEM_NOT_SHAREABLE"             //Rapier\n                   "ITEM_PARTIALLY_SHAREABLE"       //Ring of Regen\n                   "ITEM_FULLY_SHAREABLE"           //Gem\n                   "ITEM_FULLY_SHAREABLE_STACKING"  //Consumables\n')),Object(i.b)("h3",{id:"charges"},"Charges"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemInitialCharges" "1" //How many charges should the item start with - Tango x3 \n"ItemDisplayCharges" "1" //Hide the charges of the item - Aegis \n"ItemRequiresCharges" "1" //The active ability needs charges to be used - Urn\n')),Object(i.b)("p",null,"Also remember to add this somewhere, normally at the beginning of a OnSpellStart block"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"SpendCharge" {}')),Object(i.b)("h3",{id:"stacking-consumable"},"Stacking, Consumable"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemStackable" "1"\n"ItemPermanent" "0"\n')),Object(i.b)("p",null,'If "ItemPermanent" is set to 1, charged items won\'t disappear when they hit 0 charges (Bottle, Urn, etc)\nBy omitting it will also default to 1.'),Object(i.b)("h3",{id:"auto-cast"},"Auto Cast"),Object(i.b)("p",null,"This value is the key for Tomes of Stats and other consumable items:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"ItemCastOnPickup" "1"')),Object(i.b)("h3",{id:"upgradeable-items"},"Upgradeable items"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"MaxUpgradeLevel" "5" // Dagon - 5\n"ItemBaseLevel" "1" //You\'ll need 5 different items, and change each accordingly\n')),Object(i.b)("h3",{id:"recipes"},"Recipes"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"item_recipe_custom" \n{\n    "ID" "1200"\n    "BaseClass"           "item_datadriven"\n    "ItemRecipe"          "1" //destroyed after combine\n    "ItemCost"            "0" //if its 0, it will combine without needing a recipe.\n    "ItemResult"          "item_custom" //the result of combining the ItemRequirements\n    "ItemRequirements"\n    {\n        "01" "item_ingredient_1;item_ingredient_2;item_ingredient_3"\n        "02" "item_ingredient_1;item_ingredient_2;item_ingredient_alternative_3"\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT NOTE:")," Your item name for the recipe to be recognized by the Dota Shop UI NEEDS to have this format: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"item_recipe_(name of your item)"\n')),Object(i.b)("p",null,"Meaning if the ItemResult you want to get is called ",Object(i.b)("em",{parentName:"p"},'"item_capuchino"'),", your recipe would be: ",Object(i.b)("em",{parentName:"p"},'"item_recipe_capuchino"')),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://puu.sh/dyDFL/f0a814100d.jpg",alt:"img"}))),Object(i.b)("p",null,"If you don't, the item will till be combinable but it won't show the neat lines to the possible upgrades."),Object(i.b)("h3",{id:"disassembling"},"Disassembling"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemDisassembleRule" "DOTA_ITEM_DISASSEMBLE_ALWAYS"\n                      "DOTA_ITEM_DISASSEMBLE_NEVER"\n')),Object(i.b)("h2",{id:"common-modifier-key-values-for-items"},"Common Modifier Key Values for items"),Object(i.b)("p",null,"We now have an item, but it doesn't do anything on its own.\nTo make it add stats or buffs, we need to set modifiers inside the item definition\nFor more on Modifiers, check the ","[Constants in the wiki]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"Modifiers"\n{\n    "item_custom_modifier"\n    {\n        "Passive" "1"  \n        "IsHidden" "0"  \n        "Attributes" "MODIFIER_ATTRIBUTE_MULTIPLE" //This makes duplicate items stack their properties\n        "Properties"\n        {\n            "MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT" "%movement_speed"\n            "MODIFIER_PROPERTY_EVASION_CONSTANT" "%evasion"\n            "MODIFIER_PROPERTY_STATS_STRENGTH_BONUS" "%bonus_str_agi"\n            "MODIFIER_PROPERTY_STATS_AGILITY_BONUS" "%bonus_agi"\n            "MODIFIER_PROPERTY_STATS_INTELLECT_BONUS" "%bonus_int"\n            "MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE" "%damage_bonus_percent"\n        }\n  \n        "States"  \n        {\n            "MODIFIER_STATE_SPECIALLY_DENIABLE" "MODIFIER_STATE_VALUE_ENABLED"\n            "MODIFIER_STATE_MAGIC_IMMUNE" "MODIFIER_STATE_VALUE_ENABLED"\n            "MODIFIER_STATE_NO_HEALTH_BAR" "MODIFIER_STATE_VALUE_ENABLED"  \n        }\n    }\n}\n  \n')),Object(i.b)("h2",{id:"adding-spell-functionality"},"Adding spell functionality"),Object(i.b)("p",null,"Apart from this values specially related to items, you can add ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"everything"))," that could be part of a datadriven ability, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_PASSIVE"\n"AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_BOTH"\n"AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"\n"AbilityCastAnimation" "ACT_DOTA_CAST_ABILITY_1"\n"AbilityManaCost" "100"\n"AbilitySpecial"\n{ ... }\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"http://moddota.com/forums/discussion/13/datadriven-ability-events-modifiers"}),"Ability Events"))," like ",Object(i.b)("inlineCode",{parentName:"p"},'"OnSpellStart"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'"OnOwnerDied"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"OnEquip"')," also go here in the main block."),Object(i.b)("p",null,"You need at least set the AbilityBehavior for your item to not be active (if you don't, it will default to ",Object(i.b)("inlineCode",{parentName:"p"},"DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"),")."),Object(i.b)("p",null,"See more on the complete ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://moddota.com/forums/discussion/comment/54"}),"DataDriven Ability Breakdown")),Object(i.b)("h2",{id:"icons-and-custom-shops"},"Icons and Custom Shops"),Object(i.b)("p",null,"For your item to have an icon you'll need to go to your addon folder under this path: "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/resource/flash3/images/items")),Object(i.b)("p",null,"And put a .PNG file with dimensions ",Object(i.b)("strong",{parentName:"p"},"86 x 64"),', with the same name as the "item',"_",'custom", WITHOUT the "item_"'),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bmddota/reflexdota/blob/source2/game/dota_addons/reflex/resource/flash3/images/items/ability_reflex_flame_sword.png"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://raw.githubusercontent.com/bmddota/reflexdota/source2/game/dota_addons/reflex/resource/flash3/images/items/ability_reflex_flame_sword.png",alt:"img"})))),Object(i.b)("p",null,'Then in your "item_custom" code, you add the following:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"AbilityTextureName" "item_custom"')),Object(i.b)("p",null,"You can also use the names of the dota icons. Just make sure this line starts with ",Object(i.b)("inlineCode",{parentName:"p"},'"item_'),", so the engine knows to look the image on the items folder."),Object(i.b)("p",null,"Adding the item to a shop. Layout ","[Here]","\nFor this, inside your addon folder you need to go inside scripts/shops and make/edit a .txt file with this name file structure:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mapName_shops.txt")),Object(i.b)("p",null,"mapName should be the name of YOUR MAP (.vmap file in Hammer or content folder), NOT your addon name (both could be the same, or you could have multiple maps with different shops)"),Object(i.b)("p",null,'Adding "_shops" to the mapName is also mandatory.'),Object(i.b)("p",null,"A template shop file can be copied from here: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pastebin.com/KZrtm1xQ"}),"https://pastebin.com/KZrtm1xQ")),Object(i.b)("p",null,"In addition to this file, your item can have key value rules for where it can be bought"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"SideShop" "1"  \n"SecretShop" "0"\n')),Object(i.b)("p",null,"At the moment of writing this guide, we can only set up 3 different shops (Home, Side and Secret).\nYou can change categories and shop tab names, with ","[addon_english modding]"),Object(i.b)("p",null,"To make an actual shop area inside your map on Hammer, check this other tutorial ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.reddit.com/r/Dota2Modding/comments/2dpts1/tutorial_creating_a_custom_shop_step_by_step/"}),"tutorial_creating_a_custom_shop_step_by_step")),Object(i.b)("p",null,"To disable your dota items, use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pastebin.com/pGExrS4A"}),"this npc_abillities_override.txt")," inside the scripts/npc folder."),Object(i.b)("h2",{id:"cosmetic-values-models-effects-tags-and-others"},"Cosmetic Values: Models, Effects, Tags and others."),Object(i.b)("p",null,"These values are optional but greatly improve the quality of your item"),Object(i.b)("h3",{id:"sounds-when-picked-dropped"},"Sounds when Picked, Dropped"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"UIPickupSound" "Item.PickUpRingShop" //Sound when adquiring the item\n"UIDropSound" "Item.DropRecipeShop" //Sound when dropping the item manually\n"WorldDropSound" "Item.DropGemWorld" //Sound when dropping the item on death (?)\n')),Object(i.b)("h3",{id:"model-and-glow-in-the-world"},"Model and Glow in the world."),Object(i.b)("p",null,"VMDL and Particle files can be seen through the ","[Asset Browser]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"Model" "models/chest_worlddrop.vmdl"\n"Effect" "particles/generic_gameplay/dropped_item.vpcf"\n')),Object(i.b)("p",null,"You can find good models in /props_gameplay, /econ or use your own customs"),Object(i.b)("p",null,"Important: If you create the item through lua ","[CreateItemOnPositionSync]",", you need to provide vision of the world position where the item is being created, at least briefly, to properly display the particle effect."),Object(i.b)("h3",{id:"change-the-displayed-color-of-the-item"},"Change the displayed color of the item"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemQuality"    "artifact" //Orange \n                 "epic" //Purple\n                 "rare" //Blue\n                 "common" //Green\n                 "component" //White\n                 "consumable" //White\n')),Object(i.b)("h3",{id:"tags--alias"},"Tags & Alias"),Object(i.b)("p",null,"Tags are defined in addon_english, find them in ","[dota_english]"," under ",Object(i.b)("em",{parentName:"p"},"// Tags"),"\nAliases help the search bar to find the item quickly with abreviations"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemShopTags" "int;str;agi;mana_pool;health_pool;hard_to_tag"\n"ItemAliases" "this;appears_in;search"\n')),Object(i.b)("p",null,"Omit to not announce."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ItemDeclarations" "DECLARE_PURCHASES_TO_TEAMMATES"\n                   "DECLARE_PURCHASES_IN_SPEECH"\n                   "DECLARE_PURCHASES_TO_SPECTATORS"\n')),Object(i.b)("h3",{id:"restrictions"},"Restrictions"),Object(i.b)("p",null,"This is how Basher is disallowed for certain heroes"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"InvalidHeroes" "npc_dota_hero_spirit_breaker;npc_dota_hero_faceless_void"\n')),Object(i.b)("p",null,"For the Scripted, more powerful version, read more on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://moddota.com/forums/discussion/20/item-restrictions-requirements"}),"Item Restrictions & Requirements")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"alt-click"},"Alt-Click"),Object(i.b)("p",null,"Alt-click text on items in Inventory and dropped on the ground. Takes the strings from resource/addon_english.txt\nor any other languages."),Object(i.b)("h3",{id:"pingoverridetext"},"PingOverrideText"),Object(i.b)("p",null,'Overrides the default "',"[ALLIES]"," ",Object(i.b)("strong",{parentName:"p"},"ItemName"),' dropped here".\nIt will look for ',Object(i.b)("em",{parentName:"p"},"#DOTA_Chat_Text_String")," (",Object(i.b)("em",{parentName:"p"},"Text_String")," can be whatever) in your addon strings. "),Object(i.b)(o.a,{id:"RemarkableImportantAnt",mdxType:"Gfycat"}),Object(i.b)("p",null,"In the item_datadriven:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"PingOverrideText" "DOTA_Chat_Text_String" \n')),Object(i.b)("p",null,"In addon_english.txt:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"DOTA_Chat_Text_String" "[VOLVO] Giff"\n')),Object(i.b)("h3",{id:"itemalertable"},"ItemAlertable"),Object(i.b)("p",null,'Displays "',"[ALLIES]"," Gather for ",Object(i.b)("strong",{parentName:"p"},"ItemName"),' here."'),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://puu.sh/duiGf/025d66f1cd.jpg",alt:"img"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-~"}),'"ItemAlertable" "1" \n```~  \n\n\n---\n\nThat\'s it for all the Item-related key values. In next post we\'ll review different examples.\n\n')))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n.n(a);function o({id:e,aspectRatio:t=4/3}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n.n(a);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);
import { FlavorConfig, FlavorVariationConfig, VariationConfig } from "./type";

export const FlavorConfigMap: { [key: string]: FlavorConfig } = {
  "specialty-coffee": {
    coverImageSource: "/images/specialty-coffee.png",
    colorClass: {
      background: "bg-[#cc9023]",
      header: "text-[#bd7d4b]",
      quote: "text-[#D9D9D9]",
      title: "text-orange-200",
      text: "text-[#ffffff]",
    },
    formalName: "Enigmatic Aroma",
    name: "Milked Brewed Specialty Coffee",
    quote: "A proper day is incomplete without coffee",
    note: "The basic enigma of coffee remains how intoxicating its complex and evocative notes can kindle our emotions, leaving a lingering yet comfortable presence in our memory. Here, the unique cultivation and extraction methods are performed by the Purist during the stage that all the aromas of specialty coffee beans are released into our milk and cream.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 5 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  "ceremonial-matcha": {
    coverImageSource: "/images/ceremonial-matcha.png",
    colorClass: {
      background: "bg-[#2c8d2a]",
      header: "text-[#2b4b28]",
      quote: "text-[#D9D9D9]",
      title: "text-[#0c1d10]",
      text: "text-[#ffffff]",
    },
    formalName: "Kyoto Serenity",
    name: "Ceremonial Matcha",
    quote:
      "Never to suffer from mediocre matcha would never to have been blessed by ceremonial matcha.",
    quoteBy: "Adapted from Edgar Allan Poe",
    note: "Resplendent in the unadulterated chlorophyll colour, this heritage grade matcha ice cream is poised between unraffled serenity and absolute divinity of Kyoto's finest green tea. The palate will be immersed in concentrated umami in contrast with the freshness and the silky texture that prove effortless to enjoy.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 5 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  "dark-chocolate": {
    coverImageSource: "/images/dark-chocolate.png",
    colorClass: {
      background: "bg-[#4b2511]",
      header: "text-[#4b2511]",
      quote: "text-[#D9D9D9]",
      title: "text-[#825c43]",
      text: "text-[#e1c4a2]",
    },
    formalName: "Ganache De Varsailles",
    name: "Chocolate Ganache Ice Cream",
    quote:
      "All that we see or seem is but dark chocolate ice cream within dark chocolate ice cream.",
    quoteBy: "Adapted from Edgar Allan Poe",
    note: "I consider hand-crafted dark chocolate ice cream to be a holy revelation of emotions and passion. This 70% transcontinental blended dark chocolate with fresh cream and milk will take you on an immersive and alluring journey, accompanied by the deep aroma of theobromine. Prepare your refined senses for the subtle notes of coffee and nuts and that add to the velvety and lasting finish.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 7 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  "dark-chocolate-sorbet": {
    coverImageSource: "/images/dark-chocolate-sorbet.png",
    colorClass: {
      background: "bg-[#382d2b]",
      header: "text-[#3e1d0b]",
      quote: "text-[#D9D9D9]",
      title: "text-[#645043]",
      text: "text-[#dfc6a2]",
    },
    formalName: "Dark Universe",
    name: "Dark Chocolate Sorbet",
    quote:
      "Chocolate ice cream can be more than just chocolate ice cream. It's ice cream chocolate.",
    note: "This 70% single-origin Criollo dark chocolate melted in mineral water invites every chocolate connoisseur and ice cream pundit into a parallel universe where infinitely deep and wide layers of theobromine are faithfully expressed. Align the palate with the dark indulgence in eager anticipation for layered notes of red fruits and a touch of earthy spice characteristic of bean-to-bar chocolate.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 6 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  "western-milk-brewed-tea": {
    coverImageSource: "/images/western-milk-brewed-tea.png",
    colorClass: {
      background: "bg-[#c87638]",
      header: "text-[#bd9a6e]",
      quote: "text-[#D9D9D9]",
      title: "text-[#e0b087]",
      text: "text-[#ffffff]",
    },
    formalName: "Afternoon Delight",
    name: "Milk-Brewed Western Tea",
    quote: "At half-past three, everything stops for tea.",
    note: "Rituals of high tea are presumed to begin with the pleasures of aristocratic afternoons back in the early 1800s when Anna, the seventh Duchess of Bedford, wished to assuage herself of a sinking feeling. This fashionable practice soon extended across all classes and continents, developing into an institution steeped in tradition and history.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 5 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  vanilla: {
    coverImageSource: "/images/vanilla.png",
    colorClass: {
      background: "bg-[#fddea9]",
      header: "text-[#b1742d]",
      quote: "text-[#655b5b]",
      title: "text-[#b1742d]",
      text: "text-[#4d4242]",
    },
    formalName: "300+ Constituents",
    name: "Vanilla",
    quote: "Whoever first used vanilla in desserts deserves a Nobel Prize.",
    note: "Efface your memory of the ethyl alcoholic extract, for the beans of Vanilla planifolia and Vanilla tahitensis contain more than 300 organic compounds that confer a plethora of flavours and aromas irreproducible by any artificially synthesised substance.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 5 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  "bronte-pistachio": {
    coverImageSource: "/images/bronte-pistachio.png",
    colorClass: {
      background: "bg-[#b29c43]",
      header: "text-[#a99360]",
      quote: "text-[#D9D9D9]",
      title: "text-[#7e6a2b]",
      text: "text-[#352208]",
    },
    formalName: "Sicily's Emerald Gold",
    name: "Bronte Pistachio",
    quote:
      "There is a reason why Sicilian people call Bronte pistachios green gold",
    note: "On the steep and stony foothills of Mount Etna stand pistachio trees, the green gold, as the denizens of Sicily call it, born only on volcanic soil, thriving there uncontested with their sought-after aroma and taste, Bronte's symbolic power of longevity and willpower, all the legendary tales told through this ice cream.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 5 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
  "mythical-desire": {
    coverImageSource: "/images/mythical-desire.png",
    colorClass: {
      background: "bg-[#00306d]",
      header: "text-[#1e499b]",
      quote: "text-[#D9D9D9]",
      title: "text-[#6f87a9]",
      text: "text-[#ffffff]",
    },
    formalName: "Mythical Desire",
    name: "The Purist's Selection",
    quote:
      "In a world full of trends, we want not to remain but to reinvent the classics.",
    note: "To obtain the mastery of artisanal ice cream, the supremacy of quality is the baseline upon which core values are built. We emphasise our vision of the ideal texture that ice cream ought to be appreciated. We let our world heritage-grade ingredients speak for themselves. These are not just a marketing slogan but words to live by.",
    eatingInstruction:
      "After the removal from -18 degree Celcius for 5 minutes, wait for the ideal texture: a soft one yet resistant upon pressing.",
  },
};

const VariationConfigMap: { [key: string]: VariationConfig } = {
  "panama-geisha-la-esmeralda-special-mario-5": {
    variationName: "Panama Geisha La Esmeralda Special Mario 5",
    tasteNote: "Jasmine, Red Pomelo, Citrus, Mango, Outstanding Aftertaste",
  },
  "panama-geisha-90+-perci": {
    variationName: "Panama Geisha 90+ Perci",
    tasteNote: "Cherry, Pomegranate, Chocolate, Cardamom",
  },
  "jamaica-blue-mountain": {
    variationName: "Jamaica Blue Mountain",
    tasteNote: "Caramel, Chocolate, Smooth and Refined Finish",
  },
  "hawaii-kona-extra-fancy": {
    variationName: "Hawaii Kona Extra Fancy",
    tasteNote: "Brown Sugar Caramel, Bright Citrus Peels, Silky Finish",
  },
  "columbia-bourbon-rojo": {
    variationName: "Columbia Bourbon Rojo",
    tasteNote: "Yellow Fruits, Chocolate, Panela, Caramel, Floral, Kiwi",
  },
  "columbia-el-diviso-tabi": {
    variationName: "Columbia El Diviso Tabi",
    tasteNote: "Raspberry, Mandarin, Violet, Gummy White Chocolate",
  },
  "panama-geisha-la-esmeralda-private-collection": {
    variationName: "Panama Geisha La Esmeralda Private Collection",
    tasteNote: "Sweet Orange, Cherry, White Flowers, Silky Mouthfeel",
  },
  "columbia-rum-barrel-finca-san-jose": {
    variationName: "Columbia Rum Barrel Finca San Jose",
    tasteNote: "Cherry, Rum, Vanilla, Tiramisu",
  },
  "columbia-santa-monica-cinnamon": {
    variationName: "Columbia Santa Monica Cinnamon",
    tasteNote: "Cinnamon, White Chocolate, Baked Peaches",
  },
  "columbia-finca-la-virginia": {
    variationName: "Columbia Finca La Virginia",
    tasteNote: "Raisin, Cola, Berries, Red Wine",
  },
  "panama-geisha-volcan-baru": {
    variationName: "Panama Geisha Volcan Baru",
    tasteNote: "Jasmine, Apricot, Bergamot, Peach, Oolong Tea",
  },
  "columbia-el-diviso-ombligon": {
    variationName: "Columbia El Diviso Ombligon",
    tasteNote: "Candied Cherry, Blackcurrent, Jelly, Floral",
  },
  "columbia-el-diviso-chiroso": {
    variationName: "Columbia El Diviso Chiroso",
    tasteNote: "Spices, Creamy Chocolate, Savoury Mint, Balanced Body",
  },
  "columbia-finca-las-mercedes": {
    variationName: "Columbia Finca Las Mercedes",
    tasteNote: "Mandarin, Honey, Whisky, Brown Sugar",
  },
  "honduras-brandy-barrel": {
    variationName: "Honduras Brandy Barrel",
    tasteNote: "Brandy, Honey, Grape, Wine",
  },
  "ethiopia-uraga-pantaohong-g1": {
    variationName: "Ethiopia Uraga Pantaohong G1",
    tasteNote: "Jasmine, Peach, Pomelo, Rosy Grape",
  },
  "brazil-cerrado": {
    variationName: "Brazil Cerrado",
    tasteNote: "Nuts, Clean Palate",
  },
  "narino-premium": {
    variationName: "Narino Premium",
    tasteNote: "White Chocolate, Butter, Bread, Strong Umami Creamy Mouthfeel",
  },
  "zuisho-shogyokuen": {
    variationName: "Zuisho Shogyokuen",
    tasteNote: "Green Pea, Savoury, Mango, Subtle Coconut, Long Umami",
  },
  "shirakawa-asahi": {
    variationName: "Shirakawa Asahi",
    tasteNote: "Velvety Vegetal, Sweet Nutty Umami, Bright and Full Bodied",
  },
  "tsujiki-uji-hikari": {
    variationName: "Tsujiki Uji Hikari",
    tasteNote: "Mellow, Smooth Vegetal, Long-Lasting Mouthfeel",
  },
  "mariage-freres-paris-earl-grey": {
    variationName: "Mariage Freres Paris Earl Grey",
    tasteNote: "Bold Black Tea, Vibrant Zesty Bergamot",
  },
  "fortnum-&-mason-countess-grey": {
    variationName: "Fortnum & Mason Countess Grey",
    tasteNote: "Mellow Black Tea, Smooth Bergamot, Orange Peel Finish",
  },
  "dong-fang-mei-ren": {
    variationName: "Dong Fang Mei Ren",
    tasteNote: "Clear Wild Floral Aroma, Ripe Tropical Fruits and Honey",
  },
  "tie-guan-yin": {
    variationName: "Tie Guan Yin",
    tasteNote: "Roasted Floral Aroma, Toasty, Peach, Plum, Mineral",
  },
  "domori-ocumare": {
    variationName: "Domori Ocumare",
    tasteNote: "Caramel, Nuts, Tobacco, Full Bodied",
  },
  "pacari-national-arriba": {
    variationName: "Pacari National Arriba",
    tasteNote: "Wild Flowers, Fermented Fruits, Lingering Finish",
  },
  "akesson's-madascar": {
    variationName: "Akesson's Madascar",
    tasteNote: "Red Berries, Spices, Mellow Mouthfeel",
  },
  "domori-chuo": {
    variationName: "Domori Chuo",
    tasteNote: "Balanced, Sophisticated and Deep cacao Aroma",
  },
  "friss-holm-nicaragua-la-dalia": {
    variationName: "Friss-Holm Nicaragua La Dalia",
    tasteNote: "Cola, Blackcurrent and Dark Cherry, Spiced Flowers",
  },
  "fu-wan-ping-tung": {
    variationName: "Fu Wan Ping Tung",
    tasteNote: "Bold Tropical Fruits, Spices, Nuts, Caramel",
  },
};

export const getFlavorVariationConfig = (
  flavor: string,
  variation: string
): FlavorVariationConfig => {
  const flavorConfig = FlavorConfigMap[flavor];
  const variationConfig = VariationConfigMap[variation];
  return {
    coverImageSource: flavorConfig.coverImageSource,
    colorClass: flavorConfig.colorClass,
    formalName: flavorConfig.formalName,
    name: flavorConfig.name,
    quote: flavorConfig.quote,
    quoteBy: flavorConfig.quoteBy,
    variationName: variationConfig.variationName,
    tasteNote: variationConfig.tasteNote,
    note: flavorConfig.note,
    eatingInstruction: flavorConfig.eatingInstruction,
  };
};

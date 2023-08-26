import { FlavorConfig, FlavorVariationConfig, VariationConfig } from "./type";

export const FlavorConfigMap: { [key: string]: FlavorConfig } = {
  "specialty-coffee": {
    coverImageSource: "/images/coffee.png",
    colorClass: {
      background: "bg-[#cc9023]",
      header: "text-[#ffffff]",
      quote: "text-[#875c3b]",
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
  matcha: {
    coverImageSource: "/images/matcha.png",
    colorClass: {
      background: "bg-[#2c8d2b]",
      header: "text-[#2c4b2b]",
      quote: "text-[#2c4b2b]",
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

export interface Item {
  name: string;
  description: string;
  tasteNote?: string;
  price: number;
}

export interface Flavor {
  id: string;
  categoryButtonText: string;
  backgroundColorClass: string;
  imageName: string;
  textColorClass?: string;
  name: string;
  items: Item[];
}

const coffee: Flavor = {
  id: "coffee",
  categoryButtonText: "หมวด กาแฟนม Specialty",
  backgroundColorClass: "bg-coffee-bg",
  imageName: "coffee",
  name: "กาแฟนม Specialty (Single Origin and Award-Winning)",
  items: [
    {
      name: "Panama Geisha La Esmeralda Special Lot 4S PA",
      description:
        "กาแฟ Geisha จากไร่ดังของ Panama มีมิติของกลิ่นและ รสที่ซับซ้อน ละมุน เต็มไปด้วยดอกไม้และผลไม้หลากชนิด ทิ้งรสชาติไว้ที่คอได้อย่างยอดเยี่ยม และยาวนาน",
      tasteNote: "Taste note: ดอกมะลิ ส้มโอแดง เบอร์กามอต ส้ม เสาวรส",
      price: 400,
    },
  ],
};

const matcha: Flavor = {
  id: "matcha",
  categoryButtonText: "หมวด มัทฉะพิธีการ",
  backgroundColorClass: "bg-matcha-bg",
  imageName: "matcha",
  name: "มัทฉะพิธีการ (เกรดพิธีชง/มรดกญี่ปุ่น)",
  items: [
    {
      name: "Narino Premium",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien ",
      tasteNote:
        "Taste note: ไวท์ช็อคโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      price: 600,
    },
  ],
};

const westernTea: Flavor = {
  id: "western-tea",
  categoryButtonText: "หมวด ชานมตะวันตก",
  backgroundColorClass: "bg-western-tea-bg",
  textColorClass: "text-western-tea-text",
  imageName: "western-tea",
  name: "ชานมตะวันตก",
  items: [
    {
      name: "Marco Polo Sublime",
      description:
        "ชาดำ signature กลิ่นผลไม้และดอกไม้นานาชนิต จาก Mariage Frères",
      tasteNote:
        "Taste note: แพร์ ลิ้นจี่ สตอเบอร์รี่ แครนเบอร์รี่ เมล่อน ครีม มอล์ต",
      price: 300,
    },
  ],
};

const easternTea: Flavor = {
  id: "eastern-tea",
  categoryButtonText: "หมวด ชานมตะวันออก",
  backgroundColorClass: "bg-eastern-tea-bg",
  imageName: "eastern-tea",
  name: "ชานมตะวันออก (เกรดประกวดแข่งขัน)",
  items: [
    {
      name: "Dong Fang Mei Ren (東方美人)",
      description:
        "ชาอู่หลงจากไต้หวัน รสชาติละมุน สดชื่น ที่ผ่านการหมักบ่มตั้งแต่บนต้น ทำให้มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้ง",
      tasteNote: "Taste note: น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช ลูกแพร์",
      price: 300,
    },
  ],
};

const chocolate: Flavor = {
  id: "chocolate",
  categoryButtonText: "หมวด ช็อกโกแลต",
  backgroundColorClass: "bg-chocolate-bg",
  imageName: "chocolate",
  name: "ช็อคโกแลตกานาช และช็อคโกแลตซอร์เบต์ (เกรดประกวดแข่งขัน)",
  items: [
    {
      name: "Domori Chuao Chocolate Sorbet",
      description:
        "ช๊อคโกแลตจาก Domori ผู้ผลิตช๊อคโกแลตสายพันธุ์ Criollo ชั้นนำ ผสมกับน้ำแร่ทำให้ดึงเอาเอกลักษณ์ ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล ละมุน เข้าใจง่าย โดยไม่ถูกบดบังด้วยรสนม",
      tasteNote:
        "Taste note: ถั่วเฮเซลนัท คาราเมล รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อย",
      price: 300,
    },
  ],
};

const fruits: Flavor = {
  id: "fruits",
  categoryButtonText: "หมวด ผลไม้ตามฤดูกาล",
  backgroundColorClass: "bg-fruits-bg",
  imageName: "fruits",
  name: "ผลไม้ตามฤดูกาล",
  items: [
    {
      name: "Thap Sakae Coconut Milk",
      description: "Description",
      price: 250,
    },
  ],
};

const classic: Flavor = {
  id: "classic",
  categoryButtonText: "หมวด รส Classic",
  backgroundColorClass: "bg-classic-bg",
  textColorClass: "text-classic-text",
  imageName: "classic",
  name: "รสชาติ Classic ของ The Purist",
  items: [
    {
      name: "Bronte Pistachio",
      description:
        "พิสตาชิโอ้จากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชิโอ้มายาวนาน หลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้มข้น และหอมไม่เหมือนใคร",
      price: 300,
    },
  ],
};

const special: Flavor = {
  id: "special",
  categoryButtonText: "หมวด รสพิเศษ",
  backgroundColorClass: "bg-special-bg",
  imageName: "special",
  name: "รสชาติพิเศษอื่นๆ",
  items: [
    {
      name: "Thai Tea",
      description:
        "ชาไทยสูตรต้นตำหรับจากชาตรามือ ถูกผสมเข้ากับนม และครีมที่มีสัดส่วนไขมันสูงเพื่อทำเป็นไอศกรีม ซึ่งทำให้ กลิ่นหอมมันของชาไทยติดค้างในปากได้อย่างยาวนาน",
      price: 150,
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const template: Flavor = {
  id: "",
  categoryButtonText: "",
  backgroundColorClass: "",
  imageName: "",
  name: "",
  items: [
    {
      name: "",
      description: "",
      tasteNote: "",
      price: 0,
    },
  ],
};

export const coffeeFestFlavors: Flavor[] = [
  coffee,
  matcha,
  westernTea,
  easternTea,
  chocolate,
  fruits,
  classic,
  special,
];

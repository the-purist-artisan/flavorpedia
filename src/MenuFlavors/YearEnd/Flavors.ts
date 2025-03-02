import { Flavor } from "../types";

const coffee: Flavor = {
  id: "coffee",
  categoryButtonText: "หมวด กาแฟนม Specialty",
  backgroundColorClass: "bg-coffee-bg",
  imageName: "coffee",
  name: "กาแฟนม Specialty (Single Origin and Award-Winning)",
  items: [
    {
      name: "Panama Geisha 90+ Lotus",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นผลไม้รสเปรี้ยวสุก ที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tastingNotes:
        "Tasting notes: มะม่วงสุก มะขามเปียก ลาเวนเดอร์ แบล็กเบอร์รี บรั่นดี พลัม ยี่หร่าฝรั่ง",
      price: 400,
    },
    {
      name: "Columbia Rum Barrel Finca San Jose",
      description:
        "กาแฟจากไร่แรกที่คิดค้นวิธีการหมักบ่มในถังเหล้ารัมที่ใช้แล้ว ทำให้กาแฟมีกลิ่นเหล้ารัมที่หอมอย่างโดดเด่น",
      tastingNotes: "Tasting notes: เชอร์รี รัม วานิลลา ทิรามิสุ",
      price: 350,
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
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien",
      tastingNotes:
        "Tasting notes: ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      price: 600,
    },
    {
      name: "Zuisho Shogyokuen",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tastingNotes:
        "Tasting notes: ถั่วลันเตา คาวทะเลสาหร่าย มะม่วง มะพร้าวเล็กๆ ความอูมามิพุ่งพล่าน และค้างอยู่ในปากยาวนาน",
      price: 590,
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
      name: "T2 French Earl Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด และกุหลาบ",
      tastingNotes: "Tasting notes: ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
    },
    {
      name: "Fortnum Mason Countess Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ที่เพิ่มลูกเล่นด้วยกลิ่นของผลไม้ตระกูลซิตรัส",
      tastingNotes: "Tasting notes: ผลไม้ตระกูลซิตรัส",
      price: 300,
    },
  ],
};

const chocolate: Flavor = {
  id: "chocolate",
  categoryButtonText: "หมวด ช็อกโกแลต",
  backgroundColorClass: "bg-chocolate-bg",
  imageName: "chocolate",
  name: "ช็อกโกแลตกานาช และช็อกโกแลตซอร์เบ (เกรดประกวดแข่งขัน)",
  items: [
    {
      name: "Domori Venezuela Classic Ocumare Ganache",
      description:
        "ช็อกโกแลตจาก Domori ผู้ผลิตช็อกโกแลตสายพันธุ์ Criollo ชั้นนำ สายพันธุ์ย่อย Ocumare รสชาติคลาสสิกเข้ากับนม",
      tastingNotes: "Tasting notes: คาราเมล ถั่ว กลิ่นคั่ว",
      price: 300,
    },
    {
      name: "Guatemala Chocolate Sorbet",
      description:
        "ช็อกโกแลต Criollo จาก Duffy’s ผู้ผลิตชั้นนำของอังกฤษ เมล็ดปลูกในประเทศ Guatemala รสชาติผลไม้ซับซ้อน อมเปรี้ยว",
      tastingNotes:
        "Tasting notes: เรดเคอร์แรนท์ เปลือกส้ม ทอฟฟี น้ำผึ้ง องุ่นรสเปรี้ยว",
      price: 300,
    },
    {
      name: "Domori Chuao Chocolate Sorbet",
      description:
        "ช็อกโกแลต Criollo จาก Domori ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล โดยไม่ถูกบดบังด้วยรสนม",
      tastingNotes:
        "Tasting notes: รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อยจากผลไม้แห้งหลายชนิด",
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
      name: "Dole Cherry Sorbet",
      description: "เชอรีแบรนด์ Dole จากชิลี รสชาติหวานเข้มข้น อมเปรี้ยวตาม",
      price: 300,
    },
    {
      name: "Homsuwan Pineapple Sorbet",
      description:
        "สัปปะรดหอมสุวรรณ กลิ่นหอมดอกไม้ หวานน้ำผึ้ง รสเปรี้ยวสดชื่น",
      price: 200,
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
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      price: 300,
    },
    {
      name: "Queensland Macadamia",
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
      price: 300,
    },
    {
      name: "Piedmont Hazelnut (Nocciola del Piemonte IGP)",
      description:
        "เฮเซลนัทสายพันธุ์เฉพาะถิ่นจากเมือง Piedmont แหล่งผลิตเฮเซลนัทที่ดีที่สุดของโลก หวาน มันเหมือนเนย มีกลิ่นอ่อนๆของวานิลลา และน้ำผึ้ง",
      price: 300,
    },
    {
      name: "Tahitian Raiatea Black Pearl Grand Cru Vanilla",
      description:
        "วานิลลาสายพันธุ์ Tahitian จากเกาะ Raiatea มีความหอมจากกลิ่นของเครื่องเทศ ทำให้แตกต่างจากวานิลลาสายพันธุ์อื่น",
      tastingNotes:
        "Tasting notes: วานิลลาที่มีกลิ่นเครื่องเทศ ขนมปังขิง อบเชย และดอกไม้นานาๆ ชนิด",
      price: 350,
    },
    {
      name: "Chocolate Chips",
      description:
        "วานิลลา Tahitian รสชาติซับซ้อนด้วยความหอมหวาน และกลิ่นจากเครื่่องเทศ ตัดกับช็อกโกแลตชิพ Domori Chuao ที่มีความละมุน",
      price: 400,
    },
    {
      name: "Blueberry Yogurt",
      description:
        "บลูเบอร์รีสดจากเปรู ผสมกับน้ำผึ้งมิ้มทำเป็นซอสสูตรพิเศษ รวมเข้ากับกรีกโยเกิร์ต และครีม รสชาติหอมมันกลมกล่อม สดชื่่น",
      price: 250,
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
      name: "Christmas Tea: Esprit de Noël",
      description:
        "ชาดำจาก Mariage Frères ผสมกลิ่นเครื่องเทศ และถั่วให้เข้ากับงานเทศกาลปลายปี",
      tastingNotes: "Tasting notes: เครื่องเทศฤดูหนาว อบเชย อัลมอนด์",
      price: 300,
    },
    {
      name: "Vanilla Tea: Grand Bois Chéri",
      description: "ชาดำจาก Mariage Frères โดดเด่นด้วยกลิ่่นวานิลลา",
      tastingNotes: "Tasting notes: วานิลลา",
      price: 300,
    },
    {
      name: "Black Coconut Ash",
      description:
        "ดัดแปลงจากขนมเปียกปูนโบราณ ทำจากกาบมะพร้าวเผา เบสกะทิสดทับสะแก ยกระดับความเป็นขนมไทย",
      price: 300,
    },
    {
      name: "Gianduja Chocolate Hazelnuts",
      description:
        "ช็อกโกแลต Ocumare จาก Domori ที่มีรสเข้ม ผสมกับ Piedmont Hazelnut ขั้นกว่าของรสชาติที่คุณรู้จัก",
      price: 350,
    },
    {
      name: "Thai Tea",
      description:
        "ชาไทยสูตรต้นตำหรับของชาตรามือที่มีกลิ่นวานิลลา และเครื่องเทศ ผสมเข้ากับนม และครีมชั้นดี ทำให้กลิ่นของชาไทยติดค้างในปากได้อย่างยาวนาน",
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
      tastingNotes: "",
      price: 0,
    },
  ],
};

export const yearEndFlavors: Flavor[] = [
  coffee,
  matcha,
  westernTea,
  chocolate,
  fruits,
  classic,
  special,
];

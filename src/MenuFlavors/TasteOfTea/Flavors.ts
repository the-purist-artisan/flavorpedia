import { Flavor } from "../types";

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
      name: "Asa Hikari",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด ชนะรางวัลจากเวที UK Leafies Award 2023 ผสมระหว่างสายพันธุ์ Uji Hikari และ Asahi",
      tastingNotes:
        "Tasting notes: สาหร่ายทะเลย่าง ซุปผักยอดหน่อไม้ฝรั่งอ่อน ธัญพืช หอมหวานอูมามิคาราเมลช็อกโกแลตทิ้งท้าย",
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
    {
      name: "Tsujiki Uji Hikari",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากไร่ชนะรางวัลตลอดกาล Tsujiki",
      tastingNotes:
        "Tasting notes: ความหอม aromatic ของใบไม้ฤดูร้อน อูมามิของครีมถั่วเขียวที่นุ่มนวล",
      price: 570,
    },
    {
      name: "Saemidori",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Saemidori จากไร่รางวัลประกวดแข่งขัน",
      tastingNotes:
        "Tasting notes: ความหอมเขียวขจีของสวนพฤกศาสตร์ เหมือนอยู่ในป่ามัทฉะ เข้มข้น อูมามิหวานอ่อน",
      price: 560,
    },
    {
      name: "Hoshino Houju",
      description: "มัทฉะเกรดพิธีชงสูงสุด รุ่น Houju จากแบรนด์ดัง Hoshinoen",
      tastingNotes:
        "Tasting notes: อูมามิหลากหลายมิติลุ่มลึก ปิดท้ายด้วยความหอมโทนถั่วนานาชนิด และความคั่วไฟอ่อน",
      price: 500,
    },
    {
      name: "Hana Asahi",
      description: "มัทฉะเกรดพิธีชงสูงสุด จาก Uejima Sourokuen สายพันธุ์ Asahi",
      tastingNotes:
        "Tasting notes: อูมามิโทนถั่วอัลมอนด์ และถั่วลิสง หอมกลิ่นดอกไม้สีขาว และเหลืองอ่อนๆ",
      price: 450,
    },
    {
      name: "Yame Yama",
      description:
        "มัทฉะเกรดพิธีชง จากเมือง Yame, Fukuoka เบลนด์จาก 4 สายพันธุ์โดย Tea master",
      tastingNotes:
        "Tasting notes: อูมามิโทนถั่วแมคคาเดเมียอบ มีความหอมกลิ่นคั่วอ่อน",
      price: 350,
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
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tastingNotes:
        "Tasting notes: แพร์ ลิ้นจี่ สตอเบอร์รี่ แครนเบอร์รี่ เมล่อน ครีม มอลต์",
      price: 300,
    },
    {
      name: "Fortmason",
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "Tasting notes: ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      price: 300,
    },
    {
      name: "Russian Caravan",
      description:
        "ชาดำกลิ่นหอมละมุนทานง่ายผ่อนคลาย ที่ผสมกันระหว่างชาอู่หลง และชาฉีเหมิน จาก Fortnum & Mason",
      tastingNotes:
        "Tasting notes: กลิ่นหอมของขนมถั่ว flapjack และเครื่องเทศนานาชนิด",
      price: 300,
    },
    {
      name: "T2 French Earl Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "Tasting notes: ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
    },
    {
      name: "Orange Angelique",
      description:
        "ชาดำกลิ่นส้ม จาก Mariage Frères ทานแล้วเพิ่มความสดชื่นระหว่างวัน",
      tastingNotes: "Tasting notes: ส้ม เปลือกผลไม้ตระกูซิตรัส",
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
      name: "Da Hong Pao (大紅袍)",
      description:
        "ชาต้าหงเผา (เสื้อคลุมสีแดง) หนึ่งในสุดยอดชา จากเขาอู๋อี๋ซาน มณฑลฝูเจี้ยนประเทศจีน แบรนด์ Wuyi Star",
      tastingNotes:
        "Tasting notes: น้ำตาลแดง กลิ่นอบไฟ ผลไม้ stone fruit มิติความแร่ธาตุซับซ้อน",
      price: 450,
    },
    {
      name: "Tie Guan Yin No.1 Award (鐵觀音)",
      description:
        "ชาเถี่ยกวนอิน (ทิกวนอิม) รางวัลที่ 1 จากเวทีแข่งขันประกวดชา Muzha",
      tastingNotes:
        "Tasting notes: ผลไม้สุก ดอกไม้หลากหลายชนิด มีชั้นรสชาติหลายชั้น ความเครื่องเทศอ่อน ทิ้งปลายรสอูมามิ ไร้ความขม",
      price: 400,
    },
    {
      name: "Award Winning Dong Fang Mei Ren (東方美人)",
      description:
        "ชารางวัลชมเชย 1 ดอกเหมย จากตำบลเอ๋อเหม่ย รสชาติละมุน สดชื่น มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้ง",
      tastingNotes: "Tasting notes: น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      price: 350,
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
      tastingNotes: "Tasting notes: คาราเมล ถั่ว หอมกลิ่นคั่ว",
      price: 300,
    },
    {
      name: "Akesson’s Madagascar Ganache",
      description:
        "ช็อกโกแลตจากแบรนด์ชั้นน้ำ Akesson’s ชนะรางวัลหลายปีซ้อน จากเกาะมาดากัสการ์",
      tastingNotes: "Tasting notes: เบอร์รีสีแดง เครื่องเทศ หอมความละมุนในปาก",
      price: 300,
    },
    {
      name: "Domori Venezuela Chuao Sorbet",
      description:
        "ช็อกโกแลต Criollo จาก Domori ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล โดยไม่ถูกบดบังด้วยรสนม",
      tastingNotes:
        "Tasting notes: รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อยจากผลไม้แห้งหลายชนิด",
      price: 300,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK",
      tastingNotes: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
  ],
};

const coffee: Flavor = {
  id: "coffee",
  categoryButtonText: "หมวด กาแฟนม Specialty",
  backgroundColorClass: "bg-coffee-bg",
  imageName: "coffee",
  name: "กาแฟนม Specialty (Single Origin and Award-Winning)",
  items: [
    {
      name: "Eugenioides",
      description:
        "กาแฟโลกเก่า ต้นกำเนิดของสายพันธุ์ Arabica เป็นแรร์ไอเทม หาทานยากที่สุดในขณะนี้",
      tastingNotes:
        "Tasting notes: ความหวานที่พิเศษซับซ้อน และนุ่มที่สุดจากน้ำตาลหลากหลายชนิด ความหอมอ่อนดอกไม้เบาๆ ",
      price: 750,
    },
    {
      name: "Panama Geisha La Esmeralda Special Lot Jaramillo",
      description:
        "กาแฟ Geisha จากไร่ดังของ Panama มีมิติของกลิ่น และรสที่ซับซ้อน ละมุน เต็มไปด้วยดอกไม้ และผลไม้หลากชนิด ทิ้งรสชาติไว้ที่คอได้อย่างยอดเยี่ยม และยาวนาน",
      tastingNotes:
        "Tasting notes: ดอกมะลิ ส้มโอแดง ส้มเบอกาม็อท เสาวรส ผลไม้ตระกูลซิตรัส",
      price: 500,
    },
    {
      name: "Panama Geisha 90+ Perci",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นคล้ายช็อกโกแลต มีรสอมเปรี้ยวที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tastingNotes: "Tasting notes: เชอร์รี่ ทับทิม ช็อกโกแลต ลูกกระวาน",
      price: 400,
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
      name: "Piedmont Hazelnut (Nocciola del Piemonte IGP)",
      description:
        "เฮเซลนัทสายพันธุ์เฉพาะถิ่นจากเมือง Piedmont แหล่งผลิตเฮเซลนัทที่ดีที่สุดของโลก หวาน มันเหมือนเนย มีกลิ่นอ่อนๆของวานิลลา และน้ำผึ้ง",
      price: 300,
    },
    {
      name: "Queensland’s Macadamia",
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
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
      name: "Australian Blood Orange Sorbet",
      description:
        "ส้มเลือดจากออสเตรเลีย หอมซับซ้อน รสชาติฉ่ำ สดชื่น มีเทสโน้ตของเบอร์รีสีแดง",
      price: 350,
    },
    {
      name: "Spanish Clementine",
      description:
        "ส้ม Clementine นำเข้าจากสเปน รสชาติเข้มขน เปรี้ยวนำ หวานตาม หอมสดชื่น",
      price: 300,
    },
    {
      name: "Baan Phaeo Ok-rong Mango",
      description:
        "มะม่วงอกร่องโบราณ จากสวนอร่ามรัตน์ บ้านแพ้ว เก็บระยะสุกปากตะกร้อ หวานหอมฟุ้งยาวนาน",
      price: 250,
    },
    {
      name: "Classic Marian Plum	",
      description:
        "มะยงชิดสายพันธุ์ทูลเกล้ามาตรฐาน มีกลิ่นหอม รสอ่อนโยน สดชื่น หวานอมเปรี้ยวเล็กๆ",
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
      name: "Chocolate Chips",
      description:
        "วานิลลา Madagascar รสชาติซับซ้อนด้วยความหอมหวาน และกลิ่นจากเครื่่องเทศ ตัดกับช็อกโกแลตชิพ Domori Chuao ที่มีความละมุน",
      price: 400,
    },
    {
      name: "Marian Plum Melba",
      description:
        "ไอศกรีมดัดแปลงจากของหวานสุดคลาสสิค Peach Melba ที่ผสมผสานรสชาติหวานหอมฉ่ำของครีมมะยงชิดวานิลลา กับความเปรี้ยวสดชื่นของซอสราสเบอรี่ ตัดด้วยความมันกรอบของอัลมอนด์จาก Sicily ",
      price: 350,
    },
    {
      name: "Jasmine Black Tea",
      description:
        "ชาเตียนหง อบดอกมะลิสดแท้ 3 รอบ ด้วยกรรมวิธีแบบดั้งเดิม นำเข้าจากประเทศจีน หาทานยาก",
      price: 300,
    },
    {
      name: "Nakamura Tokichi Hojicha",
      description:
        "โฮจิฉะจาก Nakamura Tokichi ประวัติศาสตร์ยาวนานกว่า 160 ปี ใช้ก้านชาอบแห้ง รสชาติความหอมแตกต่างจากการใช้ผง",
      price: 300,
      tastingNotes:
        "Tasting notes: ความหอมคั่วโดดเด่นเตะจมูกยาวนาน รสชาติมิติซับซ้อน ทิ้งท้ายด้วยความสะอาดของชา",
    },
    {
      name: "ชาไทย Special blend",
      description:
        "เบลนด์ชาไทยสูตรพิเศษ ผสานชาไทยกลิ่นหอมไม้อบไฟ กับยอดชาอัสสัมเก็บมือที่ใช้กรรมวิธีผลิตแบบชาไทย",
      price: 180,
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

export const tasteOfTeaFlavors: Flavor[] = [
  matcha,
  westernTea,
  easternTea,
  chocolate,
  coffee,
  classic,
  fruits,
  special,
];

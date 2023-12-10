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
        "กาแฟ Geisha จากไร่ดังของ Panama มีมิติของกลิ่น และรสที่ซับซ้อน ละมุน เต็มไปด้วยดอกไม้ และผลไม้หลากชนิด ทิ้งรสชาติไว้ที่คอได้อย่างยอดเยี่ยม และยาวนาน",
      tasteNote:
        "Taste note: ดอกมะลิ ส้มโอแดง ส้มเบอกาม็อท เสาวรส ผลไม้ตระกูลซิตรัส",
      price: 450,
    },
    {
      name: "Guatemala Jalapa Cup of Excellence Rank 8",
      description:
        "กาแฟ Geisha จากประเทศ Guatemala ไร่ Montaña Helada รางวัลประกวดจากหน่วยงาน Alliance For Coffee Excellence ผ่านการคัดเลือกตั้งแต่ต้นน้ำถึงปลายน้ำ และ Cupping จากผู้เชี่ยวชาญ",
      tasteNote:
        "Taste note: เสาวรส สัปปะรด วานิลลา เชอร์รี พลัม บลูเบอร์รี คาราเมลน้ำตาลทรายแดง เรดเคอร์แรนท์",
      price: 400,
    },
    {
      name: "Panama Geisha 90+ Lotus",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นผลไม้รสเปรี้ยวสุก ที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tasteNote:
        "Taste note: มะม่วงสุก มะขามเปียก ลาเวนเดอร์ แบล็กเบอร์รี บรั่นดี พลัม ยี่หร่าฝรั่ง",
      price: 400,
    },
    {
      name: "Panama Geisha 90+ Perci",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นคล้ายช็อคโกแลต มีรสอมเปรี้ยวที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tasteNote: "Taste note: เชอร์รี่ ทับทิม ช็อกโกแลต ลูกกระวาน",
      price: 400,
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "กาแฟ Blue Mountain จาก Jamaica ที่คนไทยคุ้นเคย รสคลาสสิก มีความหอมจากกลิ่นคั่วชัด รสสัมผัสปลายที่ละเอียด นุ่ม ละมุน",
      tasteNote: "Taste note: คาราเมล ช็อกโกแลต ถั่ว",
      price: 400,
    },
    {
      name: "Hawaii Kona Extra Fancy",
      description:
        "กาแฟที่ปลูกบริเวณ Kona coffee belt ใน Hawaii รสชาติคลาสสิก รสสัมผัสปลายเนียน และมีรสอมเปรี้ยวเล็กๆของเปลือกผลไม้ซิตรัส",
      tasteNote: "Taste note: คาราเมลน้ำตาลทรายแดง เปลือกผลไม้ซิตรัส",
      price: 400,
    },
    {
      name: "Columbia Geisha El Roble LOD#6",
      description:
        "กาแฟ Geisha จากประเทศ Columbia ไร่ El Roble มีจุดเด่นของดินในฟาร์มเป็นดินร่วนปนทราย ล้อมด้วยป่าบนภูเขาสูงและแหล่งน้ำธรรมชาติ",
      tasteNote: "Taste note: พีชโซดา ลิ้นจี่ องุ่นเขียวมัสแคท เยลลี่",
      price: 400,
    },
    {
      name: "Columbia Rum Barrel Finca San Jose",
      description:
        "กาแฟจากไร่แรกที่คิดค้นวิธีการหมักบ่มในถังเหล้ารัมที่ใช้แล้ว ทำให้กาแฟมีกลิ่นเหล้ารัมที่หอมอย่างโดดเด่น",
      tasteNote: "Taste note: เชอร์รี รัม วานิลลา ทิรามิสุ",
      price: 350,
    },
    {
      name: "Panama Geisha Volcan Baru",
      description:
        "กาแฟ Geisha ปลูกบริเวณภูเขาไฟ Volcan Baru ใน Panama ทำให้กาแฟได้รับแร่ธาตุจากภูเขาไฟ",
      tasteNote: "Taste note: ดอกมะลิ แอพริคอต ส้มเบอกาม็อท พีช ชาอู่หลง",
      price: 300,
    },
    {
      name: "Costa Rica Geisha Dota El Diosa",
      description:
        "กาแฟ Geisha จากประเทศ Costa Rica มีความครีมมี่ บอดี้แน่น คงรสชาติตอนท้ายยาวนาน",
      tasteNote:
        "Taste note: เมเปิ้ลไซรัป แอปเปิ้ลเขียว แครนเบอร์รี ชาดำ อัลมอนด์",
      price: 250,
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
      tasteNote:
        "Taste note: ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      price: 600,
    },
    {
      name: "Zuisho Shogyokuen",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tasteNote:
        "Taste note: ถั่วลันเตา คาวทะเลสาหร่าย มะม่วง มะพร้าวเล็กๆ ความอูมามิพุ่งพล่าน และค้างอยู่ในปากยาวนาน",
      price: 590,
    },
    {
      name: "Honzu Asahi",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi จากไร่รางวัลประกวดแข่งขัน ใช้วิธีคลุมใบชาพรางแบบ Honzu 6 สัปดาห์",
      tasteNote:
        "Taste note: สาหร่าย ผลไม้แห้ง อูมามิหนัก และแน่น ทิ้งรสชาติเค็มแบบสุภาพ",
      price: 560,
    },
    {
      name: "Saemidori",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Saemidori จากไร่รางวัลประกวดแข่งขัน",
      tasteNote:
        "Taste note: เปลือกซิตรัส สัมผัสฝาดบางๆ ให้กลิ่นน้ำทะเล รสสัมผัสนุ่ม ครีมมี่ หวาน นวลคล้ายขนมปังธัญพืช",
      price: 550,
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
      description: "ชาดำเรือธง กลิ่นผลไม้ และดอกไม้นานาชนิด จาก Mariage Frères",
      tasteNote:
        "Taste note: แพร์ ลิ้นจี่ สตอเบอร์รี่ แครนเบอร์รี่ เมล่อน ครีม มอลต์",
      price: 300,
    },
    {
      name: "Fortnum Mason Countess Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ที่เพิ่มลูกเล่นด้วยกลิ่นของผลไม้ตระกูลซิตรัส",
      tasteNote: "Taste note: ผลไม้ตระกูลซิตรัส",
      price: 300,
    },
    {
      name: "Salpicon de Fruitas",
      description:
        "ชาดำกลิ่นผลไม้ ดัดแปลงจากเครื่องดื่มดั้งเดิมของ Colombia ผสมโดย Mariage Frères",
      tasteNote: "Taste note: สับปะรดสุก ค็อกเทลเมืองร้อน ช็อกโกแลต",
      price: 300,
    },
    {
      name: "Christmas Tea Pleine Lune",
      description: "ชาดำกลิ่นอายของเทศกาลคริสต์มาส ผสมโดย Mariage Frères",
      tasteNote: "Taste note: อัลมอนด์ อบเชย เครื่องเทศหวานนานาชนิด",
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
      name: "Classic Dong Fang Mei Ren (東方美人)",
      description:
        "ชาอู่หลงจากไต้หวัน รสชาติละมุน สดชื่น ที่ผ่านการหมักบ่มตั้งแต่บนต้น ทำให้มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้ง",
      tasteNote: "Taste note: น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      price: 350,
    },
    {
      name: "Jin Xuan Tie Guan Yin (鐵觀音)",
      description:
        "ชาอู่หลงจากไต้หวัน ผ่านกรรมวิธีการหมักบ่มชาแบบดั้งเดิม ทำให้ได้รสชาที่เข้ม หอมคล้ายกลิ่นของผลไม้ และดอกไม้อบ",
      tasteNote: "Taste note: กลิ่นย่าง กลิ่นดอกไม้ ผลไม้อบ คาราเมล",
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
      tasteNote: "Taste note: คาราเมล ถั่ว กลิ่นคั่ว",
      price: 300,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Ganache",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK",
      tasteNote: "Taste note: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Domori Chuao Chocolate Sorbet",
      description:
        "ช็อกโกแลต Criollo จาก Domori ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล โดยไม่ถูกบดบังด้วยรสนม",
      tasteNote:
        "Taste note: รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อยจากผลไม้แห้งหลายชนิด",
      price: 300,
    },
    {
      name: "Guatemala Chocolate Sorbet",
      description:
        "ช็อกโกแลต Criollo จาก Duffy’s ผู้ผลิตชั้นนำของอังกฤษ เมล็ดปลูกในประเทศ Guatemala รสชาติผลไม้ซับซ้อน อมเปรี้ยว",
      tasteNote:
        "Taste note: เรดเคอร์แรนท์ เปลือกส้ม ทอฟฟี น้ำผึ้ง องุ่นรสเปรี้ยว",
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
      description:
        "มะพร้าวแกง จากไร่พงศ์พระยา ทับสะแก ปีนเก็บคัดลูกแก่ได้ที่ คั้นน้ำกะทิสดด้วยวิธีสกัดเย็น",
      price: 250,
    },
    {
      name: "Bang Khla Coconut Sorbet",
      description:
        "มะพร้าวน้ำหอม สวนลุงแดง บางคล้า ฉะเชิงเทรา หอมหวานกลิ่นใบเตยเอกลักษณ์ ไม่เหมือนพื้นที่อื่น",
      price: 250,
    },
    {
      name: "Australian Blood Orange Sorbet",
      description:
        "ส้มเลือดจากออสเตรเลีย หอมซับซ้อน รสชาติฉ่ำ สดชื่น มีเทสโน้ตของเบอร์รีสีแดง",
      price: 300,
    },
    {
      name: "Baan Phaeo Ok-rong Mango",
      description:
        "มะม่วงอกร่องโบราณ จากสวนอร่ามรัตน์ บ้านแพ้ว เก็บระยะสุกปากตะกร้อ หวานหอมฟุ้งยาวนาน",
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
      name: "Tahitian Raiatea Black Pearl Grand Cru Vanilla",
      description:
        "วานิลลาสายพันธุ์ Tahitian จากเกาะ Raiatea มีความหอมจากกลิ่นของเครื่องเทศ ทำให้แตกต่างจากวานิลลาสายพันธุ์อื่น",
      tasteNote:
        "Taste note: วานิลลาที่มีกลิ่นเครื่องเทศ ขนมปังขิง อบเชย และดอกไม้นานาๆ ชนิด",
      price: 350,
    },
    {
      name: "Guadeloupe Pompona Schiede Vanilla",
      description:
        "วานิลลาสายพันธุ์ Pompona ผลผลิตเพียงแค่ปีละ 300 กรัม หายากที่สุดในตลาด พื้นที่เพาะปลูกจากเกาะ Guadaloupe",
      tasteNote:
        "Taste note: เครื่องเทศ ชะเอมเทศ น้ำส้มสายชูหมักบัลซามิก กลิ่นดอกไม้ที่ซับซ้อน และทิ้งกลิ่นยาวนาน",
      price: 800,
    },
    {
      name: "Queensland Macadamia",
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
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
      name: "Black Coconut Ash",
      description:
        "ดัดแปลงจากขนมเปียกปูนโบราณ ทำจากกาบมะพร้าวเผา เบสกะทิสดทับสะแก ยกระดับความเป็นขนมไทย",
      price: 300,
    },
    {
      name: "Chocolate Hazelnuts",
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

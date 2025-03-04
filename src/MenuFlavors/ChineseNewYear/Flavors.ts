import { Flavor } from "../types";

const easternTea: Flavor = {
  id: "eastern-tea",
  categoryButtonText: "หมวด ชานมตะวันออก",
  backgroundColorClass: "bg-eastern-tea-bg",
  imageName: "eastern-tea",
  name: "ชานมตะวันออก (เกรดประกวดแข่งขัน)",
  items: [
    {
      name: "Dong Fang Mei Ren Competition Grade (東方美人)",
      description:
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
      tastingNotes:
        "ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรส",
      price: 700,
    },
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
      name: "Tie Guan Yin Silver Medal (鐵觀音)",
      description:
        "ชาเถี่ยกวนอิน (ทิกวนอิม) รางวัลเหรียญเงิน จากปรมาจารย์ชาจังเจ๋อเจีย",
      tastingNotes:
        "Tasting notes: ผลไม้สุก ดอกไม้ อบไฟกลาง บอดี้แน่นแต่ยังคงความละมุน และซับซ้อนของรสชาติ",
      price: 350,
    },
    {
      name: "Jin Jun Mei (金駿眉)",
      description:
        "ชาจินจวิ้นเหมย (อาชาคิ้วทอง) จากอู่อี๋ซาน มณฑลฝูเจี้ยน ประเทศจีน",
      tastingNotes:
        "Tasting notes: คาราเมล น้ำผึ้งป่า เกสรดอกไม้อ่อน อบไฟอ่อน หอมละมุน",
      price: 350,
    },
    {
      name: "Award Winning Dong Fang Mei Ren (東方美人)",
      description:
        "ชารางวัลชมเชย 1 ดอกเหมย จากตำบลเอ๋อเหม่ย รสชาติละมุน สดชื่น มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้ง",
      tastingNotes: "Tasting notes: น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      price: 350,
    },
    {
      name: "Tie Luo Han (铁罗汉)	",
      description:
        "ชาเถี่ยหลัวฮั่น (อรหันต์เหล็ก) หนึ่งใน 4 สุดยอดชาจากอู่อี๋ซาน ผู้ผลิตชั้นนำแบรนด์ Sea Dyke",
      tastingNotes: "Tasting notes: ช็อกโกแลตนมคั่วถ่าน ทาร์ตขนม หินแร่นาๆชนิด",
      price: 300,
    },
    {
      name: "Shui Jin Gui (水金龟)	",
      description:
        "ชาสุ่ยจินกุย (เต่าน้ำทอง) หนึ่งใน 4 สุดยอดชาจากอู่อี๋ซาน ผู้ผลิตชั้นนำแบรนด์ชั้นนำ Sea Dyke",
      tastingNotes: "Tasting notes: ดาร์คช็อกโกแลต ผลไม้อบแห้ง หินแร่นาๆชนิด",
      price: 300,
    },
    {
      name: "Jin Xuan Tie Guan Yin (金萱鐵觀音)	",
      description:
        "ชาเถี่ยกวนอิน ผ่านกรรมวิธีการหมักบ่มชาแบบดั้งเดิม ทำให้ได้รสชาที่เข้ม หอมคล้ายกลิ่นของผลไม้ และดอกไม้อบ",
      tastingNotes: "Tasting notes: กลิ่นย่าง กลิ่นดอกไม้ ผลไม้อบ คาราเมล",
      price: 300,
    },
    {
      name: "Heavy-fired Tie Guan Yin (重火鐵觀音)",
      description:
        "ชาเถี่ยกวนอิน ผ่านกรรมวิธีอบไฟแรง ทำให้ได้รสชาที่เข้มข้น กลิ่นคั่วไฟ",
      tastingNotes: "Tasting notes: กลิ่นย่างเข้มข้น กลิ่นดอกไม้ และผลไม้แห้ง",
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
      name: "Classic Marian Plum	",
      description:
        "มะยงชิดสายพันธุ์ทูลเกล้ามาตรฐาน มีกลิ่นหอม รสอ่อนโยน สดชื่น หวานอมเปรี้ยวเล็กๆ",
      price: 250,
    },
    {
      name: "Baan Phaeo Ok-rong Mango",
      description:
        "มะม่วงอกร่องโบราณ จากสวนอร่ามรัตน์ บ้านแพ้ว เก็บระยะสุกปากตะกร้อ หวานหอมฟุ้งยาวนาน",
      price: 250,
    },
    {
      name: "Honey Mandarin",
      description:
        "ส้มสายน้ำผึ้ง จาก อ.ฝาง จ.เชียงใหม่ ช่วงต้นปีเป็นฤดูกาลที่ส้มสายน้ำผึ้งอร่อยที่สุด",
      price: 250,
    },
    {
      name: "Tasmanian Cherry",
      description:
        "เชอร์รีจากเกาะ Tasmania กลิ่นหอมหวาน รสชาติเข้ม มีความหวาน และเปรี้ยวที่ลงตัว",
      price: 300,
    },
    {
      name: "Okimi Strawberry",
      description:
        "สตรอเบอร์รี Okimi รสละมุน หวานฉ่ำ กลิ่นหอมโทนดอกไม้เฉพาะตัว",
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
      name: "Zuisho Shogyokuen",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tastingNotes:
        "Tasting notes: ถั่วลันเตา คาวทะเลสาหร่าย มะม่วง มะพร้าวเล็กๆ ความอูมามิพุ่งพล่าน และค้างอยู่ในปากยาวนาน",
      price: 590,
    },
    {
      name: "Tsujiki Asahi",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi จากไร่รางวัลประกวดแข่งขันรางวัลที่ 1 Tsujiki",
      tastingNotes:
        "Tasting notes: สาหร่ายสด ความหวานจากซุปปลาต้นจรดปลาย อูมามิสว่าง",
      price: 570,
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
      name: "Guatemala Jalapa Cup of Excellence Rank 8",
      description:
        "กาแฟ Geisha จากประเทศ Guatemala ไร่ Montaña Helada รางวัลประกวดจากหน่วยงาน Alliance For Coffee Excellence ผ่านการคัดเลือกตั้งแต่ต้นน้ำถึงปลายน้ำ และ Cupping จากผู้เชี่ยวชาญ",
      tastingNotes:
        "Tasting notes: เสาวรส สัปปะรด วานิลลา เชอร์รี พลัม บลูเบอร์รี คาราเมลน้ำตาลทรายแดง เรดเคอร์แรนท์",
      price: 400,
    },
    {
      name: "Panama Geisha 90+ Lotus",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นผลไม้รสเปรี้ยวสุก ที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tastingNotes:
        "Tasting notes: มะม่วงสุก มะขามเปียก ลาเวนเดอร์ แบล็กเบอร์รี บรั่นดี พลัม ยี่หร่าฝรั่ง",
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
      name: "Kenyan Macadamia",
      description:
        "ถั่วแมคาเดเมียปลูกแบบออแกนิก นำเข้าจาก Kenya ใช้ต้นที่เป็นสายพันธุ์ดั้งเดิมจากออสเตรเลีย หอมหวานมันเนย",
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
      name: "Orange Montblanc",
      description:
        "ขนมดัดแปลงจากเชฟ Dominique Ansel ทำจากเกาลัดคั่วพิเศษ ราดด้วยซอสส้มรุ่นพิเศษโดย Fortnum & Mason",
      price: 300,
    },
    {
      name: "มะม่วงอกร่อง ชามะลิ",
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสมผสานรสชาติละมุนของชามะลิแท้ ทำจากชาเตียนหง อบด้วยดอกมะลิสด 3 รอบ เข้ากับความหอมหวานของมะม่วงอกร่องบ้านแพ้ว",
      price: 300,
    },
    {
      name: "Marian Plum Melba",
      description:
        "ไอศกรีมดัดแปลงจากของหวานสุดคลาสสิค Peach Melba ที่ผสมผสานรสชาติหวานหอมฉ่ำของครีมมะยงชิดวานิลลา กับความเปรี้ยวสดชื่นของซอสราสเบอรี่ ตัดด้วยความมันกรอบของอัลมอนด์จาก Sicily ",
      price: 350,
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

export const chineseNewYearFlavors: Flavor[] = [
  easternTea,
  fruits,
  matcha,
  coffee,
  classic,
  special,
];

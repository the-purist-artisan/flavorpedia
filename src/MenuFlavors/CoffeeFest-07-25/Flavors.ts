import { Flavor } from "../types";

// Use this web to do conversion from csv and put it in parsedFlavours:
// https://csvjson.com/csv2json
const parsedFlavours = [];

const coffee: Flavor = {
  id: "coffee",
  categoryButtonText: "หมวด กาแฟนม Specialty",
  backgroundColorClass: "bg-coffee-bg",
  imageName: "coffee",
  name: "กาแฟนม Specialty (Single Origin and Award-Winning)",
  items: [
    {
      name: "Panama Geisha Canas Verdes Auction Lot 2025",
      price: 850,
      description: "กาแฟ Geisha จากไร่ Canas Verdes รุ่นประมูล",
      tastingNotes:
        "ดอกมะลิ ดอกกาแฟ เลม่อน พีชขาว เชอร์รี่ ลูกอมผลไม้ สัมผัสนุ่มลื่น ทิ้งรสชาติยาวนาน",
    },
    {
      name: "Panama Geisha 90+ Yuzo",
      price: 800,
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus รุ่นพิเศษ ผลิตด้วยกรรมวิธีหมักที่ให้รสแบบสาเกชั้นสูง",
      tastingNotes:
        "ขนมปังน้ำผึ้งซีเดอร์ ยูสุสาเก เปรี้ยวหวานซับซ้อน ไร้ความขมฝาด",
    },
    {
      name: "Colombia Geisha Mikava 2025",
      price: 700,
      description: "กาแฟ Geisha เกรดสูงสุดชนะรางวัลจากประเทศโคลอมเบีย",
      tastingNotes:
        "สตอเบอร์รี่ ดอกมะลิ แอปริคอต พีช น้ำผึ้ง แคนตาลูป เชอร์รี่",
    },
    {
      name: "Colombia Laurina Competition Serieis Coffee",
      price: 600,
      description:
        "กาแฟสายพันธุ์พิเศษ ปริมาณคาเฟอีนต่ำกว่ากาแฟทั่วไปเกือบ 5 เท่าตัว มีความนุ่มนวลเป็นพิเศษ",
      tastingNotes:
        "ราสเบอร์รี่ พีช มะเฟือง น้ำผึ้ง สัปปะรด ดอกไม้ สัมผัสนุ่มนวลมาก",
    },
    {
      name: "Ethiopia Adorsi Taste of Harvest (TOH) Rank 1",
      price: 400,
      description:
        "กาแฟระดับแชมเปี้ยนจากเอธิโอเปีย Heirloom รางวัลประกวดอันดับ 1",
      tastingNotes:
        "น้ำผึ้งป่า พีช ดอกมะลิ เบอร์กามอต ราสเบอร์รี่ ดอกแมกโนเลีย เมเปิ้ลไซรัป",
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
      name: "Savéol Gariguette Strawberry Sorbet",
      price: 450,
      description:
        "สตรอว์เบอร์รีจากฝรั่งเศส สายพันธุ์เก่าแก่ แต่มีความพรีเมี่ยมได้ที่รับการยอมรับจากเชฟมิชลินทั่วโลก มีกลิ่นหอมดอกไม้ซิตรัส รสเปรี้ยวนำหวาน ทิ้งท้ายกลิ่นหอมยาวนาน",
    },
    {
      name: "Hikawa Hakuho Fukuoka Yame Peach",
      price: 450,
      description: "พีชขาวพรีเมี่ยมต้นฤดูกาล หวานลุุ่มลึก กลิ่นหอมฉ่ำสดชื่น",
    },
    {
      name: "Amalfi Lemon Sorbet",
      price: 400,
      description:
        "เลม่อนอันดับหนึ่ง จากเมือง Amalfi สามารถทานได้ทั้งเนื้อและเปลือก มีความหอมฟุ้งโทนทะเลสดชื่น",
    },
    {
      name: "Pricia Apricot",
      price: 400,
      description:
        "สุดยอดแอปริคอตจากฝรั่งเศส มีความเปรี้ยวสดชื่นสูง กลิ่นหอมคล้ายพลัมสีแดงและเบอร์รี่",
    },
    {
      name: "Golden Blush Nectarine Sorbet",
      price: 350,
      description:
        "เนคทารีนตัวท้อปจากอิตาลี กลิ่นหอมโทนน้ำผึ้งและเกสรน้ำหวานดอกไม้ รสชาติสดชื่นฉ่ำน้ำชุ่มคอ",
    },
    {
      name: "Wye Valley Kordia Cherry Sorbet",
      price: 350,
      description:
        "เชอร์รี่จากฟาร์มท้อปของอังกฤษ สายพันธุ์ Kordia มีความหวานเปรี้ยวพอดี ทิ้งรสชาติท้ายยาวนาน",
    },
    {
      name: "Imam Pasand Mango",
      price: 350,
      description:
        "สุดยอดมะม่วงอินเดียจากรัฐ ทมิฬนาฑู กลิ่นหอมแรง ความเป็น tropical ซับซ้อน เสาวรส ซิตรัส โยเกิร์ต ตะไคร้ สัปปะรดกวน เครื่องเทศ สัมผัสลื่นเหมือนเนยละลาย",
    },
    {
      name: "Seville Golden Peach Sorbet",
      price: 300,
      description:
        "พีชสีทองจากสเปน รสชาติหวานเข้ม นําความเปรี้ยว มีกลิ่นหอมละมุน",
    },
    {
      name: "Carabao Mango",
      price: 300,
      description:
        "มะม่วงคาราบาว สายพันธุ์อันดับหนึ่งจากฟิลิปินส์ มีความหวานสูงที่สุด บอดี้แน่น หอมผลไม้โทนสับปะรด",
    },
    {
      name: "Sein Ta Lone ( စိန်တလုံး သရက္သီး ) Mango Sorbet",
      price: 300,
      description:
        "มะม่วง เส่งตะโลง เพชรน้ำหนึ่งของพม่า กลิ่นหอมฟุ้งแรงเอกลักษณ์ มีกลิ่นฝรั่งสุก ส้ม ดอกไม้เย็นและหวานเฉพาะตัว",
    },
    {
      name: "Mahachanok Mango",
      price: 250,
      description:
        "มะม่วงมหาชนก จากจังหวัดกาฬสินธุ์ กลิ่นหอมเปรี้ยวอมหวานเอกลักษณ์โทนทาร์ตไซรัปซิตรัสเรซิ่น",
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
      name: "Zuisho",
      price: 650,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากแบรนด์ Shogyokuen จัดหาโดย Chaseki",
      tastingNotes:
        "ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
    },
    {
      name: "Uji Hikari Gokasho",
      price: 600,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแหล่งปลูก Gokasho จัดหาโดย MTCH",
      tastingNotes:
        "ความ Ooika ทะเลที่สดชื่น ถั่วแระญี่ปุ่น ข้าวโพดอ่อน และ สัมผัสนุ่มเหมือนเนย กลิ่นเกสรดอกไม้",
    },
    {
      name: "Yuki-Maboroshi",
      price: 500,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จาก Yame ชื่อหิมะมายา จัดหาโดย Osha Ocha",
      tastingNotes:
        "เนยถั่วลิสง avocado สุดครีมมี่ ข้าวโพดอ่อน กลิ่นคั่วควันไม้หอม ดอกไม้อ่อนสีเหลืองและขาว ทิ้งท้ายรสชาติงดงามดุจหิมะเหมันต์กลางหุบเขา",
    },
    {
      name: "Kirari-31",
      price: 450,
      description:
        "มัทฉะเกรดพิธีสายพันธ์ุคิราริ-31 (Kirari-31) จากเมืองอุจิ จังหวัดเกียวโต ผลิตผ่านวิธีพรางแสงแบบ 2 ชั้นด้วยม่านตาข่าย จัดหาโดย MTCH",
      tastingNotes: "คอมบุดาชิ เต้าหู้ บรีชีส เนย วานิลลา",
    },
    {
      name: "Komorebi Shincha Matcha",
      price: 450,
      description:
        "ชินฉะ หรือ ชาใหม่ จากรอบการเก็บเกี่ยวครั้งแรกในเดือนพฤษภาคม 2025 เบลนด์จากชาสามสายพันธุ์ Yabukita, Okumidori และ Samidori จัดหาโดย MTCH",
      tastingNotes: "นมผง ขนมเมอแรงค์ เค้กอัลมอนด์ วานิลลา กลิ่นหอมยาวนาน",
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
      name: "Award-Winning Dong Ding",
      price: 500,
      description:
        "ต้งติ่งอู่หลง จาก Lugu Township Farmers’ Association เป็นชาหมักเลเวลสูง ได้รับรางวัลที่ 1",
      tastingNotes:
        "กลิ่นหอมฟุ้งของไม้หลากชนิดรมควัน มีกลิ่นหวานของแยมผลไม้ที่ผัดจนงวดกระทะ ตามด้วยความเป็นช็อกโกแลตเฮเซลนัท จบท้ายด้วยความ malty โดยรวมสัมผัสสดชื่น หวานชุ่มคอ",
    },
    {
      name: "Dan Cong Qi Zong",
      price: 400,
      description: "ชาตันฉงฉีจ่ง อบไฟกลาง ชาป่าจากอู่อี๋ซาน",
      tastingNotes:
        "กลิ่นหอมของผลไม้เมืองร้อนสุกงอม น้ำชามีรสหวานติดปลายเข้มข้น ให้ความรู้สึกทิ้งท้ายผ่อนคลายและสงบ",
    },
    {
      name: "T9 Strong Rhyme Tie Guan Yin",
      price: 350,
      description: "",
      tastingNotes: "",
    },
    {
      name: "Lupicia Oolong Mango",
      price: 350,
      description: "ชาจากแบรนด์ Lupicia ใบชาเกรด Super Premium",
      tastingNotes: "กลิ่นของมะม่วงสุกอ่อนๆ สดชื่นเบาสบาย",
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
      price: 350,
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tastingNotes: "แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมลอน ครีม มอลต์",
    },
    {
      name: "Countess Grey",
      price: 300,
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ที่เพิ่มลูกเล่นด้วยกลิ่นของผลไม้ตระกูลซิตรัส",
      tastingNotes:
        "น้ำมันเบอกาม็อทสุดคลาสสิกสไตล์ผู้ดีอังกฤษ ปิดท้ายด้วยเปลือกส้ม",
    },
    {
      name: "T2 French Earl Grey",
      price: 300,
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
    },
    {
      name: "Rosevear Grapefruit Tea",
      price: 300,
      description: "ชาดำพรีเมี่ยมจาก",
      tastingNotes: "กลิ่นหอมของเนื้อและเปลือกเกรปฟรุ๊ตสีแดง-ชมพู",
    },
  ],
};

const classic: Flavor = {
  id: "classic",
  categoryButtonText: "หมวด รสคลาสสิก",
  backgroundColorClass: "bg-classic-bg",
  textColorClass: "text-classic-text",
  imageName: "classic",
  name: "รสชาติคลาสสิกของ The Purist",
  items: [
    {
      name: "Tahitian Vaniila Grand Cru Taha'a 2025 (Gold Medal)",
      price: 450,
      description:
        "สุดยอดวานิลลาสายพันธุ์ Tahitian จากเกาะ Taha'a มีกลิ่นหอมละมุนและความสดชื่นของผลไม้ ผสานด้วยโน้ตหอมอ่อนโยนจากดอกไม้ที่แสนประณีต",
    },
    {
      name: "Bronte Pistachio D.O.P.",
      price: 350,
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
    },
    {
      name: "Queensland Macadamia",
      price: 300,
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
    },
    {
      name: "Turkish Pistachio",
      price: 300,
      description:
        "พิสตาชีโอจากตุรกี สายพันธุ์ Antep สุดพรีเมี่ยม มีความหวานนำมัน กลิ่นเขียวสดคลาสสิกเอกลักษณ์",
    },
    {
      name: "Piedmont Hazelnut I.G.P.",
      price: 300,
      description:
        "เฮเซลนัทสายพันธุ์เฉพาะถิ่นจากเมือง Piedmont แหล่งผลิตเฮเซลนัทที่ดีที่สุดของโลก หวาน มันเหมือนเนย มีกลิ่นอ่อนๆ ของวานิลลา และน้ำผึ้ง",
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
      name: "Chuao D.O.C.C",
      price: 400,
      description:
        "สุดยอดช็อกโกแลต Criollo จาก Aroko ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวลซับซ้อน",
      tastingNotes:
        "แบล็กเคอร์แรนต์ สตอเบอรี่ บลูเบอร์รี่ พลัม มะม่วง ชะเอมเทศ รสชาติทิ้งท้ายซับซ้อน สวยงาม",
    },
    {
      name: "A.Morin Esmeralda",
      price: 350,
      description:
        "ช็อกโกแลตสายพันธุ์ Arriba จาก Ecuador โดยแบรนด์ท้อปของฝรั่งเศส A. Morin ขึ้นชื่อเรื่องความหอม Exotic",
      tastingNotes: "กาแฟ ดอกไม้สีขาวและเหลือง วอลนัทแห้ง เครื่องเทศ",
    },
    {
      name: "Agnes and Pierre Vietnam",
      price: 350,
      description: "",
      tastingNotes: "เลม่อน มะนาว น้ำผึ้ง เครื่องเทศอ่อน",
    },
    {
      name: "Chocolate Tree Belize Black",
      price: 350,
      description: "",
      tastingNotes: "ลูกฟิก เรซิ่น ผลไม้อบ ทิ้งท้ายความเป็นแร่ธาตุ",
    },
    {
      name: "Chocolate Ganache Ivory Coast",
      price: 300,
      description: "",
      tastingNotes: "คาราเมล ถั่ว หอมกลิ่นคั่ว",
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
      name: "Ispahan",
      price: 450,
      description:
        "รสชาติพิเศษ หาทานได้ยากไม่กี่ครั้งต่อปี มี 2 เลเยอร์ของรสชาติ ทำจากลิ้นจี่สดสายพันธุ์กิมเจ็ง ราสเบอร์รี่สายพันธุ์ Berry Jewel และกุหลาบอังกฤษ ถอดและตีความใหม่จากขนมมาการองสุดคลาสสิคของ Pierre Hermes",
    },
    {
      name: "Mint Stracctiatella",
      price: 400,
      description:
        "ชื่อสามัญ มิ้นท์ช็อกชิพ รสชาติพิเศษที่หาทานได้ยาก ทำจากมิ้นต์ 5 สายพันธุ์ ให้ dynamic ของความหอมมิ้นท์หลากหลายมิติ และราดด้วยช็อกโกแลต shards จาก Amedei No.9 ที่เพิ่มความซับซ้อนของรสชาติตลอดการเดินทาง",
    },
    {
      name: "Blueberry Yogurt",
      price: 350,
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสบลูเบอร์รี No.1 สายพันธุ์พิเศษ Sekoya Crunch ใหม่ล่าสุดปฏิวัติวงการบลูเบอร์รี่",
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
      tastingNotes: "Tasting notes:",
      price: 0,
    },
  ],
};

export const tcf0725: Flavor[] = [
  coffee,
  fruits,
  matcha,
  easternTea,
  westernTea,
  classic,
  chocolate,
  special,
];

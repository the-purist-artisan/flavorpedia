import { Flavor, SOLDOUT_TYPE } from "../types";

// Use this web to do conversion from csv and put it in parsedFlavours:
// https://csvjson.com/csv2json
const parsedFlavours = [];

const matcha: Flavor = {
  id: "matcha",
  categoryButtonText: "หมวด มัทฉะพิธีการ",
  backgroundColorClass: "bg-matcha-bg",
  imageName: "matcha",
  name: "มัทฉะพิธีการ (เกรดพิธีชง/มรดกญี่ปุ่น)",
  items: [
    {
      name: "Narino Premium",
      price: 690,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien",
      tastingNotes:
        "Tasting notes: ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
    },
    {
      name: "Tsujiki Uji Hikari",
      price: 600,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากไร่ชนะรางวัลตลอดกาล Tsujiki",
      tastingNotes:
        "Tasting notes: ความหอม Aromatic ของใบไม้ฤดูร้อน อูมามิของครีมถั่วเขียวที่นุ่มนวล",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Honzu Asahi (2024 Competition)",
      price: 600,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi กรรมวิธีผลิตด้วยการพรางแสงด้วยโครงไม้ไผ่และฟางข้าว จัดหาโดย MTCH",
      tastingNotes:
        "Tasting notes: สาหร่ายทะเลย่างแบบผู้ดี เนยอบ องุ่นขาว ลูกฟิก และผลไม้แห้ง",
    },
    {
      name: "Zuisho Shogyokuen",
      price: 590,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tastingNotes:
        "Tasting notes: ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Tsujiki Original Blend",
      price: 580,
      description: "มัทฉะเกรดพิธีชงรุ่นพิเศษจากไร่ Tsujiki",
      tastingNotes:
        "Tasting notes: ใบไม้สด สาหร่ายอ่อน ดอกไม้ขาว ธัญพืช ครีมข้าวโพด อูมามิกลมกล่อมมาก",
    },
    {
      name: "Yukibana",
      price: 560,
      description: "มัทฉะเกรดพิธีชงรุ่นพิเศษจาก Yame",
      tastingNotes:
        "Tasting notes: ไม้สนรมควัน และดอกไม้หลากสี เนยถั่วหอม เมลอน",
    },
    {
      name: "Kenjo Hatsumukashi Kanbayashi",
      price: 550,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จาก Mitsuboshien Kanbayashi 3 แต้มแดง",
      tastingNotes:
        "Tasting notes: สาหร่ายเขียวเข้มแสดงความเป็นเอกลักษณ์ของเกียวโต",
    },
    {
      name: "Yame No Sora",
      price: 500,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากไร่ชาเก่าแก่อายุกว่า 300 ปี ณ เมือง Yame จัดหาโดย PAGUcha",
      tastingNotes:
        "Tasting notes: หอมมันถั่วแมคาเดเมียคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
    },
    {
      name: "Hana Asahi",
      price: 450,
      description: "มัทฉะเกรดพิธีชงสูงสุด จาก Uejima Sourokuen สายพันธุ์ Asahi",
      tastingNotes:
        "Tasting notes: อูมามิโทนถั่วอัลมอนด์ และถั่วลิสง หอมกลิ่นดอกไม้สีขาว และเหลืองอ่อนๆ",
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
      tastingNotes:
        "Tasting notes: แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมลอน ครีม มอลต์",
    },
    {
      name: "T2 French Earl Grey",
      price: 300,
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "Tasting notes: ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
    },
    {
      name: "Fortmason",
      price: 300,
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "Tasting notes: ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
    },
    {
      name: "Nil Noir",
      price: 300,
      description: "ชาดำรุ่นพิเศษจาก Mariage Freres กลิ่นผลไม้และซิตรัส",
      tastingNotes: "Tasting notes: น้ำผึ้ง มะนาว ตะไคร้ มอลต์ พีช",
    },
    {
      name: "Montagne D’OR",
      price: 300,
      description:
        "ชาดำเบลนด์สุดหอมรุ่น Exclusive จาก Mariage Frères แรงบันดาลใจจากพื้นที่สามเหลี่ยมทองคำ",
      tastingNotes: "Tasting notes: ลิ้นจี่ กุหลาบ เสาวรส",
    },
    {
      name: "Lupicia Piccolo",
      price: 300,
      description: "ชา Rooibos ไม่มีคาเฟอีน รสชาติน่ารัก เด็กเล็กทานได้",
      tastingNotes: "Tasting notes: น้ำผึ้ง แอปริคอต เบอร์รี่หวาน",
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
      name: "Dong Fang Mei Ren Competition Grade (東方美人) Summer Harvest",
      price: 800,
      description:
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลฤดูร้อนจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
      tastingNotes:
        "Tasting notes: ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรสของชามีความซับซ้อน มีความฟงฝู่ 豐富 จัดเต็ม ไม่แบน มีหลากหลายมิติ รสชาติทิ้งท้ายยาวนาน",
    },
    {
      name: "Tie Guan Yin No.1 Award (鐵觀音)",
      price: 550,
      description:
        "ชาเถี่ยกวนอิน (ทิกวนอิม) รางวัลที่ 1 จากเวทีแข่งขันประกวดชา Muzha",
      tastingNotes:
        "Tasting notes: ผลไม้สุก ดอกไม้หลากหลายชนิด มีชั้นรสชาติหลายชั้น ความเครื่องเทศอ่อน ทิ้งปลายรสอูมามิ ไร้ความขม",
    },
    {
      name: "Tie Guan Yin Fo Shou (佛手铁观音)",
      price: 450,
      description:
        "ชาเถี่ยวกวนอิน พันธุ์โฝวโส่ว หรือ “ฝ่ามือพระพุทธเจ้า” สายพันธุ์โบราณ หาทานได้ยากยิ่ง",
      tastingNotes:
        "Tasting notes: กลิ่นหอมโทนส้มสดหวาน ส้มหอมแห้ง มีกลิ่นอายของเครื่องเทศฤดูร้อน",
    },
    {
      name: "Zheng Shan Xiao Zhong Award-winning (正山小种)",
      price: 400,
      description: "เหยียนฉาเลื่องชื่อ เกรดชนะรางวัล ชาป่าจาก Wuyi Shan",
      tastingNotes:
        "Tasting notes: ไม้ โกโก้ คาราเมล กลิ่นหอมซับซ้อนแร่ธาตุและผลไม้แห้ง",
    },
    {
      name: "Shui Jin Gui (水金龟) Blue",
      price: 400,
      description:
        "ชาสุ่ยจินกุย (เต่าน้ำทอง) หนึ่งใน 4 สุดยอดชาจากอู่อี๋ซาน ผู้ผลิตชั้นนำแบรนด์ชั้นนำ Sea Dyke",
      tastingNotes: "Tasting notes: ดาร์คช็อกโกแลต ผลไม้อบแห้ง หินแร่นาๆชนิด",
    },
    {
      name: "Khiri Black Tea",
      price: 400,
      description:
        "ชารางวัล Grand Gold Prize จากงาน WORLD GREEN TEA CONTEST 2021 โดยไร่วังพุดตาล",
      tastingNotes: "Tasting notes: พีช น้ำผึ้ง หอมนวล ยาวนาน",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Jasmine Dian Hong (茉莉滇红)",
      price: 350,
      description:
        "ชาแดงเตียนหง อบดอกมะลิสดแท้ 3 รอบด้วยกรรมวิธีแบบดั้งเดิม หาทานยาก จัดหาโดย Deng Deng",
      tastingNotes: "Tasting notes: ดอกมะลิสีน้ำตาล คาราเมล ช็อกโกแลต ถั่ว",
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
      name: "Agnès & Pierre Guasare Chocolate Sorbet",
      price: 350,
      description:
        "ช็อกโกแลตสายพันธุ์ Guasare พันธุ์โบราณ เป็นมารดาของ Criollo ทั้งหมด",
      tastingNotes:
        "Tasting notes: อัลมอนด์ คาราเมล มอลต์ ลูกฟิก ครีม หอมซับซ้อน",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Sorbet",
      price: 350,
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK",
      tastingNotes: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
    },
    {
      name: "Fire Tree Solomon Islands Chocolate Sorbet",
      price: 350,
      description:
        "ช็อกโกแลตรางวัลประกวดรางวัล จากแบรนด์ Firetree เมล็ดปลูกที่หมู่เกาะ Solomon Islands",
      tastingNotes:
        "Tasting notes: น้ำมันมะกอก ครีม เม็ดมะม่วงหิมพานต์ กาแฟ ผลไม้หลากชนิด",
    },
    {
      name: "Domori Venezuela Chuao Sorbet",
      price: 350,
      description:
        "ช็อกโกแลต Criollo จาก Domori ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล โดยไม่ถูกบดบังด้วยรสนม",
      tastingNotes:
        "Tasting notes: รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อยจากผลไม้แห้งหลายชนิด",
    },
    {
      name: "Domori Venezuela Classic Ocumare Ganache",
      price: 300,
      description:
        "ช็อกโกแลตจาก Domori ผู้ผลิตช็อกโกแลตสายพันธุ์ Criollo ชั้นนำ สายพันธุ์ย่อย Ocumare รสชาติคลาสสิกเข้ากับนม",
      tastingNotes: "Tasting notes: คาราเมล ถั่ว หอมกลิ่นคั่ว",
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
      name: "Bolivia Geisha",
      price: 500,
      description:
        "เมล็ดกาแฟ Geisha รุ่นพิเศษ Yungas Caranavi Finca Los Rodriguez Lot.17",
      tastingNotes:
        "Tasting notes: ดอกไม้ขาว บลูเบอร์รี ลูกอม  เปลือกเลม่อน มะม่วง มะขาม ดอกส้มสีขาว",
    },
    {
      name: "Ethiopia Gori Geisha",
      price: 450,
      description:
        "เมล็ดกาแฟ Geisha รุ่นพิเศษ Gesha Village Shaya Gori Gesha Lot 24/040",
      tastingNotes:
        "Tasting notes: พีช ลิ้นจี่ ดอกส้มสีขาว เบอร์กามอต ดอกไม้สีขาว",
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
      name: "Guadeloupe Pompona Schiede Vanilla",
      price: 800,
      description:
        "วานิลลาสายพันธุ์ Pompona ผลผลิตเพียงแค่ปีละ 300 กรัม หายากที่สุดในตลาด พื้นที่เพาะปลูกจากเกาะ Guadeloupe",
      tastingNotes:
        "Tasting notes: เครื่องเทศ ชะเอมเทศ น้ำส้มสายชูหมักบัลซามิก กลิ่นดอกไม้ที่ซับซ้อน และทิ้งกลิ่นยาวนาน",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Mexican Veracruz Vanilla",
      price: 400,
      description:
        "วานิลลาสายพันธุ์พิเศษจากเม็กซิโก จุดกําเนิดวานิลลายุคอารยธรรม Aztec",
      tastingNotes:
        "Tasting notes: โกโก้ ขนม เครื่องเทศ เบอร์รี กลิ่นวานิลลาสุดคลาสสิก เข้มข้น",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Bronte Pistachio D.O.P.",
      price: 300,
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
    },
    {
      name: "Gaziantep Turkish Pistachio",
      price: 300,
      description:
        "พิสตาชีโอจากตุรกี สายพันธุ์ Antep สุดพรีเมี่ยม มีความหวานนำมัน กลิ่นเขียวสดคลาสสิกเอกลักษณ์",
    },
    {
      name: "Piedmont Hazelnut (Nocciola del Piemonte IGP)",
      price: 300,
      description:
        "เฮเซลนัทสายพันธุ์เฉพาะถิ่นจากเมือง Piedmont แหล่งผลิตเฮเซลนัทที่ดีที่สุดของโลก หวาน มันเหมือนเนย มีกลิ่นอ่อนๆของวานิลลา และน้ำผึ้ง",
    },
    {
      name: "Queensland’s Macadamia",
      price: 300,
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
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
      name: "Musang King Durian",
      price: 500,
      description:
        "ฉายา Hermes แห่งวงการทุเรียน รสชาติหวานมันเข้มข้น ดุดัน Full-bodied คาราเมลถั่ว หาทานยาก และราคาสูงกว่าทุเรียนทั่วไปกว่า 2 เท่าตัว จากเขาสมิง ตราด",
    },
    {
      name: "Migaki-Ichigo Strawberry",
      price: 450,
      description:
        "สตอเบอร์รียุคใหม่ของญี่ปุ่น กลิ่นหอมหวานพุ่งพล่าน อมเปรี้ยวเล็กน้อย สดชื่นยาวนาน",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Crown Musk Melon",
      price: 400,
      description:
        "ฉายามงกุฏแห่งเมลอนทั้งปวง จาก Shizuoka รสชาติหวานหอมกลิ่นเหมือน Deer musk ทิ้งท้ายสดชื่นยาวนาน",
    },
    {
      name: "Menton Lemon IGP",
      price: 400,
      description:
        "เลมอนสายพันธุ์พิเศษจาก French Riviera กลิ่นหอม Aromatic เข้มข้นสะใจ เป็นที่ต้องการสูงของเชฟมิชลินในยุโรป",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Strawberry Blush Blood Orange",
      price: 400,
      description: "ส้มเลือดรุ่นพิเศษ หอมกลิ่นสตอเบอร์รี่ ปลูกที่เกาะ Sicily",
    },
    {
      name: "Flavor-king Plums",
      price: 400,
      description: "พลัมรุ่นพิเศษ กลิ่นหอมเข้มข้นทรงพลัง เต็มไปด้วยรสชาติ",
    },
    {
      name: "Calabria Red Kiwi",
      price: 350,
      description:
        "กีวีพันธุ์หายาก เนื้อเขียวแกนสีแดง กลิ่นหอมเบอร์รีและผลไม้ tropical",
    },
    {
      name: "Magic Star Apple",
      price: 350,
      description:
        "แอปเปิลสายพันธุ์ใหม่จากอังกฤษ หอมฉ่ำ รสชาติครบทุกรสของความเป็นแอปเปิล",
    },
    {
      name: "Phet Dam Rong Jackfruit",
      price: 300,
      description:
        "ขนุนเพชรดํารง สายพันธุ์ยุคใหม่ หวานหอมกรอบ เนื้อสุกไม่เละ กลิ่นเอกลัษณ์ขนุนชัดเจน",
    },
    {
      name: "Tropic-Beauty Yellow Peach",
      price: 300,
      description:
        "พีชเหลืองสายพันธุ์ที่หอมฉ่ำจับต้องง่าย ปลูกที่ยอดดอยขุนแจ๋ จังหวัดเชียงใหม่",
    },
    {
      name: "Toonklao Mayong Chid",
      price: 250,
      description:
        "มะยงชิดสายพันธุ์ทูลเกล้ามาตรฐาน มีกลิ่นหอม รสอ่อนโยน สดชื่น หวานอมเปรี้ยวเล็กๆ",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Baan Phaeo Ok-rong Mango",
      price: 250,
      description:
        "มะม่วงอกร่องโบราณ จากสวนอร่ามรัตน์ บ้านแพ้ว เก็บระยะสุกปากตะกร้อ หวานหอมฟุ้งยาวนาน",
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
      name: "Baron Bigod Tart",
      price: 500,
      description:
        "ชีสรางวัลเหรียญเงิน World Cheese Award และได้รับการโหวตเป็นชีสสไตล์ Brie ที่ดีที่สุดในสหราชอาณาจักร ทำจากนมวัวสายพันธุ์ Montbeliarde ดัดแปลงเป็นขนมแทรกด้วย แป้งทาร์ตสุดพิเศษ",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Ceremonial Matcha Coconut Sorbet",
      price: 450,
      description:
        "ดัดแปลงจากเครื่องดื่มสายสุขภาพ มัทฉะน้ำมะพร้าว อัดแน่นด้วยมัทฉะเกรดพิธีชงจาก PAGUcha นัวมันหอมหวานธรรมชาติด้วยน้ำมะพร้าวสวนลุงแดง",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Milli On The Fire Macadamia",
      price: 450,
      description:
        "รสชาติฟิวชั่นพิเศษจากความชอบของร้าน Milli TeaSpace ที่ต้องการให้มีมัทฉะพิธีชงและถั่วแมคาเดเมียแบบจัดเต็ม ทะลุความ Nutty matcha",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Fresh Mint Stracciatella (Mint Choc Chips)",
      price: 400,
      description:
        "รสชาติที่หาทานได้ยาก ทำจากใบมิ้นต์สด 5 สายพันธุ์ และราดด้วยช็อกโกแลต shards จากช็อกโกแลต Domori สายพันธุ์ Guasare Criollo",
    },
    {
      name: "Blueberry Yogurt",
      price: 350,
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสบลูเบอร์รี No.1 สายพันธุ์พิเศษจากประเทศโมรอคโค",
    },
    {
      name: "Chocolate Earl Grey",
      price: 350,
      description:
        "รสชาติพิเศษเบสช็อกโกแลตกานาช หอมกลิ่น Infused ด้วยชาเอิร์ลเกรย์ ดอกไม้",
    },
    {
      name: "Original Peach Melba",
      price: 350,
      description:
        "ดัดแปลงจากขนมสุดคลาสสิก Peach Melba ของ Auguste Escoffier ประกอบด้วย ครีมพีช ซอสราสเบอร์รี และอัลมอนด์ Marcona คั่ว",
    },
    {
      name: "Yasmine Mango",
      price: 350,
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสมผสานรสชาติละมุนของชามะลิแท้ ทำจากชาเตียนหง อบด้วยดอกมะลิสด 3 รอบ เข้ากับความหอมหวานของมะม่วงตามฤดูกาล",
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

export const tastOfTea032025: Flavor[] = [
  matcha,
  westernTea,
  easternTea,
  chocolate,
  coffee,
  classic,
  fruits,
  special,
];

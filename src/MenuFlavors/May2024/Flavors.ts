import { Flavor } from "../types";

const durians: Flavor = {
  id: "durians",
  categoryButtonText: "หมวด ทุเรียนสายพันธุ์พิเศษ",
  backgroundColorClass: "bg-durians-bg",
  textColorClass: "text-durians-text",
  imageName: "durians",
  name: "ทุเรียนสายพันธุ์พิเศษ",
  items: [
    {
      name: "กบชายน้ำ",
      description:
        "เจ้าชายแห่งกบ ราคาสามารถพุ่งสูงถึงลูกละ 1 แสนบาท มันหวานแบบ peanut butter หอมดอกไม้ผลไม้บางๆ อร่อยลงตัว ครบเครื่องทุกมิติ จากสวนประตูจันท์และสวนพี่มิตร",
      price: 450,
    },
    {
      name: "หลินลับแล",
      description:
        "เป็นที่ชื่นชอบของเซียนชิมทุเรียนทั่วประเทศ อันดับหนึ่งเรื่องความหวาน คาราเมลน้ำตาลปี๊ป หอมดอกไม้อ่อน จากสวนบ้านหลินลับแล เจ้าของต้นพันธุ์ชนะรางวัลจากปู่หลิน ปันลาด ปี พ.ศ.2520",
      price: 450,
    },
    {
      name: "ทับทิมทอง",
      description:
        "สายพันธุ์ที่โด่งดังของปราจีนบุรี เข้มข้นดุดัน มันถั่วอัลมอนด์ หวานปลายยาวนาน จากสวนที่หนองจวง คัดเลือกโดย อ.กอบกฤต",
      price: 450,
    },
    {
      name: "ก้านยาวทรงหวด",
      description:
        "สุดยอดสายพันธุ์ทุเรียนไทย ครองใจทุกวัย หอมมันนำหวาน ทานง่ายกลิ่น delicate กลมกล่อมมาก จากสวนเฮียลิ้ม",
      price: 400,
      isSoldOut: true,
    },
    {
      name: "กบพิกุล",
      description:
        "กบพิกุล ราชาแห่งทุเรียนตระกูลกบ สีจำปาสด รสชาติ elegant ผู้ดี หอมมัน มีจริตดอกไม้ปนความมันถั่ว จากสวน ต.เต้ย",
      price: 400,
    },
    {
      name: "DAP กบแม่เฒ่า หลินลับแล",
      description:
        "หวานนำมัน หอมกลิ่นถั่วและดอกไม้อ่อน มีความนัวสูง ผลผลิตจากลิขสิทธิ์สวนประตูจันท์",
      price: 400,
    },
    {
      name: "กบสุวรรณ",
      description:
        "กบผู้ดี กลิ่นหอมธัญพืช มันนำหวานเบา ทานสบาย จัดหาโดยคุณปิติพล foodie ทุเรียนและกาแฟแห่งระยอง",
      price: 400,
    },
    {
      name: "ชายมังคุด",
      description:
        "หอมดอกไม้สวย กุหลาบขาวอ่อน มะลิ ไลแล็ค หวานมันพอดี จากสวน My Garden ผู้สรรหาทุเรียนคุณภาพจากทั่วไทย",
      price: 400,
    },
    {
      name: "ทองกมล",
      description:
        "หอมจริต Jo Malone แพร์อังกฤษ ลิลลี่ หวานมันพอดี จากสวนลุงเสริม แชมป์ประกวดระดับตำนานจากระยอง",
      price: 400,
    },
    {
      name: "หลงลับแล",
      description:
        "หอมกลิ่นดอกไม้โทนเย็น มิ้นท์ หวานอ่อนสดชื่น จากบ้านหลินลับแล",
      price: 400,
    },
    {
      name: "กบทองคำ คมบาง",
      description:
        "เข้นข้นมันถั่วเม็ดมะม่วงหิมพานต์ มีจริตไวน์แดง หวานหอมชัดเจน จากสวนจันทวิสูตร สวนระดับเซียนของจันทบุรี",
      price: 350,
    },
    {
      name: "เพียงพร",
      description:
        "คัสตาร์ดครีมละเอียด มิลค์ช็อกโกแลต เข้มข้น original สายพันธุ์จากยายเพียงพรผู้ให้กำเนิด ผลผลิตจากสวนจันทวิสูตร",
      price: 350,
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
      name: "Bronte Pistachio D.O.P.",
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      price: 300,
      isSoldOut: true,
    },
    {
      name: "Tahitian Vanilla Grand Cru Taha’a",
      description:
        "วานิลลาสายพันธุ์ Tahitian จากเกาะ Taha’a บริเวณ French Polynesia ",
      tasteNote:
        "Taste note: กลิ่นหอมอ่อนและนุ่มนวลของลูกพรุน ชะเอมเทศ และช็อกโกแลต",
      price: 350,
      isSoldOut: true,
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
      tasteNote: "Taste note: คาราเมล ถั่ว หอมกลิ่นคั่ว",
      price: 300,
    },
    {
      name: "Pacari Nacional Arriba Ganache",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก Pacari รสชาติ Exotic ลูกเล่นเยอะ",
      tasteNote: "Taste note: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK ในรูปแบบของ Sorbet มีรสชาติจัดจ้าน โลดโผน",
      tasteNote: "Taste note: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
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
      tasteNote:
        "Taste note: ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
      price: 590,
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
      name: "Tie Guan Yin Fo Shou (佛手铁观音)",
      description:
        "ชาเถี่ยวกวนอิน พันธุ์โฝวโส่ว หรือ “ฝ่ามือพระพุทธเจ้า” สายพันธุ์โบราณ หาทานได้ยากยิ่ง",
      tasteNote:
        "Taste note: กลิ่นหอมโทนส้มแห้ง มีกลิ่นอายของเครื่องเทศฤดูร้อน",
      price: 350,
      isSoldOut: true,
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
      name: "Montagne D’OR",
      description:
        "ชาดำเบลนด์สุดหอมรุ่น Exclusive จาก Mariage Frères แรงบันดาลใจจากพื้นที่สามเหลี่ยมทองคำ",
      tasteNote: "Taste note: ลิ้นจี่ กุหลาบ เสาวรส",
      price: 300,
      isSoldOut: true,
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
      name: "Panama Geisha La Esmeralda Cañas Verdes Special Lot",
      description:
        "กาแฟ Geisha รุ่น Special มีมิติของกลิ่น และรสที่ซับซ้อน ละมุน เต็มไปด้วยดอกไม้ และผลไม้หลากชนิด",
      tasteNote: "Taste note: ดอกมะลิ ส้มเบอกาม็อท ผลไม้ตระกูลซิตรัส",
      price: 700,
    },
    {
      name: "Ethiopia Bench Maji G1 Geisha",
      description:
        "กาแฟ Geisha จากทางตะวันตกเฉียงใต้ของ Ethiopia โดดเด่นเรื่องกลิ่นโทนดอกไม้ ทานง่าย",
      tasteNote: "ดอกไม้หวาน และ grapefruit เบาสบาย",
      price: 350,
      isSoldOut: true,
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
      name: "Mangosteen from 100-year-old Trees",
      description:
        "มังคุดต้นร้อยปี จากจันทบุรี รสชาติระเบิดมีจริตของดอกไม้ที่หาได้ยากในมังคุดทั่วไป",
      price: 250,
    },
    {
      name: "Mahachanok Mango Sorbet",
      description:
        "มะม่วงมหาชนก จากจังหวัดกาฬสินธุ์ กลิ่นหอมเปรี้ยวอมหวานเอกลักษณ์โทนทาร์ตไซรัปซิตรัสเรซิ่น",
      price: 250,
    },
    {
      name: "Tropi-Berta Yellow Peach Sorbet",
      description:
        "พีชเหลืองสายพันธุ์ที่หอมฉ่ำจับต้องง่าย ปลูกที่ยอดดอยขุนแจ๋ จังหวัดเชียงใหม่",
      price: 250,
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

export const may2024Flavours: Flavor[] = [
  durians,
  classic,
  chocolate,
  matcha,
  easternTea,
  westernTea,
  coffee,
  fruits,
];

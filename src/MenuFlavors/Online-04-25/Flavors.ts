import { Flavor, SOLDOUT_TYPE } from "../types";

// Use this web to do conversion from csv and put it in parsedFlavours:
// https://csvjson.com/csv2json
const parsedFlavours = [];

const fruits: Flavor = {
  id: "fruits",
  categoryButtonText: "หมวด ผลไม้ตามฤดูกาล",
  backgroundColorClass: "bg-fruits-bg",
  imageName: "fruits",
  name: "ผลไม้ตามฤดูกาล",
  items: [
    {
      name: "มังคุด 100 ปี (Seasonal Peak)",
      price: 300,
      description:
        "สุดยอดมังคุด อายุต้น 150 ปี จากจันทบุรี หวานสดชื่นเข้มข้น อมเปรี้ยวเล็กน้อย มีกลิ่นดอกไม้เฉพาะตัว",
    },
    {
      name: "ลิ้นจี่ค่อม ลำเจียก (Seaosnal Peak)",
      price: 300,
      description:
        "ลิ้นจี่ค่อมโบราณ หวานจัด หอมกลิ่นองุ่นและไวน์หวาน เปรี้ยวเล็กน้อย ผลิตภัณฑ์สิ่งบ่งชี้ทางภูมิศาสตร์จากอัมพวา สมุทรสงคราม",
    },
    {
      name: "ฝรั่งแดงอโยธยา 3 (Perennial)",
      price: 300,
      description: "ฝรั่งสายพันธุ์พิเศษ หวาน หอมกลิ่นหอมเบอร์รี่ ไวน์แดง องุ่น",
    },
    {
      name: "มะยงชิด พันธุ์เพชรกลางดง (Ending)",
      price: 250,
      description:
        "มะยงชิดสายพันธุ์เพชรกลางดง มีกลิ่นหอม รสอ่อนโยน สดชื่น หวานอมเปรี้ยวเล็กๆ",
    },
    {
      name: "มะม่วง อัลฟอนโซ Alphonso (Seasonal Peak)",
      price: 350,
      description:
        "ราชามะม่วงของอินเดีย ผู้ส่งออกมะม่วงอันดับหนึ่งของโลก รสชาติหวานเข้มข้น เนื้อแน่นและเนียน มีความฉ่ำของผลไม้ tropical น้ำผึ้ง วานิลลา",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "มะม่วง เคซ่าร์ Kesar (Seasonal Peak)",
      price: 350,
      description:
        "ราชินีมะม่วงของอินเดีย รสชาติเปรี้ยวน้ำหวาน มีความเปรี้ยวหลากหลายมิติ ลงท้ายด้วยกลิ่นดอกไม้สีเหลืองสดชื่น",
    },
    {
      name: "มะม่วง เส่งตะโลง (Seasonal Peak)",
      price: 300,
      description:
        "มะม่วง เส่งตะโลง Diamond Solitaire เพชรน้ำหนึ่งของพม่า กลิ่นหอมฟุ้งแรงเอกลักษณ์ ฝรั่ง ส้ม สัปปะรด มีความดอกไม้เย็นและหวานลงตัวไม่เหมือนใคร",
    },
    {
      name: "มะม่วง ไข่พระอาทิตย์ (Seasonal Peak)",
      price: 300,
      description:
        "มะม่วงไข่พระอาทิตย์ สายพันธุ์ที่แพงที่สุดในญี่ปุ่น หวานหอมสดชื่น มีปลายกลิ่นกะทิและสัปปะรด",
    },
    {
      name: "มะม่วง กุ้ยเฟย (Seasonal Peak)",
      price: 300,
      description:
        "มะม่วงตัวท้อปจากไต้หวัน ฉายา Red Gold Dragon รสชาติหอมหวานสดชื่นทานง่ายและคล่อง",
    },
    {
      name: "มะม่วง อกร่อง (Seasonal Peak)",
      price: 300,
      description:
        "มะม่วงอกร่องโบราณ จากสวนอร่ามรัตน์ บ้านแพ้ว เก็บระยะสุกปากตะกร้อ หวานหอมฟุ้งยาวนาน",
    },
    {
      name: "มะม่วง ทองดำ (Seasonal Peak)",
      price: 300,
      description:
        "มะม่วงทองดำ สายพันธุ์โบราณหาทานได้ยากยิ่ง กลิ่นหอมแบบป่าดงดิบเขตร้อน มีความมันและเปรี้ยวตัด",
    },
    {
      name: "มะม่วง ทอมมี่ Tommy Atkins หอม (Seasonal Peak)",
      price: 300,
      description:
        "มะม่วงทอมมี่ เพาะเมล็ด กลิ่นหอมซับซ้อน ของผลไม้โซนร้อน มี aftertaste ของความ sweet and savoury",
    },
    {
      name: "ทุเรียนพันธุ์ มูซันคิง (Ending)",
      price: 500,
      description:
        "ฉายา Hermes แห่งวงการทุเรียน รสชาติหวานมันเข้มข้น ดุดัน Full-bodied คาราเมลถั่ว หาทานยาก และราคาสูงกว่าทุเรียนทั่วไปกว่า 2 เท่าตัว จากสวนจันทวิสูตร",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "ทุเรียนพันธุ์ หนามดำ (Seasonal Peak)",
      price: 500,
      description:
        "หนามดำ สายพันธุ์ดังจากมาเลเซีย รสชาติซับซ้อน คัสตาร์ด คาราเมลดาร์คช็อกโกแลตปลายเป็นไวน์",
    },
    {
      name: "ทุเรียนพันธุ์ DAP 5in1 (Seasonal Peak)",
      price: 450,
      description:
        "ทุเรียนจากเทคนิคผสมเกสรลิขสิทธิ์สวนประตูจันท์ แม่มูซันคิง x พ่อพันธุ์ จันท์ 2 จันท์10 กบพิกุล กบสุวรรณ และ เหลืองวินัย รสชาติพิเศษหวานหอมแบบซับซ้อนไม่เหมือนใคร",
    },
    {
      name: "ทุเรียนพันธุ์ ก้านยาวทรงหวด (Seasonal Peak)",
      price: 450,
      description:
        "ทุเรียนสายพันธุ์ยอดนิยมของคนไทย ต้นตำหรับจากนนทบุรี มีกลิ่นหอมละมุน หวานมันพอดี ทานง่าย จากสวนเฮียลิ้ม",
    },
    {
      name: "ทุเรียนพันธุ์ จันทบุรี 10 (Seasonal Peak)",
      price: 400,
      description:
        "จันทบุรี 10 สวนรัตนชาติ รวมความนกหยิบและชะนี มีความครีมมี่สูง หอมนวลลงตัว ตามด้วยโน้ตผลไม้หลากหลายชนิด",
    },
    {
      name: "ทุเรียนพันธุ์ เม็ดในยายปรางค์ (Seasonal Peak)",
      price: 400,
      description:
        "เม็ดในยายปรางค์ สายพันธุ์พื้นเมืองของนนทบุรี หอมหวานโทนน้ำอ้อย กลิ่นดอกไม้ป่า สัมผัสเบาสบาย",
    },
    {
      name: "ทุเรียนพันธุ์หลงลับแล (Early)",
      price: 400,
      description: "หลงลับแล จากบ้านหลินลับแล หอมกลิ่นดอกไม้และมิ้นต์",
    },
    {
      name: "Calabrian Red Kiwi (Ending)",
      price: 350,
      description:
        "กีวีพันธุ์หายาก เนื้อเขียวแกนสีแดง กลิ่นหอมเบอร์รีและผลไม้ tropical",
    },
    {
      name: "Flavor-King Plum (Ending)",
      price: 400,
      description: "พลัมรุ่นพิเศษ กลิ่นหอมเข้มข้นทรงพลัง เต็มไปด้วยรสชาติ",
    },
    {
      name: "King Sorrento Lemon Sorbet (Perennial)",
      price: 400,
      description:
        "เลม่อนจากคาบสมุทร Sorrento ฝาแฝดของ Amalfi Lemon สามารถทานได้ทั้งเนื้อและเปลือก มีความหอมฟุ้งโทนทะเลสดชื่น",
    },
    {
      name: "Tropic Beauty Yellow Peach Sorbet (Ending)",
      price: 300,
      description:
        "พีชเหลืองสายพันธุ์ที่หอมฉ่ำจับต้องง่าย ปลูกที่ยอดดอยขุนแจ๋ จังหวัดเชียงใหม่",
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
      name: "Narino Competition",
      price: 650,
      tastingNotes:
        "ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อย",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien จัดหาโดย MTCH",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Sakata Matabei Asahi",
      price: 600,
      tastingNotes: "สาหร่ายนุ่มนวล ดอกไม้สีขาว อูมามิละมุน ยาวนาน",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi จากแบรนด์ประกวดรางวัล Sakata Matabei เกรดเก็บมือ",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Yame No.1 Matcha",
      price: 490,
      tastingNotes: "ไม้รมควัน ถั่ว ปลาย่าง ช็อกโกแลต สาหร่ายทะเล",
      description: "มัทฉะพิธีชง จากเมืองยาเมะ จัดหาโดย Osha Ocha",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
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
      name: "Dong Fang Mei Ren",
      price: 800,
      tastingNotes:
        "ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรสของชามีความซับซ้อน มีความฟงฝู่ 豐富 จัดเต็ม ไม่แบน มีหลากหลายมิติ รสชาติทิ้งท้ายยาวนาน",
      description:
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลฤดูร้อนจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
    },
    {
      name: "Tie Guan Yin Fo Shou",
      price: 400,
      tastingNotes:
        "กลิ่นหอมโทนส้มสดหวาน ส้มหอมแห้ง มีกลิ่นอายของเครื่องเทศฤดูร้อน",
      description:
        "ชาเถี่ยวกวนอิน พันธุ์โฝวโส่ว หรือ “ฝ่ามือพระพุทธเจ้า” สายพันธุ์โบราณ หาทานได้ยากยิ่ง",
    },
    {
      name: "Jasmine Dian Hong",
      price: 350,
      tastingNotes: "ดอกมะลิสีน้ำตาล คาราเมล ช็อกโกแลต ถั่ว",
      description:
        "ชาแดงเตียนหง อบดอกมะลิสดแท้ 3 รอบด้วยกรรมวิธีแบบดั้งเดิม หาทานยาก จัดหาโดย Deng Deng",
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
      tastingNotes: "แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมลอน ครีม มอลต์",
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
    },
    {
      name: "Fortmason",
      price: 300,
      tastingNotes: "ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
    },
    {
      name: "T2 French Earl Grey",
      price: 300,
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
    },
    {
      name: "Montagne D'OR",
      price: 300,
      tastingNotes: "ลิ้นจี่ กุหลาบ เสาวรส",
      description:
        "ชาดำเบลนด์สุดหอมรุ่น Exclusive จาก Mariage Frères แรงบันดาลใจจากพื้นที่สามเหลี่ยมทองคำ",
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
      name: "Queensland Vanilla",
      price: 400,
      tastingNotes: "รัม ช็อกโกแลต เครื่องเทศ กลิ่นหอม เข้มข้น",
      description: "วานิลลาสายพันธุ์พิเศษจาก Queensland",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Queensland Macadamia",
      price: 300,
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
    },
    {
      name: "Bronte Pistachio DOP",
      price: 300,
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
    },
    {
      name: "Turkish Pistachio",
      price: 300,
      description:
        "พิสตาชีโอจากตุรกี สายพันธุ์ Antep สุดพรีเมี่ยม มีความหวานนำมัน กลิ่นเขียวสดคลาสสิกเอกลักษณ์",
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
      name: "Chocolate Ganache",
      price: 300,
      tastingNotes: "คาราเมล ถั่ว หอมกลิ่นคั่ว",
      description:
        "ช็อกโกแลตจาก Domori ผู้ผลิตช็อกโกแลตสายพันธุ์ Criollo ชั้นนำ สายพันธุ์ย่อย Ocumare รสชาติคลาสสิกเข้ากับนม",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Chocolate Chuao Sorbet",
      price: 350,
      tastingNotes:
        "รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อยจากผลไม้แห้งหลายชนิด",
      description:
        "ช็อกโกแลต Criollo จาก Domori ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล โดยไม่ถูกบดบังด้วยรสนม",
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
      name: "Ethiopia Gesha Village",
      price: 450,
      tastingNotes: "ดอกมะลิ เกรปฟรุ๊ต ดอกส้มสีขาว เบอร์กามอต ดอกไม้สีขาว",
      description: "เมล็ดกาแฟ Geisha รุ่นพิเศษ Gesha Village Lot 24/050",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
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
      name: "Blueberry Yogurt",
      price: 350,
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสบลูเบอร์รี No.1 สายพันธุ์พิเศษจากประเทศโมรอคโค",
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

export const online042025: Flavor[] = [
  fruits,
  matcha,
  easternTea,
  westernTea,
  classic,
  chocolate,
  coffee,
  special,
];

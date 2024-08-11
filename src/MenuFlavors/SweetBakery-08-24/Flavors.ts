import { Flavor } from "../types";

const chocolate: Flavor = {
  id: "chocolate",
  categoryButtonText: "หมวด ช็อกโกแลต",
  backgroundColorClass: "bg-chocolate-bg",
  imageName: "chocolate",
  name: "ช็อกโกแลตกานาช และช็อกโกแลตซอร์เบ (เกรดประกวดแข่งขัน)",
  items: [
    {
      name: "Feitoria Solomon Islands Chocolate Sorbet",
      description:
        "ช็อกโกแลตรางวัลประกวดรางวัลเหรียญทอง จากแบรนด์ Feitoria เมล็ดปลูกที่หมู่เกาะ Solomon Islands",
      tasteNote:
        "Tasting notes: น้ำมันมะกอก ครีม เม็ดมะม่วงหิมพานต์ กาแฟ ผลไม้หลากชนิด",
      price: 350,
    },
    {
      name: "Amedei Chuao Chocolate Sorbet",
      description:
        "ช็อกโกแลตจากแบรนด์ระดับโลก Amedei of Tuscany สายพันธุ์หายาก Chuao จากเวเนซุเอลา",
      tasteNote: "Tasting notes: ผลไม้เบอร์รี่สีแดง น้ำผึ้ง กลิ่นลงท้ายซับซ้อน",
      price: 350,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK",
      tasteNote: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Charlee and Friends Kham Pheang Phet Sorbet",
      description:
        "ช็อกโกแลตรางวัลประกวดเหรียญทองแดงจาก Charlee and Friends เบลนด์ระหว่างจ.กำแพงเพชรและตาก",
      tasteNote: "Tasting notes: พลัม กล้วย อัลมอนด์ ไม้หอม ใบไม้แห้ง",
      price: 300,
    },
    {
      name: "Charlee and Friends Kham Pheang Phet Ganache",
      description:
        "ช็อกโกแลตรางวัลประกวดเหรียญทองแดงจาก Charlee and Friends เบลนด์ระหว่างจ.กำแพงเพชรและตาก",
      tasteNote: "Tasting notes: คาราเมล พลัม กล้วย อัลมอนด์",
      price: 300,
    },
    {
      name: "Pacari Nacional Arriba Ganache",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก Pacari",
      tasteNote: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Willies Rio Caribe Chocolate Ganache",
      description:
        "ช็อกโกแลตจากแบรนด์ Willies ทานง่ายและเข้าใจง่าย ในรูปแบบช็อกโกแลตนม ไม่ติดความเปรี้ยว",
      tasteNote: "Tasting notes: ถั่วอบ คาราเมล หอมกลิ่น full-bodied cacao",
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
      name: "Panama Geisha La Esmeralda Special Lot Cañas Verdes Farm",
      description:
        "กาแฟ Geisha เกรดพิเศษจากไร่ Hacienda La Esmeralda ครองแชมป์รางวัลนับไม่ถ้วน",
      tasteNote:
        "Tasting notes: มะลิ ดอกกาแฟ เลม่อน เชอร์รี ลูกอมลูกกวาด ทิ้งรสชาติหอมนุ่มและยาวนาน",
      price: 700,
    },
    {
      name: "Panama Geisha 90+ Perci",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นคล้ายช็อกโกแลต มีรสอมเปรี้ยวที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tasteNote: "Tasting notes: เชอร์รี ทับทิม ช็อกโกแลต ลูกกระวาน",
      price: 550,
    },
    {
      name: "Panama Geisha 90+ Lycello",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus ตัวแรกที่ชนะรางวัล World Brewer’s Cup Championship",
      tasteNote:
        "Tasting notes: ชาอู่หลงลิ้นจี่หวาน หอมมะลิ ทิ้งท้ายแบบชาเอิร์ลเกรย์ผสมมิ้นต์สดชื่น",
      price: 550,
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "กาแฟ Blue Mountain จาก Jamaica รสคลาสสิก มีความหอมจากกลิ่นคั่วชัด รสสัมผัสปลายที่ละเอียด นุ่ม ละมุน",
      tasteNote: "Tasting notes: คาราเมล ช็อกโกแลต ถั่วเฮเซลนัท",
      price: 500,
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
      name: "Marco Polo Sublime (Mariage Freres)",
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tasteNote:
        "Tasting notes: แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมล่อน ครีม มอลต์",
      price: 350,
    },
    {
      name: "French Earl Grey (T2)",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tasteNote: "Tasting notes: ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
    },
    {
      name: "Fortmason (Fortnum & Mason)",
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tasteNote: "Tasting notes: ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      price: 300,
    },
    {
      name: "Smoky Earl Grey (Fortnum & Mason)",
      description:
        "ชาดำเบส Gunpowder ผสม  Lapsang Souchong เพื่อความหอมกลิ่นอบควันอันเป็นเอกลักษณ์",
      tasteNote: "Tasting notes: กลิ่นอบไฟ ไพน์นัท เรซิ่นอบ",
      price: 300,
    },
    {
      name: "Oriental (Mariage Freres)",
      description: "ชาดำกลิ่นดอกไม้หลากสี รสชาติหอมหวานกลมกล่อมลงตัว",
      tasteNote: "Tasting notes:  ดอกมะลิ ส้ม ดอกกุหลาบ",
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
      name: "Narino Premium",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien",
      tasteNote:
        "Tasting notes: ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      price: 650,
    },
    {
      name: "Uji Hikari Gokasho",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi กรรมวิธีผลิตด้วยการพรางแสงด้วยโครงไม้ไผ่และฟางข้าว จัดหาโดย MTCH",
      tasteNote:
        "Tasting notes: สาหร่ายทะเลย่าง เนยอบ ธัญพืช หอมหวานอูมามิคาราเมลผลไม้อบทิ้งท้าย",
      price: 560,
    },
    {
      name: "Yame No Sora",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากเมืองยาเมะ ไร่อายุกว่า 300 ปี จัดหาโดย PAGUcha",
      tasteNote:
        "Tasting notes: หอมมันถั่วแมคาเดเมียคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
      price: 500,
    },
    {
      name: "Hoshino Mori No Mukashi",
      description:
        "มัทฉะเกรดพิธีชง จาก Hoshino เป็นมัทฉะตัวโปรดของผู้นำตระกูล และ Master Sohenryu Yuyusai",
      tasteNote: "Tasting notes: อูมามิโทนถั่วคั่ว ลงท้ายอูมามิแบบหัวบีท",
      price: 450,
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
      name: "Dong Fang Mei Ren Competition Grade (東方美人)",
      description:
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
      tasteNote:
        "Tasting notes: ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรสของชามีความซับซ้อน มีความฟงฝู่ 豐富 จัดเต็ม ไม่แบน มีหลากหลายมิติ รสชาติทิ้งท้ายยาวนาน",
      price: 750,
    },
    {
      name: "Da Hong Pao Bei Dou (大紅袍)",
      description:
        "ชาต้าหงเผา (เสื้อคลุมสีแดง) สายพันธุ์เดี่ยว Bei Dou (北斗) หนึ่งในสุดยอดชา จากเขาอู๋อี๋ซาน มณฑลฝูเจี้ยนประเทศจีน",
      tasteNote:
        "Tasting notes: ดอกไม้นานาชนิด ผลไม้แห้ง น้ำผึ้ง กลิ่นอบไฟ มิติความแร่ธาตุซับซ้อน",
      price: 500,
    },
    {
      name: "Tie Guan Yin Dan Cong (单枞铁观音)",
      description:
        "ทำจากชาพันธุ์เฟิ่งหวงตันฉง ด้วยวิธีอบไฟแบบเถี่ยกวนอิน จากปรมาจารย์ทำชา จังเจ๋อเจี๋ย",
      tasteNote:
        "Tasting notes: ผลไม้สุกกลุ่มเบอร์รี กล้วยไม้ น้ำผึ้ง วานิลลา ฝาดหอม elegant เอกลักษณ์ของสายพันธุ์เฟิ่งหวงตันฉง",
      price: 400,
    },
    {
      name: "Tie Guan Yin Shui Xian (水仙铁观音)",
      description:
        "ทำจากชาพันธุ์สุ่ยเซียน ด้วยวิธีอบไฟแบบเถี่ยกวนอิน จากปรมาจารย์ทำชา จังตงจื้อ",
      tasteNote:
        "Tasting notes: กลิ่นหอมผลไม้กลุ่ม แพร์ กล้วยไม้ จูนิเปอร์เบอร์รี มีความเป็นแร่ธาตุสูง",
      price: 350,
    },
    {
      name: "Lupicia Peach Oolong",
      description:
        "ชาอู่หลงเรือธงที่ดังที่สุดจากแบรนด์ Lupicia ใบชาเกรด Super Premium",
      tasteNote:
        "Tasting notes: พีชญี่ปุ่นสีขาวชั้นสูง กุลาบแดง ผสานด้วยความสดชื่นซับซ้อนอ่อนโยนของชาอู่หลงไต้หวัน",
      price: 350,
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
      name: "Vanuatu Malekula Island Vanilla",
      description: "วานิลลาจากหมู่เกาะ ใจกลาง South Pacific Ocenia",
      tasteNote:
        "Tasting notes: กลิ่นดอกไม้ tropical อบเชย ไม้หอม ช็อกโกแลต ผลไม้สีเหลือง",
      price: 400,
    },
    {
      name: "Bronte Pistachio D.O.P.",
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      price: 300,
    },
    {
      name: "Iranian Akbari Pistachio Organic",
      description:
        "พิสตาชีโอจากอิหร่าน สายพันธุ์ Akbari ซึ่งพรีเมี่ยมที่สุดในบรรดา Iranian Pistachios มีความหวานมันคลาสสิกเอกลักษณ์ถั่วที่ชัดเจนที่สุด ",
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
      name: "Shimizu Hakuto Peach Sorbet",
      description:
        "ฉายา Queen of Peaches จาก Okayama รสชาติหวานหอมสุดผู้ดี มีจริตของส้ม โยเกิร์ต ชีส และสมุนไพรซับซ้อน",
      price: 450,
    },
    {
      name: "Gorby Red Grapes Sorbet",
      description:
        "องุ่นแดงจาก Yamanashi รสชาติเข้มข้น หวานหอมกลิ่นไวน์แดง Zinfandel",
      price: 450,
    },
    {
      name: "Aurora Black Grapes Sorbet",
      description:
        "องุ่นดำจาก Okayama รสชาติหวานหอมโทน savoury มีจริตไวน์ Pinot Noir และความ fruity ที่ซับซ้อนกว่า Kyoho",
      price: 450,
    },
    {
      name: "Cotton Candy Grapes Sorbet",
      description:
        "องุ่นเขียวสายพันธุ์พิเศษจากอียิปต์ รสชาติหวานหอมเหมือนสายไหมสด และวานิลลา",
      price: 450,
    },
    {
      name: "Ittoushou No Yume Peach Sorbet",
      description:
        "พีชสายพันธุ์พิเศษ มีกลิ่นหอมหวานที่ฟุ้งชัดโทนดอกไม้ ความหวาน 13.5 Brix",
      price: 400,
    },
    {
      name: "P-Ichiban Peach Sorbet",
      description:
        "พีชสายพันธุ์พิเศษ เกรด Shingen มีจริตของโคล่า และสมุนไพรหวาน",
      price: 400,
    },
    {
      name: "Daitouryou Peach Sorbet",
      description:
        "พีช เกรดพรีเมี่ยมระดับ Daitouryou มีจริตของแอปเปิ้ล และ พลัม",
      price: 400,
    },
    {
      name: "Ikeda Peach Sorbet",
      description:
        "พีชที่ปลูกด้วยปุ๋ยฟอสซิลปะการัง จากเกาะ Yonaguni มีจริตองุ่นแดง ลูกอมและ ดอกไม้สีขาว",
      price: 400,
    },
    {
      name: "Tutti Frutti Red Grapes Sorbet",
      description: "องุ่นแดงสายพันธุ์ Tutti Frutti มีกลิ่นหอมหวานของเบอร์รี่",
      price: 400,
    },
    {
      name: "Kanoiwa Hakutou Peach Sorbet",
      description:
        "พีชสายพันธู์พิเศษ จาก Yamanashi มีจริตของแอปเปิ้ลคาราเมลและคาราเมลน้ำตาล",
      price: 350,
    },
    {
      name: "Amarillo Peach Sorbet",
      description:
        "พีชเหลืองรสชาติหอมเข้มข้นจากสเปน กลิ่นหอมคลาสสิกและดั้งเดิม",
      price: 350,
    },
    {
      name: "Sable Black Grapes Sorbet",
      description: "องุ่นดำสายพันธุ์ Sable รสชาติหอมหวานฉ่ำความ exotic",
      price: 350,
    },
    {
      name: "Orange Candy Melon Sorbet",
      description: "เมล่อนสีส้ม หอมหวานโทน honeydew มีความฉ่ำน้ำสูง",
      price: 350,
    },
    {
      name: "",
      description: "",
      price: 0,
    },
    {
      name: "Chaunsa Honey Mango Sorbet",
      description:
        "มะม่วง Chaunsa จากปากีสถาน มีความหวานโทนน้ำผึ้ง กลิ่นหอม คล้ายมะม่วงอกร่อง เส้นใยน้อย",
      price: 300,
    },
    {
      name: "Mingolo Mango Sorbet",
      description:
        "มะม่วง Mingolo จาก Dominican Republic มีความหอมหวานของผลไม้ tropical เช่นพีช อมเปรี้ยวเล็กน้อย",
      price: 300,
    },
    {
      name: "Natoora White Peach Sorbet",
      description:
        "พีชขาวจาก Campania มีความหอมหวานซับซ้อนโทนเบอร์รี่ เปรี้ยวหวานลงตัว",
      price: 300,
    },
    {
      name: "Sweet Love White Peach",
      description:
        "พีชขาวสายพันธุ์ Sweet Love จากสเปน มีความหอมอ่อนหวานละมุน สไตล์พีชตะวันตก",
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
      name: "Yasmine Mango",
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสมผสานรสชาติละมุนของชามะลิแท้ ทำจากชาเตียนหง อบด้วยดอกมะลิสด 3 รอบ เข้ากับความหอมหวานของมะม่วงโชคอนันต์ หรือ มะม่วงคาราบาว",
      price: 300,
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

export const sweetBakery0824: Flavor[] = [
  chocolate,
  coffee,
  westernTea,
  matcha,
  easternTea,
  classic,
  fruits,
  special,
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Flavor, SOLDOUT_TYPE } from "../types";

// Use this web to do conversion from csv and put it in parsedFlavours:
// https://csvjson.com/csv2json
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const parsedFlavours = [];

const coffee: Flavor = {
  id: "coffee",
  categoryButtonText: "หมวด กาแฟนม Specialty",
  backgroundColorClass: "bg-coffee-bg",
  imageName: "coffee",
  name: "กาแฟนม Specialty (Single Origin and Award-Winning)",
  items: [
    {
      isNewFlavor: true,
      name: "Neon Signature Blend by Vend Ettas",
      description:
        "เมล็ดกาแฟเบลนด์รุ่นพิเศษ ถอดคอนเซ็บจากแสงขาว เงียบ เรียบง่าย แต่เต็มไปด้วยศักยภาพ คั่วอย่างแม่นยำเพื่อเผยสิ่งที่ซ่อนอยู่ หนึ่งแสง แตกออกเป็นสเปกตรัมของรสชาติ",
      tastingNotes:
        "สตรอว์เบอร์รี่, ผลไม้แห้ง, เบอร์รี่แจม, หวานแบบลูกกวาด, ซิตรัสสดใส, กลีบกุหลาบ, ช็อกโกแลตหวาน",
      price: 450,
      instagramUrl: "",
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
      isNewFlavor: false,
      name: "Tropic-Beauty Yellow Peach",
      description:
        "พีชเหลือง Tropic-Beauty จากยอดดอยขุนแจ๋ เชียงใหม่ พื้นที่อากาศเย็นตลอดปีที่ช่วยสะสมน้ำตาลจนได้ที่ ฉ่ำน้ำสูงสุด รสหวานนำเปรี้ยวสดชื่น พร้อมกลิ่นหอมละมุนอันเป็นเอกลักษณ์ของพีชเมืองร้อนบนภูเขาไทย",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Marian Plum (Toonklao)",
      description:
        "มะยงชิดสายพันธุ์ทูลเกล้าเกรดคัดพิเศษ ผลใหญ่ผิวทองสวย เนื้อแน่นกรอบและฉ่ำน้ำไม่เละ รสหวานอมเปรี้ยวสมดุลที่สุดในสายพันธุ์ มีกลิ่นหอมสดชื่นแบบ Citrus Floral อ่อนๆ",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Pomelo Khao Tangkwa Sorbet",
      description:
        "ส้มโอขาวแตงกวา (GI) เกรดรางวัลที่ 1 สวนโชคชัย ชัยนาท คัดผลแก่จัดเก็บด้วยมือ รักษาเกล็ดส้มโอให้สมบูรณ์ ปราศจากความขมฝาด รสหวานนำเปรี้ยวสดชื่น พร้อมกลิ่นหอมดอกส้มโอขาวฟุ้งในคอ",
      tastingNotes: "",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/DUVGtpVklOb",
    },
    {
      isNewFlavor: false,
      name: "Baan Phaeo Ok-rong Mango",
      description:
        "มะม่วงอกร่องโบราณ จากสวนอร่ามรัตน์ บ้านแพ้ว เก็บระยะสุกปากตะกร้อ หวานหอมฟุ้งยาวนาน",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Cacao Juice Sorbet",
      description:
        "น้ำผลโกโก้สดแท้ ให้รสผลไม้เมืองร้อนสดชื่น คัดจาก 'บ้านสวนเจริญดี' สกัดจากผลสด 100 กก. ได้เพียง 1 ลิตร ทำเป็นซอร์เบต์เนื้อนุ่มฟู รสเปรี้ยวอมหวานซับซ้อน อุดมด้วยโพรไบโอติกส์",
      tastingNotes: "",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/DUdTUZiknuL",
    },
    {
      isNewFlavor: false,
      name: "Red Guava Sorbet (Daeng Ayothaya 3)",
      description:
        "ฝรั่งแดงอโยธยา เบอร์ 3 จากสวนคุณาไทยฯ อยุธยา สายพันธุ์หายากที่ใช้เวลาพัฒนากว่า 5 ปี เนื้อสีแดงทับทิมฉ่ำน้ำ กลิ่นหอมซับซ้อนราวกับน้ำหอม ระเบิดรสชาติของเบอร์รี่แดง องุ่น และไวน์ชั้นเลิศ ฉีกกฎรสชาติฝรั่งเดิมๆ ด้วยความหวานหอมที่เกษตรกรไทยตั้งใจปั้นมากับมือ",
      tastingNotes: "",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/DE4dHUUy-7i",
    },
    {
      isNewFlavor: true,
      name: "Reid Cherry Simone Signature Collection",
      description:
        "เชอร์รีทัสมาเนียสายพันธุ์ Simone เกรด Signature เก็บด้วยมือเมื่อสุกงอมเพื่อรักษาผิวที่ตึงกรอบ เนื้อแน่นเป็นประกาย ให้รสหวานลึกมีมิติและโครงสร้างซับซ้อนดั่งไวน์แดง ตัดเปรี้ยวบางเบาอย่างลงตัว",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DVIhfYmkihx",
    },
    {
      isNewFlavor: true,
      name: "Moro Blood Orange Sorbet",
      description:
        "ส้มสีเลือด Moro หายากจากดินภูเขาไฟซิซิลี ไร่ Mammarancia เนื้อสีแดงเข้มจัด รสชาติ Robust เข้มข้นซับซ้อน เปรี้ยวสง่างามแฝงกลิ่นเบอร์รี่และดอกไม้ สะท้อนเอกลักษณ์ Terroir เฉพาะตัว",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DU7WQrCkteN",
    },
    {
      isNewFlavor: true,
      name: "Kan Yao Song Huad Durian",
      description:
        "ทุเรียนก้านยาวเบตงทรง 'หวด' ทรงผลในอุดมคติที่หายากที่สุด บ่งบอกถึงความสมบูรณ์ของเนื้อ เติบโตในดินแร่ธาตุสูง ให้เนื้อสัมผัสเนียนละเอียดดั่งคัสตาร์ด เส้นใยน้อย รสชาติหวานมันกลมกล่อมแบบ Creamy & Savoury กลิ่นหอมดอกไม้เฉพาะตัว ไม่ฉุนจัด รสสัมผัสผู้ดีที่หาตัวจับยา",
      tastingNotes: "",
      price: 400,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Amarin Saitama Strawberry Sorbet",
      description:
        "สตรอว์เบอร์รี Amarin ระดับ Gold Award จากไซตามะ โดดเด่นด้วยค่า Brix สูงและกรดต่ำตามธรรมชาติ เน้นกลิ่น Floral-Fruity ชัดเจน เนื้อฉ่ำหวานลึก ตัดด้วยความเปรี้ยวใสสะอาดแบบ Bright Malic",
      tastingNotes: "",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DU0UW84kgrV",
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
      isNewFlavor: false,
      name: "Yame No.1",
      description:
        "มัทฉะเกรดพิธีการ เบลนด์พิเศษจากเมือง Yame คัดสรรโดย Osha Ocha ออกแบบ Profile รสชาติให้ถูกปากคนไทยโดยเฉพาะ โดดเด่นด้วยความหอมมันโทนถั่วคั่ว และความครีมมี่ อูมามิชัดเจนแต่เข้าถึงง่าย ไร้ความขมฝาด",
      tastingNotes: "แซลมอนย่าง ไม้รมควัน ถั่วเคลือบช็อกโกแลต ดอกไม้สีเหลือง",
      price: 500,
      instagramUrl: "https://www.instagram.com/p/DQ_2sEXkv3b",
    },
    {
      isNewFlavor: true,
      name: "God of Yame Blend",
      description:
        "มัทฉะจากเมือง Yame ที่ซับซ้อนจากการเบลนด์มัทฉะหายากถึง 9 สายพันธุ์ โดดเด่นด้วยคาแรคเตอร์ 'Creamy & Roasty' บอดี้แน่นหนึบสู้ลิ้น กลิ่นถั่วคั่วแทรงพลัง จบด้วยความหวานมันติดตรึงยาวนาน",
      tastingNotes:
        "หอมมันถั่วแมคาเดเมียคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
      price: 600,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Sakata Matabei Samidori",
      description:
        "มัทฉะจากเมือง Uji โดยไร่รางวัลประกวด สืบทอดกว่า 350 ปี ตั้งอยู่บนพื้นที่เรียกว่า Hamadai ริมแม่น้ำ Kizu ในจังหวัดเกียวโต ซึ่งมีดินร่วนผสมทรายที่ระบายน้ำดีและเก็บความชื้นพอเหมาะ พร้อมช่วงอุณหภูมิกลางวัน–กลางคืนต่างกันมาก\nใช้ปุ๋ยธรรมชาติ (เช่น ปลาซาร์ดีน/ปลาค็อด และกากคาโนลา)",
      tastingNotes:
        "ความนุ่มนวลของอูมามิซุปใส หนักแน่นในมิติรสชาติ สัมผัสละมุนคล้าย white chocolate ทิ้งท้ายรสชาติยาวนาน หวานปลายลงตัว",
      price: 500,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Tsujiki Original Blend (2025)",
      description:
        "มัทฉะเกรดพิธีการ Signature จากไร่ Tsujiki ของปรมาจารย์ Tsuji Kiyoharu ตำนานแห่ง Uji เบลนด์นี้คือศิลปะชั้นสูงที่ให้รส Umami พุ่งพล่านแต่ Smooth อย่างเหลือเชื่อ",
      tastingNotes:
        "ใบไม้สด สาหร่ายอ่อน ดอกไม้ขาว ธัญพืช ครีมข้าวโพด อูมามิกลมกล่อมมาก",
      price: 800,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Honzu Asahi (2025)",
      description:
        "มัทฉะ Asahi เกรด Koicha ไร่ Furukawa Seicha ผ่านกรรมวิธี Honzu พรางแสงด้วยฟางข้าวแบบดั้งเดิม มอบอูมามิสะอาดลึกซึ้ง กลิ่นสาหร่ายทะเลผู้ดีผสานความหวานนวลของถั่วขาวและครีมสด เนื้อสัมผัสเนียนดุจแพรไหม",
      tastingNotes:
        "สาหร่ายทะเลชั้นดี กลิ่นไอทะเล ซุปปลาแห้ง ถั่วขาวบด ครีมสด อูมามิเข้มข้น",
      price: 900,
      instagramUrl: "https://www.instagram.com/p/DU3BGPDkmtb",
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
      isNewFlavor: true,
      name: "Shui Xian Tie Guan Yin (水仙鐵觀音)",
      description:
        "ชาอู่หลงคราฟต์พิเศษ นำพันธุ์สุ่ยเซียน ทำกรรมวิธีเถี่ยกวนอิน จากไร่รางวัลระดับเท่อเติ๋งเจี่ยง อบไล่ไฟ 6 รอบนาน 3 เดือน ดึงกลิ่นไม้หอมเก่าและแร่หินเอกลักษณ์ ผสานความหวานฉ่ำของผลไม้สุก",
      tastingNotes:
        "ไม้หอมเก่า เปลือกไม้ แร่หินอุ่น ดอกไม้แห้ง ผลไม้สุก หวานชุ่มคอ",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DU-xA4KEsdM",
    },
    {
      isNewFlavor: true,
      name: "Dong Fang Mei Ren (東方美人)",
      description:
        "ชานางงามบูรพา รางวัลประกวดหนึ่งดอกเหมยจากไต้หวัน Taoyuan รสชาติละมุน สดชื่น มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้งป่าชัดเจน",
      tastingNotes: "น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      price: 500,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Yi Zhi Chun (一枝春)",
      description:
        "ชาอู่หลงอี้จือชุน จากฝูเจี้ยน เก็บเกี่ยวช่วงรอยต่อฤดูหนาวเข้าสู่ใบไม้ผลิ มอบกลิ่นหอมดอกไม้แรกแย้มรุนแรงคล้ายดอกบ๊วย เนื้อชาหนานุ่ม รสหวานชุ่มคอยาวนาน",
      tastingNotes:
        "คาราเมลโทนไม้รมควัน ดอกบ๊วย เนื้อสัมผัสครีมมี่ หวานสะอาดปลายยาว",
      price: 400,
      instagramUrl: "",
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
      isNewFlavor: false,
      name: "T2 French Earl Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/C76q3M6SbjO/",
    },
    {
      isNewFlavor: false,
      name: "Countess Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ที่เพิ่มลูกเล่นด้วยกลิ่นของผลไม้ตระกูลซิตรัส",
      tastingNotes:
        "น้ำมันเบอกาม็อทสุดคลาสสิกสไตล์ผู้ดีอังกฤษ ปิดท้ายด้วยเปลือกส้ม",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Marco Polo Sublime",
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tastingNotes: "แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมลอน ครีม มอลต์",
      price: 350,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Montagne D'OR",
      description:
        "ชาดำเบลนด์สุดหอมรุ่น Exclusive จาก Mariage Frères แรงบันดาลใจจากพื้นที่สามเหลี่ยมทองคำ",
      tastingNotes: "ลิ้นจี่ กุหลาบ เสาวรส",
      price: 300,
      instagramUrl: "",
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
      isNewFlavor: false,
      name: "Piedmont Hazelnut (Nocciola del Piemonte IGP)",
      description:
        "เฮเซลนัทสายพันธุ์เฉพาะถิ่นจากเมือง Piedmont แหล่งผลิตเฮเซลนัทที่ดีที่สุดของโลก หวาน มันเหมือนเนย มีกลิ่นอ่อนๆของวานิลลา และน้ำผึ้ง",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Bronte Pistachio D.O.P.",
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      tastingNotes: "",
      price: 350,
      instagramUrl: "https://www.instagram.com/p/C8JghMoPU4L/",
    },
    {
      isNewFlavor: false,
      name: "Red Rock Macadamia",
      description:
        "แมคคาเดเมียจากดินภูเขาไฟสีแดงในออสเตรเลีย ถิ่นกำเนิดดั้งเดิม ให้รสชาติที่มันเนยและเข้มข้นกว่าแมคคาเดเมียทั่วไป มีกลิ่นหอมของดินและถั่วคั่วชัดเจน",
      tastingNotes: "",
      price: 350,
      instagramUrl: "https://www.instagram.com/p/DQWqO67kv0Q",
    },
    {
      isNewFlavor: true,
      name: "Grand Cru Bora Bora Tahitian Vanilla (2025)",
      description:
        "วานิลลา Grand Cru หายากจาก Bora Bora โดย Alain Abel ฝักสุกคาต้นนาน 10 เดือน สะสมกลิ่นหอมสูงสุด มอบโทนดอกไม้ขาวฟุ้งและเครื่องเทศซับซ้อน หวานลึกมีมิติ แตกต่างจากวานิลลาทั่วไป",
      tastingNotes: "ดอกไม้ขาว ลูกพรุน ชะเอมเทศ ไวท์ช็อกโกแลต ครีมมี่นุ่มนวล",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DVBW1SHkk9v",
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
      isNewFlavor: false,
      name: "Nacional Arriba Chocolate Sorbet (To'ak)",
      description:
        "หนึ่งในช็อกโกแลตที่แพงและหายากที่สุดในโลก ทำจากสายพันธุ์ Nacional โบราณที่เกือบสูญพันธุ์จากเอกวาดอร์ บ่มในถังไม้โอ๊ค รสชาติซับซ้อนลึกซึ้งราวกับไวน์ชั้นเลิศ",
      tastingNotes: "ซิตรัส เรซิ่น เครื่องเทศ แอปเปิ้ลเขียว วานิลลา คาราเมล",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/C7vnzoSSYqt/",
    },
    {
      isNewFlavor: true,
      name: "Colombian Cacao Hunters Chocolate Sorbet",
      description:
        "เปิดโลกช็อกโกแลต Sierra Nevada จาก Cacao Hunters โคลอมเบีย โดดเด่นด้วยโทนสีเขียว สว่างไสว ให้สัมผัสเนียนวาวคล้ายน้ำมันมะกอกชั้นดี ผสานความเปรี้ยวสดชื่นของแอปเปิ้ลเขียว ปิดท้ายด้วยกลิ่นอัลมอนด์และหนังอย่างมีเอกลักษณ์",
      tastingNotes:
        "แอปเปิ้ลเขียวสด องุ่นเขียว อัลมอนด์ดิบ น้ำมันมะกอก กลิ่นหนังหรูหรา",
      price: 350,
      instagramUrl: "",
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
      isNewFlavor: false,
      name: "Blueberry Yogurt",
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสบลูเบอร์รี No.1 สายพันธุ์พิเศษ",
      tastingNotes: "",
      price: 350,
      instagramUrl: "https://www.instagram.com/p/DAK3sW6vIgY",
    },
    {
      isNewFlavor: true,
      name: "Okrong Sticky Rice",
      description:
        "ถอดรหัสรสชาติข้าวเหนียวมะม่วงไทยแท้ คัดมะม่วงอกร่องระยะ 'สุกปากตะกร้อ' กลิ่นหอมเป็นเอกลักษณ์จากสวนอร่ามรัตน์ บ้านแพ้ว ผสานข้าวเหนียวเขี้ยวงูมูนกะทิทับสะแกเข้มข้น ด้วยเทคนิคพิเศษที่คงความนุ่มหนึบของเม็ดข้าวไว้ได้อย่างน่าอัศจรรย์แม้อยู่ในความเย็น",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DVLfLbokuGd",
    },
    {
      isNewFlavor: true,
      name: "Mayong Chid Tart",
      description:
        "ถอดแบบรสชาติจากขนมทาร์ตมะยงชิดสด สร้างเลเยอร์ซับซ้อนด้วยซอร์เบต์มะยงชิดรสเปรี้ยวอมหวาน ผสานความนุ่มนวลของ White Chocolate Cream Cheese และ Texture กรุบกรอบของแป้งทาร์ตสูตรพิเศษ มอบประสบการณ์ขนมหวานเต็มคำในรูปแบบไอศกรีม",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DVOWKLdEjtx",
    },
    {
      isNewFlavor: false,
      name: "Mint Stracctiatella",
      description:
        "มิ้นท์ช็อกชิพ รสชาติพิเศษที่หาทานได้ยาก ทำจากมิ้นต์ 5 สายพันธุ์ ให้ dynamic ของความหอมมิ้นท์หลากหลายมิติ และราดด้วยช็อกโกแลต shards จาก Amedei No.9 ที่เพิ่มความซับซ้อนของรสชาติตลอดการเดินทาง",
      tastingNotes: "",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DUw8a30Emld",
    },
    {
      isNewFlavor: true,
      name: "Blueberry Mont Blanc",
      description:
        "Mont Blanc ตีความใหม่ ใช้เกาลัด Mimura ผลใหญ่พิเศษจากญี่ปุ่น คั่วแรงดันดึงความหวานธรรมชาติโดยไม่เติมน้ำตาล สอดไส้ซอสบลูเบอร์รี่เคี่ยวสดและวานิลลา Tahitian จาก Bora Bora ให้รสสัมผัสนุ่มนวล สะอาด และหวานน้อยอย่างมีชั้นเชิง",
      tastingNotes: "",
      price: 500,
      instagramUrl: "https://www.instagram.com/p/DVD9CzjEnpT/",
    },
    {
      isNewFlavor: true,
      name: "Burnt Basque Strawberry Cheesecake",
      description:
        "รสชาติพิเศษร่วมกับเชฟแอมร้าน Sauvage ถอดแบบต้นตำรับแคว้น Basque แท้ๆ โดยเลือกใช้ชีส Idiazabal หายาก ให้กลิ่นรมควันเตาผิงและรสเค็มมันมีมิติ แตกต่างจากชีสเค้กหน้าไหม้ทั่วไป ตัดรสด้วยซอสสตรอว์เบอร์รี่สายพันธุ์ Yayoihime จากกุนมะอย่างลงตัว",
      tastingNotes: "",
      price: 550,
      instagramUrl: "",
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
  items: [],
};

export const tot0326: Flavor[] = [
  matcha,
  fruits,
  easternTea,
  westernTea,
  classic,
  chocolate,
  coffee,
  special,
];

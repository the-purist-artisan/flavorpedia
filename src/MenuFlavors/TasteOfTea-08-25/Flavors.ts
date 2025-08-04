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
      name: "Peru Geisha La Lacuma COE Rank 1",
      price: 450,
      description:
        "เมล็ดกาแฟเปรูเกอิชา จากฟาร์มระดับตำนาน La Lacuma รางวัลอันดับ 1 จากการประกวด Cup of Excellence",
      tastingNotes:
        "พีช ดอกมะลิ เบอร์กาม็อต แอปริคอต ดอกสายน้ำผึ้ง เลม่อน ตะไคร้ หวานฉ่ำน้ำ ทิ้งรสชาติยาวนาน",
      isNewFlavor: true,
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
      name: "Blood Peach (Sanguine De Savoie) Sorbet",
      price: 450,
      description:
        "พีชสีเลือดหายากสุดขีดจากซาวัว ได้รับการยกย่องในฝรั่งเศสว่าเป็นพีชชั้นสูง รสชาติเยี่ยมระดับพรีเมียม กลิ่นซับซ้อนที่สุดในบรรดาพีชทั้งหมด หอมฟุ้งคล้ายสวนเบอร์รี่รวม รสเปรี้ยวหวานครบรส มีโทน spice อ่อน ๆ ความหอมติดใจ ลุ่มลึก ชวนค้นหา",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMZ5q15SThF",
    },
    {
      name: "Shimizu Hakuto Peach Sorbet",
      price: 450,
      description:
        "ฉายา Queen of Peaches จาก Okayama รสชาติหวานหอมสุดผู้ดี มีจริตของส้ม โยเกิร์ต ชีส และสมุนไพรซับซ้อน",
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/C-kNE0HvVnJ",
    },
    {
      name: "Luna Piena Watermelon Sorbet",
      price: 400,
      description:
        "สุดยอดแตงโมเสาอากาศ ฉายาพระจันทร์เต็มดวง ผลผลิต 1 ต้น 1 ลูก รสชาติหวานหอมเข้มข้นสุดคาแรกเตอร์ของแตงโม ทานแล้วสดชื่นทันที",
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/DMkI7pbyzB2",
    },
    {
      name: "Lady Grace Strawberry Sorbet",
      price: 400,
      description:
        "สตอเบอรี่สายพันธุ์ปรับปรุงใหม่จากประเทศอังกฤษ กลุ่ม Lady ได้รับรางวัล Great Taste Award อยู่ในช่วงพีคของฤดูกาล กลิ่นสตอเบอรี่หอมหวานระเบิดเข้ม",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Candy Snap (IFP) Red Grape Sorbet",
      price: 400,
      description:
        "องุ่นแดงสายพันธุ์พิเศษหวานเปรี้ยวชวนนึกถึงลูกอมสตอเบอรี่ เมล่อน สัปปะรด ไวน์แดง",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Leanri King Tangerine Sorbet",
      price: 350,
      description:
        "ส้มสายพันธุ์พิเศษ ผสมระหว่าง Murcott และ Clementine หวานหอมกลิ่นคลาสสิก",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Tamara King Cherry Sorbet",
      price: 350,
      description:
        "เชอรี่สายพันธุ์ล้ำจากสถาบันพัฒนาพันธุ์ผลไม้ของสาธารณรัฐเชค กลิ่นหอมเชอรี่เข้มข้นมาก เปรี้ยวหวานพอดี สัมผัสกรอบ ครีมมี่",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMqAqSyTh4u/",
    },
    {
      name: "Champagne Pink Gooseberry Sorbet",
      price: 350,
      description:
        "กูสเบอรี่สีชมพู หรือโทงเทงฝรั่งพันธุ์หายาก สีชมพูแดงแชมเปญ กลิ่นคล้ายเบอรี่และมะม่วงหาวมะนาวโห่",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Akatsuki Peach Sorbet",
      price: 350,
      description:
        "หนึ่งในพีชสายพันธุ์พิเศษที่มีเนื้อแน่นและรสชาติลึกที่สุด กลิ่นหอมหวานเอกลักษณ์ อยู่ในช่วงพีคของฤดูกาล",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Star Wars Long Kong ลองกอง Sorbet",
      price: 300,
      description:
        "ลองกองสายพันธุ์พิเศษ ได้กลิ่นหอมของลางสาด แต่ปราศจากความขม เปรี้ยวสดชื่น หวานพอดี กลิ่นฟุ้งในคอ",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMfLB0Ky6NB/",
    },
    {
      name: "Loong Daeng Coconut มะพร้าวลุงแดง Sorbet",
      price: 300,
      description:
        "มะพร้าวน้ำหอม สวนลุงแดง บางคล้า ฉะเชิงเทรา หอมหวานกลิ่นใบเตย ไวท์ช็อกโกแลต เอกลักษณ์ ไม่เหมือนพื้นที่อื่น",
      tastingNotes: "",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Thap Sakae Coconut Milk Sorbet",
      description:
        "มะพร้าวแกง จากไร่พงศ์พระยา ทับสะแก ปีนเก็บคัดลูกแก่ได้ที่คั้นเป็นน้ำกะทิสด",
      price: 250,
      instagramUrl: "https://www.instagram.com/p/DMmlDhGSw4h/",
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
      price: 700,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien",
      tastingNotes:
        "ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Zuisho Shogyokuen",
      price: 650,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากแบรนด์ Shogyokuen จัดหาโดย Chaseki",
      tastingNotes:
        "ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Sakata Matabei Samidori",
      price: 650,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากแบรนด์ Sakata Matabei ติดรางวัลท้อป 3 จากอุจิ",
      tastingNotes:
        "ซุปสาหร่ายเต้าหู้ชั้นสูง อูมามิโทนทะเลนุ่มนวล บอดี้แน่น ขมฝาดน้อย",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Okunoyama Asahi",
      price: 600,
      description:
        "มัทฉะเกรดพิธีและแข่งขัน สายพันธุ์ Asahi จากไร่เดียวกับ Narino Premium มีการพรางแสง 35 วัน และเก็บด้วยมือ จัดหาโดย MTCH",
      tastingNotes:
        "ความนุ่มนวลของผักสด ใบไม้สด หวานอูมามิธรรมชาติ หอมกลิ่นดอกไม้นานาชนิด ความขมปลายที่สะอาด",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DM394UazzVz/",
    },
    {
      name: "Yame No Sora",
      price: 500,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากไร่ชาเก่าแก่อายุกว่า 300 ปี ณ เมือง Yame จัดหาโดย PAGUcha",
      tastingNotes:
        "หอมมันถั่วแมคาเดเมียคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/DMXeIK9ScYb",
    },
    {
      name: "Yame C-02",
      price: 500,
      description:
        "มัทฉะเกรดพิธีชง เบลนด์พิเศษจาก Yame รสชาติที่คนไทยชื่นชอบ จัดหาโดย Osha Ocha",
      tastingNotes: "เฮเซลนัทคั่ว เนยถั่วลิสง วานิลลา ลมทะเล",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Uji Tawara Kyoto",
      price: 450,
      description:
        "มัทฉะตัวใหม่ล่าสุด สายพันธุ์ Uji Hikari ที่ชงเป็นลาเต้แล้วนัวสุดๆ โดย MTCH ",
      tastingNotes: "ถั่ั่วเขียวคั่ว อัลมอนด์ มันฝรั่งบดคลุกเนย",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMZhcidxmlE/",
    },
    {
      name: "Shincha Komorebi",
      price: 450,
      description:
        "ชินฉะ หรือ ชาใหม่ จากรอบการเก็บเกี่ยวครั้งแรกในเดือนพฤษภาคม 2025 เบลนด์จากชาสามสายพันธุ์ Yabukita, Okumidori และ Samidori จัดหาโดย MTCH",
      tastingNotes: "นมผง ขนมเมอแรงค์ เค้กอัลมอนด์ วานิลลา กลิ่นหอมยาวนาน",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/DLBnGzrvDzh/",
    },
    {
      name: "Yame Saemidori",
      price: 400,
      description:
        "มัทฉะพิเศษจาก Yame รวมเอกลักษณ์เด่นของสายพันธุ์ Saemidori โดย MTCH",
      tastingNotes: "ดอกไม้หลากสี ขนมปังอบ ถั่วคั่วเล็กน้อย",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Midokiri",
      price: 350,
      description:
        "มัทฉะเกรดพิธี โทน Yame ที่คนไทยคุ้นเคย ทานง่าย เข้าใจง่าย โดย PAGUcha",
      tastingNotes: "ถั่วเขียว ถั่วลันเตา เนยอะโวคาโด มะม่วงมัน",
      isNewFlavor: true,
      instagramUrl: "",
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
      name: "Tie Guan Yin No.1 Award 2025",
      price: 500,
      description:
        "ชาเถี่ยกวนอิน (ทิกวนอิม) ชนะรางวัลที่ 1 จากเวทีแข่งขันประกวดชา Muzha ส่งแข่งโดยปรมาจารย์ชาจังหยวนผู่",
      tastingNotes:
        "ผลไม้สุก ดอกไม้หลากหลายชนิด มีชั้นรสชาติหลายชั้น ความเครื่องเทศอ่อน ทิ้งปลายรสอูมามิ ไร้ความขม",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/C_4kVOUvzaF/",
    },
    {
      name: "Dong Fang Mei Ren (東方美人)",
      price: 450,
      description:
        "สุดยอดชา นางงามบูรพา โดย Kyobashi กรรมวิธีการผลิตจากไร่รางวัลที่ 1 บ้านฉือ รสชาติละมุน สดชื่น มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้งป่าชัดเจน",
      tastingNotes: "น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMc0kGhJ-SU",
    },
    {
      name: "Wen Shan Bao Zhong (文山包種茶)",
      price: 400,
      description: "ชาเหวินซานเปาจ่ง อู่หลงหมักอ่อน โดย 5.21 Tea Voyage",
      tastingNotes: "สวนดอกไม้ละเอียดอ่อน สัมผัสครีมมี่ กลิ่นผลไม้สดชื่น",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Zheng Shan Xiao Zhong (正山小種)",
      price: 400,
      description:
        "ชาแดงรมควันดั้งเดิมที่ดื่มได้ เหมือนกำลังดื่มวัฒนธรรมจีน กรรมวิธีรมควันด้วยไม้สนหางม้า (Masson Pine) ที่อายุ 30–40 ปีขึ้นไป  โดย Zhennan Teahouse",
      tastingNotes:
        "กลิ่นรมควันมีเอกลักษณ์ไม้สนลึกๆ ปนความหอมแบบลำไยแห้ง กลิ่นหอมลึกติดปลายลิ้น",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Jasmine Dian Hong (茉莉滇红)",
      price: 350,
      description:
        "ชาแดงเตียนหง อบดอกมะลิสดแท้ 3 รอบด้วยกรรมวิธีแบบดั้งเดิม หาทานยาก จัดหาโดย Deng Deng",
      tastingNotes: "ดอกมะลิสีน้ำตาล คาราเมล ช็อกโกแลต ถั่ว",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Qian Tang Long Jing (钱塘龙井)",
      price: 350,
      description:
        "ชาเฉียนถังหลงจิ่ง Longjing จากแม่น้ำเฉียนถัง สายพันธุ์ #43 พัฒนาให้ได้ใบชาและคุณภาพที่ดี มีความคงทนต่อสภาพอากาศและให้ผลผลิตสม่ำเสมอ",
      tastingNotes: "มีกลิ่นหอมของถั่วลิสงคั่วและรสชาติที่สดชื่น",
      isNewFlavor: true,
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
      name: "Marco Polo Sublime",
      price: 350,
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tastingNotes: "แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมลอน ครีม มอลต์",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Fortmason",
      price: 300,
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "T2 French Earl Grey",
      price: 300,
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/C76q3M6SbjO/",
    },
    {
      name: "Lupicia Bonne Chance",
      price: 300,
      description: "ชาแดงรอยบอส (Rooibos) เบลนด์พิเศษ จากแบรนด์ท้อป Lupicia",
      tastingNotes: "พีชขาว ราสเบอรี่ ลูกพลัมป่าสีเหลือง มะม่วงสุกอ่อน",
      isNewFlavor: true,
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
      name: "Pompona Vanilla Peruvian",
      price: 500,
      description:
        "วานิลลาสายพันธุ์พิเศษ Pompona จากเปรู ปริมาณและความหลากหลายของสารอินทรีย์ให้ความหอมในฝักสูงกว่าสายพันธุ์อื่นๆ หลายเท่าตัว เป็นที่ต้องการของแบรนด์น้ำหอม luxury ชั้นนําของโลก",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMsmaFkzoCq/",
    },
    {
      name: "Queensland Macadamia",
      price: 300,
      description:
        "ถั่วแมคาเดเมีย นำเข้าจาก Australia ถิ่นกำเนิดดั้งเดิมของพืชชนิดนี้ หอมหวานมันเนยกว่าทุกพื้นที่ปลูก",
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Bronte Pistachio D.O.P.",
      price: 350,
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/C8JghMoPU4L/",
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
      name: "Aroko Porcelana Sierra de Perija Sorbet",
      price: 400,
      description:
        "สุดยอดช็อกโกแลต Criollo จาก Aroko ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวลซับซ้อน",
      tastingNotes:
        "แบล็กเบอรี่ แบล็กเคอร์แรน แยมสตอเบอรี่ ขนมปังปิ้ง รสชาติทิ้งท้ายซับซ้อน สวยงาม",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMhugIoyEGd/",
    },
    {
      name: "Marana Chuncho de Cusco Peruvian Dark Sorbet",
      price: 350,
      description:
        "สุดยอดช็อกโกแลตรางวัลระดับโลก สายพันธุ์ Chuncho แบรนด์ Marana จากเปรู",
      tastingNotes: "มะนาว ลิ้นจี่ เบอรี่ น้ำผึ้ง เฮเซลนัท อัลมอนด์",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Chocolate Ganache Ecuardorian Blend",
      price: 300,
      description:
        "ช็อกโกแลตเบลนด์พิเศษจาก Ecuardor ทานง่ายและเข้าใจง่าย ในรูปแบบช็อกโกแลตนม มี undertone  ความเปรี้ยวผลไม้เล็กน้อย",
      tastingNotes: "",
      isNewFlavor: true,
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
      name: "Miso Caramel Sando",
      price: 500,
      description:
        "ดัดแปลงจากขนม Siganture ของร้าน Sauvage ชื่อ Miso Caramel Flan ทําจากมิโซะ 5 ชนิดทั้งสายพันธุ์เดี่ยวและสายพันธุ์พิเศษ เป็นการตีความรส salted caramel รูปแบบใหม่ที่มิติล้ำ ความหวานเค็มหอมธรรมชาติจากมิโซะ ประกบด้วยแป้ง sando กรอบพิเศษหอมกลิ่นเนยคาราเมลจากเชฟ Mister Chou",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DM1m1ErT3gJ",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Midokiri Ceremonial Matcha Strawberry Latte",
      price: 450,
      description:
        "ดัดแปลงจากเครื่ื่องดื่มฟิวชั่นพิเศษ มัทฉะเกรดพิธี Midokiri จาก PAGUcha และสตอเบอรี่ specialty ผสมกับครีมจากฝรั่งเศส จัดเรียงเป็น 3  layers ให้รสชาติที่สดชื่นและสนุกไปพร้อมๆ กัน",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMzYTJOTrJ8",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Ceremonial Matcha Coconut Sorbet",
      price: 450,
      description:
        "ดัดแปลงจากเครื่องดื่มสายสุขภาพ มัทฉะน้ำมะพร้าว อัดแน่นด้วยมัทฉะเกรดพิธีชงจาก PAGUcha นัวมันหอมหวานธรรมชาติด้วยน้ำมะพร้าวสวนลุงแดง",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DGUtOV5Sx46/",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Mint Stracctiatella",
      price: 400,
      description:
        "ชื่อสามัญ มิ้นท์ช็อกชิพ รสชาติพิเศษที่หาทานได้ยาก ทำจากมิ้นต์ 5 สายพันธุ์ ให้ dynamic ของความหอมมิ้นท์หลากหลายมิติ และราดด้วยช็อกโกแลต shards จาก Amedei No.9 ที่เพิ่มความซับซ้อนของรสชาติตลอดการเดินทาง",
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/C8OlSFLvNhp/",
    },
    {
      name: "Raspberry Yogurt",
      price: 350,
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสราสเบอรี่สายพันธุ์ Berry Jewel กลิ่นเปรี้ยวหอมพิเศษ",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Black Coconut Ash",
      price: 350,
      description:
        "ไอศกรีมดัดแปลงจากขนมเปียกปูนโบราณ ทำจากกาบมะพร้าวเผา เบสกะทิสดทับสะแก ยกระดับความเป็นขนมไทย",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
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

export const tot0825: Flavor[] = [
  matcha,
  fruits,
  easternTea,
  westernTea,
  classic,
  chocolate,
  coffee,
  special,
];

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
      name: "New Coffee",
      price: 450,
      description: "",
      tastingNotes: "",
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
      name: "ฺBlood Peach (Sanguine De Savoie) Sorbet",
      price: 450,
      description: "",
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
      description: "",
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "https://www.instagram.com/p/DMkI7pbyzB2",
    },
    {
      name: "Lady Grace Strawberry Sorbet",
      price: 400,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Candy Snap (IFP) Red Grape Sorbet",
      price: 400,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Leanri King Tangerine Sorbet",
      price: 350,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Tamara King Cherry Sorbet",
      price: 350,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMqAqSyTh4u/",
    },
    {
      name: "Champagne Pink Gooseberry Sorbet",
      price: 350,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Star Wars Long Kong ลองกอง Sorbet",
      price: 300,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMfLB0Ky6NB/",
    },
    {
      name: "Loong Daeng Coconut Sorbet",
      price: 300,
      description: "",
      tastingNotes: "",
      isNewFlavor: false,
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
      tastingNotes: "",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Sakata Matabei Saemidori",
      price: 650,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Okunoyama Asahi",
      price: 600,
      description:
        "(IG) Okunoyama Asahi จากไร่เดียวกับ Narino Premium เต็มไปด้วยความนุ่มนวลของผักสด ใบไม้สด หวานธรรมชาติ ครบองค์ประกอบของมัทฉะจาก Uji",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
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
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Uji Tawara Kyoto",
      price: 450,
      description:
        "(IG) Uji Tawara Kyoto ตัวใหม่ล่าสุดจาก MTCH ที่คุณจิวสปอยล์ก่อนเลยชงลาเต้อร่อยพีคมาก ตัวนี้ตรงปกมากครับ ถั่วเขียวคั่วหน่อยๆ อัลมอนด์นิดๆ และมี mashed potato ตามมา ใครทานลาเต้ที่ร้านไปแล้ว ไว้แวะมาลองแบบไอศกรีมได้เลยครับ ไม่ผิดหวัง",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Shincha Komorebi",
      price: 450,
      description:
        "ชินฉะ หรือ ชาใหม่ จากรอบการเก็บเกี่ยวครั้งแรกในเดือนพฤษภาคม 2025 เบลนด์จากชาสามสายพันธุ์ Yabukita, Okumidori และ Samidori จัดหาโดย MTCH",
      tastingNotes: "นมผง ขนมเมอแรงค์ เค้กอัลมอนด์ วานิลลา กลิ่นหอมยาวนาน",
      isNewFlavor: false,
      instagramUrl: "",
    },
    {
      name: "Yame Saemidori",
      price: 400,
      description:
        "(IG) Yame Saemidori ตัวนี้พิเศษที่ความ floral ผสมผสานขนมปังและถั่วอบ เป็นชาจากยาเมะที่พิเศษมากตัวนึง รอบนี้เรามี Yame ดีๆ หลากหลายมากครับ ต้องมาลอง",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Midokiri",
      price: 350,
      description:
        "มัทฉะเกรดพิธี โทน Yame ที่คนไทยคุ้นเคย มีกลิ่นของถั่วเขียว เนยอะโวคาโด และมะม่วงมัน โดย PAGUcha",
      tastingNotes: "",
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
        "ชาเถี่ยกวนอิน (ทิกวนอิม) รางวัลที่ 1 จากเวทีแข่งขันประกวดชา Muzha",
      tastingNotes:
        "ผลไม้สุก ดอกไม้หลากหลายชนิด มีชั้นรสชาติหลายชั้น ความเครื่องเทศอ่อน ทิ้งปลายรสอูมามิ ไร้ความขม",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/C_4kVOUvzaF/",
    },
    {
      name: "Dong Fang Mei Ren (東方美人)",
      price: 450,
      description:
        "(เอาของ award winning ใส่ไว้ให้) ชารางวัลชมเชย 1 ดอกเหมย จากตำบลเอ๋อเหม่ย รสชาติละมุน สดชื่น มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้ง",
      tastingNotes: "น้ำผึ้ง ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMc0kGhJ-SU",
    },
    {
      name: "Wen Shan Bao Zhong (文山包種茶)",
      price: 400,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Zheng Shan Xiao Zhong (正山小種)",
      price: 400,
      description: "",
      tastingNotes: "",
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
      description: "",
      tastingNotes: "",
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
    },
    {
      name: "Fortmason",
      price: 300,
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      isNewFlavor: false,
    },
    {
      name: "T2 French Earl Grey",
      price: 300,
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      isNewFlavor: false,
    },
    {
      name: "Lupicia Bonne Chance",
      price: 300,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
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
      description: "",
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
        "แบล็กเคอร์แรนต์ สตอเบอรี่ บลูเบอร์รี่ พลัม มะม่วง ชะเอมเทศ รสชาติทิ้งท้ายซับซ้อน สวยงาม",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMhugIoyEGd/",
    },
    {
      name: "Marana Chuncho de Cusco Peruvian Dark Sorbet",
      price: 350,
      description: "",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "",
    },
    {
      name: "Chocolate Ganache Ecuardorian Blend",
      price: 300,
      description: "",
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
      price: 450,
      description:
        "ดัดแปลงจากขนม siganture ของร้าน Sauvage ชื่อ Miso Caramel Flan",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DM1m1ErT3gJ",
    },
    {
      name: "Midokiri Ceremonial Matcha Strawberry Latte",
      price: 450,
      description:
        "ดัดแปลงจากเครื่ื่องดื่มฟิวชั่นพิเศษ มัทฉะเกรดพิธี Midokiri จาก PAGUcha และสตอเบอรี่ specialty ผสมกับครีมจากฝรั่งเศส จัดเรียงเป็น 3  layers ให้รสชาติที่สดชื่นและสนุกไปพร้อมๆ กัน",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DMzYTJOTrJ8",
    },
    {
      name: "Ceremonial Matcha Coconut Sorbet",
      price: 450,
      description:
        "ดัดแปลงจากเครื่องดื่มสายสุขภาพ มัทฉะน้ำมะพร้าว อัดแน่นด้วยมัทฉะเกรดพิธีชงจาก PAGUcha นัวมันหอมหวานธรรมชาติด้วยน้ำมะพร้าวสวนลุงแดง",
      tastingNotes: "",
      isNewFlavor: true,
      instagramUrl: "https://www.instagram.com/p/DGUtOV5Sx46/",
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
      description: "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอส",
      tastingNotes: "",
      isNewFlavor: true,
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

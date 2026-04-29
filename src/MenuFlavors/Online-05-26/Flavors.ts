// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Flavor, SOLDOUT_TYPE } from "../types";

// Use this web to do conversion from csv and put it in parsedFlavours:
// https://csvjson.com/csv2json
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const parsedFlavours = [];

const fruits: Flavor = {
  id: "fruits",
  categoryButtonText: "หมวด ผลไม้ตามฤดูกาล",
  backgroundColorClass: "bg-fruits-bg",
  imageName: "fruits",
  name: "ผลไม้ตามฤดูกาล",
  items: [
    {
      isNewFlavor: false,
      name: "Savéol Gariguette Strawberry Sorbet",
      description:
        "สตรอว์เบอร์รีจากฝรั่งเศส สายพันธุ์เก่าแก่ แต่มีความพรีเมี่ยมได้ที่รับการยอมรับจากเชฟมิชลินทั่วโลก มีกลิ่นหอมดอกไม้ซิตรัส รสเปรี้ยวนำหวาน ทิ้งท้ายกลิ่นหอมยาวนาน",
      tastingNotes: "",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DXozv8_krfD",
    },
    {
      isNewFlavor: false,
      name: "ทุเรียนพันธุ์หนามดำ",
      description:
        "หนามดำ สายพันธุ์ดังจากมาเลเซีย รสชาติซับซ้อน คัสตาร์ด คาราเมลดาร์คช็อกโกแลตปลายเป็นไวน์",
      tastingNotes: "",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DWxoRmNkmFU",
    },
    {
      isNewFlavor: false,
      name: "ทุเรียนพันธุ์มูซันคิง",
      description:
        "ฉายา Hermes แห่งวงการทุเรียน รสชาติหวานมันเข้มข้น ดุดัน Full-bodied คาราเมลถั่ว หาทานยาก และราคาสูงกว่าทุเรียนทั่วไปกว่า 2 เท่าตัว จากสวนจันทวิสูตร",
      tastingNotes: "",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/C5QggKMy-qq/",
    },
    {
      isNewFlavor: false,
      name: "ทุเรียนพันธุ์กบพิกุล",
      description:
        "กบพิกุล ราชาแห่งทุเรียนตระกูลกบ สีจำปาสด รสชาติ elegant ผู้ดี หอมมัน มีจริตดอกไม้ปนความมันถั่ว",
      tastingNotes: "",
      price: 400,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "ทุเรียนพันธุ์จันทบุรี 10",
      description:
        "จันทบุรี 10 สวนอากง รวมความนกหยิบและชะนี มีความครีมมี่สูง หอมนวลลงตัว ตามด้วยโน้ตผลไม้หลากหลายชนิด",
      tastingNotes: "",
      price: 350,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Thong-dam Mango Sorbet",
      description:
        "มะม่วงทองดำ สายพันธุ์โบราณหาทานได้ยากยิ่ง กลิ่นหอมแบบป่าดงดิบเขตร้อน มีความมันและเปรี้ยวตัด",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Taiyo No Tamago Mango Sorbet",
      description:
        "มะม่วงไข่พระอาทิตย์ สายพันธุ์ที่แพงที่สุดในญี่ปุ่น หวานหอมสดชื่น มีปลายกลิ่นกะทิและสัปปะรด",
      tastingNotes: "",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/DXBXoMikWWq",
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
      name: "Tropic Beauty Yellow peach",
      description:
        "พีชเหลืองสายพันธุ์ที่หอมฉ่ำจับต้องง่าย ปลูกที่ยอดดอยขุนแจ๋ จังหวัดเชียงใหม่",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "มะยงชิดพันธุ์เพชรกลางดง",
      description:
        "มะยงชิดสายพันธุ์เพชรกลางดง มีกลิ่นหอม รสอ่อนโยน สดชื่น หวานอมเปรี้ยวเล็กๆ",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "100-Year-Old Mangosteen Sorbet",
      description:
        "สุดยอดมังคุด อายุต้น 100 ปี จากจันทบุรี หวานสดชื่นเข้มข้น อมเปรี้ยวเล็กน้อย มีกลิ่นดอกไม้เฉพาะตัว",
      tastingNotes: "",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/C6k-Em2S4bF",
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
      name: "Yame Saemidori",
      description:
        "มัทฉะพิเศษจาก Yame โดย MTCH ที่ดึงเอกลักษณ์ของสายพันธุ์ Saemidori ออกมาได้อย่างสมบูรณ์แบบ โดดเด่นด้วยอโรม่าธรรมชาติของดอกมะลิป่าและลิลลี่ แฝงกลิ่นขนมปังปิ้งอ่อนๆ และทิ้งท้ายด้วยความหอมมันนวลๆ แบบถั่วอย่างลงตัว",
      tastingNotes: "ดอกไม้หลากสี ขนมปังปิ้งอ่อนๆ ความหอมมันแบบถั่ว",
      price: 400,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Nana-Tsu-Mori",
      description:
        'มัทฉะเกรดพิธีชง จากไร่ชาในตำนาน "นานะสึโมริ" แห่งเมืองอุจิ รสชาติสมดุลระหวางความอูมามิและความหอมหวาน ถือเป็นมาตรฐานรสชาติของอุจิที่แท้จริง โดย MTCH',
      tastingNotes: "ผักโขมครีม สาหร่าย ไวท์ช็อกโกแลต อูมามิ",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DXrTx8Gkp2i",
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
      name: "Lao Cong Shui Xian",
      description:
        "ชาอู่หลงคลาสสิกจากภูเขาหวู่อี๋ แบรนด์ Sea Dyke ใช้ใบชาจากพุ่มเก่าแก่ ให้รสชาติซับซ้อนของอโรม่าแร่ธาตุ ผสานการคั่วที่มอบโทนกลิ่นไม้ชื้นและผิวโกโก้จางๆ",
      tastingNotes:
        "กลิ่นไม้ชื้น ผิวโกโก้ สัมผัสแร่ธาตุหิน (เหยียนอวิ้น) ความหวานลุ่มลึก",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DXebtazktJI/",
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
      name: "Fortmason Fortnum & Mason",
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      price: 300,
      instagramUrl: "",
    },
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
      name: "Bolero Fruit Tea Mariage Frères",
      description:
        "ชาดำเบลนด์พิเศษจาก Mariage Frères ที่นำเสนอกลิ่นอายของสวนผลไม้เมดิเตอร์เรเนียน ปราศจากความฝาด มอบความหอมหวานนุ่มนวลในทุกคำ",
      tastingNotes: "ลูกพีชขาว แอปริคอต ผลมะเดื่อ ผลไม้รวม",
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
      name: "Mexican Pompona Schiede Vanilla",
      description:
        "วานิลลาระดับตำนานคัดสรรโดย Sylvanilla จากเม็กซิโก นี่ไม่ใช่วานิลลาสายหวานละมุนทั่วไป แต่ฉีกกรอบสู่มิติที่เข้ม ลึก และซับซ้อน โดดเด่นด้วยอโรม่าของเรซิ่น บัลซามิก และเครื่องเทศ ผสานมิติของผลไม้สุกหมักบ่มที่ปลายกลิ่น เป็นรสชาติที่รังสรรค์มาเพื่อเปิดประสบการณ์วานิลลาในอีกโลกหนึ่ง",
      tastingNotes:
        "เครื่องเทศ ชะเอมเทศ น้ำส้มสายชูหมักบัลซามิก กลิ่นดอกไม้ที่ซับซ้อน และทิ้งกลิ่นยาวนาน",
      price: 650,
      instagramUrl: "https://www.instagram.com/p/DXmLLlfEo26/",
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
      name: "Fuwan 1# Ping Tung Dark Chocolate Sorbet",
      description:
        "ช็อกโกแลตระดับโลกจากไต้หวัน เจ้าของรางวัลเหรียญทองสูงสุด คัดสรรโกโก้จากแหล่งเพาะปลูกผิงตง แปรรูปแบบ Tree-to-bar ให้รสชาติที่เป็นเอกลักษณ์ของผลไม้เมืองร้อน เครื่องเทศ และคาราเมล",
      tastingNotes:
        "ผลไม้สุกเขตร้อน เช่น มะม่วง มะนาวเทศ หรือสับปะรดสุก กลางคำคล้ายอัลมอนด์ เฮเซลนัต พื้นหลังมีความอุ่นแบบเครื่องเทศอ่อน ๆ",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DQyHWUckgzG",
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
      name: "Ispahan",
      description:
        "รสชาติพิเศษ หาทานได้ยากไม่กี่ครั้งต่อปี มี 2 เลเยอร์ของรสชาติ ทำจากลิ้นจี่สดสายพันธุ์กระโหลกใบขิง ราสเบอร์รี่สายพันธุ์ Berry Jewel และกุหลาบ Damask ถอดและตีความใหม่จากขนมมาการองสุดคลาสสิคของ Pierre Hermes",
      tastingNotes: "",
      price: 500,
      instagramUrl: "https://www.instagram.com/p/DXs-tGjkexP",
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

export const online0526: Flavor[] = [
  matcha,
  fruits,
  easternTea,
  westernTea,
  classic,
  chocolate,
  special,
];

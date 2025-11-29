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
      name: "Gesha Village Gaylee Coffee",
      isNewFlavor: true,
      price: 450,
      description:
        "กาแฟเกชา วิลเลจ (Gesha Village Gaylee) จากแหล่งปลูกระดับตำนานในเอธิโอเปีย คัดสรรสายพันธุ์หายาก Illubabor Forest จากบล็อก Gaylee ริมแม่น้ำ Yetgordon ที่ความสูง 1,982 เมตร ซึ่งมีไอเย็นช่วยชะลอการสุกของเชอร์รี่ ทำให้สะสมสารอาหารได้เต็มที่",
      tastingNotes:
        "พีช ดอกมะลิ เบอร์กาม็อต แอปริคอต ดอกสายน้ำผึ้ง เลม่อน ตะไคร้ หวานฉ่ำน้ำ ทิ้งรสชาติยาวนาน",
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
      name: "Cacao Juice Sorbet",
      isNewFlavor: true,
      price: 300,
      description:
        "หนึ่งในรสชาติที่ทั้งแปลกใหม่และเปี่ยมด้วยความเป็นธรรมชาติ ใช้น้ำผลจาก เนื้อในฝักโกโก้สด (Cacao Pulp) ซึ่งปกติห่อหุ้มเมล็ดโกโก้ไว้ภายใน ผลไม้ที่มักถูกมองข้ามในการผลิตช็อกโกแลต กลับให้รสชาติที่สดใสและละเอียดอ่อนอย่างน่าทึ่งหอมหวานแบบผลไม้เมืองร้อน ผสมโทน floral–citrus คล้าย มังคุดสุกและลิ้นจี่ จากบ้านสวนเจริญดี ประจวบคีรีขันธ์",
      tastingNotes: "",
      instagramUrl: "",
    },
    {
      name: "Beurre Hardy Pear Sorbet",
      isNewFlavor: true,
      price: 350,
      description:
        "ลูกแพรสายพันธุ์ฝรั่งเศสเก่าแก่ที่ขึ้นชื่อเรื่องกลิ่นหอมหวานฟุ้ง แบบลูกแพร์สุกผสมกลิ่นดอกไม้ขาวและน้ำผึ้งอ่อนๆ รสชาติสดใส นุ่มนวล และชุ่มฉ่ำ มีทั้งโทนหวานธรรมชาติและเปรี้ยวบางจากผลไม้สด สัมผัสเบา ละเอียด และละลายเหมือนแพร์สดบดละเอียด มีความเย็นสบายในลำคอ",
      tastingNotes: "",
      instagramUrl: "",
    },
    {
      name: "Centennial Green Grape Sorbet",
      isNewFlavor: true,
      price: 350,
      description:
        "องุ่นเขียวสายพันธุ์เซนเทนเนียล ผลใหญ่ เนื้อแน่นกรอบ รสชาติหวานจัดและหอมกลิ่นมัสกัต (Muscat) ชัดเจน สดชื่นเหมือนทานเจลลี่ผลไม้",
      tastingNotes: "",
      instagramUrl: "",
    },
    {
      name: "Sable Black Grape Sorbet",
      isNewFlavor: true,
      price: 400,
      description:
        "องุ่นแดงสายพันธุ์พิเศษหวานเปรี้ยวชวนนึกถึงลูกอมสตอเบอรี่ เมล่อน สัปปะรด ไวน์แดง",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DRJ4TjUEr1h",
    },
    {
      name: "Miyagawa Satsuma Sorbet",
      isNewFlavor: true,
      price: 400,
      description:
        "ส้มมิยากาวะสายพันธุ์ Wase ต้นตำรับจากฟุกุโอกะ เก็บเกี่ยวขณะที่เปลือกยังเป็นสีเขียวสดแต่เนื้อในสุกฉ่ำ ให้รสเปรี้ยวสดชื่นตัดหวานลึกคล้ายเกรปฟรุตผสมส้มคลีเมนไทน์ หอมน้ำมันหอมระเหยจากผิวส้มเขียว กลิ่นดอกไม้ขาว และสมุนไพรสด",
      tastingNotes: "",
      instagramUrl: "",
    },
    {
      name: "Cox's Orange Pippin Apple Sorbet",
      isNewFlavor: true,
      price: 400,
      description:
        "แอปเปิล Cox’s Orange Pippin มรดกอังกฤษปี 1825 เน้นรสชาติความอร่อยเป็นหัวใจสูงสุด หวานละมุนกลิ่นน้ำผึ้งและลูกแพร์ ตัดเปรี้ยวสดชื่นโทนส้มและเชอรี่ ให้กลิ่นหอมดอกไม้ซับซ้อนราวกับน้ำหอม",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DRUYEb8Ehfi",
    },
    {
      name: "Fresh Yuzu Sorbet",
      isNewFlavor: true,
      price: 450,
      description:
        "ยูซุสดจากจังหวัด Kochi ซึ่งเป็นแหล่งปลูกยูซุที่มีชื่อเสียงที่สุดของญี่ปุ่น ผลไม้จากภูเขาในโคจิขึ้นชื่อเรื่องกลิ่นหอมเข้มข้น เปลือกหนาและน้ำหอมแรง เข้มข้น แต่มีรสเปรี้ยวที่กลมและสะอาด ไม่กัดลิ้นเหมือนเลมอนทั่วไป ได้กลิ่นหวานฝาดของเปลือก เหมือนได้ทานผลสดทั้งลูก",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DQqRsI6kslG",
    },
    {
      name: "Nakajima Rainbow Kiwi Sorbet",
      isNewFlavor: true,
      price: 450,
      description:
        "กีวีสีรุ้ง (Rainbow Red) จากเมือง Yame ฟุกุโอกะ เอกลักษณ์แกนกลางสีแดงสด (Red Sunburst) ผิวเนียนไร้ขนที่หาทานยากรสหวานอมเปรี้ยวเข้มข้น หอมกลิ่นเบอร์รี่และผลไม้เมืองร้อนชัดเจน สดชื่นฉ่ำน้ำเหมือนทานผลสดจากสวน",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DQ56BBbkpN9",
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
      name: "Midokiri",
      isNewFlavor: false,
      price: 350,
      description:
        "มัทฉะเกรดพิธี โทน Yame ที่คนไทยคุ้นเคย ทานง่าย เข้าใจง่าย โดย PAGUcha",
      tastingNotes: "ถั่วเขียว ถั่วลันเตา เนยอะโวคาโด มะม่วงมัน",
      instagramUrl: "",
    },
    {
      name: "Yame C-03",
      isNewFlavor: true,
      price: 400,
      description:
        "มัทฉะเกรดพิธีชง เบลนด์พิเศษจาก Yame รสชาติที่คนไทยชื่นชอบ จัดหาโดย Osha Ocha",
      tastingNotes: "ถั่วอัลมอนด์คั่วอ่อน ครีมคัสตาร์ด หอมกลิ่นดอกไม้อ่อนสีขาว",
      instagramUrl: "",
    },
    {
      name: "Yame No.1",
      isNewFlavor: false,
      price: 450,
      description:
        "มัทฉะเกรดพิธีชง เบลนด์พิเศษจาก Yame รสชาติที่คนไทยชื่นชอบ จัดหาโดย Osha Ocha",
      tastingNotes: "แซลมอนย่าง ไม้รมควัน ถั่วเคลือบช็อกโกแลต ดอกไม้สีเหลือง",
      instagramUrl: "https://www.instagram.com/p/DQ_2sEXkv3b",
    },
    {
      name: "Nana Tsu-Mori",
      isNewFlavor: true,
      price: 450,
      description:
        'มัทฉะเกรดพิธีชง จากไร่ชาในตำนาน "นานะสึโมริ" แห่งเมืองอุจิ รสชาติสมดุลระหวางความอูมามิและความหอมหวาน ถือเป็นมาตรฐานรสชาติของอุจิที่แท้จริง โดย MTCH',
      tastingNotes: "ผักโขมครีม สาหร่าย ไวท์ช็อกโกแลต อูมามิ",
      instagramUrl: "https://www.instagram.com/p/DQOtHDLE4Us/",
    },
    {
      name: "Kyoken",
      isNewFlavor: true,
      price: 450,
      description:
        "มัทฉะเกรดพิธีชง ปลูกบนภูเขาในเขต Minamiyamashiro พื้นที่ชั้นเลิศของ Uji",
      tastingNotes:
        "หอมละมุนแบบพืชอ่อน ผสมกลิ่นถั่วคั่วเบา ๆ และมอสญี่ปุ่น อุมามิแน่นแต่สงบ มีความกลมกล่อมแบบคัสตาร์ดและนมสด จบด้วยความหวานคล้ายเมลอนเขียว",
      instagramUrl: "",
    },
    {
      name: "Shirobana",
      isNewFlavor: true,
      price: 500,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากดินภูเขาเมือง Yame มัทฉะที่เกิดจากการผสมผสานระหว่างความประณีตและความอบอุ่น  จัดหาโดย Osha Ocha",
      tastingNotes:
        "มีสเน่ห์ของ ocean tone แต่ก็ให้กลิ่นและรสอ่อนโยนแบบขนมปังอบใหม่ เนยละลาย ปิดท้ายด้วยไม้รมควันเบาๆ",
      instagramUrl: "https://www.instagram.com/p/DQ_2sEXkv3b",
    },
    {
      name: "Okabe Samidori",
      isNewFlavor: true,
      price: 550,
      description:
        "มัทฉะสายพันธุ์ซามิโดริจากแหล่งปลูกโอคาเบะ จังหวัดชิซูโอกะ โดดเด่นด้วยสีเขียวมรกตและเนื้อสัมผัสที่เนียนนุ่มดุจกำมะหยี่ ความขมน้อย โดย Osha Ocha",
      tastingNotes:
        "ความอูมามิกลมกล่อม คล้ายมันกุ้งเผาและ ซุป miso ปู แทรกด้วยความมันนวลของ avocado และผลไม้สุก กลิ่นทะเลอ่อนๆ ให้ความรู้สึกสะอาดและสงบ เป็นมัทฉะที่มอบความจริงใจของผู้ปลูกในทุกคํา",
      instagramUrl: "https://www.instagram.com/p/DQ_2sEXkv3b",
    },
    {
      name: "Yame No Sora",
      isNewFlavor: false,
      price: 600,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากไร่ชาเก่าแก่อายุกว่า 300 ปี ณ เมือง Yame จัดหาโดย PAGUcha",
      tastingNotes:
        "หอมมันถั่วแมคาเดเมียอบ เฮเซลนัทคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
      instagramUrl: "https://www.instagram.com/p/DMXeIK9ScYb",
    },
    {
      name: "Narino Premium 2025",
      isNewFlavor: false,
      price: 800,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Narino จากแบรนด์ Horii Shichimeien",
      tastingNotes:
        "ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      instagramUrl: "https://www.instagram.com/p/C_BP1v2yTdh/",
    },
    {
      name: "Tsujiki Asahi 2025",
      isNewFlavor: true,
      price: 850,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากไร่ชนะรางวัลหลายปีซ้อน Tsujiki โดย Mori TeaHouse ล็อตประจําปี 2025",
      tastingNotes:
        "กลิ่นหอมของ สาหร่ายอ่อน ขนมปังอบสดใหม่ ถั่วลันเตาสด เต็มไปด้วยความครีมมี่ อุมามิ ลื่นคอ ปราศจากความขม ปิดท้ายด้วยความหวานใสแบบ น้ำผึ้งบนใบไม้สดยามเช้า",
      instagramUrl: "https://www.instagram.com/p/DRO9ybrEjib/?img_index=1",
    },
    {
      name: "Private-Label Exclusivity: Competition Grade and No.1 Award-Winning Matcha from MTCH",
      isNewFlavor: true,
      price: 900,
      description:
        "มัทฉะเกรดพิธีชงสูงสุด ชนะรางวัลประกวดอันดับ 1 จากหลายเวที ประจําปี 2025 รสชาติเข้มข้น มีมิติลึก หรูหรา ได้รับความเอื้อเฟื้อจาก MTCH ผู้ถือสิทธิ์ตัวแทนมัทฉะพิเศษนี้ ให้สงวนชื่อทรัพย์สินทางการค้า",
      tastingNotes:
        "กลิ่นหอมไอทะเล อูมามิสาหร่ายย่าง ละเอียดลึก คล้ายสาหร่ายโนริผสมเปลือกถั่วและเปลือกไม้หวานบางๆ แทรกด้วยกลิ่น มะเขือเทศเขียว แตงกวา และ shio kombu (สาหร่ายเค็มญี่ปุ่น) กลิ่นหลังมีโทนของ น้ำมันงาอ่อน ๆ มีความกลมและความอบอุ่นในบอดี้ เนื้อสัมผัสครีมมี่เหมือนกำมะหยี่ โทนรสหวานของ sweet malt วานิลลา คัสตาร์ด ปรากฏชัดบนเพดานปากเมื่อกลืน จบด้วย aftertaste ที่ สะอาด เย็น และใสเหมือนกลิ่นทะเลยามรุ่งเช้า",
      instagramUrl: "https://www.instagram.com/p/DRLpQc8E0NU/?img_index=1",
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
      name: "Jasmine Dian Hong (茉莉滇红)",
      isNewFlavor: false,
      price: 350,
      description:
        "ชาแดงเตียนหง อบดอกมะลิสดแท้ 3 รอบด้วยกรรมวิธีแบบดั้งเดิม หาทานยาก จัดหาโดย Deng Deng",
      tastingNotes: "ดอกมะลิสีน้ำตาล คาราเมล ช็อกโกแลต ถั่ว",
      instagramUrl: "https://www.instagram.com/p/DMc0kGhJ-SU",
    },
    {
      name: "Qilan (奇兰)",
      isNewFlavor: true,
      price: 400,
      description:
        "ชาฉีหลาน (กล้วยไม้หายาก) ชาอูหลงหยานชาจากเขาวู่อี๋ โดดเด่นด้วยกลิ่นหอมแหลมสูงของดอกกล้วยไม้ป่า ผสานกลิ่นแร่ธาตุจากโขดหินอันเป็นเอกลักษณ์",
      tastingNotes:
        "ผลไม้สุกหวาน ดอกไม้หลากหลายชนิด มีชั้นรสชาติหลายชั้น ความเครื่องเทศอ่อน ทิ้งปลายรสหวานอูมามิ ไร้ความขม",
    },
    {
      name: "Jin Guan Yin (金观音)",
      isNewFlavor: true,
      price: 500,
      description:
        "ชากวนอินทอง เกิดจากการผสมผสานระหว่างสายพันธุ์ เถี่ยกวนอิน กับชาทองของท้องถิ่น ทำให้มีเอกลักษณ์เฉพาะตัว ทั้งความหอมของอูหลงและความสดของชาเขียว เหมาะสำหรับช่วงที่อยากได้ความผ่อนคลายแต่ยังคงความกระปรี้กระเปร่าในรส จัดหาโดย Zhong.bkk",
      tastingNotes:
        "กลิ่นหอมละมุนของดอกไม้ขาวและผลไม้สุกบางเบา แต่ไม่หวานจัด มีความเขียวสะอาดแบบใบชาอ่อนที่เพิ่งผ่านไอน้ำ รสชาตินุ่ม เย็นคอ และจบด้วยโน้ตหวานธรรมชาติคล้ายกล้วยหอมและหญ้าอ่อน",
      instagramUrl: "",
    },
    {
      name: "Huang Jin Gui Tie Guan Yin (黄金桂铁观音)",
      isNewFlavor: true,
      price: 500,
      description:
        "ชาอู่หลงไต้หวันยุคใหม่ ที่เน้นความหอมสะอาด สดใส และคั่วเบา เพื่อให้กลิ่นธรรมชาติของใบชาฉายชัดที่สุด โดย Kyobashi",
      tastingNotes:
        "ดอก osmanthus ขาว, แอปเปิ้ล, และกลิ่นหญ้าหลังฝนตก รสสดชื่น มีความหวานธรรมชาติ ลื่นคอแบบ สัมผัสเบาแต่มีโครงรสชัด เป็นชาแนว clean floral ที่หอมละเมียด ทิ้งรสชาติท้าย ยาว นุ่ม และเย็นแบบดอกไม้ในอากาศภูเขา สัมผัสครีมมี่ กลิ่นผลไม้สดชื่น",
      instagramUrl: "https://www.instagram.com/p/DRHWFqHkktC",
    },
    {
      name: "21-Year Aged Pu'er (普洱)",
      isNewFlavor: true,
      price: 550,
      description:
        "ชาผูเอ๋อร์สุกเกรดพรีเมียมจากยูนนาน อายุ 21 ปี ผ่านการหมักบ่มจนได้รสชาติที่ลึกซึ้ง เข้มข้น ให้ความรู้สึกอบอุ่นและผ่อนคลาย จัดหาโดย Zhong.bkk",
      tastingNotes: "ดินชื้น ไม้หอม ข้าวเหนียว อินทผลัมแห้ง",
      instagramUrl: "https://www.instagram.com/p/DQt-TE9Esvi",
    },
    {
      name: "Exclusive Dong Fang Mei Ren (東方美人) 2025 from The Tea Research and Extension Station (TRES), Taiwan",
      isNewFlavor: true,
      price: 600,
      description:
        "สุดยอดชา นางงามบูรพา โดยสถาบันวิจัยชาไต้หวัน ผู้รวบรวมและพัฒนาชาของไต้หวัน รสชาติคือมาตรฐานและอุดมคติที่ชาแต่ละชนิดควรจะเป็น",
      tastingNotes: "น้ำผึ้งป่า ดอกไม้ป่า ผลไม้สุก พีช แพร์",
      instagramUrl: "",
    },
    {
      name: "Jin Jun Mei (金駿眉)",
      isNewFlavor: true,
      price: 700,
      description:
        "ชาจินจุนเหมย (คิ้วอาชาทองคำ) ราชินีแห่งชาแดง จากแหล่งผลิตแท้ดั้งเดิม อู่อี๋ซาน มณฑลฝูเจี้ยน ใช้เฉพาะยอดอ่อนนับหมื่นยอด รสชาติหวานนุ่มนวล ไร้รสฝาด จัดหาโดย Zhong.bkk",
      tastingNotes: "น้ำผึ้งใส มันหวาน ดอกไม้ ผลไม้แห้ง",
      instagramUrl: "https://www.instagram.com/p/DRSEuKIkqYx",
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
      name: "T2 Pomegranate",
      isNewFlavor: true,
      price: 300,
      description:
        "ชาดำรสเปรี้ยวหวานสดชื่นจาก T2 Australia ผสมผสานทับทิมสีแดงสด ให้ความรู้สึกกระปรี้กระเปร่าและหอมผลไม้เบอร์รี่",
      tastingNotes: "ทับทิม เบอร์รี่เปรี้ยว ดอกชบา กุหลาบ",
      instagramUrl: "https://www.instagram.com/p/DQ8kGMXEvZA",
    },
    {
      name: "T2 French Earl Grey",
      isNewFlavor: false,
      price: 300,
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      instagramUrl: "https://www.instagram.com/p/C76q3M6SbjO/",
    },
    {
      name: "Bolero Fruit Tea",
      isNewFlavor: false,
      price: 300,
      description:
        "ชาดำเบลนด์พิเศษจาก Mariage Frères ที่นำเสนอกลิ่นอายของสวนผลไม้เมดิเตอร์เรเนียน ปราศจากความฝาด มอบความหอมหวานนุ่มนวลในทุกคำ",
      tastingNotes: "ลูกพีชขาว แอปริคอต ผลมะเดื่อ ผลไม้รวม",
      instagramUrl: "",
    },
    {
      name: "Fortmason",
      isNewFlavor: false,
      price: 300,
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      instagramUrl: "",
    },
    {
      name: "Marco Polo Sublime",
      isNewFlavor: false,
      price: 350,
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tastingNotes: "แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมลอน ครีม มอลต์",
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
      name: "Greek Aegina Pistachio PDO",
      isNewFlavor: true,
      price: 300,
      description:
        "ถั่วพิสตาชีโอจากเกาะเอกินะ ประเทศกรีซ ที่ได้รับเครื่องหมายรับรอง PDO ใช้วิธีตากแดดธรรมชาติ ทำให้มีความหวานหอมและเนื้อสัมผัสที่นุ่มนวลเป็นเอกลักษณ์",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/C8JghMoPU4L/",
    },
    {
      name: "Turkish Gaziantep Pistachio",
      isNewFlavor: false,
      price: 300,
      description:
        "พิสตาชีโอจากตุรกี สายพันธุ์ Antep สุดพรีเมี่ยม มีความหวานนำมัน กลิ่นเขียวสดคลาสสิก ผสานกลิ่นอายชองเครื่องเทศตะวันออกกลางเอกลักษณ์",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/C8JghMoPU4L/",
    },
    {
      name: "Red Rock Macadamia",
      isNewFlavor: true,
      price: 350,
      description:
        "แมคคาเดเมียจากดินภูเขาไฟสีแดงในออสเตรเลีย ถิ่นกำเนิดดั้งเดิม ให้รสชาติที่มันเนยและเข้มข้นกว่าแมคคาเดเมียทั่วไป มีกลิ่นหอมของดินและถั่วคั่วชัดเจน",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DQWqO67kv0Q",
    },
    {
      name: "Bronte Pistachio D.O.P.",
      isNewFlavor: false,
      price: 350,
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/C8JghMoPU4L/",
    },
    {
      name: "Cribbiana Chesibik Vanilla Guatemala",
      isNewFlavor: true,
      price: 500,
      description:
        "วานิลลาสายพันธุ์พิเศษ  ปริมาณและความหลากหลายของสารอินทรีย์ให้ความหอมในฝักสูงกว่าสายพันธุ์อื่นๆ หลายเท่าตัว เป็นที่ต้องการของแบรนด์น้ำหอม luxury ชั้นนําของโลก",
      tastingNotes: "",
      instagramUrl: "",
    },
    {
      name: "Blue Vanilla (Vanille Bleue)",
      isNewFlavor: false,
      price: 500,
      description:
        "วานิลลาสีน้ำเงิน (Vanille Bleue) จากเกาะเรอูนียง กรรมสิทธิ์การผลิตเฉพาะโดย Escale Bleue  ที่ทำให้ฝักยังคงสดและกินได้ทั้งเปลือก ให้กลิ่นหอมควันไฟ ดอกไม้ และไม้รมควัน มากกว่าวานิลลาทั่วไป คว้ารางวัล Superior Taste Award",
      tastingNotes: "ไม้รมควัน ชา lapsang souchong สมุนไพร ช็อกโกแลค คาราเมล",
      instagramUrl: "https://www.instagram.com/p/DDHfreQSFo5/",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
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
      name: "A.Morin République Dominicaine Yamasà",
      isNewFlavor: true,
      price: 350,
      description:
        "ช็อกโกแลต Single Origin จากไร่ Yamasà สาธารณรัฐโดมินิกัน โดยตระกูลนักทำช็อกโกแลตเก่าแก่ของฝรั่งเศส A.Morin โดดเด่นด้วยความเข้มข้นและรสเปรี้ยวสดชื่น",
      tastingNotes: "ผลไม้ตากแห้ง คาราเมล มอล์ต",
      instagramUrl: "",
    },
    {
      name: "Fuwan 1# Ping Tung Dark Chocolate Sorbet",
      isNewFlavor: true,
      price: 400,
      description:
        "ช็อกโกแลตระดับโลกจากไต้หวัน เจ้าของรางวัลเหรียญทองสูงสุด คัดสรรโกโก้จากแหล่งเพาะปลูกผิงตง แปรรูปแบบ Tree-to-bar ให้รสชาติที่เป็นเอกลักษณ์ของผลไม้เมืองร้อน เครื่องเทศ และคาราเมล",
      tastingNotes:
        "ผลไม้สุกเขตร้อน เช่น มะม่วง มะนาวเทศ หรือสับปะรดสุก กลางคำคล้ายอัลมอนด์ เฮเซลนัต พื้นหลังมีความอุ่นแบบเครื่องเทศอ่อน ๆ",
      instagramUrl: "https://www.instagram.com/p/DQyHWUckgzG",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Agnes and Pierre Chiapas Mexique Chocolate",
      isNewFlavor: true,
      price: 400,
      description:
        "ช็อกโกแลตจากแคว้นเชียปาส ประเทศเม็กซิโก แหล่งกำเนิดอารยธรรมมายา ให้รสชาติที่อบอุ่นและเครื่องเทศ อันเป็นเอกลักษณ์ของดินแดนภูเขาไฟ",
      tastingNotes: "ผลไม้สีเหลือง ถั่วอัลมอนด์คั่ว ไม้หอม ยาสูบอ่อน",
      instagramUrl: "https://www.instagram.com/p/DRMfY-lkqpb",
    },
    {
      name: "Nacional Arriba Chocolate Sorbet (To'ak)",
      isNewFlavor: false,
      price: 400,
      description:
        "หนึ่งในช็อกโกแลตที่แพงและหายากที่สุดในโลก ทำจากสายพันธุ์ Nacional โบราณที่เกือบสูญพันธุ์จากเอกวาดอร์ บ่มในถังไม้โอ๊ค รสชาติซับซ้อนลึกซึ้งราวกับไวน์ชั้นเลิศ",
      tastingNotes: "ซิตรัส เรซิ่น เครื่องเทศ แอปเปิ้ลเขียว วานิลลา คาราเมล",
      instagramUrl: "https://www.instagram.com/p/C7vnzoSSYqt/",
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
      isNewFlavor: false,
      price: 350,
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสบลูเบอร์รี No.1 สายพันธุ์พิเศษ",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DAK3sW6vIgY/?img_index=1",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Grand Cru Olive Oil with 25-Year Aged Balsmic Vinegar",
      isNewFlavor: true,
      price: 450,
      description:
        "เบสไอศกรีมจากน้ำมันมะกอก Grand Cru ของ Frantoio Pugliese Galantino ที่ให้บอดี้เนื้อเนียนนุ่มลื่นเป็นพิเศษ ท็อปด้วยน้ำมันมะกอกสายพันธุ์ Coratina กลิ่นหอมสดชื่นของหญ้าและใบมะเขือเทศ สอดแทรกเลเยอร์ด้วยบัลซามิกวินิการ์ Extravecchino อายุ 25 ปี รสข้นหนืดหอมลูกพรุนและไม้บ่ม ตัดปลายลิ้นด้วยดอกเกลืออย่างสมบูรณ์",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DREdHdiEsUO",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Milk Chocolate with Candied Kamquat",
      isNewFlavor: true,
      price: 450,
      description:
        "เบสช็อกโกแลตนม Amedei ผสมกับความสดใสของ ส้มกัมควอตเชื่อม (Candied Kumquat) จากเชฟแอม Sauvage โดยใช้วิธี Sous-vide เชื่อมด้วยความร้อนต่ำ 80°C นาน 1 ชั่วโมง เพื่อให้เนื้อส้มใส ฉ่ำ และคงกลิ่นหอมธรรมชาติ เปลือกส้มและน้ำส้มเคี่ยวไฟอ่อนจนข้นเป็นเพสต์ เข้มกลิ่นและให้รสส้มชัดเจน จากนั้นปรับสมดุลด้วย orange blossom water และ Grand Marnier เพื่อเพิ่มกลิ่นหอมแบบดอกไม้และคาราเมลเบาๆ ให้รสลึกและซับซ้อน หวานพอดี ชวนให้นึกถึงคริสต์มาสในแบบอบอุ่นใจ",
      tastingNotes: "",
      instagramUrl: "",
    },
    {
      name: "Tahitian Vanilla Straciatella (Choc Chip)",
      isNewFlavor: false,
      price: 500,
      description:
        "วานิลลา Tahitian รสชาติซับซ้อนด้วยความหอมหวาน และกลิ่นดอกไม้ และ เครื่องเทศ ตัดกับช็อกโกแลตชิพ Amedei ที่มีความละมุนและมิติล้ำลึก ใช้เทคนิคแบบ stracciatella โดยราด shards of melted Amedei chocolate ลงในไอศกรีมที่กำลังปั่นอย่างช้าๆ จนแข็งตัวเป็นเส้นบางกรุบละลายได้เมื่อสัมผัสลิ้น",
      tastingNotes: "",
      instagramUrl: "",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Baron Bigod Tart",
      isNewFlavor: false,
      price: 500,
      description:
        "ชีสรางวัล World Cheese Awards และได้รับการโหวตเป็นชีสสไตล์ Brie ที่ดีที่สุดในสหราชอาณาจักร ทำจากนมวัวสายพันธุ์ Montbeliarde ดัดแปลงเป็นขนมแทรกด้วย แป้งทาร์ตสุดพิเศษ (มีส่วนประกอบของถั่ว)",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DRPTuIwkuAD",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Hazelnuts and White Chocolate Truffle",
      isNewFlavor: false,
      price: 550,
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสานรสชาติสุด luxury ของเห็ดทรัฟเฟิลขาวฤดูหนาวในไวท์ช็อกโกแลต และ Piedmont เฮเซลนัท รสชาติที่เป็นที่ต้องการที่สุดในปี 2024",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DDO6aKbSMnW",
    },
    {
      name: "Cookies n' Cream\n(Dark Chocolate Cookies and Tahitian Vanilla Cream)",
      isNewFlavor: true,
      price: 550,
      description:
        "คุกกี้ดาร์กช็อกโกแลตสูตรเข้มข้นที่คัดสรรโกโก้คุณภาพเยี่ยม อบสดใหม่เพื่อให้ได้รสสัมผัสกรุบกรอบโดย Sauvage ตัดกับความหอมละมุนของครีมวานิลลาตาฮิติอย่างลงตัว สร้างมิติใหม่ของรสชาติที่หรูหราและน่าจดจำ",
      tastingNotes: "",
      instagramUrl: "https://www.instagram.com/p/DRWDU1qE5Ex/?img_index=1",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Chianti Mulled Wine Sorbet (On-site Only)",
      isNewFlavor: true,
      price: 600,
      description:
        "ใช้ไวน์แดง Castello di Gabbiano Chianti จากแคว้น Tuscany เป็นฐานหลัก ผสานกับเครื่องเทศคริสต์มาสแบบยุโรป อบเชย, กานพลู, ส้ม, และออลสไปซ์ เคี่ยวอย่างช้า ๆ จนได้กลิ่นหอมลึกและรสไวน์เข้มแต่ละมุน ก่อนนำมาทำเป็นซอร์เบต์\nรสชาติพิเศษที่สร้างขึ้นเฉพาะสำหรับเสิร์ฟหน้างานเท่านั้น เพื่อให้คงไว้ซึ่งอุณหภูมิและเนื้อสัมผัสที่สมบูรณ์แบบ ซึ่งไม่สามารถขนส่งได้ในรูปแบบปกติ",
      tastingNotes: "",
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

export const tot1225: Flavor[] = [
  matcha,
  fruits,
  easternTea,
  westernTea,
  classic,
  chocolate,
  coffee,
  special,
];

import { Flavor, SOLDOUT_TYPE } from "../types";

const fruits: Flavor = {
  id: "fruits",
  categoryButtonText: "หมวด ผลไม้ตามฤดูกาล",
  backgroundColorClass: "bg-fruits-bg",
  imageName: "fruits",
  name: "ผลไม้ตามฤดูกาล",
  items: [
    {
      name: "Crown Musk Melon Sorbet",
      description:
        "ฉายามงกุฏแห่งเมล่อนทั้งปวง จาก Shizuoka รสชาติหวานหอมกลิ่นเหมือน deer musk ทิ้งท้ายสดชื่นยาวนาน",
      price: 450,
    },
    {
      name: "Fragolina Strawberry Grapes Sorbet",
      description:
        "องุ่นดำรุ่นพิเศษจาก Tuscany รสชาติหอมไปด้วยกลิ่นสตอเบอร์รี่และผลไม้เบอร์รี่หลากชนิด",
      price: 450,
    },
    {
      name: "Pearl Blush White Peach Sorbet",
      description:
        "พีชขาวเกรดสูงสุด รุ่น No.1 จากสเปน หอมฟุ้งจริตกลิ่นดอกไม้และเบอร์รี่",
      price: 400,
    },
    {
      name: "Muscat Beauty Grapes Sorbet",
      description:
        "องุ่นเขียวอมชมพูน้ำตาลสายพันธุ์ muscat ชนิดพิเศษ หวานหอมกลิ่นดอกไม้เอกลักษณ์ ของไวน์ muscatel",
      price: 400,
    },
    {
      name: "Kasugai Hikawa Hakuhou Peach Sorbet",
      description:
        "พีชสายพันธุ์พิเศษจาก Yamanashi มีกลิ่นหอมหวานที่ฟุ้งกลิ่นโคล่าคาราเมลและดอกไม้ ความหวานขั้นต่ำ 12 Brix",
      price: 400,
    },
    {
      name: "Charentais Melon Sorbet",
      description:
        "เมล่อนสีส้ม มรดกจากสรวงสวรรค์ของฝรั่งเศส หวานพอเหมาะ และกลิ่นหอมฟุ้งเอกลักษณ์เหนือสายพันธุ์อื่นๆ",
      price: 400,
    },
    {
      name: "Candy Snap Grapes Sorbet",
      description:
        "องุ่นแดงสายพันธุ์พิเศษ ปรับปรุงขึ้นให้มีจริตของเมล่อน เบอร์รี่และลูกอม",
      price: 400,
    },
    {
      name: "No.1 Marion Regan Strawberries Sorbet",
      description:
        "สตรอว์เบอร์รีจากสหราชอาณาจักร เกรดสูงสุดจาก Kent ผู้ผลิต generation ที่ 5 มีกลิ่นหอมหวานฉ่ำ นำความเปรี้ยว",
      price: 400,
    },
    {
      name: "No.1 Berry Jewel Raspberries Sorbet",
      description:
        "ราสเบอร์รี่รุ่นพิเศษจากสหราชอาณาจักร กลิ่นหอมพิเศษ ความหวานและเปรี้ยวลงตัว ทิ้งท้ายสดชื่น",
      price: 400,
    },
    {
      name: "Delbard Estivale Apple Sorbet",
      description:
        "แอปเปิ้ลยุคร่วมสมัยที่ผ่านการปรับปรุงสายพันธุ์ มีกลิ่นหอมดอกไม้ แพร์ ซิตรัส",
      price: 350,
    },
    {
      name: "Tarocco Ippolito (Venus Beloved Red) Blood Orange Sorbet",
      description:
        "ส้มเลือดรุ่นแรกของฤดูกาล จากออสเตรเลีย กลิ่นหอมซับซ้อน รสชาติเข้มข้น หวานฉ่ำ มีเทสโน้ตของเบอร์รีสีแดง",
      price: 350,
    },
    {
      name: "Amber Blush Yellow Peach Sorbet",
      description:
        "พีชเหลืองเกรดสูงสุด รุ่น No.1 จากสเปน เปรี้ยวหวานหอมเข้มข้น",
      price: 350,
    },
    {
      name: "American Regina Cherries Sorbet",
      description:
        "เชอร์รี่สายพันธุ์ Regina มีน้ำตาลธรรมชาติและกรดในปริมาณที่สมดุล กลิ่นเชอร์รี่คลาสสิกเข้มข้น",
      price: 300,
    },
    {
      name: "Afourer Mandarin Sorbet",
      description:
        "ส้ม Mandarin จากออสเตรเลีย รสชาติเปรี้ยวหวานเข้มข้น มิติกลิ่นลึกและยาวนาน",
      price: 300,
    },
    {
      name: "100-Year-Old Mangosteen Sorbet",
      description:
        "มังคุดต้นอายุร้อยปี จากสวนนายดำ จังหวัดชุมพร เข้มข้นหอมกลิ่นดอกไม้โทนเย็นสดชื่น",
      price: 250,
    },
    {
      name: "Uttradit Longkong Sorbet",
      description:
        "ลองกองจากอุตรดิตถ์ กลิ่นหอมเอกลักษณ์ชัดเจน สัมผัสเนียนข้น เปรี้ยวหวานสดชื่น",
      price: 250,
    },
    {
      name: "Thap Sakae Coconut Milk Sorbet",
      description:
        "มะพร้าวแกง จากไร่พงศ์พระยา ทับสะแก ปีนเก็บคัดลูกแก่ได้ที่ คั้นน้ำกะทิสดเองอย่างพิถีพิถัน",
      price: 250,
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
      name: "Guatemala Laguna Lachua Dormouse Chocolate Sorbet",
      description:
        "ช็อกโกแลตรางวัลประกวด AOC 2018 จากแบรนด์ Dormouse เมล็ดปลูกที่ประเทศกัวเตมาลา",
      tasteNote:
        "Tasting notes: ไวน์แดง Sangiovese ผลแห้งไม้สีแดง วอลนัตคั่ว ไม้โอ๊ค",
      price: 350,
    },
    {
      name: "Mirzam Tanzania Chocolate Sorbet",
      description:
        "ช็อกโกแลตรางวัลประกวด จากแบรนด์ Mirzam ปลูกที่ประเทศแทนซาเนีย",
      tasteNote:
        "Tasting notes: คลาสสิก full-bodied cacao คาราเมล เครื่องไม้ เครื่องเทศอ่อน",
      price: 350,
    },
    {
      name: "Amedei No.9 Chocolate Sorbet",
      description:
        "ช็อกโกแลตจากแบรนด์ระดับโลก Amedei of Tuscany สายพันธุ์หายาก Chuao จากเวเนซุเอลา",
      tasteNote:
        "Tasting notes: ผลไม้ตระกูลซิตรัส ไม้ป่า อัลมอนด์คั่ว คาราเมล กลิ่นลงท้ายซับซ้อน",
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
      name: "Akesson’s Madagascar Chocolate Ganache",
      description:
        "ช็อกโกแลตสายพันธุ์ Criollo จากประเทศมาดากัสการ์ ชนะรางวัลทุกเวทีมาอย่างยาวนาน",
      tasteNote:
        "Tasting notes: กลิ่นโกโก้เอกลักษณ์ พร้อมรสเปรี้ยวอมหวานของผลไม้ตระกูลส้มและผลเบอร์รี่สีแดง",
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
      name: "Willies Indonesia Java Chocolate Ganache",
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
      name: "Panama Geisha La Esmeralda Auction Lot",
      description:
        "กาแฟ Geisha เกรดพิเศษจากไร่ Hacienda La Esmeralda ครองแชมป์รางวัลนับไม่ถ้วน",
      tasteNote:
        "Tasting notes: ดอกมะลิ เบอร์รีหลากหลายชนิด เชอร์รี พลัม แอปริคอต ดอกมะลิ เบอกาม็อท ทิ้งรสชาติที่ยอดเยี่ยมยาวนาน",
      price: 850,
    },
    {
      name: "Panama Geisha 90+ Yuzo",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยจากการหมักบ่มแบบพิเศษของไร่",
      tasteNote:
        "Tasting notes: ขนมปัง sourdough ยูสุสาเก น้ำผึ้งซีเดอร์ เปรี้ยวหวานซับซ้อน ไร้ความขมฝาด",
      price: 800,
    },
    {
      name: "Panama Lerida Geisha (Honey Process)",
      description: "กาแฟ Geisha จากไร่เก่าแก่ของปานามากว่า 100 ปี Finca Lerida",
      tasteNote:
        "Tasting notes: เรดเคอร์แรนท์ รังผึ้ง เบอกาม็อท ส้ม องุ่นแดง ชาเอิร์ลเกรย์ ดอกไม้ชุ่มฉ่ำ",
      price: 700,
    },
    {
      name: "Panama Geisha 90+ Lotus",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติอมเปรี้ยวที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tasteNote:
        "Tasting notes: มะม่วงสุก มะขามเปียก ลาเวนเดอร์ แบล็กเบอร์รี บรั่นดี พลัม ยี่หร่าฝรั่ง",
      price: 600,
    },
    {
      name: "Colombia San Jose Rum Barrel",
      description:
        "เมล็ดกาแฟที่เก็บเกี่ยวด้วยมือ บรรจุและหมักในถังเหล้ารัมนานอย่างน้อย 8 ปี",
      tasteNote: "Tasting notes: ดาร์ครัม วิสกี้ วานิลลา",
      price: 500,
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "กาแฟ Blue Mountain จาก Jamaica รสคลาสสิก มีความหอมจากกลิ่นคั่วชัด รสสัมผัสปลายที่ละเอียด นุ่ม ละมุน",
      tasteNote: "Tasting notes: คาราเมล ช็อกโกแลต ถั่วเฮเซลนัท",
      price: 500,
    },
    {
      name: "Ethiopia Alo Alache Competition Series",
      description: "กาแฟชนะเลิศการแข่งขัน Ethiopia Cup of Excellence",
      tasteNote:
        "Tasting notes: องุ่นเขียว ตะไคร้ ดอกส้มสีขาว วานิลลา มะนาว พีชขาว",
      price: 450,
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
      description:
        "ชาดำเรือธงในตำนาน จาก Mariage Frères ผสมผสานอย่างลงตัวด้วยกลิ่นผลไม้ ดอกไม้ และมอลต์",
      tasteNote:
        "Tasting notes: แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมล่อน ครีม มอลต์",
      price: 350,
    },
    {
      name: "French Earl Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tasteNote: "Tasting notes: ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
    },
    {
      name: "Countess Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ที่เพิ่มลูกเล่นด้วยกลิ่นของผลไม้ตระกูลซิตรัส",
      tasteNote:
        "Tasting notes: น้ำมันเบอกาม็อทสุดคลาสสิกสไตล์ผู้ดีอังกฤษ ปิดท้ายด้วยเปลือกส้ม",
      price: 300,
    },
    {
      name: "Margaret’s Hope",
      description:
        "ชาดำ Darjeeling (Second Flush จากเทือกเขาหิมาลัย) รุ่นชนะรางวัล จาก The Tea Makers of London",
      tasteNote: "Tasting notes: กลิ่นผลไม้และกลิ่นไวน์มัสกัตแบบคลาสสิก",
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
      name: "Award-Winning Horii",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด ชนะรางวัล Japanese Ministry of Agriculture, Forestry, Fisheries 2023 ผลผลิตเพียง 6 กิโลกรัม",
      tasteNote:
        "Tasting notes: ไวท์ช็อกโกแลต ความอูมามิธัญพืช และนุ่มนวลที่เสมือนอยู่ชั่วนิรันดร์",
      price: 690,
    },
    {
      name: "Honzu Asahi	(2024 Competition)",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi กรรมวิธีผลิตด้วยการพรางแสงด้วยโครงไม้ไผ่และฟางข้าว จัดหาโดย MTCH",
      tasteNote:
        "Tasting notes: สาหร่ายทะเลย่าง เนยอบ องุ่นขาว ลูกฟิก และผลไม้แห้ง",
      price: 600,
    },
    {
      name: "Akatsuki",
      description: "มัทฉะเกรดพิธีชงสูงสุดจาก  Hoshinomura เมืองยาเมะ",
      tasteNote:
        "Tasting notes: หอมมันหวานถั่วคั่วอ่อน กลิ่นเขียวสดของผักและดอกไม้อ่อน หอมละมุน บอดี้ปานกลาง",
      price: 500,
    },
    {
      name: "Kanbayashi Kenjo Hatsumukash",
      description: "มัทฉะเกรดพิธีชงสูงสุด จากแบรนด์ 3 แต้มแดง Kanbayashi",
      tasteNote: "Tasting notes: อูมามิโทนสาหร่ายโนริ หวานซุปผักรวม บอดี้หนา",
      price: 500,
    },
    {
      name: "Hoshino Myoho No Mukashi",
      description:
        "มัทฉะเกรดพิธีชง จาก Hoshinoen เป็นตัวโปรดของ Omotesenke Jimyosai Master",
      tasteNote: "Tasting notes: อูมามิถั่วคั่ว ขนมปังอบ ความเข้มข้นสูง",
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
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลฤดูร้อนจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
      tasteNote:
        "Tasting notes: ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรสของชามีความซับซ้อน มีความฟงฝู่ 豐富 จัดเต็ม ไม่แบน มีหลากหลายมิติ รสชาติทิ้งท้ายยาวนาน",
      price: 800,
    },
    {
      name: "No.1 Tie Guan Yin (铁观音)",
      description:
        "ชาเถี่ยกวนอิน (ทิกวนอิม) ชนะรางวัลที่ 1 จากเวทีแข่งขันประกวดชา Muzha โดยปรมาจารย์ทำชาจังหยวนปั๋ว",
      tasteNote:
        "Tasting notes: ผลไม้สุก ดอกไม้หลากหลายชนิด มีชั้นรสชาติหลายชั้น ความเครื่องเทศอ่อน ทิ้งปลายรสอูมามิ ไร้ความขม",
      price: 500,
    },
    {
      name: "Da Hong Pao Bei Dou (北斗大紅袍)",
      description:
        "ชาต้าหงเผา (เสื้อคลุมสีแดง) สายพันธุ์เดี่ยว Bei Dou (北斗) หนึ่งในสุดยอดชา จากเขาอู๋อี๋ซาน มณฑลฝูเจี้ยนประเทศจีน",
      tasteNote:
        "Tasting notes: ดอกไม้นานาชนิด ผลไม้แห้ง น้ำผึ้ง กลิ่นอบไฟ มิติความแร่ธาตุซับซ้อน",
      price: 500,
    },
    {
      name: "Jasmine Dian Hong (茉莉滇红)",
      description:
        "ชาแดงเตียนหง อบดอกมะลิสดแท้ 3 รอบ ด้วยกรรมวิธีแบบดั้งเดิม นำเข้าจากประเทศจีน หาทานยาก",
      tasteNote: "Tasting notes: ดอกมะลิสีน้ำตาล คาราเมล ช็อกโกแลต ถั่ว",
      price: 300,
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
      name: "São Tomé and Príncipe Vanilla",
      description:
        "วานิลลาจากเกาะเซาตูแม และ ปรินซีปี ตั้งอยู่ใจกลางโลกบนอ่าวกินี",
      tasteNote: "Tasting notes: ช็อกโกแลต คาราเมล อัลมอนด์ อบเชย ดอกไอริส",
      price: 400,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Bronte Pistachio D.O.P.",
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
      price: 300,
    },
    {
      name: "Gaziantep Turkish Pistachio",
      description:
        "พิสตาชีโอจากตุรกี สายพันธุ์ Antep สุดพรีเมี่ยม มีความหวานนำมัน กลิ่นคลาสสิกเอกลักษณ์",
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

const special: Flavor = {
  id: "special",
  categoryButtonText: "หมวด รสพิเศษ",
  backgroundColorClass: "bg-special-bg",
  imageName: "special",
  name: "รสชาติพิเศษอื่นๆ",
  items: [
    {
      name: "White Truffle White Chocolate Hazelnut",
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสานรสชาติสุด luxury ของเห็ดทรัฟเฟิลขาวฤดูหนาวในไวท์ช็อกโกแลต และ Piedmont เฮเซลนัท",
      price: 500,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Fresh Mint Stracciatella (Mint Choc Chips)",
      description:
        "รสชาติที่หาทานได้ยาก ทำจากใบมิ้นต์สด 5 สายพันธุ์ และราดด้วยช็อกโกแลต shards จาก Amedei No.9",
      price: 400,
    },
    {
      name: "Amarillo Peach Melba",
      description:
        "ไอศกรีมดัดแปลงจากของหวานสุดคลาสสิค Peach Melba ที่ผสมผสานรสชาติหวานหอมฉ่ำของครีมพีชวานิลลา กับความเปรี้ยวสดชื่นของซอสราสเบอรี่ ตัดด้วยความมันกรอบของอัลมอนด์จาก Sicily",
      price: 350,
    },
    {
      name: "No.1 Blueberry (BerryWorld Eureka) Award-Winning Yogurt",
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสบลูเบอร์รี่ No.1 สายพันธุ์พิเศษจาก Zimbabwe",
      price: 300,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Black Coconut Ash",
      description:
        "ไอศกรีมดัดแปลงจากขนมเปียกปูนโบราณ ทำจากกาบมะพร้าวเผา เบสกะทิสดทับสะแก ยกระดับความเป็นขนมไทย",
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

export const thailandCoffeeHub2024: Flavor[] = [
  fruits,
  chocolate,
  coffee,
  westernTea,
  matcha,
  easternTea,
  classic,
  special,
];

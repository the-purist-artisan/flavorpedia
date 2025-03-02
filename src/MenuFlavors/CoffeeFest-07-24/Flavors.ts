import { Flavor, SOLDOUT_TYPE } from "../types";

const coffee: Flavor = {
  id: "coffee",
  categoryButtonText: "หมวด กาแฟนม Specialty",
  backgroundColorClass: "bg-coffee-bg",
  imageName: "coffee",
  name: "กาแฟนม Specialty (Single Origin and Award-Winning)",
  items: [
    {
      name: "Eugenioides",
      description:
        "กาแฟโลกเก่า ต้นกำเนิดของสายพันธุ์ Arabica เป็นแรร์ไอเทม หาทานยากที่สุดในขณะนี้",
      tastingNotes:
        "Tasting notes: ความหวานที่พิเศษซับซ้อน และนุ่มที่สุดจากน้ำตาลหลากหลายชนิด ความหอมอ่อนดอกไม้เบาๆ ",
      price: 1200,
      preorderPrice: 990,
    },
    {
      name: "Panama Geisha La Esmeralda Auction Lot Jaramillo",
      description:
        "กาแฟ Geisha เกรดประมูลสูงสุดจากไร่ Hacienda La Esmeralda ครองแชมป์รางวัลนับไม่ถ้วน",
      tastingNotes:
        "Tasting notes: ส้มหวาน ส้มสด แยมส้ม ส้มโอสีแดงและขาว ดอกมะลิ เบอกาม็อท ทิ้งรสชาติที่ยอดเยี่ยมยาวนาน",
      price: 850,
    },
    {
      name: "Panama Geisha La Esmeralda Auction Lot ES-N3",
      description:
        "กาแฟ Geisha เกรดประมูลสูงสุดจากไร่ Hacienda La Esmeralda ครองแชมป์รางวัลนับไม่ถ้วน",
      tastingNotes:
        "Tasting notes: เบอร์รีหลากหลายชนิด เชอร์รี พลัม แอปริคอต ดอกมะลิ เบอกาม็อท ทิ้งรสชาติที่ยอดเยี่ยมยาวนาน",
      price: 850,
    },
    {
      name: "Panama Geisha 90+ Yuzo",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus รุ่นพิเศษ ผลิตด้วยกรรมวิธีหมักที่ให้รสแบบสาเกชั้นสูง",
      tastingNotes:
        "Tasting notes: ยูสุสาเก น้ำผึ้งซีเดอร์ เปรี้ยวหวานซับซ้อน ไร้ความขมฝาด",
      price: 800,
    },
    {
      name: "Colombia Geisha Mikava",
      description: "กาแฟ Geisha เกรดสูงสุดชนะรางวัลจากประเทศโคลอมเบีย",
      tastingNotes:
        "Tasting notes: ดอกมะลิ ดอกส้มสด ผลไม้เมืองร้อน รสชาติเข้มข้น",
      price: 750,
    },
    {
      name: "Panama Geisha Cañas Verdes Private Collection",
      description:
        "กาแฟ Geisha เกรด private จากฟาร์ม Cañas Verdes ปลูกที่ระดับความสูง 1750 เมตรจากน้ำทะเล",
      tastingNotes:
        "Tasting notes: ดอกมะลิ ดอกกาแฟ เชอร์รี่ ลูกอมผลไม้ ทิ้งรสชาตินุ่มละมุนและยาวนาน",
      price: 700,
    },
    {
      name: "Panama Geisha 90+ Lotus",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นผลไม้รสเปรี้ยวสุก ที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tastingNotes:
        "Tasting notes: มะม่วงสุก มะขามเปียก ลาเวนเดอร์ แบล็กเบอร์รี บรั่นดี พลัม ยี่หร่าฝรั่ง ",
      price: 600,
    },
    {
      name: "Panama Geisha 90+ Perci",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นคล้ายช็อกโกแลต มีรสอมเปรี้ยวที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tastingNotes: "Tasting notes: เชอร์รี ทับทิม ช็อกโกแลต ลูกกระวาน",
      price: 550,
    },
    {
      name: "Panama Geisha 90+ Lycello",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus ตัวแรกที่ชนะรางวัล World Brewer’s Cup Championship",
      tastingNotes:
        "Tasting notes: ชาอู่หลงลิ้นจี่หวาน หอมมะลิ ทิ้งท้ายแบบชาเอิร์ลเกรย์ผสมมิ้นต์สดชื่น",
      price: 550,
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "กาแฟ Blue Mountain จาก Jamaica รสคลาสสิก มีความหอมจากกลิ่นคั่วชัด รสสัมผัสปลายที่ละเอียด นุ่ม ละมุน",
      tastingNotes: "Tasting notes: คาราเมล ช็อกโกแลต ถั่วเฮเซลนัท",
      price: 500,
    },
    {
      name: "Hawaii Kona Extra Fancy",
      description:
        "กาแฟที่ปลูกบริเวณ Kona Coffee Belt ใน Hawaii รสชาติคลาสสิก รสสัมผัสปลายเนียน และมีรสอมเปรี้ยวเล็กๆของเปลือกผลไม้ซิตรัส",
      tastingNotes: "Tasting notes: คาราเมลน้ำตาลทรายแดง เปลือกผลไม้ซิตรัส",
      price: 500,
    },
    {
      name: "Peru Geisha La Lacuma COE 2",
      description:
        "กาแฟ Geisha จากประเทศเปรู ได้รางวัล Cup of Excllence Rank 2 สัมผัสเบา มีความหอมหวานหลากหลายมิติ",
      tastingNotes: "Tasting notes: แอปริคอต พีช แพร์ น้ำผึ้ง ดอกมะลิ",
      price: 450,
    },
    {
      name: "Ethiopia Gesha Village",
      description: "กาแฟจากถิ่นกำเนิดสายพันธุ์ Gesha จากเอธิโอเปีย",
      tastingNotes:
        "Tasting notes: เรซิ่น ชาดำมะลิ ผลไม้ซิตรัส และ stonefruits ทิ้งความหวานเบาและนุ่ม",
      price: 400,
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
      tastingNotes:
        "Tasting notes: แพร์ ลิ้นจี่ สตรอว์เบอร์รี แครนเบอร์รี เมล่อน ครีม มอลต์",
      price: 350,
      preorderPrice: 300,
    },
    {
      name: "T2 French Earl Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก T2 หอมฟุ้งด้วยกลิ่นผลไม้นานาชนิด กุหลาบ ปิดท้ายด้วยส้มเบอกาม็อท",
      tastingNotes: "Tasting notes: ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
    },
    {
      name: "T2 Creme Brulee",
      description: "ชาดำจาก T2 ให้ความหอมหวานดั่งทานอาหารเช้าซีเรียล",
      tastingNotes: "Tasting notes: วานิลลา คาราเมล เฮเซลนัท",
      price: 300,
    },
    {
      name: "Fortmason",
      description:
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tastingNotes: "Tasting notes: ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      price: 300,
    },
    {
      name: "Smoky Earl Grey (Fortnum & Mason)",
      description:
        "ชาดำเบส Gunpowder ผสม  Lapsang Souchong เพื่อความหอมกลิ่นอบควันอันเป็นเอกลักษณ์",
      tastingNotes: "Tasting notes: กลิ่นอบไฟ ไพน์นัท เรซิ่นอบ",
      price: 300,
    },
    {
      name: "Eros (Mariage Freres)",
      description:
        "ชาที่ออกแบบมาแทนสัญลักษณ์ของเทพเจ้ากรีกแห่งความรัก หอมจากดอกไม้สีแดงและชมพู",
      tastingNotes: "Tasting notes:  ดอกชบา ลาเวนเดอร์ กุหลาบ",
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
      tastingNotes:
        "Tasting notes: ไวท์ช็อกโกแลต เนย ขนมปัง รสสัมผัสในปากที่ครีมมี่ด้วยความอูมามิที่เข้มข้น ความฝาดน้อยแทบไม่มี",
      price: 650,
      preorderPrice: 600,
    },
    {
      name: "Zuisho Shogyokuen",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tastingNotes:
        "Tasting notes: ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
      price: 590,
    },
    {
      name: "Honzu Asahi",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi กรรมวิธีผลิตด้วยการพรางแสงด้วยโครงไม้ไผ่และฟางข้าว จัดหาโดย MTCH",
      tastingNotes:
        "Tasting notes: สาหร่ายทะเลย่าง เนยอบ ธัญพืช หอมหวานอูมามิคาราเมลผลไม้อบทิ้งท้าย",
      price: 580,
    },
    {
      name: "Tsujiki Gokou",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Gokou จากไร่ชนะรางวัลตลอดกาล Tsujiki",
      tastingNotes:
        "Tasting notes: ธัญพีชที่หอมหวานมันลงตัว ซุปวากาเมะ ความมันเนยถั่วบางๆ",
      price: 560,
    },
    {
      name: "Saemidori",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Saemidori จากไร่ Gokasho จัดหาโดย MTCH",
      tastingNotes:
        "Tasting notes: ธัญพืช เม็ดบัว ซุปสาหร่ายคอมบุ เค็มแบบสุภาพ",
      price: 550,
    },
    {
      name: "Hoshino Houju",
      description: "มัทฉะเกรดพิธีชงสูงสุด รุ่น Houju จากแบรนด์ดัง Hoshinoen",
      tastingNotes:
        "Tasting notes: อูมามิหลากหลายมิติลุ่มลึก ปิดท้ายด้วยความหอมโทนถั่วนานาชนิด และความคั่วไฟอ่อน",
      price: 500,
    },
    {
      name: "Yame No Sora",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากเมืองยาเมะ ไร่อายุกว่า 300 ปี จัดหาโดย PAGUcha",
      tastingNotes:
        "Tasting notes: หอมมันถั่วแมคาเดเมียคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
      price: 500,
    },
    {
      name: "Hoshino Oku",
      description:
        "มัทฉะเกรดพิธีชง จาก Hoshino เป็นมัทฉะตัวโปรดของผู้นำตระกูล และ Edo Senke Meishin",
      tastingNotes:
        "Tasting notes: อูมามิโทนถั่วอัลมอนด์คั่ว ลงท้ายอูมามิแบบไข่เค็ม",
      price: 450,
    },
    {
      name: "Kirari-31",
      description:
        "มัทฉะเกรดพิธีสายพันธ์ุคิราริ-31 (Kirari-31) จากเมืองอุจิ จังหวัดเกียวโต ผลิตผ่านวิธีพรางแสงแบบ 2 ชั้นด้วยม่านตาข่าย",
      tastingNotes: "Tasting notes: คอมบุดาชิ เต้าหู้ บรีชีส เนย วานิลลา",
      price: 400,
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
      name: "Dong Fang Mei Ren Competition Grade (東方美人)",
      description:
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
      tastingNotes:
        "Tasting notes: ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรสของชามีความซับซ้อน มีความฟงฝู่ 豐富 จัดเต็ม ไม่แบน มีหลากหลายมิติ รสชาติทิ้งท้ายยาวนาน",
      price: 750,
    },
    {
      name: "Da Hong Pao Bei Dou (大紅袍)",
      description:
        "ชาต้าหงเผา (เสื้อคลุมสีแดง) สายพันธุ์เดี่ยว Bei Dou (北斗) หนึ่งในสุดยอดชา จากเขาอู๋อี๋ซาน มณฑลฝูเจี้ยนประเทศจีน",
      tastingNotes:
        "Tasting notes: ดอกไม้นานาชนิด ผลไม้แห้ง น้ำผึ้ง กลิ่นอบไฟ มิติความแร่ธาตุซับซ้อน",
      price: 500,
    },
    {
      name: "Tie Guan Yin Dan Cong (单枞铁观音)",
      description:
        "ทำจากชาพันธุ์เฟิ่งหวงตันฉง ด้วยวิธีอบไฟแบบเถี่ยกวนอิน จากปรมาจารย์ทำชา จังเจ๋อเจี๋ย",
      tastingNotes:
        "Tasting notes: ผลไม้สุกกลุ่มเบอร์รี กล้วยไม้ น้ำผึ้ง วานิลลา ฝาดหอม elegant เอกลักษณ์ของสายพันธุ์เฟิ่งหวงตันฉง",
      price: 400,
    },
    {
      name: "Tie Guan Yin Shui Xian (水仙铁观音)",
      description:
        "ทำจากชาพันธุ์สุ่ยเซียน ด้วยวิธีอบไฟแบบเถี่ยกวนอิน จากปรมาจารย์ทำชา จังตงจื้อ",
      tastingNotes:
        "Tasting notes: กลิ่นหอมผลไม้กลุ่ม แพร์ กล้วยไม้ จูนิเปอร์เบอร์รี มีความเป็นแร่ธาตุสูง",
      price: 350,
    },
    {
      name: "Lupicia Peach Oolong",
      description:
        "ชาอู่หลงเรือธงที่ดังที่สุดจากแบรนด์ Lupicia ใบชาเกรด Super Premium",
      tastingNotes:
        "Tasting notes: พีชญี่ปุ่นสีขาวชั้นสูง กุลาบแดง ผสานด้วยความสดชื่นซับซ้อนอ่อนโยนของชาอู่หลงไต้หวัน",
      price: 350,
    },
    {
      name: "Red Rhythm (Hong Yun Black Tea)",
      description:
        "ชาแดงพันธุ์หงยวิ่น หรือชาไต้หวันเบอร์ 21 ผสมจากชาพันธุ์ใบเล็กจากฉีเหมินและชาพันธุ์อัสสัม",
      tastingNotes: "Tasting notes: ส้มโอสุก เปลือกส้ม และสมุนไพรต่างๆ ",
      price: 350,
    },
    {
      name: "Ruby Red (Hong Yu Black Tea)",
      description:
        "ชาแดงพันธุ์หงยู่ หรือ ชาไต้หวันเบอร์ 18 เกิดจากการผสมเกสรชาป่าของไต้หวันและพม่า",
      tastingNotes:
        "Tasting notes:  มิ้นต์กับอบเชย กลิ่นหวานน้ำตาลไหม้ ตามด้วยผลไม้สุก",
      price: 300,
    },
    {
      name: "Lupicia Melon Oolong",
      description:
        "ชาอู่หลงจากแบรนด์ Lupicia เป็นหนึ่งในชาที่ขายดีที่สุดของแบรนด์ หอมหวานฉ่ำทานแล้วสร้างรอยยิ้ม",
      tastingNotes:
        "Tasting notes:เมล่อนสีเขียว ผสานด้วยความสดชื่นซับซ้อนอ่อนโยนของชาอู่หลงไต้หวัน",
      price: 300,
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
      name: "Vinte Vinte Marañón Chocolate Sorbet",
      description:
        "ช็อกโกแลตรางวัลประกวด จากแบรนด์ Vinte Vinte เมล็ด Cacao จากเปรู รสชาติสมบูรณ์ทุกองค์ประกอบ",
      tastingNotes:
        "Tasting notes: ดอกไม้หลากสี ถั่วคั่ว เปรี้ยวหวานจากผลไม้ป่าและเบอร์รี อย่างลงตัว",
      price: 350,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Amedei No.9 Chocolate Sorbet",
      description:
        "ช็อกโกแลตจากแบรนด์ระดับโลก Amedei of Tuscany ผลิตจากโรงงานที่ 9 ที่รวมช็อกโกแลตที่ดีที่สุดจากทั่วโลก",
      tastingNotes:
        "Tasting notes: ผลไม้ตระกูลซิตรัส ไม้ป่า อัลมอนด์คั่ว คาราเมล กลิ่นลงท้ายซับซ้อน",
      price: 350,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK",
      tastingNotes: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Willies Carenero Chocolate Sorbet",
      description:
        "ช็อกโกแลตจากแบรนด์ Willies ทานง่ายและเข้าใจง่าย ในรูปแบบซอร์เบต์ ไม่ติดความเปรี้ยว",
      tastingNotes: "Tasting notes: เครื่องเทศหวาน และ ถั่วนานาชนิด",
      price: 300,
    },
    {
      name: "Friis Holm La Dalia Chocolate Sorbet",
      description: "ช็อกโกแลตรางวัลประกวดเหรียญทองจาก Friis Holm",
      tastingNotes:
        "Tasting notes: แบล็คเคอร์แรนท์ เชอร์รีดำ กลิ่นดอกไม้ปนเครื่องเทศฤดูร้อน",
      price: 300,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Pacari Nacional Arriba Ganache",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก Pacari",
      tastingNotes: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Willies Rio Caribe Chocolate Ganache",
      description:
        "ช็อกโกแลตจากแบรนด์ Willies ทานง่ายและเข้าใจง่าย ในรูปแบบช็อกโกแลตนม ไม่ติดความเปรี้ยว",
      tastingNotes: "Tasting notes: ถั่วอบ คาราเมล หอมกลิ่น full-bodied cacao",
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
      name: "Guadeloupe Pompona Schiede Vanilla",
      description:
        "วานิลลาสายพันธุ์ Pompona ผลผลิตเพียงแค่ปีละ 300 กรัม หายากที่สุดในตลาด พื้นที่เพาะปลูกจากเกาะ Guadeloupe",
      tastingNotes:
        "Tasting notes: เครื่องเทศ ชะเอมเทศ น้ำส้มสายชูหมักบัลซามิก กลิ่นดอกไม้ที่ซับซ้อน และทิ้งกลิ่นยาวนาน",
      price: 800,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
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
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
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
      name: "Musang King Durian",
      description:
        "ฉายา Hermes แห่งวงการทุเรียน รสชาติหวานมันเข้มข้น ดุดัน full-bodied and คาราเมลถั่ว หาทานยาก และราคาสูงกว่าทุเรียนทั่วไปกว่า 2 เท่าตัว จากสวน My Gardn ทุเรียนคุณภาพ",
      price: 450,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Kan Yao Durian",
      description:
        "ทุเรียนสายพันธุ์ยอดนิยมของคนไทย ต้นตำหรับจากนนทบุรี มีกลิ่นหอมละมุน หวานมันพอดี ทานง่าย ปลูกที่สวนวารินทร์",
      price: 400,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Chantaburi 4 Durian",
      description:
        "ลูกผสมสายพันธุ์ระหว่าง ก้านยาวและหมอนทอง มีความหอมหวานมันลงตัว เนื้อเหนียวละเอียด ทานง่าย จากสวนวารินทร์",
      price: 400,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Gariguette Strawberry Sorbet",
      description:
        "สตรอว์เบอร์รีจากฝรั่งเศส สายพันธุ์เก่าแก่ แต่มีความพรีเมี่ยมได้ที่รับการยอมรับจากเชฟมิชลินทั่วโลก มีกลิ่นหอมดอกไม้ซิตรัส รสเปรี้ยวนำหวาน ทิ้งท้ายกลิ่นหอมยาวนาน",
      price: 400,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "British Strawberry Sorbet",
      description:
        "สตรอว์เบอร์รีจากสหราชอาณาจักร สายพันธุ์ Red Diamond ตัวท้อปจาก Marks & Spencer มีกลิ่นหอมหวานที่ฟุ้งชัดโทนขนมทาร์ต มีความหวานฉ่ำ นำความเปรี้ยว",
      price: 350,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Amalfi Lemon Sorbet",
      description:
        "Lemon อันดับหนึ่ง จากเมือง Amalfi สามารถทานได้ทั้งเนื้อและเปลือก มีความหอมฟุ้งโทนทะเลสดชื่น",
      price: 350,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Charentais Melon Sorbet",
      description:
        "เมล่อนสีส้ม มรดกจากสรวงสวรรค์ของฝรั่งเศส หวานพอเหมาะ และกลิ่นหอมฟุ้งเอกลักษณ์เหนือสายพันธุ์อื่นๆ",
      price: 350,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Red Williams Pear Sorbet",
      description:
        "แพร์สายพันธุ์ Red Williams สามารถทานได้ทั้งผล เปลือกไม่ติดความขมและมีกลิ่นหอมอ่อนหวานเอกลักษณ์",
      price: 350,
    },
    {
      name: "RubyRed Kiwi",
      description:
        "กีวีสายพันธุ์ใหม่ เนื้อสีแดงทับทิม มีความหอมโทนเบอร์รีไปพร้อมกับกลิ่นกีวี หาทานยากมาก",
      price: 350,
    },
    {
      name: "Alphonso Mango Sorbet",
      description:
        "ราชามะม่วงของอินเดีย ผู้ส่งออกมะม่วงอันดับหนึ่งของโลก รสชาติหวานเข้มข้น เนื้อแน่นและเนียน มีความฉ่ำของผลไม้",
      price: 300,
    },
    {
      name: "Kesar Mango	Sorbet",
      description:
        "ราชินีมะม่วงของอินเดีย รสชาติเปรี้ยวน้ำหวาน มีความเปรี้ยวหลากหลายมิติ ลงท้ายด้วยกลิ่นดอกไม้สีเหลืองสดชื่น",
      price: 300,
    },
    {
      name: "Carabao Mango Sorbet",
      description:
        "มะม่วงคาราบาว สายพันธุ์อันดับหนึ่งจากฟิลิปินส์ มีความหวานสูงที่สุด บอดี้แน่น หอมผลไม้โทนสับปะรด",
      price: 250,
    },
    {
      name: "Chok Anan Mango Sorbet",
      description:
        "โชคอนันต์ มะม่วงสายพันธุ์ไทยที่มีกลิ่นและรสชาติลงตัว เปรี้ยวหอมมันหวานพอดี มีกลิ่นหอมโทนดอกไม้และทานง่าย",
      price: 250,
    },
    {
      name: "Bang Khla Coconut Sorbet",
      description:
        "มะพร้าวน้ำหอม สวนลุงแดง บางคล้า ฉะเชิงเทรา หอมหวานกลิ่นใบเตยเอกลักษณ์ ไม่เหมือนพื้นที่อื่น",
      price: 250,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Thap Sakae Coconut Milk Sorbet",
      description:
        "มะพร้าวแกง จากไร่พงศ์พระยา ทับสะแก ปีนเก็บคัดลูกแก่ได้ที่ คั้นน้ำกะทิสดด้วยวิธีสกัดเย็น",
      price: 250,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Long Kong Sorbet",
      description:
        "ลองกองเพาะเมล็ดสายพันธุ์กลายจากลองกองตันหยงมัส ปลูกที่ต.คลองนารายณ์ จ.จันทบุรี มีความหวานสดชื่นลงตัว",
      price: 250,
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
      name: "Amalfi Lemon Tart",
      description:
        "ถอดรูปจากขนม Lemon Tart สไตล์อังกฤษแต่ใช้ Amalfi Lemon จากอิตาลีเป็นวัตถุดิบหลักเพื่อความหอมที่โดดเด่น",
      price: 400,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Mint Chocolate Chips",
      description:
        "รสชาติที่หาทานได้ยาก ทำจากมิ้นต์ 5 สายพันธุ์ และราดด้วยช็อกโกแลตจาก Amedei No.9",
      price: 400,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Wimbledon",
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสมผสานรสชาติของวานิลลาครีม และ สตรอว์เบอร์รีอังกฤษ เหมือนการรับประทานสตรอว์เบอร์รีสดจุ่มครีมหอมๆ ระหว่างการดูทัวร์นาเมนต์เทนนิสวิมเบิลดัน",
      price: 350,
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
    },
    {
      name: "Yasmine Mango",
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสมผสานรสชาติละมุนของชามะลิแท้ ทำจากชาเตียนหง อบด้วยดอกมะลิสด 3 รอบ เข้ากับความหอมหวานของมะม่วงโชคอนันต์ หรือ มะม่วงคาราบาว",
      price: 300,
    },
    {
      name: "Black Coconut Ash",
      description:
        "ดัดแปลงจากขนมเปียกปูนโบราณ ทำจากกาบมะพร้าวเผา เบสกะทิสดทับสะแก ยกระดับความเป็นขนมไทย",
      price: 300,
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
      tastingNotes: "",
      price: 0,
    },
  ],
};

export const thailandCoffeeFest2024: Flavor[] = [
  coffee,
  westernTea,
  matcha,
  easternTea,
  chocolate,
  classic,
  fruits,
  special,
];

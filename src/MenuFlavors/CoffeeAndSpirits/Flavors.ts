import { Flavor } from "../types";

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
        "กาแฟ Geisha เกรดประมูลสูงสุดจากไร่ Hacienda La Esmeralda ครองแชมป์รางวัลนับไม่ถ้วน",
      tasteNote:
        "Taste note: ส้มหวาน ส้มสด แยมส้ม ส้มโอสีแดงและขาว ดอกมะลิ เบอร์กามอท ทิ้งรสชาติที่ยอดเยี่ยมยาวนาน",
      price: 850,
    },
    {
      name: "Panama Geisha 90+ Yuzo",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus รุ่นพิเศษ ผลิตด้วยกรรมวิธีหมักที่ให้รสแบบสาเกชั้นสูง",
      tasteNote:
        "Taste note: ยูสุสาเก น้ำผึ้งซีเดอร์ เปรี้ยวหวานซับซ้อน ไร้ความขมฝาด",
      price: 800,
    },
    {
      name: "Colombia Geisha Mikava",
      description: "กาแฟ Geisha เกรดสูงสุดชนะรางวัลจากประเทศโคลอมเบีย",
      tasteNote: "Taste note: ดอกมะลิ ดอกส้มสด ผลไม้เมืองร้อน รสชาติเข้มข้น",
      price: 750,
    },
    {
      name: "Panama Geisha La Esmeralda Cañas Verdes Special Lot",
      description:
        "กาแฟ Geisha รุ่น Special มีมิติของกลิ่น และรสที่ซับซ้อน ละมุน เต็มไปด้วยดอกไม้ และผลไม้หลากชนิด",
      tasteNote: "Taste note: ดอกมะลิ ส้มเบอกาม็อท ผลไม้ตระกูลซิตรัส",
      price: 700,
    },
    {
      name: "Panama Geisha 90+ Lotus",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus โดดเด่นด้วยรสชาติ และกลิ่นผลไม้รสเปรี้ยวสุก ที่มาจากการหมักบ่มแบบพิเศษของไร่",
      tasteNote:
        "Taste note: มะม่วงสุก มะขามเปียก ลาเวนเดอร์ แบล็กเบอร์รี บรั่นดี พลัม ยี่หร่าฝรั่ง ",
      price: 550,
    },
    {
      name: "Panama Geisha 90+ Lycello",
      description:
        "กาแฟ Geisha จากไร่ Ninety Plus ตัวแรกที่ชนะรางวัล World Brewer’s Cup Championship",
      tasteNote:
        "Taste note: ชาอู่หลงลิ้นจี่หวาน หอมมะลิ ทิ้งท้ายแบบชาเอิร์ลเกรย์ผสมมิ้นต์สดชื่น",
      price: 550,
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "กาแฟ Blue Mountain จาก Jamaica รสคลาสสิก มีความหอมจากกลิ่นคั่วชัด รสสัมผัสปลายที่ละเอียด นุ่ม ละมุน",
      tasteNote: "Taste note: คาราเมล ช็อกโกแลต ถั่วเฮเซลนัท",
      price: 500,
    },
    {
      name: "Hawaii Kona Extra Fancy",
      description:
        "กาแฟที่ปลูกบริเวณ Kona coffee belt ใน Hawaii รสชาติคลาสสิก รสสัมผัสปลายเนียน และมีรสอมเปรี้ยวเล็กๆของเปลือกผลไม้ซิตรัส",
      tasteNote: "Taste note: คาราเมลน้ำตาลทรายแดง เปลือกผลไม้ซิตรัส",
      price: 500,
    },
    {
      name: "Columbia Geisha El Roble LOD#6",
      description:
        "กาแฟ Geisha จากประเทศ Columbia ไร่ El Roble มีจุดเด่นของดินในฟาร์มเป็นดินร่วนปนทราย ล้อมด้วยป่าบนภูเขาสูงและแหล่งน้ำธรรมชาติ",
      tasteNote: "Taste note: พีชโซดา ลิ้นจี่ องุ่นเขียวมัสแคท เยลลี่",
      price: 450,
    },
    {
      name: "Kenya Maguta Supernatural",
      description:
        "กาแฟบอดี้หนาเข้มข้นกลิ่นพุ่งพล่านด้วยกระบวนการผลิตแบบ Supernatural จากประเทศเคนย่า",
      tasteNote:
        "Taste note: แบล็กเคอร์แรนท์ เชอรี่ พีช ราสเบอรี่ ช็อกโกแลตนม ส้มแมนดาริน",
      price: 450,
    },
    {
      name: "Ethiopia Gesha Village",
      description: "กาแฟจากถิ่นกำเนิดสายพันธุ์ Gesha จากเอธิโอเปีย",
      tasteNote:
        "Taste note: เรซิ่น ชาดำมะลิ ผลไม้ซิตรัส และ stonefuits ทิ้งความหวานเบาและนุ่ม",
      price: 400,
    },
    {
      name: "Costa Rica Geisha Dota El Diosa",
      description:
        "กาแฟ Geisha จากประเทศ Costa Rica มีความครีมมี่ บอดี้แน่น คงรสชาติตอนท้ายยาวนาน",
      tasteNote:
        "Taste note: เมเปิ้ลไซรัป แอปเปิ้ลเขียว แครนเบอร์รี ชาดำ อัลมอนด์",
      price: 350,
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
    },
    {
      name: "Rouge D’Automne",
      description:
        "ชาดำเบลนด์ชื่อ “ฤดูใบไม้ผลิสีแดง” มีโทนหอมเกาลัดเชื่อม หายากจาก Mariage Frère",
      tasteNote: "Taste note: เกาลัดเชื่อม วานิลลา เครื่องเทศฤดูร้อนอ่อนๆ",
      price: 300,
    },
    {
      name: "Paris-Ginza",
      description:
        "ชาดำเบลนด์สไตล์ล้ำแฟชั่นแรงบันดาลใจจากย่านกินซ่าและปารีสจาก Mariage Frères",
      tasteNote: "Taste note: ผลไม้สีแดง ครีมคาราเมล หอมสดชื่น",
      price: 300,
    },
    {
      name: "Countess Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ที่เพิ่มลูกเล่นด้วยกลิ่นของผลไม้ตระกูลซิตรัส",
      tasteNote:
        "Taste note: น้ำมันเบอกาม็อทสุดคลาสสิกสไตล์ผู้ดีอังกฤษ ปิดท้ายด้วยเปลือกส้ม",
      price: 300,
    },
    {
      name: "Victorian Grey",
      description:
        "ชาดำเอิร์ลเกรย์จาก Fortnum & Mason ผสมผสานใบชาจากประเทศจีนและศรีลังกา",
      tasteNote:
        "Taste note:รากชะเอมเทศ ดอกลาเวนเดอร์ ใบและดอกข้าวโพด น้ำผึ้ง Salisbury Plain",
      price: 300,
    },
    {
      name: "Mary Grey Special",
      description:
        "ชาดำเอิร์ลเกรย์จาก The Tea Maker of London ชนะรางวัล ทำจากใบชาซีล่อนพรีเมี่ยมจากศรีลังกา",
      tasteNote: "Taste note: ดอกดาวเรืองสีทอง ส้มหวาน มะนาว",
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
      name: "Award-winning Horii",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด ชนะรางวัล Japanese Ministry of Agriculture, Forestry, Fisheries 2023 ผลผลิตเพียง 6 กิโลกรัม",
      tasteNote: "Taste note: ความอูมามิและนุ่มนวลที่เสมือนอยู่ชั่วนิรันดร",
      price: 690,
    },
    {
      name: "Asa Hikari",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด ชนะรางวัลจากเวที UK Leafies Award 2023 ผสมระหว่างสายพันธุ์ Uji Hikari และ Asahi",
      tasteNote:
        "Taste note: สาหร่ายทะเลย่าง ซุปผักยอดหน่อไม้ฝรั่งอ่อน ธัญพืช หอมหวานอูมามิคาราเมลช็อกโกแลตทิ้งท้าย",
      price: 600,
    },
    {
      name: "Zuisho Shogyokuen",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tasteNote:
        "Taste note: ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
      price: 590,
    },
    {
      name: "Tsujiki Asahi",
      description: "มัทฉะเกรดพิธีชงสูงสุด ชนะรางวัลหลายปีซ้อนจากไร่ Tsujiki",
      tasteNote:
        "Taste note: ความอูมามิที่นุ่มนวลแต่ทรงพลัง กลมกล่อม ลมทะเลและผักใบเขียวที่แฝงไปด้วยความหอมวานิลลา",
      price: 580,
    },
    {
      name: "Uji Hikari Gokasho",
      description: "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จาก Gokasho",
      tasteNote:
        "Taste note: ความ Ooika ทะเล ถั่วแระญี่ปุ่น ข้าวโพดอ่อน และ สัมผัสนุ่มเหมือนเนย กลิ่นเกสรดอกไม้",
      price: 560,
    },
    {
      name: "Hoshino Houju",
      description: "มัทฉะเกรดพิธีชงสูงสุด รุ่น Houju จากแบรนด์ดัง Hoshinoen",
      tasteNote:
        "Taste note: อูมามิหลากหลายมิติลุ่มลึก ปิดท้ายด้วยความหอมโทนถั่วนานาชนิด และความคั่วไฟอ่อน",
      price: 500,
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
      name: "Da Hong Pao (大紅袍)",
      description:
        "ชาต้าหงเผา (เสื้อคลุมสีแดง) เกรดบรรณาการราชสำนัก หนึ่งในสุดยอดชา จากเขาอู๋อี๋ซาน มณฑลฝูเจี้ยนประเทศจีน",
      tasteNote:
        "Taste note: น้ำตาลแดง กลิ่นอบไฟ ผลไม้ stone fruit มิติความแร่ธาตุซับซ้อน",
      price: 450,
    },
    {
      name: "Award Winning Dong Fang Mei Ren (東方美人) 2024 New Harvest",
      description:
        "ชาดงฟางเหม่ยเหรน (นางงามบูรพา) สูตรต้นตำหรับ รสชาติละมุน สดชื่น มีกลิ่นเอกลักษณ์ที่หอมหวานเหมือนน้ำผึ้ง",
      tasteNote: "Taste note: น้ำผึ้ง ดอกไม้ป่า ผลไม้สุกที่สดชื่น",
      price: 400,
    },
    {
      name: "Tie Guan Yin Fo Shou (佛手铁观音)",
      description:
        "ชาเถี่ยวกวนอิน พันธุ์โฝวโส่ว หรือ “ฝ่ามือพระพุทธเจ้า” สายพันธุ์โบราณ หาทานได้ยากยิ่ง",
      tasteNote:
        "Taste note: กลิ่นหอมโทนส้มแห้ง มีกลิ่นอายของเครื่องเทศฤดูร้อน",
      price: 350,
    },
    {
      name: "Lupicia Peach Oolong (Lupicia)",
      description:
        "ชาอู่หลงเรือธงที่ดังที่สุดจากแบรนด์ Lupicia ใบชาเกรด Super Premium",
      tasteNote:
        "Taste note: พีชญี่ปุ่นสีขาวชั้นสูง กุลาบแดง ผสานด้วยความสดชื่นซับซ้อนอ่อนโยนของชาอู่หลงไต้หวัน",
      price: 350,
    },
    {
      name: "Shi Bi Yan Dan Cong (石壁岩单枞)",
      description: "ชาตันฉงอู่หลง ทำมือ ผลผลิตจากภูเขาฟ่งหวง ขึ้นบนโขดหิน",
      tasteNote:
        "Taste note: เนื้อและเปลือกผลไม้สุกเมืองร้อน ให้ความรู้สึกสดชื่น เบา สงบ สบาย",
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
      name: "Domori Venezuela Classic Ocumare Ganache",
      description:
        "ช็อกโกแลตจาก Domori ผู้ผลิตช็อกโกแลตสายพันธุ์ Criollo ชั้นนำ สายพันธุ์ย่อย Ocumare รสชาติคลาสสิกเข้ากับนม",
      tasteNote: "Taste note: คาราเมล ถั่ว หอมกลิ่นคั่ว",
      price: 300,
    },
    {
      name: "Pacari Nacional Arriba Ganache",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก Pacari",
      tasteNote: "Taste note: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 300,
    },
    {
      name: "Domori Venezuela Chuao Sorbet",
      description:
        "ช็อกโกแลต Criollo จาก Domori ผสมกับน้ำแร่ ชูเอกลักษณ์ของสายพันธุ์ย่อย Chuao ที่มีความนุ่มนวล โดยไม่ถูกบดบังด้วยรสนม",
      tasteNote:
        "Taste note: รสชาตินุ่มนวล แต่ซับซ้อน มีความหอมจากกลิ่นโกโก้ชัดเจน อมเปรี้ยวเล็กน้อยจากผลไม้แห้งหลายชนิด",
      price: 300,
    },
    {
      name: "Ambohimena Chocolat Madagascar Sorbet",
      description: "ช็อกโกแลตจากแบรนด์ชั้นนำ Chocolat Madagascar",
      tasteNote: "Taste note: เบอร์รีสีแดง เครื่องเทศ หอมความละมุนในปาก",
      price: 300,
    },
    {
      name: "Rio Caribe Venezuelan Black Sorbet",
      description:
        "ช็อกโกแลตจากแบรนด์ชั้นนำ Willie’s Cacao นำเสนอช็อกโกแลตจากคาบสมุทร Paria",
      tasteNote: "Taste note: กาแฟ และ ถั่วนานาชนิด หอมนุ่มลึก",
      price: 300,
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
      name: "Tahitian Vanilla Grand Cru Taha’a",
      description:
        "วานิลลาสายพันธุ์ Tahitian จากเกาะ Taha’a บริเวณ French Polynesia ",
      tasteNote:
        "Taste note: กลิ่นหอมอ่อนและนุ่มนวลของลูกพรุน ชะเอมเทศ และช็อกโกแลต",
      price: 350,
    },
    {
      name: "Bronte Pistachio D.O.P.",
      description:
        "พิสตาชีโอจากเมือง Bronte ใกล้เนินเขาของภูเขาไฟ Etna ในอิตาลี ที่เป็นแหล่งเพาะปลูกพิสตาชีโอมายาวนานหลายร้อยปี จนขนานนามว่าเป็น “ทองสีเขียว” แร่ธาตุจากภูเขาไฟทำให้รสชาติของถั่วเข้ม พุ่ง และหอมไม่เหมือนใคร",
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
      name: "Tarocco Fire Sicilian Blood Orange Sorbet",
      description:
        "ส้มเลือดจากเมือง Sicily รุ่นสุดท้ายของฤดูกาล หอมซับซ้อน รสชาติเข้มข้น หวานฉ่ำ มีเทสโน้ตของเบอร์รีสีแดง",
      price: 350,
    },
    {
      name: "Charentais Melon Sorbet",
      description:
        "เมล่อนสีส้ม มรดกจากสรวงสวรรค์ของฝรั่งเศส หวานพอเหมาะ และกลิ่นหอมฟุ้งเอกลักษณ์เหนือสายพันธุ์อื่นๆ",
      price: 300,
    },
    {
      name: "Tropi-Berta Yellow Peach Sorbet",
      description:
        "พีชเหลืองสายพันธุ์ที่หอมฉ่ำจับต้องง่าย ปลูกที่ยอดดอยขุนแจ๋ จังหวัดเชียงใหม่",
      price: 250,
    },
    {
      name: "Thong-dam (Black Gold) Mango Sorbet",
      description:
        "มะม่วงทองดำ สายพันธุ์โบราณหาทานได้ยากยิ่ง กลิ่นหอมแบบป่าดงดิบเขตร้อน มีความมันและเปรี้ยวตัด",
      price: 250,
    },
    {
      name: "Taiyo No Tamako Mango Sorbet",
      description:
        "มะม่วงไข่พระอาทิตย์ สายพันธุ์ที่แพงที่สุดในญี่ปุ่น หวานหอมสดชื่น มีปลายกลิ่นกะทิและสัปปะรด",
      price: 250,
    },
    {
      name: "Mahachanok Mango Sorbet",
      description:
        "มะม่วงมหาชนก จากจังหวัดกาฬสินธุ์ กลิ่นหอมเปรี้ยวอมหวานเอกลักษณ์โทนทาร์ตไซรัปซิตรัสเรซิ่น",
      price: 250,
    },
    {
      name: "Sein Ta Lone ( စိန်တလုံး သရက္သီး ) Mango Sorbet",
      description:
        "มะม่วง เซงตะโลง เพชรน้ำหนึ่งของพม่า กลิ่นหอมฟุ้งแรงเอกลักษณ์ มีความดอกไม้เย็นและหวานลงตัวไม่เหมือนใคร",
      price: 250,
    },
    {
      name: "Special Marian Plum",
      description:
        "มะยงชิดสายพันธุ์เพชรกลางดง มีกลิ่นหอมเกสรดอกไม้ รสอ่อนโยน สดชื่น หวานอมเปรี้ยว",
      price: 250,
    },
    {
      name: "Mangosteen from 100-year-old Trees",
      description:
        "มังคุดต้นร้อยปี จากจันทบุรี รสชาติระเบิดมีจริตของดอกไม้ที่หาได้ยากในมังคุดทั่วไป",
      price: 250,
    },
  ],
};

const durians: Flavor = {
  id: "durians",
  categoryButtonText: "หมวด ทุเรียนสายพันธุ์พิเศษ",
  backgroundColorClass: "bg-durians-bg",
  textColorClass: "text-durians-text",
  imageName: "durians",
  name: "ทุเรียนสายพันธุ์พิเศษ",
  items: [
    {
      name: "Musang King",
      description:
        "มูซันคิง ฉายา Hermes แห่งวงการทุเรียน รสชาติหวานมันเข้มข้น ดุดัน full-bodied and คาราเมลถั่ว หาทานยาก และราคาสูงกว่าทุเรียนทั่วไปกว่า 2 เท่าตัว",
      price: 450,
    },
    {
      name: "DAP 5 in 1",
      description:
        "ทุเรียนจากเทคนิคผสมเกสรลิขสิทธิ์สวนประตูจันท์ แม่มูซันคิง x พ่อพันธุ์ จันท์ 2 จันท์ 10 กบพิกุล กบสุวรรณ และ เหลืองวินัย รสชาติพิเศษหวานหอมแบบซับซ้อนไม่เหมือนใคร",
      price: 450,
    },
    {
      name: "Black Thorn",
      description:
        "หนามดำ สายพันธุ์ดังจากมาเลเซีย รสชาติซับซ้อน คัสตาร์ด คาราเมลดาร์คช็อกโกแลตปลายเป็นไวน์",
      price: 450,
    },
    {
      name: "Kob Phikul",
      description:
        "กบพิกุล ราชาแห่งทุเรียนตระกูลกบ สีจำปาสด รสชาติ elegant ผู้ดี หอมมัน มีจริตดอกไม้ปนความมันถั่ว",
      price: 400,
    },
    {
      name: "Kob Suwan",
      description:
        "กบสุวรรณ รสชาติจริตกบผู้ดี หวานอ่อนละมุน กลิ่นนวลกลม ความมันถั่วตามเบาๆ",
      price: 400,
    },
    {
      name: "Nok Krajib",
      description:
        "นกกระจิบ จากสวนคุณไพบูลย์ หวานมันหอมลงคอ สดชื่นด้วยกลิ่นดอกไม้ ทานง่าย",
      price: 350,
    },
    {
      name: "Med Nai Yai Prang",
      description:
        "เม็ดในยายปรางค์ สายพันธุ์พื้นเมืองของนนทบุรี หอมหวานโทนกลิ่นดอกไม้ป่า สัมผัสเบาสบาย",
      price: 350,
    },
    {
      name: "Thong Lin Jong",
      description: "ทองลินจง หอมหวานเข้มข้น มีความมันหอม เหมือนน้ำกะทิทุเรียน",
      price: 350,
    },
    {
      name: "Black Chanee",
      description:
        "ชะนีดำ สายพันธุ์ signature จากสวนบูรพาพันธุ์ไม้ มี 1 ต้นในไทย ไร้กลิ่นฉุนของชะนีปกติ หอมมันหวาน ช่อดอกไม้",
      price: 350,
    },
    {
      name: "Chantaburi 10",
      description:
        "จันทบุรี 10 สวนอากง รวมความนกหยิบและชะนี มีความครีมมี่สูง หอมนวลลงตัว ตามด้วยโน้ตผลไม้หลากหลายชนิด",
      price: 350,
    },
    {
      name: "Kradum",
      description:
        "กระดุม เหมาะสำหรับผู้เริ่มทานทุเรียน กลิ่นเบา สัมผัสนุ่มนวลอ่อนหวาน ทานง่าย",
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
      name: "Jasmine Black Tea and Seasonal Mango",
      description:
        "ชาเตียนหง อบดอกมะลิสดแท้ 3 รอบ ด้วยกรรมวิธีแบบดั้งเดิม นำเข้าจากประเทศจีน หาทานยาก พร้อมมะม่วงตามฤดูกาล",
      tasteNote:
        "Taste note: ความหอมหวานของมิติชากว้าง แทรกด้วยกลิ่นดอกมะลิสดหอมอบอวล",
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

export const midtownCoffeeAndSpirit: Flavor[] = [
  coffee,
  westernTea,
  matcha,
  easternTea,
  chocolate,
  classic,
  fruits,
  durians,
  special,
];

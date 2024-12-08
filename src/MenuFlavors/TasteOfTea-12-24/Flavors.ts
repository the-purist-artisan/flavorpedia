import { Flavor, SOLDOUT_TYPE } from "../types";

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
      name: "Honzu Asahi (2024 Competition)",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi กรรมวิธีผลิตด้วยการพรางแสงด้วยโครงไม้ไผ่และฟางข้าว จัดหาโดย MTCH",
      tasteNote:
        "Tasting notes: สาหร่ายทะเลย่างแบบผู้ดี เนยอบ องุ่นขาว ลูกฟิก และผลไม้แห้ง",
      price: 600,
    },
    {
      name: "Zuisho Shogyokuen",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Uji Hikari จากแบรนด์ Shogyokuen",
      tasteNote:
        "Tasting notes: ถั่วลันเตา สาหร่ายอ่อน มะม่วง มะพร้าวอ่อน ความอูมามิพุ่งพล่าน หวานและค้างอยู่ในปากยาวนาน",
      price: 590,
    },
    {
      name: "Uji Hikari Tsujiki",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Asahi กรรมวิธีผลิตด้วยการพรางแสงด้วยโครงไม้ไผ่และฟางข้าว จัดหาโดย MTCH",
      tasteNote:
        "Tasting notes: สาหร่ายทะเลย่าง ดอกไม้ เนยอบ ธัญพืช หอมหวานอูมามิคาราเมลผลไม้อบทิ้งท้าย",
      price: 580,
    },
    {
      name: "Yame No Tenkuu",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากไร่ชาเก่าแก่อายุกว่า 300 ปี ณ เมือง Yame จัดหาโดย PAGUcha",
      tasteNote:
        "Tasting notes: ถั่วคลุกเนย ขนมปัง ธัญพีช ดอกไม้แห้ง อูมามิอัดแน่นและซับซ้อน",
      price: 570,
    },
    {
      name: "Tsujiki Gokou",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Gokou จากไร่ชนะรางวัลตลอดกาล Tsujiki จัดหาโดย Mori Tea House",
      tasteNote:
        "Tasting notes: ธัญพีชที่หอมหวานมันลงตัว ซุปวากาเมะ ความมันเนยถั่วบางๆ",
      price: 560,
    },
    {
      name: "Saemidori",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด สายพันธุ์ Saemidori จากไร่ Gokasho จัดหาโดย MTCH",
      tasteNote:
        "Tasting notes: ธัญพืช ปลาดิบ เม็ดบัว ซุปสาหร่ายคอมบุ เค็มแบบสุภาพ",
      price: 550,
    },
    {
      name: "Yame No Sora",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากไร่ชาเก่าแก่อายุกว่า 300 ปี ณ เมือง Yame จัดหาโดย PAGUcha",
      tasteNote:
        "Tasting notes: หอมมันถั่วแมคาเดเมียคั่วกลาง ผลไม้สุกแบบกล้วย อูมามิทะเลข้าวเกรียบกุ้ง ซับซ้อนยาวนาน",
      price: 500,
    },
    {
      name: "Fresh Milled Hoshinomura Tsuyuhikari",
      description:
        "มัทฉะเกรดพิธีชงสูงสุด จากเมืองยาเมะ สายพันธุ์ Tsuyuhikari จัดหาโดย MTCH",
      tasteNote: "Tasting notes: ถั่วคั่วอ่อน ดอกชา มะลิ หญ้าสด",
      price: 450,
    },
    {
      name: "Hanae Nishio",
      description:
        "มัทฉะเกรดพิธีชงสูงสุดจากเมือง Nishio จัดหาโดย Mori Tea House",
      tasteNote: "Tasting notes: ผักเขียวลวกสด ดอกไม้สีขาว ",
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
        "ชาดำเบส Darjeeling และ อู่หลงผสมโดย Fortnum and Mason แบรนด์ชั้นนำสุดคลาสสิกจากอังกฤษ",
      tasteNote: "Tasting notes: ดอกส้มสดสีขาว และ เครื่องเทศอ่อนฤดูร้อน",
      price: 300,
    },
    {
      name: "Christmas Morello Cherry Tea",
      description:
        "ชาดำอบกับผลเชอร์รีสุก เชอร์รีเปรี้ยว และเครื่องเทศคริสต์มาสจากแบรนด์ David Vanille",
      tasteNote: "Tasting notes: เชอร์รีสุกหวาน วานิลลา อัลมอนด์ อบเชย แอปเปิล",
      price: 300,
    },
    {
      name: "Bolero Fruit Tea",
      description:
        "ชาดำเบลนด์กลิ่นผลไม้และดอกไม้จากทะเล Mediterranean จากแบรนด์ Mariage Frères",
      tasteNote:
        "Tasting notes: แอปริคอต มะม่วง พีช ลูกฟิก ลูกเกด ทาร์ต เบอร์รี ",
      price: 300,
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
      name: "Dong Fang Mei Ren Competition Grade (東方美人) Summer Harvest",
      description:
        "ชาตงฟางเหม่ยเหริน (นางงามบูรพา) ชนะรางวัลฤดูร้อนจากบ้านปี้หลิง ตำบลเอ๋อเหม่ย จังหวัดชินจู๋ ประเทศไต้หวัน",
      tasteNote:
        "Tasting notes: ดอกไม้ และน้ำผึ้งที่ชัดเจน ตามด้วยรสผลไม้ ปิดท้ายด้วยรสหมักของสายพันธุ์ชิงซินต้าโหม่ว กลิ่น และรสของชามีความซับซ้อน มีความฟงฝู่ 豐富 จัดเต็ม ไม่แบน มีหลากหลายมิติ รสชาติทิ้งท้ายยาวนาน",
      price: 800,
    },
    {
      name: "Da Hong Pao Qi Dan (大紅袍奇丹)",
      description:
        "ชาต้าหงเผา (เสื้อคลุมสีแดง) สายพันธุ์เดี่ยวจากยอดผาดอกบัว หนึ่งในสุดยอดชา จากอู๋อี๋ซาน มณฑลฝูเจี้ยน",
      tasteNote:
        "Tasting notes: ท้อฟฟี่ กลิ่นอบไฟอ่อน ผลไม้ stone fruit มิติความแร่ธาตุซับซ้อน",
      price: 550,
    },
    {
      name: "Tie Guan Yin Fo Shou (佛手铁观音)	",
      description:
        "ชาเถี่ยวกวนอิน พันธุ์โฝวโส่ว หรือ “ฝ่ามือพระพุทธเจ้า” สายพันธุ์โบราณ หาทานได้ยากยิ่ง",
      tasteNote:
        "Tasting notes: กลิ่นหอมโทนส้มสดหวาน ส้มหอมแห้ง มีกลิ่นอายของเครื่องเทศฤดูร้อน",
      price: 450,
    },
    {
      name: "Rou Gui Hu Xiao Yan (虎嘯岩肉桂)",
      description:
        "โร่วกุ้ยผาเสือคำราม เหยียนฉาโร่วกุ้ยอบไฟกลาง จาก อู่อี๋ซาน หนานผิง มณฑลฝูเจี้ยน",
      tasteNote:
        "Tasting notes: กุ้ยผีเชียง (เปลือกไม้และอบเชย) ดอกไม้ น้ำตาลไหม้ ผลไม้สุก",
      price: 400,
    },
    {
      name: "Pomelo Flower Tea",
      description:
        "ชาฉีหลันอบดอกส้มโอสดสีขาว จากแบรนด์ชาพรีเมี่ยม T9 ประเทศจีน",
      tasteNote: "Tasting notes: ดอกส้มโอ ดอกไม้สีขาว ดอกกล้วยไม้ คาราเมล",
      price: 400,
    },
    {
      name: "Moonlight Osmanthus",
      description: "ชาอู่หลงผสมกลีบดอกหอมหมื่นลี้จากแบรนด์ Lupicia",
      tasteNote: "Tasting notes: ดอกหอมหมื่นลี้ ขนมปัง น้ำผึ้ง มอลต์",
      price: 350,
    },
    {
      name: "Jasmine Dian Hong (茉莉滇红)",
      description:
        "ชาแดงเตียนหง อบดอกมะลิสดแท้ 3 รอบด้วยกรรมวิธีแบบดั้งเดิม หาทานยาก จัดหาโดย Deng Deng",
      tasteNote: "Tasting notes: ดอกมะลิสีน้ำตาล คาราเมล ช็อกโกแลต ถั่ว",
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
      name: "Panama Tierra Oscura Sorbet",
      description:
        "ช็อกโกแลต Criollo ต้นโบราณ จากดินแดนอเมริกากลาง รางวัลประกวดรุ่นบุกเบิกจาก Duffy’s",
      tasteNote:
        "Tasting notes: ชะเอมเทศ ไวน์แดง Merlot ผลไม้สีแดง บอดี้ช็อกโกแลตจัดเต็ม",
      price: 350,
    },
    {
      name: "Madagascar Ambohemena Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Criollo จากประเทศ Madagascar แบรนด์ Chocolat Madagascar",
      tasteNote: "Tasting notes: ซิตรัส เบอร์รีแดง พลัม คาราเมล ถั่วคั่วอ่อน",
      price: 350,
    },
    {
      name: "Ecuador Nacional Arriba (TO’AK Powder) Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Nacional Arriba พันธุ์แห่งชาติของประเทศ Ecuador โดยแบรนด์ระดับโลก TO’AK",
      tasteNote: "Tasting notes: ดอกไม้ป่า ผลไม้ซิตรัส เครื่องเทศฤดูหนาว",
      price: 350,
    },
    {
      name: "Domori Venezuela Classic Ocumare Sorbet",
      description:
        "ช็อกโกแลตสายพันธุ์ Criollo สายพันธุ์ย่อย Ocumare จาก Domori เหมาะสําหรับผู้เริ่มทานช็อกโกแลตซอร์เบท์",
      tasteNote: "Tasting notes: คาราเมล ถั่ว หอมกลิ่นคั่ว",
      price: 350,
    },
    {
      name: "Domori Venezuela Classic Ocumare Ganache",
      description:
        "ช็อกโกแลตจาก Domori ผู้ผลิตช็อกโกแลตสายพันธุ์ Criollo ชั้นนำ สายพันธุ์ย่อย Ocumare รสชาติคลาสสิกเข้ากับนม",
      tasteNote: "Tasting notes: คาราเมล ถั่ว หอมกลิ่นคั่ว",
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
      name: "Amalfi Lemon Sorbet",
      description:
        "เลมอนอันดับหนึ่งจากเมือง Amalfi สามารถทานได้ทั้งเนื้อและเปลือก มีความหอมฟุ้งโทนทะเลสดชื่น",
      price: 400,
    },
    {
      name: "Reine des Reinettes Apple Sorbet (King of the Pippins)",
      description:
        "แอปเปิลระดับตํานานที่ได้รับการยอมรับว่าเป็นสายพันธุ์ที่ทํา cider ได้ดีที่สุด มีกลิ่นแฝงของพีช ส้ม เลมอน เมลอน และพลัม",
      price: 350,
    },
    {
      name: "Green Williams Pear Sorbet",
      description:
        "แพร์สายพันธุ์ Green Williams สามารถทานได้ทั้งผล เนื้อสัมผัสเหมือนเนย เปลือกไม่ติดความขมและมีกลิ่นหอมอ่อนหวานเป็นเอกลักษณ์",
      price: 350,
    },
    {
      name: "Tout Miel Clementine Sorbet",
      description:
        "ส้มสายน้ำผึ้งจาก Valencia เก็บเกี่ยวด้วยมือ รสชาติพุ่ง กลิ่นหอมเข้มข้น แฝงจริตผลไม้ tropical บางๆ",
      price: 350,
    },
    {
      name: "Dole Cherry Sorbet",
      description:
        "เชอร์รี่ดังจากชิลี รสชาติเปรี้ยวหวานสมดุล กลิ่นหอมคลาสสิกของเชอร์รี่แดงสด",
      price: 350,
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
      name: "Panama Geisha El Burro GN16  (Auction Lot)",
      description:
        "กาแฟ Geisha เกรดประกวด จากตอนใต้ของ Panama โดยไร่ระดับรางวัล El Burro Estate ",
      tasteNote:
        "Tasting notes: พีช ลิ้นจี่ ลูกอมเบอร์รี ตะไคร้ เบอร์กามอต ทิ้งรสชาติยาวนาน",
      price: 700,
    },
    {
      name: "Best of Panama Rank #1 Panama Carmen",
      description:
        "กาแฟ Geisha จาก Carmen Estate ดีกรีรางวัล Best of Panama ลําดับที่ 1",
      tasteNote:
        "Tasting notes: ส้มหวาน พีชเหลือง แอปริคอต ดอกไม้ น้ำผึ้งมะนาว",
      price: 600,
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

const classic: Flavor = {
  id: "classic",
  categoryButtonText: "หมวด รสคลาสสิก",
  backgroundColorClass: "bg-classic-bg",
  textColorClass: "text-classic-text",
  imageName: "classic",
  name: "รสชาติคลาสสิกของ The Purist",
  items: [
    {
      name: "Blue Vanilla (Vanille Bleue)",
      description:
        "วานิลลาที่ได้รับการจดลิขสิทธิ์โดย Escale Bleue และรางวัล Superior Taste Award",
      tasteNote:
        "Tasting notes: ไม้รมควัน ชา lapsang souchong สมุนไพร ช็อกโกแลค คาราเมล",
      price: 500,
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
        "พิสตาชีโอจากตุรกี สายพันธุ์ Antep สุดพรีเมี่ยม มีความหวานนำมัน กลิ่นเขียวสดคลาสสิกเอกลักษณ์",
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
      name: "Mulled Wine Sorbet (Premier Cru Burgundian Pinot Noir)",
      description:
        "รสชาติเฉลิมฉลองเทศกาลคริสต์มาส ถอดสูตรแปลงร่างมาจาก Mulled Wine ดั้งเดิม หอมความซับซ้อนผลไม้นานาชนิดของไวน์ Pinot Noir ระดับ Premier Cru จากพื้นที่ Burgundy และกลิ่นเครื่องเทศฤดูหนาวต่างๆ",
      price: 700,
    },
    {
      name: "Amarone-Poached Pear Sorbet with Crumbles and Amalfi Lemon Zest",
      description:
        "รสชาติสุดพิเศษฉลองฤดูกาลสิ้นปี ถอดมาจากของหวานดั้งเดิมในฝรั่งเศส Poire a la Beaujolais ที่มีมาตั้งแต่ศตวรรษที่ 19 โดยนําลูกแพร์มาตุ๋นในไวน์แดง (Amarone della Valpolicella) โรยด้วย crumbles with Amalfi lemon zest",
      price: 600,
    },
    {
      name: "White Truffle White Chocolate Hazelnut",
      description:
        "ไอศกรีม 2 เลเยอร์ที่ผสานรสชาติสุด luxury ของเห็ดทรัฟเฟิลขาวฤดูหนาวในไวท์ช็อกโกแลต และ Piedmont เฮเซลนัท",
      price: 500,
    },
    {
      name: "Tahitian Vanilla Stracciatella (Choc Chips)",
      description:
        "วานิลลา Tahitian รสชาติซับซ้อนด้วยความหอมหวาน และกลิ่นจากเครื่องเทศ ตัดกับช็อกโกแลตชิพ Domori Guasare ที่มีความละมุนและมิติล้ำลึก",
      price: 450,
    },
    {
      name: "Fresh Mint Stracciatella (Mint Choc Chips)",
      description:
        "รสชาติที่หาทานได้ยาก ทำจากใบมิ้นต์สด 5 สายพันธุ์ และราดด้วยช็อกโกแลต shards จาก Amedei No.9",
      price: 400,
    },
    {
      name: "Gianduja Chocolate Hazelnuts",
      description:
        "ช็อกโกแลต Ocumare จาก Domori ที่มีรสเข้ม ผสมกับ Piedmont Hazelnut ขั้นกว่าของรสชาติที่คุณคุ้นเคย",
      price: 350,
    },
    {
      name: "Cranberry & Redcurrant Yogurt",
      description:
        "โยเกิร์ตสไตล์กรีกชนะรางวัลจาก The Estate Dairy ราดซอสแครนเบอร์รีและเรดเคอร์แรนท์สายพันธุ์พิเศษจาก Netherlands",
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

export const tastOfTea122024: Flavor[] = [
  matcha,
  westernTea,
  easternTea,
  chocolate,
  fruits,
  coffee,
  classic,
  special,
];

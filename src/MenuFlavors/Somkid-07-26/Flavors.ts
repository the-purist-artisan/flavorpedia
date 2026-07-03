// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Flavor, SOLDOUT_TYPE } from "../types";

// Use this web to do conversion from csv and put it in parsedFlavours:
// https://csvjson.com/csv2json
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const parsedFlavours = [];

const matcha: Flavor = {
  id: "matcha",
  categoryButtonText: "หมวด มัทฉะพิธีการ",
  backgroundColorClass: "bg-matcha-bg",
  imageName: "matcha",
  name: "มัทฉะพิธีการ (เกรดพิธีชง/มรดกญี่ปุ่น)",
  items: [
    {
      isNewFlavor: true,
      name: "Samidori Gokasho (MTCH)",
      description:
        "มัทฉะสายพันธุ์ Samidori จากอุจิ ปลูกและผลิตโดย Award-winning ฟาร์ม และเป็นเกรด Competition ที่ทำขึ้นเพื่อส่งประกวด\nจัดหาโดย MTCH",
      tastingNotes:
        "ให้คาแรกเตอร์ของ ความเขียวสดชื่นของ สาหร่ายย่างหวาน หน่อไม้ฝรั่ง เปลือกเมลอนกลิ่นหอม และอูมามิที่นุ่มนวล เนื้อชาแน่น สดชื่น และสมดุลอย่างมาก",
      price: 500,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Yame Honō (PAGUcha)",
      description:
        'มัทฉะฤดูกาลแรกของปี 2026 ระดับ Koicha จากเมืองยาเมะ จังหวัดฟุกุโอกะ แหล่งปลูกที่ขึ้นชื่อเรื่องชาเนื้อเนียนนุ่มและไร้ความขม โดดเด่นด้วยคาแรกเตอร์การคั่วไฟ ที่ควบคุมความร้อนได้อย่างสง่างามจนได้ชื่อว่า "Honō" (เปลวไฟ) ให้มิติอูมามิที่หนักแน่นและจู่โจมตอบโจทย์ผู้หลงใหลในมัทฉะโทนถั่วทุกมิติ จัดหาโดย PAGUcha',
      tastingNotes:
        "พิสตาชีโอคั่ว, เกาลัดอบ, ถ่านไฟอ่อนๆ, ปลาเนื้อขาวย่าง, อูมามิ, ธัญพืชคั่ว, ขนมปังปิ้ง",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DZ150VxIC17",
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
      isNewFlavor: true,
      name: "Vignola Cherry I.G.P. Sorbet",
      description:
        "เชอร์รีสายพันธุ์ดั้งเดิม Mora di Vignola จากแคว้น Emilia-Romagna อิตาลี (I.G.P.) พิเศษด้วยการคัดมือและบินตรงถึงไทยภายในวันเดียวเพื่อความสดสูงสุด ให้โปรไฟล์ของ Black Cherry, Red Berry และ Floral ที่เข้มข้น พร้อมความหวานและกรดผลไม้ที่สมดุล",
      tastingNotes: "",
      price: 450,
      instagramUrl: "https://www.instagram.com/p/DaIZloRIGDJ",
    },
    {
      isNewFlavor: true,
      name: "Hikawa Hakuhou Peach Sorbet",
      description:
        "พีชเนื้อขาวสายพันธุ์หอมในกลุ่ม Hakuhō Tokusen เกรด 特選品 หรือเกรดสูงสุดของสวน Okita โดยคัดผลที่อยู่บริเวณ ยอดต้นและปลายกิ่ง ซึ่งได้รับแสงแดดเต็มที่ที่สุด ทำให้ผลพัฒนา น้ำตาล กลิ่น และคุณภาพได้สมบูรณ์กว่า พร้อมผลขนาดใหญ่ ทรงสวย และผ่านการคัดเลือกเฉพาะลูกที่ดีที่สุดของฤดูกาล ให้กลิ่นพีชขาวสุก น้ำผึ้ง ลูกแพร์ และดอกไม้ขาวอ่อน ๆ หวานหอม สดใส ฉ่ำน้ำ และมีความ floral ที่สง่างาม",
      tastingNotes: "",
      price: 450,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Shimane Delaware Grape Sorbet",
      description:
        "องุ่น Delaware จากจังหวัด Shimane ประเทศญี่ปุ่น องุ่นสายพันธุ์คลาสสิกที่คนญี่ปุ่นรักมายาวนาน ผลเล็กแต่กลิ่นหอมจัดของ องุ่นแดง น้ำองุ่น และลูกอมองุ่นญี่ปุ่น รสหวานฉ่ำ กรดสดใส มีกลิ่นฟุ้งเป็นเอกลักษณ์",
      tastingNotes: "",
      price: 450,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Quincy Melon Sorbet",
      description:
        "เมลอนเนื้อส้มสายพันธุ์ Quincy จากจังหวัดอิบารากิ ประเทศญี่ปุ่น คัดสรรในช่วงที่ผลสุกเปล่งปลั่งที่สุด ให้มิติความหวานหอมลึกล้ำ ซับซ้อนด้วยโน้ตของน้ำผึ้ง ผลไม้สุก และกลิ่นดอกไม้บางๆ ผ่านกระบวนการเฉพาะที่ทำให้เนื้อสัมผัสยังเนียนฉ่ำและคงความหอมเข้มข้นไว้ได้ในทุกคำ",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DZw9fIZoFSf",
    },
    {
      isNewFlavor: true,
      name: "Andes Melon Sorbet",
      description:
        "เมลอนเนื้อเขียวสายพันธุ์ Andes จากจังหวัดอิบารากิ ประเทศญี่ปุ่น แหล่งปลูกชั้นนำที่เก็บเกี่ยวในช่วงพีคที่สุด โดดเด่นด้วยกลิ่นหอมสดชื่น คมชัด เป็นเอกลักษณ์ของเมล่อนญี่ปุ่น นำมาทำเป็น Sorbet ด้วยเทคนิคพิเศษที่ควบคุมปริมาณน้ำและน้ำตาลอย่างสมดุล จนได้เนื้อสัมผัสเนียนฉ่ำ กักเก็บความหอมละมุนไว้ได้อย่างสมบูรณ์แบบ",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DZw9fIZoFSf",
    },
    {
      isNewFlavor: true,
      name: "Ania Strawberry Sorbet",
      description:
        "สตรอว์เบอร์รีสายพันธุ์พิเศษ Ania จากอิตาลี ระดับท็อปคลาสในคอลเลกชัน Waitrose No.1 ของอังกฤษ โดดเด่นด้วยกลิ่นหอมของสตรอว์เบอร์รีป่า แยมผลไม้ และราสป์เบอร์รี่",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DaDRvrZoKSu",
    },
    {
      isNewFlavor: false,
      name: "Amalfi Lemon I.G.P. Sorbet",
      description:
        "เลมอนที่ขึ้นชื่อว่าอร่อยที่สุดตลอดกาลจากเมือง Amalfi โดดเด่นด้วยเปลือกที่ทานได้ อุดมด้วย Aromatic Oil หอมฟุ้งโทนทะเลสดชื่นโดยไม่ขม มอบรสเปรี้ยวสะอาดและมีชีวิตชีวา",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DZ7jsDcIKua",
    },
    {
      isNewFlavor: true,
      name: "Ania Strawberry Sherbet (Double Cream)",
      description:
        "ใช้สตรอว์เบอร์รีสายพันธุ์พิเศษ Ania ระดับท็อปคลาสเช่นเดียวกับตัว Sorbet แต่นำมาผสานความนุ่มนวลด้วย Fresh Double Cream รังสรรค์เป็น Sherbet เนื้อเนียนละเอียด ที่ช่วยเปลี่ยนความหอมอบอวลของผลไม้ให้กลมกล่อมและละมุนละไมยิ่งขึ้นในทุกคำ",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DaDRvrZoKSu",
    },
    {
      isNewFlavor: true,
      name: "Nectarprima Yellow Nectarine Sorbet",
      description:
        "เนคทารีนเนื้อสีทองสายพันธุ์ Nectaprima จากสเปน คัดสรรในช่วงที่ผลเปล่งประกายสูงสุด โดดเด่นด้วยสมดุลอันยอดเยี่ยมระหว่างความหวานและกรดผลไม้ให้รสชาติสว่างสดใส ซับซ้อนด้วยมิติของแอปริคอต มะม่วงสีทอง และดอกไม้สีขาว เป็น Sorbet ที่ดึงคาแรกเตอร์ความสดชื่นของฤดูร้อนยุโรปออกมาได้อย่างดี",
      tastingNotes: "",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DZhDJp0oHPp",
    },
    {
      isNewFlavor: false,
      name: "Long Kong ลองกอง Sorbet",
      description:
        "ลองกองจากปราจีนบุรี โดดเด่นด้วยสมดุลรสหวานอมเปรี้ยวที่กลมกล่อม ซ่อนมิติความหอมของน้ำผึ้งอ่อน ดอกไม้สีขาว องุ่นขาว และลูกแพร์ ผ่านกระบวนการที่มีความพิถีพิถัน ต้องใช้มือแกะและคัดเมล็ดออกอย่างทะนุถนอมเพื่อหลีกเลี่ยงความขม มอบสัมผัสของเนื้อลองกองเน้นๆ ที่หอมหวานสดชื่นในทุกคำ",
      tastingNotes: "",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/DZ5HLPsoJcM",
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
      isNewFlavor: true,
      name: "Panama Geisha Lamastus Boquete Elida Torre Estate",
      description:
        "เมล็ดกาแฟ Geisha จาก Elida Estate ประเทศปานามา ปลูกบนความสูง 1,850 เมตร ผ่านกระบวนการแบบ Washed Process และคั่วอย่างพิถีพิถันโดย Vendetta Roaster และเปลี่ยนเป็นไอศกรีมเบสนมด้วยเทคนิคการสกัดกลิ่นที่ยังคงความละเอียดอ่อนของกาแฟ Filter ไว้ได้อย่างสมบูรณ์ ให้มิติรสชาติพุ่งกระแทกเป็นระลอกคลื่น พร้อมทิ้งสัมผัสหวานหอมของเกสรดอกไม้ตลบอบอวลใน Aftertaste อย่างยาวนาน",
      tastingNotes: "พีช, ดอกส้มสีขาว, แอปริคอต, เบอร์กาม็อต, น้ำผึ้ง",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
      price: 600,
      instagramUrl: "https://www.instagram.com/p/DZpUDy6oClY",
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
      name: "Da An Song Zhong Dan Cong",
      description:
        "Da An Song Zhong Dan Cong จากหมู่บ้านต้าอัน บนเขาเฟิ่งหวง หนึ่งในพื้นที่ปลูกชาตันฉง ที่ได้รับการยอมรับมากที่สุด พื้นที่สูง อากาศเย็น มีหมอกปกคลุม และดินที่อุดมด้วยแร่ธาตุ ทำให้ใบชาสะสมสารหอม (volatile aroma compounds) ได้มาก จึงเป็นแหล่งปลูกที่นักดื่มชาระดับสูงตามหา ตามตำนาน เชื่อว่าสืบเชื้อสายมาจากต้นชาที่รอดมาตั้งแต่ยุคราชวงศ์ซ่ง",
      tastingNotes:
        "แอปริคอตสุก พีช ลำไย แอปริคอตแห้ง น้ำผึ้ง และกล้วยไม้ พุ่งออกมาตั้งแต่แรกเปิดถุง ให้ความรู้สึกของผลไม้สุกฉ่ำหวานมากกว่าสายดอกไม้ เนื้อชาแน่น นุ่ม หวานตามธรรมชาติ และทิ้งความหอมยาวนานติดปลายจมูกและในคอหลังดื่ม",
      price: 750,
      instagramUrl: "https://www.instagram.com/p/DaQAGxwEqTf",
    },
    {
      isNewFlavor: false,
      name: "Tie Guan Yin Silver Medal (鐵觀音)",
      description:
        "ชาเถี่ยกวนอินจากเขต Muzha ประเทศไต้หวัน ล็อตพิเศษฤดูใบไม้ผลิปี 2023 การันตีคุณภาพด้วยรางวัลเหรียญเงิน (Silver Medal) จากเวทีประกวดระดับประเทศที่ตัดสินอย่างเข้มข้น โดดเด่นด้วยคาแรกเตอร์การคั่วไฟแบบดั้งเดิมที่ดุดันและจัดจ้าน บอดี้แน่นแต่ยังคงความละมุนและซับซ้อนของมิติรสชาติ เป็นผลงานที่สะท้อนฝีมือการคั่วระดับปรมาจารย์ชาอย่างแท้จริง",
      tastingNotes:
        "ผลไม้สุกอย่างลูกพรุนและพีช ดอกไม้ อบไฟกลาง น้ำผึ้งฉ่ำ คาราเมล  ทิ้งท้ายด้วยกลิ่นถั่วคั่วและโกโก้",
      price: 600,
      instagramUrl: "https://www.instagram.com/p/DZmH0TuICpk",
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
      name: "French earl Grey (T2)",
      description:
        'ใบชาเอิร์ลเกรย์เบลนด์อันเป็นเอกลักษณ์จากแบรนด์ T2 ประเทศออสเตรเลีย โดดเด่นด้วยนิยามความหอมแบบ "Oh-so-fruity" ที่ฉีกกรอบเอิร์ลเกรย์ดั้งเดิม ผสานกลิ่นสิทรัสอันเป็นเอกลักษณ์ของเบอร์กาม็อตเข้ากับความสดชื่นของสวนผลไม้และดอกไม้ละลานตา',
      tastingNotes: "ผลไม้ กุหลาบ ดอกทานตะวัน กระเจี๊ยบ",
      price: 300,
      instagramUrl: "https://www.instagram.com/p/C76q3M6SbjO",
    },
    {
      isNewFlavor: false,
      name: "Countess Grey (Fortnum & Mason)",
      description:
        "ชาดำจากแบรนด์ชาคู่ราชวงศ์อังกฤษ โดดเด่นด้วยการเบลนด์ความหอมอโรม่าของเบอร์กาม็อตเข้ากับความสว่างของส้มซีทรัส ที่ให้ความหอมเบาสบาย และสดชื่น",
      tastingNotes:
        "น้ำมันเบอกาม็อทสุดคลาสสิกสไตล์ผู้ดีอังกฤษ ปิดท้ายด้วยเปลือกส้ม",
      price: 300,
      instagramUrl: "",
    },
    {
      isNewFlavor: false,
      name: "Paris-Ginza (Mariage Freres)",
      description:
        "ชาดำเบลนด์พิเศษจากแบรนด์อาร์ติซานของฝรั่งเศส ที่ถ่ายทอดการบรรจบกันของสองมหานคร โดดเด่นด้วยมิติความหอมหวานนุ่มลึกของคาราเมลเนยสไตล์ฝรั่งเศส ผสานความสดชื่นฉ่ำหวานของผลไม้สีแดงอย่างสตรอว์เบอร์รี่ ราสป์เบอร์รี และเชอร์รี",
      tastingNotes: "ผลไม้สีแดง ราสป์เบอร์รี เชอร์รี ครีมเนยคาราเมล",
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
      isNewFlavor: true,
      name: "Costaricensis Vanilla",
      description:
        'วานิลลาสายพันธุ์ลูกผสมจากคอสตาริกา หนึ่งในกลุ่ม "Uncolonised Vanilla" แห่งโลกใหม่ที่ปลูกด้วยระบบวนเกษตร (Agroforestry) ภายใต้ร่มเงาไม้ใหญ่ และผ่านการบ่มอย่างพิถีพิถันนานหลายเดือน ฉีกกรอบวานิลลาดั้งเดิมด้วยมิติความหอมที่ปราศจากกลิ่นครีมคัสตาร์ด แต่โดดเด่นด้วยโน้ตของอัลมอนด์คั่ว เฮเซลนัท ดาร์กช็อกโกแลต และแฝงความฉ่ำของผลไม้สุก ให้รสสัมผัสที่อบอุ่น ล้ำลึก และสะท้อนเอกลักษณ์ของสายพันธุ์ออกมาได้อย่างตรงไปตรงมา',
      tastingNotes: "",
      price: 550,
      instagramUrl: "https://www.instagram.com/p/DaNcKbKEstw",
    },
    {
      isNewFlavor: false,
      name: "Bronte Pistachio D.O.P",
      description:
        "ถั่วพิสตาชีโอ D.O.P. จากเมือง Bronte โดยฟาร์ม Don Tanu ที่คัดสรรคุณภาพอย่างเสถียร นำมาคั่วอย่างแม่นยำเพื่อรักษามิติความหอมสดชื่น ก่อนเข้ากระบวนการโม่หิน (Melanger) แบบควบคุมอุณหภูมิจนได้ความละเอียดที่สมดุลที่สุด ให้เนื้อสัมผัสเนียนละเอียด ปลดปล่อยน้ำมันธรรมชาติอย่างพอดี รักษารสชาติให้หอมละมุนและคลีนที่สุดโดยไม่เสียคาแรกเตอร์จากความร้อนสะสม",
      tastingNotes: "",
      price: 350,
      instagramUrl: "https://www.instagram.com/p/DaAyCzVIClH",
    },
    {
      isNewFlavor: false,
      name: "Red Rock Macadamia",
      description:
        "แมคคาเดเมียเกรดประกวด Red Rock จากเมือง Bundaberg ออสเตรเลีย ปลูกบนดินแดงที่อุดมด้วยแร่ธาตุ รอบนี้ยกระดับความคราฟต์ด้วยกระบวนการโม่หินเพื่อสกัดรสชาติแบบ Low Impact อย่างทะนุถนอม ให้สัมผัสครีมมี่นุ่มลื่น โดดเด่นด้วยมิติความหอมอบอุ่นของเนยคั่ว ไวท์ช็อกโกแลต เมเปิล และขนมปังบริยอชอบอบใหม่ ให้รสชาติหอมมัน กลมกล่อม และล้ำลึกเหนือระดับ",
      tastingNotes: "",
      price: 350,
      instagramUrl: "https://www.instagram.com/p/DQWqO67kv0Q",
    },
    {
      isNewFlavor: false,
      name: "Piedmont Hazelnut I.G.P.",
      description:
        "เฮเซลนัท I.G.P. จากฟาร์มคราฟต์ Scoiattolo Rosso แห่งแคว้น Piedmont ประเทศอิตาลี ดินแดนที่ได้รับการยกย่องว่าเป็นแหล่งปลูกเฮเซลนัทที่ดีที่สุดในโลก ด้วยแร่ธาตุในดินและสภาพภูมิอากาศเฉพาะตัว ทำให้ได้ถั่วที่มีโครงสร้างรสชาติโดดเด่น มอบความหอมมันละมุนละไมราวกับเนย ซ่อนมิติความหวานของวานิลลาอ่อนๆ และน้ำผึ้งตามธรรมชาติ",
      tastingNotes: "",
      price: 300,
      instagramUrl: "",
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
      isNewFlavor: true,
      name: "Chocolat Madagascar Sambirano Sorbet",
      description:
        "เมล็ดโกโก้ระดับรางวัลจากหุบเขา Sambirano ประเทศมาดากัสการ์ แหล่งปลูกที่เปรียบดั่ง Burgundy แห่งโลกช็อกโกแลต ยกระดับความคราฟต์ไปอีกขั้นด้วยการนำ Cacao Nibs มาโม่หินเอง แทนการใช้ช็อกโกแลตสำเร็จรูป เพื่อถ่ายทอดรสชาติของแหล่งปลูก เป็น Sorbet ที่ให้โน้ตของผลไม้สีแดงสุกและให้บอดี้ที่หนักแน่นที่ทิ้งทวนความสะอาด",
      tastingNotes:
        "เบอร์รี่สีแดงสุก, ราสป์เบอร์รี่, เชอร์รี่, ผลไม้ฉ่ำหวาน, บอดี้หนักแน่น",
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DaF9T3oIBbV",
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
      isNewFlavor: true,
      name: "Amalfi Lemon Meringue Pie",
      description:
        "ถอดแรงบันดาลใจจากขนมคลาสสิก ตีความใหม่โดยเชฟแอมแห่ง Sauvage\nเมอแรงก์ถูกสร้างขึ้นใหม่ให้ บาง เบา กรอบ และแทบไม่หวานด้วยเทคนิคพิเศษ แต่ยังหอมผิว Amalfi Lemon เพื่อเติมสัมผัส กลิ่น และมิติ โดยไม่กลบรสชาติของไอศกรีม Amalfi Lemon Curd ที่ซ่อนอยู่ตรงกลาง ให้ความสดชัด สะอาด และเปรี้ยวหอมอย่างเต็มที่",
      tastingNotes: "",
      price: 550,
      instagramUrl: "",
    },
    {
      isNewFlavor: true,
      name: "Akino Tsuki Matcha Strawberry",
      description:
        "ดัดแปลงจากเครื่ื่องดื่มฟิวชั่นพิเศษ มัทฉะเกรดพิธี Akino Tsuki จาก PAGUcha และสตอเบอรี่ specialty ผสมกับครีมจากฝรั่งเศส จัดเรียงเป็น 3  layers ให้รสชาติที่สดชื่นและสนุกไปพร้อมๆ กัน",
      tastingNotes: "",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
      price: 500,
      instagramUrl: "https://www.instagram.com/p/DMzYTJOTrJ8",
    },
    {
      isNewFlavor: false,
      name: "Mint Chocolate (Mint Stracciatella)",
      description:
        "มิ้นท์ช็อกชิพ รสชาติพิเศษที่หาทานได้ยาก ทำจากมิ้นต์ 5 สายพันธุ์ ให้ dynamic ของความหอมมิ้นท์หลากหลายมิติ และราดด้วยช็อกโกแลต shards จาก Amedei No.9 ที่เพิ่มความซับซ้อนของรสชาติตลอดการเดินทาง",
      tastingNotes: "",
      isSoldOut: SOLDOUT_TYPE.SOLDOUT,
      price: 400,
      instagramUrl: "https://www.instagram.com/p/DZO3c-pxlPa",
    },
    {
      isNewFlavor: false,
      name: "Blueberry Yogurt",
      description:
        "โยเกิร์ตจากวัว Jersey (White by Serene) โดดเด่นด้วยมิติรสชาติอูมามิ ครีมมี่ และสดชื่นเหนือระดับจากน้ำนมของแม่วัวที่เลี้ยงดูอย่างดีในทุ่งหญ้าอุดมสมบูรณ์ เมื่อนำมาจับคู่กับซอสบลูเบอร์รีสายพันธุ์ Sekoya Crunch ที่หวานนำเปรี้ยว หอมฟุ้ง",
      tastingNotes: "",
      price: 350,
      instagramUrl: "https://www.instagram.com/p/DAK3sW6vIgY",
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

export const somkid0726: Flavor[] = [
  matcha,
  fruits,
  coffee,
  easternTea,
  westernTea,
  classic,
  chocolate,
  special,
];

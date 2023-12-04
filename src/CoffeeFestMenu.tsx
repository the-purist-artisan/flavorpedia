import "./index.css";

export default function CoffeeFestMenu() {
  const categories: string[] = [
    "หมวด กาแฟนม Specialty",
    "หมวด มัทฉะพิธีการ",
    "หมวด ชานมตะวันตก",
    "หมวด ชานมตะวันออก",
    "หมวด ช็อกโกแลต",
    "หมวด ผลไม้ตามฤดูกาล",
    "หมวด รส Classic",
    "หมวด รสพิเศษ",
  ];
  return (
    <div className="">
      <div className="bg-menu-background pt-8 flex flex-col items-center text-white">
        <div className="mb-6">
          <img
            src={
              window.location.origin +
              "/flavorpedia/images/coffee-fest/logo.svg"
            }
          />
        </div>
        <div className="menu-header font-eng mb-6 w-fit text-center font-normal text-key-header leading-key-header">
          Thailand Coffee
          <br />
          Fest 2023
        </div>
        <div className="font-eng text-lg mb-6 font-bold">Menulist</div>
        {categories.map((category) => {
          return (
            <div className="border-solid border border-white text-white mb-6 last:mb-0 px-4 py-2 w-fit text-lg leading-5 rounded-3xl">
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

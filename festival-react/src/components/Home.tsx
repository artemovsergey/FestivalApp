import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div className="flex flex-col gap-1 m-1 p-1 mx-auto">
      <Slider />

      {/* Описание концепции и основных ценностей */}
      <div className="flex flex-col gap-3 mt-5 border p-3 rouded rounded-3xl bg-amber-100 text-4xl">
        <span> Концепции </span>
        <span> Ценности </span>
      </div>

      {/* Анонс ключевых мероприятий */}
      <div className="flex flex-col gap-3 mt-5 border p-3 rouded rounded-3xl bg-amber-100 text-4xl">
        <span> Мероприятия </span>
        <span> Анонсы дата. Карточка </span>
      </div>

      {/* Организаторы и команда */}
      <div className="flex flex-col gap-3 mt-5 border p-3 rouded rounded-3xl bg-amber-100 text-4xl">
        <span> Организаторы </span>
        <span> Команда </span>
      </div>

      {/* Счетчик */}
      <div className="flex flex-col gap-3 mt-5 border p-3 rouded rounded-3xl bg-amber-100 text-4xl">
        <span> Счетчик </span>
        <span> До начала фестиваля осталовь 10 дней </span>
      </div>
    </div>
  );
};

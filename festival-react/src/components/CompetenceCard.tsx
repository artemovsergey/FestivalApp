import { useState } from "react";
import type { Competence } from "../models/competence";

export const CompetenceCard = (props: { c: Competence }) => {
  
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1 border p-2 hover:bg-amber-200">
      <span> Название компетенции: {props.c.name} </span>

      <button
        className="flex border p-1 w-max bg-amber-400"
        onClick={() => setShowMore(!showMore)}
      >
        { !showMore ? 'Показать' : 'Скрыть'}
      </button>
      
      {showMore && <span> Описание: {props.c.description} </span>}

      <a href={props.c.task}> Скачать </a>
    </div>
  );
};

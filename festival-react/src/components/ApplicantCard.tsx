import type { Applicant } from "../models/applicant";

export const ApplicantCard = (props: { a: Applicant }) => {
  return (
    <div className="flex flex-col gap-1 border p-2 hover:bg-amber-200">
      <span> Фото: {props.a.user.photo} </span>
      <img src={props.a.user.photo} alt="Фото участника" />
      <span> Имя: {props.a.user.name} </span>
      <span> Компетенция: {props.a.competence.name} </span>
      <span> Регион: {props.a.region.name} </span>
    </div>
  );
};

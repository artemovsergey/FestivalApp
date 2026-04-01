import type { User } from "../models/user";

export const UserCard = (props: { u: User }) => {


  return (
    <div className="flex flex-col gap-1 border p-2 hover:bg-amber-200">
      <span> Имя: {props.u.name} </span>
      <span> Компетенция: {props.u.name} </span>
      <span> Регион: {props.u.name} </span>
    </div>
  );
};

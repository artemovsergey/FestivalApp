import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-2 text-[10px] justify-items-center p-3 gap-0 mx-auto bg-amber-200 w-full">
      <div className="flex flex-col gap-1">
        <NavLink to="/users" className="p-1">
          {" "}
          Участники{" "}
        </NavLink>
        <NavLink to="/competences" className="p-1">
          {" "}
          Компетенции{" "}
        </NavLink>
        <NavLink to="/admin" className="p-1">
          {" "}
          Админ Панель{" "}
        </NavLink>
        <NavLink to="/sign" className="p-1">
          {" "}
          Регистрация{" "}
        </NavLink>
      </div>

      {/* Контакты */}
      <div className="flex flex-col gap-1">
        <span> Контакт 1</span>
        <span> Контакт 2</span>
      </div>
    </footer>
  );
};

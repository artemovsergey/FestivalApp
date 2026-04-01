import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex flex-row p-3 text-1xl gap-1 justify-between bg-amber-300">
      {/* Logo */}
      <div className="flex gap-5 justify-center">
        <Link to="/" className="p-2"> Logo </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-5 mr-3">
        <NavLink to="/users" className="hover:text-white p-2"> Пользователи </NavLink>
        <NavLink to="/applicants" className="hover:text-white p-2"> Участники </NavLink>
        <NavLink to="/competences" className="hover:text-white p-2"> Компетенции </NavLink>
        <NavLink to="/admin" className="hover:text-white p-2"> Админ Панель </NavLink>
        <NavLink to="/sign" className="hover:text-white p-2"> Регистрация </NavLink>
        <NavLink to="/auth" className="hover:text-white p-2"> Авторизация </NavLink>
      </div>
    </header>
  );
};

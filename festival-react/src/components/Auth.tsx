import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5245/api/Auth/login", { login, password });
        console.log(response.data);
        console.log(response.status);
        if (response.status === 200) {
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            // window.location.href = "/";
            navigate("/");
        }
        else {
            alert("Ошибка авторизации");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h1 className="text-2xl">Авторизация</h1>
            <input
                type="text"
                placeholder="Логин"
                className="border p-2 rounded"
                value={login}

                onChange={(e) => setLogin(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                className="border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
            />
            <button className="bg-amber-700 text-white p-2 rounded">Войти</button>
        </form>
    )
}
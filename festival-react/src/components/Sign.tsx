import { useEffect, useState } from "react";
import type { User } from "../models/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { Region } from "../models/region";

export const Sign = () => {

  const [regions, setRegions] = useState<Region[]>([])


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [education, setEducation] = useState("")
  const [institut, setInstitut] = useState("")

  const [regionId, setRegionId] = useState(1)
  const [photo, setPhoto] = useState("")




  const navigate = useNavigate();

  const handleForm = async (e: any) => {

    e.preventDefault();

    const user: User = {
      id: 0,
      name: name,
      email: email,
      login: login,
      password: password,
      education: education,
      institut: institut,
      regionId: regionId,
      photo: photo
    }

    console.log(user)


    var response = await axios.post("http://localhost:5245/api/Users", user)
    console.log(response.status)

    if (response.status == 201) navigate("/users");

  }

  const fetchRegions = async () => {
    const response = await axios.get("http://localhost:5245/api/Regions")
    console.log(response.data)
    setRegions(response.data)
  }

  useEffect(() => { fetchRegions() }, [])

  return (
    <form onSubmit={(e) => { handleForm(e) }} className="flex flex-col gap-3 m-1 p-5 w-max">

      <h1 className="text-xl text-center font-bold"> Регистрация</h1>

      <input type="text" className="border rounded p-2" required value={name} onChange={(e) => setName(e.target.value)} placeholder="ФИО" />

      <input type="email" className="border rounded p-2" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />

      <input type="text" className="border rounded p-2" required value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
      <input type="password" autoComplete="off" className="border rounded p-2" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />

      <input type="text" className="border rounded p-2" required value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Образование" />
      <input type="text" className="border rounded p-2" required value={institut} onChange={(e) => setInstitut(e.target.value)} placeholder="Учебное заведение" />

      {/* <input type="" required value={region} onChange={(e) => setRegion(e.target.value) } placeholder="Регион" /> */}

      <input type="file" className="border rounded p-2" required value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Фото" />

      <label className="font-medium"> Выберите регион: </label>
      <select value={regionId} className="border rounded p-2" required onChange={(e) => setRegionId(Number(e.target.value))}>
        {/* <option disabled selected>Выберите регион</option> */}
        {
          regions.map((r) => <option key={r.id} value={r.id}> {r.name}</option>)
        }
      </select>



      <button type="submit" className="bg-amber-300 p-2"> Участвовать </button>
    </form>
  );
};

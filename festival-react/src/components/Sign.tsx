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
    <form onSubmit={(e) => { handleForm(e) }} className="flex flex-col gap-3 m-1 p-5 border rounded-2xl w-max">
      <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="ФИО" />

      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />

      <input type="text" required value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
      <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />

      <input type="text" required value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Образование" />
      <input type="text" required value={institut} onChange={(e) => setInstitut(e.target.value)} placeholder="Учебное заведение" />

      {/* <input type="" required value={region} onChange={(e) => setRegion(e.target.value) } placeholder="Регион" /> */}

      <select value={regionId} required onChange={(e) => setRegionId(Number(e.target.value))}>
        {/* <option disabled selected>Выберите регион</option> */}
        {
          regions.map((r) => <option key={r.id} value={r.id}> {r.name}</option>)
        }
      </select>


      <input type="file" required value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Фото" />

      <button type="submit" className="bg-amber-300"> Участвовать </button>
    </form>
  );
};

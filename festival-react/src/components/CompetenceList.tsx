import axios from "axios";
import { useState, useEffect } from "react";
import type { Competence } from "../models/competence";
import { CompetenceCard } from "./CompetenceCard";

export const CompetenceList = () => {
  const [competences, setCompetences] = useState<Competence[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5245/api/Competences");
    console.log(response.data);
    setCompetences(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col gap-3 m-1 p-1">
      {competences.map((c) => (
        <CompetenceCard c={c} key={c.id} />
      ))}
    </div>
  );
};

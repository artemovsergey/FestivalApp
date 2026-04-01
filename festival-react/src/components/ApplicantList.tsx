import { useEffect, useState } from "react";
import axios from "axios";
import type { Applicant } from "../models/applicant";
import { ApplicantCard } from "./ApplicantCard";

export const ApplicantList = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [searchResult, setSearchResult] = useState<string>("");

  const fetchApplicants = async () => {
    const response = await axios.get("http://localhost:5245/api/Applicants");
    console.log(response.data);
    setApplicants(response.data);
  };

  const searchApplicants = async (text: string) => {
    const response = await axios.get<Applicant[]>("http://localhost:5245/api/Applicants");
    setApplicants(response.data.filter((a) => a.user.name.includes(text) || a.competence.name.includes(text) || a.region.name.includes(text)));
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex m-5 p-1 w-max">
        <input
          type="text"
          placeholder="Поиск участника ..."
          onChange={(e) => {
            searchApplicants(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-3 m-2 p-2">
        {applicants.map((a) => (
          <ApplicantCard a={a} key={a.id} />
        ))}
      </div>
    </div>
  );
};

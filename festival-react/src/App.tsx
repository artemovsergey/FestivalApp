import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { UserList } from "./components/UserList";
import { CompetenceList } from "./components/CompetenceList";
import { AdminPanel } from "./components/AdminPanel";
import { Sign } from "./components/Sign";
import { Footer } from "./components/Footer";
import { ApplicantList } from "./components/ApplicantList";
import { Auth } from "./components/Auth";

export const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-col flex-1 justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/competences" element={<CompetenceList />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/applicants" element={<ApplicantList />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
};

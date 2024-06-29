import { useEffect, useState } from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./assets/tabler.css";
import { Dashboard } from "./dashboard/Dashboard";
import { CardChambreListComponent } from "./medecin-content/card-chambre-list-component/CardChambreListComponent";
import { CardPatientListComponent } from "./medecin-content/card-patient-list-component/CardPatientListComponent";
import Login from "./auth/Login";
import { ConsultationListComponent } from "./medecin-content/consultation-list-component/ConsultationListComponent";
import { OrdonnanceListComponent } from "./medecin-content/ordonnance-list-component/OrdonnanceListComponent";
import { DossiersListComponent } from "./medecin-content/dossiers-list-component/DossiersListComponent";
import { MedecinCardList } from "./components/medecin-card-list/MedecinCardList";
import { DoctorDashboard } from "./medecin-content/DoctorDashboard";
import { ReceptionistDashboard } from "./reception-content/ReceptionistDashboard";
import { ManageAppointments } from "./reception-content/ManageAppointments";
import { CashierDashboard } from "./caisse-content/CashierDashboard";
import TasksPage from "./medecin-content/TasksPage";
import PlanningPage from "./medecin-content/PlanningPage";
import InfirmierDashboard from "./infirmier-content/InfirmierDashboard";
import ManagePayments from "./caisse-content/ManagePayments";
import ViewTransactions from "./caisse-content/ViewTransactions";
import GenerateInvoice from "./caisse-content/GenerateInvoice";
import HospitalStayInvoice from "./caisse-content/HospitalStayInvoice";
import FinancialStatistics from "./caisse-content/FinancialStatistics";
import { MedecinPage } from "./admin-content/medecin-page/MedecinPage";
import { CaissierPage } from "./admin-content/caissier-page/CaissierPage";
import { PharmacienPage } from "./admin-content/pharmacien-page/PharmacienPage";
import { InfirmierPage } from "./admin-content/infirmier-page/InfirmierPage";
import { ReceptionnistePage } from "./admin-content/receptionniste-page/ReceptionnistePage";
import { supabase } from "./supabaise-config/supabaiseClient";
import PatientDetails from "./medecin-content/components/card-patient-component/PatientDetails";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const roleRoute = {
  medecin: (
    <Route path="/" element={<Dashboard userType={"medecin"} />}>
      <Route index element={<DoctorDashboard />} />
      <Route path="dossiers" element={<DossiersListComponent />} />
      <Route path="patients" element={<CardPatientListComponent />} />
      <Route path="ordonnances" element={<OrdonnanceListComponent />} />
      <Route path="consultations" element={<ConsultationListComponent />} />
      <Route path="chambres" element={<CardChambreListComponent />} />
      <Route path="patient/:id" element={<PatientDetails />} />
      <Route path="taches" element={<TasksPage />} />
      <Route path="planning" element={<PlanningPage />} />
    </Route>
  ),
  pharmacien: (
    <Route path="/" element={<Dashboard userType={"pharmacien"} />}>
      <Route index element={<div>Accueil</div>} />
      <Route path="medicaments" element={<div>Médicaments</div>} />
      <Route path="manquants" element={<div>Manquants</div>} />
      <Route path="ordonnances" element={<div>Ordonnances</div>} />
    </Route>
  ),
  infirmier: (
    <Route path="/" element={<Dashboard userType={"infirmier"} />}>
      <Route index element={<InfirmierDashboard />} />
    </Route>
  ),
  admin: (
    <Route path="/" element={<Dashboard userType={"admin"} />}>
      <Route index element={<div>Accueil</div>} />
      <Route path="medecins" element={<MedecinPage />} />
      <Route path="Pharmaciens" element={<PharmacienPage />} />
      <Route path="Infirmiers" element={<InfirmierPage />} />
      <Route path="Caissiers" element={<CaissierPage />} />
      <Route path="Receptionnistes" element={<ReceptionnistePage />} />
    </Route>
  ),
  caisse: (
    <Route path="/" element={<Dashboard userType={"caissier"} />}>
      <Route index element={<CashierDashboard />} />
      <Route path="manage-payments" element={<ManagePayments />} />
      <Route path="view-transactions" element={<ViewTransactions />} />
      <Route path="generate-invoices" element={<GenerateInvoice />} />
      <Route path="hospital-stay-invoice" element={<HospitalStayInvoice />} />
      <Route path="financial-statistics" element={<FinancialStatistics />} />
    </Route>
  ),
  receptionniste: (
    <Route path="/" element={<Dashboard userType={"receptionniste"} />}>
      <Route index element={<ReceptionistDashboard />} />
      <Route path="patients" element={<CardPatientListComponent />} />
      <Route path="dossiers" element={<DossiersListComponent />} />
      <Route path="medecins" element={<MedecinCardList />} />
      <Route path="rendezVous" element={<ManageAppointments />} />
      <Route path="patient/:id" element={<PatientDetails />} />
    </Route>
  ),
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log(data);
      setSession(data.session);
      setIsLoading(true);
    });

    // supabase.auth.signOut();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      // if (_event === "PASSWORD_RECOVERY") {
      //   setIsPasswordRecovery(true);
      // }
    });
  }, []);
  return (
    <>
      <Router>
        {isLoading ? ( // Attente de chargement de données
          <Routes>
            {session && session.user ? ( //
              <>
                {
                  roleRoute[
                    session.user.user_metadata.role
                      ? session.user.user_metadata.role
                      : "admin"
                  ]
                }
              </>
            ) : (
              <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
              </Route>
            )}
          </Routes>
        ) : (
          <div>loading</div>
        )}
      </Router>
    </>
  );
}

export default App;

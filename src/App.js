import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoute";
import { UserVerification } from "./auth/user/UserVerification";
import { TutorProvider } from "./auth/TutorHandling/TutorProvider";
import { AdminProvider } from "./auth/adminhandling/AdminProvider";
import { Toaster } from "react-hot-toast";
import { PageProvider } from "./auth/PagesHandle/PageProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserVerification>
          <AdminProvider>
            <TutorProvider>
              <PageProvider>
                <Toaster />
                <BrowserRoute />
              </PageProvider>
            </TutorProvider>
          </AdminProvider>
        </UserVerification>
      </BrowserRouter>
    </>
  );
}

export default App;

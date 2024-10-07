import { BrowserRouter, Routes, Route } from "react-router-dom";
// // importacion para firebase
// import { getDoc, getFirestore, collection } from "firebase/firestore";

import { Provider } from "./contexts/ItemContext";
import { AdminPage } from "./components/AdminPage";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminPage />} />

            <Route path="*" element={"404"} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

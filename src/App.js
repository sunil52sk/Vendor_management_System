// import './App.css';
import Data from './component/Data';
import DeleteData from './component/DeleteData';
import UpdateData from './component/UpdateData';
import VendorForm from './component/VendorForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" index  element={<Data />}/>
          <Route path="/adding" element={<VendorForm/>} />
          <Route path="/update" element={<UpdateData/>} />
          <Route path="/delete" element={<DeleteData />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

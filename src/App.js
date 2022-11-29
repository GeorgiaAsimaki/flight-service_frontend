
import './App.css';
import Start from './components/Start';
import Results from './components/Results';
import Passenger from './components/Passenger';
import Complete from './components/Complete';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" >
                <Route index element={<Start />} />
                <Route path="results" element={<Results />} />
                <Route path="passenger" element={<Passenger />} />
                <Route path="complete" element={<Complete />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import { Navbar, Main, Footer } from "./Components"

function App() {
  return (
    <div className="App">
      <Routers>
        <Navbar />

        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>

        <Footer />
      </Routers>
    </div>
  );
}

export default App;

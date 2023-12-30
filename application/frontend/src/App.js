import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import { Navbar, Main, Signup, Footer } from "./Components"

function App() {
  return (
    <div className="App">
      <Routers>
        <div className='h-screen w-screen flex flex-col'>
        <Navbar />

        <div className='flex grow'>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/signup/' element={<Signup />}/>
        </Routes>
        </div>

        <Footer />
          
        </div>
      </Routers>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import { Navbar, Main, Signup, Footer } from "./Components"
import { createContext } from 'react';
import { UserToken } from "./Hook"

export const  MainContext = createContext()

function App() {
  // 유저의 JWT 토큰을 저장하는 state
  const { userToken,setUserToken,useGetEffect } = UserToken()
  useGetEffect()

  return (
    <div className="App">
      <MainContext.Provider value={{userToken,setUserToken}}>
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
      </MainContext.Provider>
    </div>
  );
}

export default App;

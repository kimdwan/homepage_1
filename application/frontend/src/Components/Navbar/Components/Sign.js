import {Link} from "react-router-dom"
import {LoginModal} from "./LoginModal"
import { LoginModalState } from "../Hook"

export const Sign = () => {
  const { ismodal,handleLoginClick,handleCloseModal } = LoginModalState()

  return (
    <div className="flex items-center space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1" onClick={handleLoginClick}>
        Login
      </button>
      {ismodal &&  <LoginModal closeModal={handleCloseModal}  />}
      <Link to="SignUp">
        <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
          SignUp
        </button>
      </Link>
    </div>
  )
}
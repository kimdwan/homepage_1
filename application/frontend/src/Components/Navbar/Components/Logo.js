import Logan_logo from "../Datas/Logan.png"
import {Link} from "react-router-dom"

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-start h-full">
      <img src={Logan_logo} alt="메인로고" className="h-16 object-contain px-2"/> 
    </Link>
  )
}
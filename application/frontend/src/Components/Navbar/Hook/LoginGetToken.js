import { useState,useContext } from "react"
import { MainContext } from "../../../App"

export const LoginGetToken = () => {
  const [ isLogin,setIsLogin ] = useState(false)
  const { userToken,setUserToken } = useContext(MainContext)
  const removeToken = () => {
    localStorage.removeItem("userToken",userToken)
    setUserToken("")
  }

  return {isLogin, setIsLogin, userToken, removeToken}
}
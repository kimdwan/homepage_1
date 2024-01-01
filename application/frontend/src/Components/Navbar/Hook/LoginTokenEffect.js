import { useEffect } from "react"

export const useLoginTokenEffect = (userToken,setIsLogin) => {
  useEffect(() => {
  if (userToken) {
    localStorage.setItem('userToken',userToken)
    setIsLogin(true)
  } else {
    setIsLogin(false)
  }
}, [userToken,setIsLogin])}
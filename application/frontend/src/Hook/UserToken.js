import {useEffect,useState} from "react"

export const UserToken = () => {
  const [ userToken,setUserToken ] = useState("")
  const useGetEffect = () => useEffect(() => {
    const token = localStorage.getItem("userToken")
    if (token) {
      setUserToken(token)
    }
  })

  return {userToken,setUserToken,useGetEffect}
}
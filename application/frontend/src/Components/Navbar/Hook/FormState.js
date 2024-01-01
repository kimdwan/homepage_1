import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { postAxios } from "../../../Hook"

export const LoginFormState = () => {
  const [ isLogin, setIsLogin ] = useState(false)
  const [tokens, setTokens] = useState(undefined)

  const schema = yup.object({
    email : yup.string().email("이메일 형태가 아닙니다.").required("이메일은 필수적으로 적어야 합니다."),
    password : yup.string().required("비밀번호는 필수적으로 적어주셔야 합니다.")
  })

  const {register, handleSubmit, formState : {errors}}  = useForm({
    resolver : yupResolver(schema)
  })
  
  const onSubmit =  async (data) => {
    try {
      const url = "/user/login/"
      const tokenData= await postAxios(url,data)
      if (tokenData) {
        setIsLogin(true)
        setTokens(tokenData)
      }
    } 
    catch (err) {
      alert(err)
      throw new Error(err)
    }
  }

  return {register,handleSubmit,errors,onSubmit,isLogin,tokens }
}
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

export const LoginFormState = () => {
  const [ isLogin, setIsLogin ] = useState(false)
  const [tokens, setTokens] = useState(undefined)

  const UserDatas = [
    {
      "email" : "naxtto@naver.com",
      "password" : "0000"
    }, 
    {
      "email" : "aldwls@naver.com",
      "password" : "0001"
    },
    {
      "email" : "yako0427@naver.com",
      "password" : "0002"
    }
  ]
  

  const schema = yup.object({
    email : yup.string().email("이메일 형태가 아닙니다.").required("이메일은 필수적으로 적어야 합니다."),
    password : yup.string().required("비밀번호는 필수적으로 적어주셔야 합니다.")
  })

  const {register, handleSubmit, formState : {errors}}  = useForm({
    resolver : yupResolver(schema)
  })
  
  const onSubmit =  (data) => {
    try {
      const isEmail = UserDatas.find(user => {
          if(user["email"] === data.email){
            return true}
          return false })
        if (!isEmail) {
          throw new Error("이메일이 존재하지 않아")
        }
        let isPassword = false
        if (isEmail["password"] === data.password) {
          isPassword = true
        } 
        if (!isPassword) {
          throw new Error("비밀번호가 없슴")
        } 
        if (isEmail && isPassword) {
          setIsLogin(true)
          setTokens("abcs")
        }
    } catch(err) {
      alert(err)
    }
  }

  return {register,handleSubmit,errors,onSubmit,isLogin,tokens }
}
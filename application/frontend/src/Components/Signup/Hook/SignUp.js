import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { postAxios } from "../../../Hook"
import { useNavigate } from "react-router-dom"

export const SignUpHook = () => {
  const schema = yup.object({
    email: yup.string().email().required("이메일은 필수 항목입니다."),
    nickname: yup.string().min(4, "닉네임은 최소 4자 이상입니다.").max(20, "닉네임은 최대 20자입니다.").required("닉네임은 필수 항목입니다."),
    password: yup.string().min(8, "비밀번호는 최소 8자 이상입니다.").max(12, "비밀번호는 최대 12자입니다.").required("비밀번호는 필수 항목입니다."),
    confirm_password: yup.string()
      .oneOf([yup.ref('password'), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 확인은 필수 항목입니다.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()
  const onSubmit = async (data) => {
    delete data.confirm_password
    const url = "/user/signup/"
    try {
      const user = await postAxios(url,data)
      if (user) {
        alert("회원가입되었습니다.")
        navigate("/")
      }
    } catch (err) {
      throw new Error(err)
    }
  };

  return { register,handleSubmit ,errors,onSubmit }

}
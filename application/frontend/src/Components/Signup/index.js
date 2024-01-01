import { SignUpHook } from "./Hook"
import { SignUpField } from "./Components"

export const Signup = () => {
  // 비밀번호 확인 필드 추가
  const  {register,handleSubmit ,errors,onSubmit } = SignUpHook()

  return (
    <div className="flex justify-center items-center bg-blue-50 grow">
      <SignUpField register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} />
    </div>
  );
};

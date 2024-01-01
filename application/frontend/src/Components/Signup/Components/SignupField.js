export const SignUpField = ({handleSubmit,onSubmit,register,errors}) => {

  return (
    <div>
      <div className="w-full max-w-md mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-700 block">Email</label>
            <input placeholder="이메일 입력" {...register("email")} className="w-full p-2 border rounded mt-1" />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block">Nickname</label>
            <input placeholder="닉네임 입력" {...register("nickname")} className="w-full p-2 border rounded mt-1" />
            {errors.nickname && <p className="text-red-500 text-xs italic">{errors.nickname.message}</p>}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block">Password</label>
            <input placeholder="비밀번호 입력" {...register("password")} type="password" className="w-full p-2 border rounded mt-1" />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block">Confirm Password</label>
            <input placeholder="비밀번호 확인" {...register("confirm_password")} type="password" className="w-full p-2 border rounded mt-1" />
            {errors.confirm_password && <p className="text-red-500 text-xs italic">{errors.confirm_password.message}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}
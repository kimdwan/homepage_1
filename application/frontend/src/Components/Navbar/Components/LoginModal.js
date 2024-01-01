import { LoginFormState } from "../Hook"
import { useEffect,useContext } from "react"
import {MainContext} from "../../../App"

export const LoginModal = ({ closeModal }) => {
  const { register,handleSubmit,errors, onSubmit,isLogin,tokens} = LoginFormState()
  const { setUserToken } = useContext(MainContext)

  useEffect(() => {
    if (isLogin) {
      closeModal()
      setUserToken(tokens)
    }
  }, [isLogin,closeModal,tokens,setUserToken])
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-black">&times;</button>
        </div>
        <h2 className="text-xl mb-2">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <span className="text-red-500 text-xs italic h-6 block">{errors.email?.message}</span>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <span className="text-red-500 text-xs italic h-6 block">{errors.password?.message}</span>
          </div>
          <div className="flex items-center justify-between">
            
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" value="Login"  
            />
          </div>
        </form>
      </div>
    </div>
  );
};
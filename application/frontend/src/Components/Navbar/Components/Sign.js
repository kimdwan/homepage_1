import { LoginModalState, LoginGetToken,useLoginTokenEffect } from "../Hook"
import { LoginBox,UserMenu } from "./index"

export const Sign = () => {
  const { ismodal,handleLoginClick,handleCloseModal } = LoginModalState()
  const {isLogin, setIsLogin, userToken, removeToken} = LoginGetToken()
  useLoginTokenEffect(userToken,setIsLogin)

  return (
    <div className="flex items-center space-x-4">
      {
        isLogin ?  <UserMenu removeToken={removeToken} /> :
        <LoginBox  ismodal={ismodal} handleLoginClick={handleLoginClick} handleCloseModal= {handleCloseModal}  />
      }
    </div>
  )
}
import { useState } from "react";

export const LoginModalState = () => {
  const [ ismodal, setIsModal ] = useState(false)

  const handleLoginClick = () => {
    setIsModal(true)
  }
  const handleCloseModal = () => {
    setIsModal(false)}
  
    return {ismodal, handleLoginClick,handleCloseModal}
  
}
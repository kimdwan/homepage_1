import {Logo, Sign} from "./Components"
import { useState, useEffect } from "react"

export const Navbar = () => {
  const [ isScroll, setIsScroll ] = useState(false)
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true)
    }
    else {
      setIsScroll(false)
    }
  }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className={`bg-indigo-100 h-24 w-full flex items-center justify-between px-4 shadow-md ${isScroll ? 'fixed top-0 z-100 opacity-50' : ''}`}>
      {/* Logo Section */}
      <Logo />

      {/* Navigation Links */}
      <Sign />
    </div>
  )
}

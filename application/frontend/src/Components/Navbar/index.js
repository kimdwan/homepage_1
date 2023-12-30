import {Logo, Sign} from "./Components"

export const Navbar = () => {
  return (
    <div className="bg-indigo-100 h-24 w-full flex items-center justify-between px-4 shadow-md">
      {/* Logo Section */}
      <Logo />

      {/* Navigation Links */}
      <Sign />
    </div>
  )
}

export const UserMenu = ({ removeToken }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md max-w-sm mx-auto mt-0">
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg text-blue-800 font-semibold">반갑습니다 회원님</div>
        <button
          onClick={removeToken}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          logout
        </button>
      </div>
    </div>
  )
}


const SearchArea = () => {
  return (
    <div className='bg-[rgba(27, 26, 26, 0.716)] h-full flex w-full justify-evenly items-center px-4 py-3'>

      <div>
        <input className='py-1 px-3 
      bg-transparent text-white placeholder:text-white 
      border-b-2 shadow-2xl' placeholder='نام فیلم را وارد کنید' />
      </div>

      <select className="py-1 px-3 
      bg-[#2a3a48] text-white placeholder:text-white 
      border-2 rounded-md shadow-2xl">
        <option>
          وحشت / هیجانی
        </option>
        <option>
          کمدی
        </option>
        <option>
          دارم
        </option>
      </select>
    </div>
  )
}

export default SearchArea

import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai/index";

export default function SearchBar() {
  const ref = useRef(null);
  const [search, setSearch] = useState(undefined);

  const changeSearch = () => {
    setSearch(ref.current.value);
  };

  return (
    <div className="h-10 flex justify-center w-[330px]">
      <input
        onChange={changeSearch}
        ref={ref}
        className="w-full bg-transparent decorations-none !outline-none placeholder:text-white/20 border-2 px-4 rounded-lg shadow-lg focus:border-[#FFE6C7] focus:shadow-none border-white/20  text-white font-mono"
        placeholder="Search Posts..."
      />
      <a
        href={"/blog/search?q=" + search}
        className="bg-[#FFE6C7] ml-4  p-3 grid place-items-center text-xs font-mono border-2 border-black/20 font-semibold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition"
      >
        <AiOutlineSearch size={15} />
      </a>
    </div>
  );
}

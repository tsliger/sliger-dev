import { BsFillXDiamondFill } from "react-icons/bs/index";

export default function SkillTree({ data }) {
  return (
    <div className="w-[300px] select-none relative">
      <p className="text-gray-200 font-mono tracking-widest text-lg mb-1 font-semibold">{data.attributes.category}</p>
      <div className="w-52 h-96">
        <div className="w-1/2 h-12 border-t-[2px] border-r-[2px] border-gray-200" />
        <ul className="absolute space-y-3 flex flex-col justify-center left-[33%]">
          {data.attributes.skills && data.attributes.skills.data.map((data, i) => {
            return (
              <li className="flex items-center -translate-x-1" key={i}>
                <BsFillXDiamondFill className="text-gray-200" size={15} />{" "}
                <span className="ml-3 text-[#DD5909] bg-black/30 px-4 py-3  rounded-xl shadow-lg select-text shadow-black/20">
                  {data.attributes.text}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

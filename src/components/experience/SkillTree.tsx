import { BsFillXDiamondFill } from "react-icons/bs/index";

export default function SkillTree({ data }) {
  return (
    <div className="w-[300px] select-none relative  mx-4 lg:mx-32 py-12">
      <p className="text-gray-200 font-mono tracking-widest text-base lg:text-2xl  font-semibold  mb-8">{data.attributes.category}</p>
      <div className="w-52 translate-x-[25%]">
        {/* <div className="w-1/3 h-4 border-t-[2px] border-r-[2px] border-gray-200 mb-4 opacity-25" /> */}
        <ul className=" space-y-3 flex flex-col justify-center ">
          {data.attributes.skills && data.attributes.skills.data.map((data, i) => {
            return (
              <li className="flex items-center" key={i}>
                {/* <BsFillXDiamondFill className="text-gray-200" size={15} />{" "} */}
                <span className="ml-3 text-[#DD5909] bg-black/30 px-4 py-3 text-sm lg:text-base  rounded-xl shadow-lg select-text shadow-black/20">
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

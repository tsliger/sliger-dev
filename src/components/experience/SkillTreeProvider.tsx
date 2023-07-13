import SkillTree from "./SkillTree";
import useSWR from "swr";
import Loading from "../utils/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SkillTreeProvider() {
  const url = import.meta.env.PUBLIC_BACKEND_URL
  const { data, error, isLoading } = useSWR(
    `${url}/api/Skill-categories?populate=*`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="h-96 w-32  grid  relative">
        <Loading />
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data && data.data && data.data.map((data, i) => {
        return <SkillTree {...{data}} key={i}/>
      })}
    </div>
  )
}

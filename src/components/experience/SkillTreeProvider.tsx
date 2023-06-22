import { useEffect, useState } from 'react'
import SkillTree from "./SkillTree";
import ky from 'ky'
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SkillTreeProvider() {
  const url = import.meta.env.PUBLIC_BACKEND_URL
  const { data, error, isLoading } = useSWR(
    `${url}/api/Skill-categories?populate=*`,
    fetcher
  );

  return (
    <div className="flex flex-wrap justify-center">
      {data && data.data && data.data.map((data, i) => {
        return <SkillTree {...{data}} key={i}/>
      })}
    </div>
  )
}

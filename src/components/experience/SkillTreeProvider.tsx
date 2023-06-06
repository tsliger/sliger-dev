import { useEffect, useState } from 'react'
import SkillTree from "./SkillTree";
import ky from 'ky'

export default function SkillTreeProvider() {
  const [data, setData] = useState(null)
  const url = import.meta.env.PUBLIC_BACKEND_URL

  const getData = async () => {
    const data: any = await ky.get(`${url}/api/Skill-categories?populate=*`).json()

    if (data) {
      setData(data.data)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-x-8">
        {data && data.map((data, i) => {
          return <SkillTree {...{data}} key={i}/>
        })}
    </div>
  )
}

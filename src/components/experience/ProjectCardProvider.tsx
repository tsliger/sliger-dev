import useSWR from "swr";
import ProjectCard from "../ProjectCard";
import Tilt from "react-parallax-tilt";
import Loading from "../utils/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProjectCardProvider() {
  const url = import.meta.env.PUBLIC_BACKEND_URL;
  const { data, error, isLoading } = useSWR(
    `${url}/api/projects?populate=*`,
    fetcher, { keepPreviousData: true, errorRetryInterval: 1000 }
  );

  if (isLoading) {
    return (
      <div className="h-96 w-32  grid  relative">
        <Loading />
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-32">
      {data &&
        data.data &&
        data.data.map((data, i) => {
          return (
            <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <ProjectCard {...{ data }} />
            </Tilt>
          );
        })}
    </div>
)
}

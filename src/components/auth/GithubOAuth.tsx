import { AiFillGithub } from "react-icons/ai/index"

export default function GithubOAuth() {
  const client_id = import.meta.env.PUBLIC_GITHUB_CLIENT;
  const redirect_uri = import.meta.env.PUBLIC_GITHUB_CALLBACK;
  return (
    <a
      href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
      // onClick={() => {
      //   setData({ ...data, errorMessage: "" });
      // }}
    >
    <button className="active:scale-[0.975] transition-all duration-200 ease-in">
      <div className='w-48 h-16 bg-neutral-900 border-4 shadow-xl border-black/50 text-white rounded-xl'>
          <div className="flex h-full items-center justify-around mx-2">
              <div className="h-8 aspect-square grid place-items-center">
              <AiFillGithub size={30} />
              </div>
              <p className='text-sm font-mono font-semibold'>Sign in with GitHub</p>
          </div>
      </div>
    </button>
    </a>
  )
}

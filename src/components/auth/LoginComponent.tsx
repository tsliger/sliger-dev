import { useState, useRef } from "react";
import ky from "ky";
import { useJwt } from "react-jwt";
import { LoadingCircle } from "../utils/Loading";
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";

export default function LoginComponent() {
  const [formData, setData] = useState({
    identifier: undefined,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const $jwtToken = useStore(jwtToken);
  const { isExpired } = useJwt($jwtToken);

 

  if ($jwtToken && !isExpired) {
    setTimeout(() => {
      return (window.location.href = "/dashboard");
    }, 300);
  }

  const LoginUser = async (e) => {
    setLoading(true);

    try {
      const data: any = await ky.post('http://localhost:1337/api/auth/local', {json: formData}).json();
      jwtToken.set(data.jwt);

      setTimeout(() => {
        setLoading(false);
        window.location.href = "/dashboard";
      }, 1000);
    } catch (error) {
      if (error.name === 'HTTPError') {
        const errorJson = await error.response.json();
        setError("Could not validate credentials");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }

    formRef.current.reset();
  };

  return (
    <div className="bg-gradient-to-bl grid place-items-center shadow-xl hover:shadow-lg duration-300 transition from-[#FFFFFF]/20 from-10%  to-black/20 rounded-lg w-96 py-8 relative">
      <form
        ref={formRef}
        onSubmit={(event) => event.preventDefault()}
        className="space-y-8 flex items-center flex-col"
      >
        <img
          draggable={false}
          className="select-none invert w-32 absolute top-8"
          src="/sliger-warped-logo.svg"
          alt=""
        />
        <span className="text-red-500 text-sm h-2 translate-y-8">{error}</span>
        <div className="h-1" />
        <input
          type="email"
          onChange={(e) =>
            setData({ ...formData, identifier: e.currentTarget.value })
          }
          className="input-field"
          placeholder="Email"
        />
        <input
          onChange={(e) =>
            setData({ ...formData, password: e.currentTarget.value })
          }
          className="input-field"
          placeholder="Password"
          type="password"
        />
        <button
          onClick={LoginUser}
          className="text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center"
        >
          {loading && <LoadingCircle />}
          {!loading && <p>Log in</p>}
        </button>
      </form>
    </div>
  );
}

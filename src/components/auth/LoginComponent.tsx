import { useState, useRef } from "react";
import ky from "ky";
import { useJwt } from "react-jwt";
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";
import { LoadingCircle } from "../utils/Loading";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function LoginComponent() {
  const [formData, setData] = useState({
    identifier: undefined,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [verifyToken, setToken] = useState(null);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const $jwtToken = useStore(jwtToken);
  const { isExpired } = useJwt($jwtToken);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  if ($jwtToken && !isExpired) {
    setTimeout(() => {
      return (window.location.href = "/dashboard");
    }, 300);
  }

  const LoginUser = async (e) => {
    setLoading(true);

    try {
      const data: any = await ky.post('http://localhost:1337/api/logins', {json: {"data": {...formData, "captcha": verifyToken} }}).json();
      const token = data.data.attributes.access_token;
      jwtToken.set(token);

      setTimeout(() => {
        setLoading(false);
        // window.location.href = "/dashboard";
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
        <HCaptcha
          sitekey="3ad9d04e-58ae-4645-a4f3-d223aa0a746c"
          onLoad={onLoad}
          onVerify={(token, ekey) => setToken(token)}
          theme="dark"
          ref={captchaRef}
          size="compact"
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

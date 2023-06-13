import { useState, useRef } from "react";
import ky from "ky";
import { useJwt } from "react-jwt";
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";
import { LoadingCircle } from "../utils/Loading";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Formik } from "formik";
import { object, string } from "yup";

const loginFormSchema = object({
  identifier: string().email("Not a valid email").required("Email required"),
  password: string()
    .required("Password required"),
  captcha: string().min(1).required("Captcha not complete"),
});

export default function LoginComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    }, 100);
  }

  const url = import.meta.env.PUBLIC_BACKEND_URL

  const LoginUser = async (values) => {
    setLoading(true);

    try {
      const data: any = await ky.post(`${url}/api/logins`, {json: {"data": {...values} }}).json();
      const token = data.data.attributes.access_token;
      jwtToken.set(token);

      setTimeout(() => {
        setLoading(false);
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

  };

  return (
    <div className="bg-gradient-to-bl grid place-items-center shadow-xl hover:shadow-lg duration-300 transition from-[#FFFFFF]/20 from-10%  to-black/20 rounded-lg w-96 py-8 relative">
      <Formik
      initialValues={{
        identifier: "",
        password: "",
        captcha: "",
      }}
      validationSchema={loginFormSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          // postData(values);
          LoginUser(values)
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        initialStatus,
        setFieldValue,
      }) => (
      <form
        onSubmit={handleSubmit}
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
          onChange={handleChange}
          onBlur={handleBlur}
          className="input-field"
          name="identifier"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          className="input-field"
          name="password"
          placeholder="Password"
          type="password"
        />
        {touched.password && (
          <HCaptcha
            sitekey="3ad9d04e-58ae-4645-a4f3-d223aa0a746c"
            onLoad={onLoad}
            onVerify={(token, ekey) => setFieldValue("captcha", token)}
            theme="dark"
            ref={captchaRef}
            size="compact"
          /> 
        )}
        <button
          onClick={LoginUser}
          className="text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center"
        >
          {loading && <LoadingCircle />}
          {!loading && <p>Log in</p>}
        </button>
      </form>
      )}
      </Formik>
    </div>
  );
}

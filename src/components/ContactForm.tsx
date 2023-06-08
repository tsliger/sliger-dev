import { useRef } from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ky from "ky";

const contactFormSchema = object({
  first_name: string()
    .min(2, "First name too short")
    .max(50, "First name too long")
    .required("First name required"),
  last_name: string()
    .min(2, "Last name too short")
    .max(50, "Last name too long")
    .required("Last name required"),
  email: string().email("Not a valid email").required("Email required"),
  description: string()
    .min(20, "Description too short")
    .max(500, "Description too long")
    .required("Description required"),
  captcha: string().min(1).required("Captcha not complete"),
});

export default function ContactForm() {
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  const url = import.meta.env.PUBLIC_BACKEND_URL

  const postData = async (values) => {
    ky.post(`${url}/api/contacts`, { json: { data: values } });
  };

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        description: "",
        captcha: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          postData(values);
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
          className="w-full md:w-96 lg:w-[600px] space-y-6 -translate-y-6"
        >
          <p className="h-12 flex items-end text-red-500 w-full">
            {(errors && errors.first_name) ||
              errors.last_name ||
              errors.email ||
              errors.description}
          </p>
          <div className="w-full flex space-x-4">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field w-full"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              value={values.first_name}
            />
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field w-full"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              value={values.last_name}
            />
          </div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field w-full"
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={values.email}
          />
          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field w-full py-2 min-h-[300px]"
            name="description"
            id="description"
            value={values.description}
            placeholder="Enter text here...."
          />
          <div className="h-24 flex">
            <div className="w-1/2 flex items-end">
              {!!touched.description && !errors.description && (
                <HCaptcha
                  sitekey="3ad9d04e-58ae-4645-a4f3-d223aa0a746c"
                  onLoad={onLoad}
                  onVerify={(token, ekey) => setFieldValue("captcha", token)}
                  theme="dark"
                  ref={captchaRef}
                />
              )}
            </div>
            <div className="w-1/2 flex items-end justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-style w-32 h-12"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

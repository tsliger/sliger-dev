import { useRef } from 'react'
import { Formik } from 'formik';
import { object, string } from 'yup';
import HCaptcha from "@hcaptcha/react-hcaptcha";

const contactFormSchema = object({
  firstName: string().min(2, 'First name too short').max(50, 'First name too long').required('First name required'),
  lastName: string().min(2, 'Last name too short').max(50, 'Last name too long').required('Last name required'),
  email: string().email('Not a valid email').required('Email required'),
  description: string().min(20, 'Description too short').max(500, 'Description too long').required('Description required')
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

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '',  description: '' }}
      validationSchema={contactFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
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
        initialStatus
      }) => (
        <form onSubmit={handleSubmit} className="w-96 lg:w-[600px] space-y-6 -translate-y-6">
          <p className="h-12 flex items-end text-red-500 w-full">{errors && errors.firstName || errors.lastName || errors.email || errors.description}</p>
          <div className="w-full flex space-x-4">
            <input onChange={handleChange} onBlur={handleBlur} className="input-field w-full" name="firstName" id="firstName" placeholder='First Name' value={values.firstName}/>
            <input onChange={handleChange} onBlur={handleBlur} className="input-field w-full" name="lastName" id="lastName" placeholder='Last Name' value={values.lastName}/>
          </div>
          <input onChange={handleChange} onBlur={handleBlur} className="input-field w-full" name="email" type="email" id="email" placeholder='Email' value={values.email}/>
          <textarea onChange={handleChange} onBlur={handleBlur} className="input-field w-full py-2 h-48" name="description" id="description" value={values.description} placeholder='Enter text here....'/>
          <div className='h-24 flex'>
            <div className="w-1/2 flex items-end">
              { touched.description && isValid  && (
                <HCaptcha
                  sitekey="asdfsa"
                  onLoad={onLoad}
                  // onVerify={setToken}
                  theme="dark"
                  ref={captchaRef}
                /> 
              )}
            </div>
            <div className="w-1/2 flex items-end justify-end">
              <button type="submit" disabled={isSubmitting} className="button-style w-32 h-12">Submit</button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

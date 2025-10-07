import Input from "./Input";
import { useFormik } from "formik";
import { LoginSchema } from "./AuthSchema";

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};

function Login() {
      const { values, handleChange,touched, handleBlur, isSubmitting, handleSubmit,errors } = useFormik({
          initialValues: {
            password: "",
            email: "",
          },
          validationSchema: LoginSchema,
          onSubmit,
          
        });
        console.log(values)

  return (
    <div id="login-form" className="bg-gray-800 rounded-lg p-8 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="mt-2 text-gray-400">Sign in to your account</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
        <Input onBlur={handleBlur} err={errors.email} classStyle = {errors.email && touched.email?"border-red-500":"border-gray-600"} id="email" value={values.email} onChange={handleChange} type="email" placeholder="Enter your email" label="Email Address" />
        <Input onBlur={handleBlur} err={errors.password} classStyle = {errors.password && touched.password?"border-red-500":"border-gray-600"} id="password" value={values.password} onChange={handleChange} type="password" placeholder="Enter your password" label="Password" />

       

        <div className="flex items-center justify-between pb-4 ">
          <div className="flex items-center">
            <input id="Remember" type="checkbox" onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded" required/>
            <label className="ml-2 block text-sm text-gray-400">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-400">Forgot password?</a>
        </div>

        <button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">Sign In</button>
      </form>

      {/* <!-- Social Login --> */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="ml-2">Google</span>
          </button>

          <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            <span className="ml-2">Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

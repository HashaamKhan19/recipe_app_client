import Logo from "../../assets/images/recipeLogo.png";

export default function Register() {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-16 w-auto" src={Logo} />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Recipe!
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your-email@email.com"
                  className="block w-full rounded-md py-1.5 border-2 border-gray-500 px-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md py-1.5 border-2 border-gray-500 px-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  autoComplete="current-confirmPassword"
                  className="block w-full rounded-md py-1.5 border-2 border-gray-500 px-3"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold leading-7 text-white shadow-sm hover:bg-secondary hover:transition-colors duration-150"
              >
                Register
              </button>
            </div>

            <div className="flex">
              <div className="text-sm w-full text-center">
                <a href="/" className="font-medium text-black">
                  Already have an account?{" "}
                  <span className="text-primary">Login here</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

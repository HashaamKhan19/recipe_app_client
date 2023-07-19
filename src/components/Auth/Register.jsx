import { useState } from "react";
import Logo from "../../assets/images/recipeLogo.png";
import toast from "react-hot-toast";
import axios from "axios";
import { SwapSpinner } from "react-spinners-kit";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (username.length < 4) {
      toast.error("Username must be at least 4 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const result = await axios.post("http://localhost:3000/auth/register", {
        username,
        password,
      });

      console.log(result);

      if (result?.status === 200) {
        toast.success("Account created successfully");
        setLoading(false);
        navigate("/", { replace: true });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

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
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="name"
                  autoComplete="off"
                  placeholder="Jane Doe"
                  className="block w-full rounded-md py-1.5 border-2 border-gray-500 px-3"
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  type="password"
                  autoComplete="current-confirmPassword"
                  className="block w-full rounded-md py-1.5 border-2 border-gray-500 px-3"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-secondary hover:transition-colors duration-150"
                onClick={handleSubmit}
              >
                {loading ? (
                  <SwapSpinner size={30} color={"#fff"} />
                ) : (
                  "Register"
                )}
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

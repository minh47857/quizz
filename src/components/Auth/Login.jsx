import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner6 } from "react-icons/im";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleOnClick = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      return;
    }
    setIsLoading(true);
    let res = await LoginUser(email, password);
    if (res && res.EC === 0) {
      dispatch(doLogin(res.DT))
      toast.success(res.EM)
      setIsLoading(false);
      navigate("/");
    }
    if (res && res.EC) {
      toast.error(res.EM);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="flex items-center justify-center text-3xl font-bold mt-6 sm:mt-8 cursor-pointer" onClick={() => navigate("/")}> Quizz </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-semibold">
            Sign in to your account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" value={password} onChange={(e) => setPassword(e.target.value)} required="" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading} onClick={handleOnClick}> {isLoading && <ImSpinner6 className="h-5 w-5 inline mr-2 animate-spin"/>} <span>Sign in</span></button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet? <button className="font-medium text-blue-600 hover:underline" onClick={() => navigate("/register")}>Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
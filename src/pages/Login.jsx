import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

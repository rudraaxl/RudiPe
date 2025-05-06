import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async () => {
    if (!username || !password) return;
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signin failed:", error);
      alert("Invalid credentials. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <Heading label="Sign In" />
        <SubHeading label="Enter your credentials to access your account" />

        <div className="space-y-4 mt-6">
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-6">
          <Button
            onClick={handleSignin}
            label={loading ? "Signing In..." : "Sign In"}
            disabled={loading || !username || !password}
          />
        </div>

        <div className="mt-4">
          <BottomWarning label="Don't have an account?" buttonText="Sign up" to="/signup" />
        </div>
      </div>
    </div>
  );
};

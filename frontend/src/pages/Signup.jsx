import React, { useState } from 'react';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { Button } from '../components/Button';
import { InputBox } from '../components/InputBox';
import { BottomWarning } from '../components/BottomWarning';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!firstName || !lastName || !username || !password) return;

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                firstName,
                lastName,
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (err) {
            console.error("Signup error:", err);
            alert("Signup failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-200 min-h-screen flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <Heading label="Sign Up" />
                <SubHeading label="Create an account to send money to your friends and family." />

                <div className="space-y-4 mt-6">
                    <InputBox
                        onChange={(e) => setFirstName(e.target.value)}
                        label="First Name"
                        type="text"
                        placeholder="John"
                    />
                    <InputBox
                        onChange={(e) => setLastName(e.target.value)}
                        label="Last Name"
                        type="text"
                        placeholder="Doe"
                    />
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
                        onClick={handleSignup}
                        label={loading ? "Signing Up..." : "Sign Up"}
                        disabled={loading || !firstName || !lastName || !username || !password}
                    />
                </div>

                <div className="mt-4">
                    <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin" />
                </div>
            </div>
        </div>
    );
};

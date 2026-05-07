"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        // TEMP MOCK (replace with API)
        if (email && password) {
            localStorage.setItem("token", "demo-token");
            router.push("/dashboard/user");
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Login</h2>

            <input
                className="w-full border p-2 mb-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                className="w-full border p-2 mb-3"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={handleLogin}
                className="w-full bg-black text-white p-2 rounded"
            >
                Login
            </button>
        </div>
    );
}
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setFormData({ email, password });

    // Optional: Perform sign-in with credentials
    await signIn("credentials", { email, password });
  };

  return (
    <div>
      <form className="p-8 py-20 bg-green-500" onSubmit={handleSignIn}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>

      {formData.email && (
        <div className="mt-4 p-4 bg-gray-200">
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { signIn } from "next-auth/react";

const loginBtn = {
  backgroundColor: "red",
  color: "white",
  padding: "1rem 2rem",
  margin: "5rem",
  borderRadius: "1rem",
  border: "none",
  cursor: "pointer",
};

export default function Login() {
  return (
    <button onClick={signIn} style={loginBtn}>
      login
    </button>
  );
}

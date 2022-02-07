import React from "react";
import { signIn } from "next-auth/react";
import styles from "../styles/Components/Login/Login.module.scss";

export default function Login() {
  return (
    <button className={styles.button} onClick={signIn}>
      login
    </button>
  );
}

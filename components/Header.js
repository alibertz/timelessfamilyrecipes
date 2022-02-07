import React from "react";
import styles from "../styles/Header/Header.module.scss";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/">Timeless Family Recipes</Link>
      </div>
      <div className={styles.navright}>
        <ul>
          {session ? (
            <li className={styles.signedIn}>
              <h5 onClick={signOut}>Sign Out</h5>
              <h5>Account</h5>
            </li>
          ) : (
            <li onClick={signIn}>Sign In</li>
          )}
        </ul>
      </div>
    </nav>
  );
}

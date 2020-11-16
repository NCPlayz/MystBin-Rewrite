import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import styles from "../styles/Base.module.css";

export default function Base(props: PropsWithChildren<{ className: string }>) {
  const { children, className } = props;

  return (
    <div className={styles.Base}>
      <nav>
        <NavBar />
      </nav>
      <main className={className}>{children}</main>
      <footer>myst gae</footer>
    </div>
  );
}

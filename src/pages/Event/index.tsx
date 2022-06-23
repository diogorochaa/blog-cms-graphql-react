import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";
import styles from "./event.module.css";

export default function Event() {
  return (
    <div className={styles["container"]}>
      <Header label="oi" />
      <main className={styles["body"]}>
        <Video label="ola" />
        <Sidebar />
      </main>
    </div>
  );
}

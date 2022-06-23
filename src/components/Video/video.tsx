import styles from "./video.module.css";

interface VideoProps {
  label: string;
}

export const Video = ({ label }: VideoProps) => (
  <div className={styles["container"]}>
    <div>
      <h1>{label}</h1>
    </div>
  </div>
);

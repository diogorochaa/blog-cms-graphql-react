import { Player, Youtube, DefaultUi } from "@vime/react";
import "@vime/core/themes/default.css";
import {
  DiscordLogo,
  Lightning,
  CaretRight,
  FileArrowDown,
} from "phosphor-react";
import { Button } from "../Button";
import { Card } from "../Card";
import styles from "./video.module.css";

export function Video() {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-video"]}>
        <div className={styles["video"]}>
          <Player>
            <Youtube videoId="SO4-izct7Mc" />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className={styles["container-text"]}>
        <div className={styles["body"]}>
          <div className={styles["div-text"]}>
            <h1 className={styles["title"]}> Aula 01 - Abertura do ignite</h1>
            <p className={styles["paragraph"]}>
              Nessa aula vamos dar inicio ao projeto
            </p>
            <div className={styles["container-avatar"]}>
              <img
                src="https://github.com/DiogoRocha10.png"
                alt="avatar"
                className={styles["image"]}
              />
              <div className="text-body">
                <strong className={styles["teacher"]}>Diogo Rocha</strong>
                <span className={styles["bio"]}>Desenvolvimento Web</span>
              </div>
            </div>
          </div>

          <div className={styles["container-buttons"]}>
            <Button label=" Comunidade do discord" variant="primary">
              <DiscordLogo size={24} />
            </Button>
            <Button label=" Acesse o desafio" variant="secondary">
              <Lightning size={24} />
            </Button>
          </div>
        </div>
        <div>
          <div className={styles["container-cards"]}>
            <Card
              title="Material complementar"
              description="Acesse o material complementar para acelerar o seu desenvolvimento"
              icon={<CaretRight size={24} />}
              children={<FileArrowDown size={40} />}
            />
            <Card
              title="Wallpapers exclusivos"
              description="Baixe os wallpapers exclusivos para acelerar o seu desenvolvimento"
              icon={<CaretRight size={24} />}
              children={<FileArrowDown size={40} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

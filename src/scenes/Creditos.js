// @ts-ignore
import Phaser from "phaser";
import { getPhrase } from '../services/translations';

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

  create() {
    if (!this.scale.isFullscreen) {
      this.scale.startFullscreen();
    }

    // Fondo del menú principal
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "pantalla_creditos"
      )
      .setScale(1.1);
    this.add.text(150, 270, getPhrase("CREDITOS"), {
      font: "100px VT323",
      align: "center",
      color: "#FCE4CA",
    });

    this.emilia = this.add.image(455, 650, "texto").setScale(0.7);
    this.emilia = this.add.text(
      320,
      600,
      "EMILIA GÜLL",
      {
        font: "25px Oxanium",
        color: "#FCE4CA",
      }
    );
    this.add.text(320, 660, getPhrase('Programadora'), {
      font: "25px Oxanium",
      color: "#FCE4CA",
    }
       );


    this.valentina = this.add.image(455, 900, "texto").setScale(0.7);
    this.valentina = this.add.text(
      320,
      850,
      "VALENTINA GALVAN", {
        font: "25px Oxanium",
        color: "#FCE4CA",
      }
    );
    this.add.text(320, 910, getPhrase('Diseñadora de Juego'), {
      font: "25px Oxanium",
      color: "#FCE4CA",
    }
       );

    this.agostina = this.add.image(455, 1200, "texto").setScale(0.7);
    this.agostina = this.add.text(
      320,
      1150,
      "AGOSTINA SALGADO",
      {
        font: "25px Oxanium",
        color: "#FCE4CA",
      }
    );
    this.add.text(320, 1210, getPhrase('Artista'), {
      font: "25px Oxanium",
      color: "#FCE4CA",
    }
       );


    // Boton para volver al menu principal
    const menu = this.add.image(650, 1400, "boton_menu").setScale(1.1);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    
  }
}

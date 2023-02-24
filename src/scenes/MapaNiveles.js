// @ts-ignore
import Phaser from "phaser";
import { getPhrase } from '../services/translations';


import { cartasPorNivel } from "../utilites/cartasPorNivel.js";

export default class MapaNiveles extends Phaser.Scene {
  constructor() {
    super("MapaNiveles");
  }

  nivelActual = 0;
  

  init(data) {
    console.log("mapa nivel", data.nivel);
    this.nivel = data.nivel ?? 1;
    this.corazones = data.corazones;

    this.fondo_nivel = cartasPorNivel[String(this.nivel)].fondo_nivel;
    this.fondo_mapa = cartasPorNivel[String(this.nivel)].fondo_mapa;
    this.texto = cartasPorNivel[String(this.nivel)].texto;
  }

  create() {
    if (!this.scale.isFullscreen) {
      this.scale.startFullscreen();
    }

    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        this.fondo_mapa
      )
      .setScale(1.1);

    // comenzar a jugar
    let juego = this.add
      .image(this.cameras.main.centerX, 820, "boton_mapa")
      .setScale(0.5);
    const x = this.scale.width * 0.295;
    const y = this.scale.height * 0.53;

    (this.jugar = this.add.text(x, y, getPhrase(this.texto), {
      font: "100px VT323",
      color: "#FCE4CA",
      align: "center",
      wordWrap: { width: 400 },
    })),
      juego.setInteractive();
    juego.on("pointerdown", () =>
      this.scene.start("Juego", {
        nivel: this.nivel,
        corazones: this.corazones,
      })
    );
    

    // Boton para volver al menu principal
    const menu = this.add.image(350, 1000, "boton_menu").setScale(1.0);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    
  }

  update() {}
}

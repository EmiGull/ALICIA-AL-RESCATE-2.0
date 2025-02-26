// @ts-ignore
import Phaser from "phaser";
import { getPhrase } from '../services/translations';


export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MenuPrincipal");
  }

  init(data) {
    this.nivel = data.nivel;
  }

  create() {
    if (!this.scale.isFullscreen) {
      this.scale.startFullscreen();
    }

    // Fondo del menú principal
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_menu")
      .setScale(1.1);

  

    // Boton para comenzar a jugar
    let jugar = this.add
      .image(this.cameras.main.centerX, 625, "jugar_boton")
      .setScale(0.5);
    this.jugar = this.add.text(260, 580, getPhrase("JUGAR"), {
      font: "100px VT323",
      color: "#FCE4CA",
      align: "center",
    });
    jugar.setInteractive();
    jugar.on("pointerdown", () =>
      this.scene.start("MapaNiveles", { nivel: this.nivel })
    );
    

    //Boton ayuda
    let ayuda = this.add.image(120, 1400, "ayuda").setScale(1.0);
    ayuda.setInteractive();
    ayuda.on("pointerdown", () => this.scene.start("Creditos"));
    

    //Boton ajustes
    let ajustes = this.add.image(600, 1400, "ajustes").setScale(1.0);
    ajustes.setInteractive();
    ajustes.on("pointerdown", () => this.scene.start("Ajustes"));
    

    let SpriteGato = this.add
      .sprite(this.cameras.main.centerX, 150, "sprite_gato")
      .setScale(3.5);
    SpriteGato.anims.play("animacion_gato", true);

    let SpriteAlicia = this.add
      .sprite(this.cameras.main.centerX, 1200, "sprite_alicia")
      .setScale(2.5);
    SpriteAlicia.anims.play("animacion_alicia", true);
  }
}

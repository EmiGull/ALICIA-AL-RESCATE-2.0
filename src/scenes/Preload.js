// @ts-ignore
import Phaser from "phaser";


export default class Preload extends Phaser.Scene {
  
  
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preload");
    this.load = undefined;
    this.scene = undefined;
  }

  preload() {
   
    this.load.image("boton_mapa", "assets/images2/boton_mapa.png");
    this.load.image("boton_flecha", "assets/images2/boton_flecha.png");
    this.load.image("boton_flecha2", "assets/images2/boton_flecha2.png");
    this.load.image("boton_pausa", "assets/images2/boton_pausa.png");
    this.load.image("boton_puntos", "assets/images2/boton_puntos.png");
    this.load.image(
      "boton_temporizador",
      "assets/images2/boton_temporizador.png"
    );
    this.load.image("boton_info", "assets/images2/boton_info.png");
    this.load.image("boton_menu", "assets/images2/boton_menu.png");
    this.load.image("boton_ganaste", "assets/images2/boton_ganaste.png");
    this.load.image("boton_perdiste", "assets/images2/boton_perdiste.png");
    this.load.image("creditos_ajustes", "assets/images2/creditos_ajustes.png");
    this.load.image("fondo_ganaste", "assets/images2/fondo_ganaste.png");
    this.load.image("fondo_perdiste", "assets/images2/fondo_perdiste.png");
    this.load.image("fondo_final", "assets/images2/fondo_final.png");
    this.load.image("fondo_nivel1", "assets/images2/fondo_nivel1.png");
    this.load.image("fondo_nivel2", "assets/images2/fondo_nivel2.png");
    this.load.image("fondo_nivel3", "assets/images2/fondo_nivel3.png");
    this.load.image("fondo_nivel4", "assets/images2/fondo_nivel4.png");
    this.load.image("fondo_nivel5", "assets/images2/fondo_nivel5.png");
    this.load.image("ajustes", "assets/images2/ajustes.png");
    this.load.image("ayuda", "assets/images2/ayuda.png");
    this.load.image("jugar_boton", "assets/images2/jugar_boton.png");
    this.load.image("pantalla_ajustes", "assets/images2/pantalla_ajustes.png");
    this.load.image(
      "pantalla_creditos",
      "assets/images2/pantalla_creditos.jpg"
    );
    this.load.image("texto", "assets/images2/texto.png");
    this.load.image("fondo_menu", "assets/images2/fondo_menu.png");
    this.load.image("castillo", "assets/images2/castillo.png");
    this.load.image("lago", "assets/images2/lago.png");
    this.load.image("jardin", "assets/images2/jardin.png");
    this.load.image("bosque", "assets/images2/bosque.png");
    this.load.image("montana", "assets/images2/montana.png");
    this.load.image("alicia", "assets/images2/alicia.png");
    this.load.image("reina", "assets/images2/reina.png");
    this.load.image("conejo", "assets/images2/conejo.png");
    this.load.image("conejo_2", "assets/images2/conejo_2.png");
    this.load.image("flor", "assets/images2/flor.png");
    this.load.image("girasol", "assets/images2/girasol.png");
    this.load.image("llave", "assets/images2/llave.png");
    this.load.image("pajarito", "assets/images2/pajarito.png");
    this.load.image("pastel", "assets/images2/pastel.png");
    this.load.image("pocion", "assets/images2/poción.png");
    this.load.image("reina_blanca", "assets/images2/reina_blanca.png");
    this.load.image("rosa", "assets/images2/rosa.png");
    this.load.image("sombrero", "assets/images2/sombrero.png");
    this.load.image("reverso", "assets/images2/reverso.png");
    this.load.image("carta_bloqueada", "assets/images2/carta_bloqueada.png");
    this.load.image("argentina", "assets/images2/argentina.png");
    this.load.image("brasil", "assets/images2/brasil.png");
    this.load.image("eeuu", "assets/images2/eeuu.png");

    this.load.spritesheet("sprite_alicia", "assets/images2/sprite_alicia.png", {
      frameWidth: 123,
      frameHeight: 208,
    });

    this.load.spritesheet("sprite_gato", "assets/images2/sprite_gato.png", {
      frameWidth: 90,
      frameHeight: 54.5,
    });

    this.load.spritesheet("sprite_reina", "assets/images2/sprite_reina.png", {
      frameWidth: 106,
      frameHeight: 120,
    });

  }

  create() {
    // Pasa directamente a la escena del menú principal
    this.scene.start("MenuPrincipal");

    //agregar animación Alicia (en pantalla Menu Principal y Final)
    this.add.sprite(200, 1200, "sprite_alicia");
    this.anims.create({
      key: "animacion_alicia",
      frames: this.anims.generateFrameNumbers("sprite_alicia", {
        start: 0,
        end: 4,
      }),
      frameRate: 4,
      repeat: -1,
    });

    //agregar animacioón Gato (en pantalla Menu Principal)
    this.add.sprite(200, 180, "sprite_gato");
    this.anims.create({
      key: "animacion_gato",
      frames: this.anims.generateFrameNumbers("sprite_gato", {
        start: 0,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });

    //agregar animacioón Reina (en nivel 5)
    this.add.sprite(200, 1300, "sprite_reina");
    this.anims.create({
      key: "animacion_reina",
      frames: this.anims.generateFrameNumbers("sprite_reina", {
        start: 1,
        end: 5,
      }),
      frameRate: 5,
      repeat: -1,
      yoyo: true,
    });
  }
  
}

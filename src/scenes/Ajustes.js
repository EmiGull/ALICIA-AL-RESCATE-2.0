import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from '../enums/states';
import { EN_US, ES_AR } from '../enums/languages';
import { getTranslations, getPhrase } from '../services/translations';


export default class Ajustes extends Phaser.Scene {
  
   //Translations.
   language;
   wasChangedLanguage = TODO;

  constructor() {
    super("Ajustes");
  }

  init(language){
    this.language = language;
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
        "pantalla_ajustes"
      )
      .setScale(1.1);
    this.idioma = this.add.text(190, 270,  getPhrase("IDIOMA"), {
      font: "100px VT323",
      align: "center",
      color: "#FCE4CA",
    });

    //Boton Español
    const botonespanol = this.add.image(this.cameras.main.centerX, 700, "argentina")
    .setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.getTranslations(ES_AR)
    })
    .setScale(1);


    const botoningles = this.add.image(this.cameras.main.centerX, 1100, "eeuu")
    .setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.getTranslations(EN_US)
    })
    .setScale(1);

    // Boton para volver al menu principal
    const menu = this.add.image(650, 1400, "boton_menu").setScale(1.1);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    
  }

  updateWasChangedLanguage = () => {
    this.wasChangedLanguage = FETCHED
};
    async getTranslations(language){
      this.language = language;
      this.wasChangedLanguage = FETCHING;

    await getTranslations(language, this.updateWasChangedLanguage);
}

  update(){ 
		
  if(this.wasChangedLanguage === FETCHED){
    this.wasChangedLanguage = READY;
    this.idioma.setText(getPhrase("IDIOMA"));
  }
}

}

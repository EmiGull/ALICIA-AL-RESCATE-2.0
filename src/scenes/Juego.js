import Phaser from "phaser";
import { sharedInstance as events } from "./EventCenter";
import Ganaste from "./Ganaste";
import Perdiste from "./Perdiste";

import { cartasPorNivel, texturasDeCartas } from "../utilites/cartasPorNivel.js";
import { Carta } from "../controllers/Carta.js";

export default class Juego extends Phaser.Scene {
  coordenadas;
  numeros;
  nivel;
  puntos;
  coincidenciasNivel
  coincidencias
  perdiste

  constructor() {
    super("Juego");   
    this.perdiste = false; 
  }


  init(data) {
    //console.log(data);
    this.nivel = data.nivel ?? 1;
    this.corazonesTotal = data.corazones ?? 0;
    this.coincidencias = 0
  }

  create() {
  //inicializacion de variables
    let tarjeta1 = null;
    let tarjeta2 = null;
    let corazones
    corazones = this.corazonesTotal;
    
    
    let tarjetasDestapadas = 0;

    this.coordenadas = cartasPorNivel[String(this.nivel)].coordenadas;
    this.coincidenciasNivel = cartasPorNivel[String(this.nivel)].coincidencias;  
    this.fondo_nivel = cartasPorNivel[String(this.nivel)].fondo_nivel; 
    this.tiempo = cartasPorNivel[String(this.nivel)].tiempo; 
    

    // Fondo del nivel
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        this.fondo_nivel,
      )
      .setScale(1.1);

    this.add.image(400, 100, "temporizador");
    this.add.image(120, 100, "puntos");
    this.puntos = this.add.text(130, 60, corazones.toString(), {
      fontFamily: "Rockwell",
      fontSize: 70,
      color: "#000000",
    });

    //clic
    //this.clic = this.sound.add("clic");

    // Boton para volver al menu principal
    const menu = this.add.image(600, 100, "boton_menu").setScale(1.1);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    //this.clic.play();

    // Si no junta todas las cartas en el tiempo determinado por nivel --> Game Over
    
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.onSecond,
      callbackScope: this,
      loop: true,
    });
    this.timeText = this.add.text(340, 60, this.tiempo.toString(), {
      fontFamily: "Rockwell",
      fontSize: 70,
      color: "#000000",
    });  

    //console.log("coincidencias ", this.coincidencias)
    //console.log(cartasPorNivel[String(this.nivel)]);
    
    this.numeros = cartasPorNivel[String(this.nivel)].tipos;
    this.numeros = this.numeros.sort(() => (Math.random() > 0.5 ? 1 : -1));

    this.numeros.forEach((numero, index) => {
      const posx = this.coordenadas[index][0];
      const posy = this.coordenadas[index][1];
      const tipo = texturasDeCartas[numero];
      //console.log(tipo)
      let carta = new Carta(this, posx, posy, tipo);    

      
      carta.imagen.on('pointerdown', function (pointer) {        
        tarjetasDestapadas++
        
        if (tarjetasDestapadas <= 2) {
          this.setTexture(this.tipo);
          if (tarjetasDestapadas == 1) {
            tarjeta1 = this;
          }
        }

        if (tarjetasDestapadas == 2) {
          tarjeta2 = this;
          if (tarjeta1.tipo == tarjeta2.tipo) {
            corazones += 1;            
            this.escena.puntos.setText(corazones);
            //para hacer que cuando coinciden dos cartas estas desaparezcan de la pantalla
            //tarjetasDestapadas.disableBody(true, true);

            //si se juntan dos parejas de cartas seguidas se suman 5 puntos extra
            //if (tarjetasdestapadas>=4){
             //corazones+= 5;
            //this.escena.puntos.setText(corazones);
            //}
           

            
            this.escena.coincidencias++;
            setTimeout(() => {
              tarjetasDestapadas = 0;
            }, 500)
          } else {
            setTimeout(() => {
              tarjeta1.setTexture('reverso');
              tarjeta2.setTexture('reverso');
              tarjetasDestapadas = 0;
            }, 500)
          }
        }

        //Para ir a la pantalla de ganaste una vez que se dan vuelta todas las cartas
        if (this.escena.coincidencias === this.escena.coincidenciasNivel) {
          //Agregar evento de 1 o2 segundos que cuando se cumpla ese tiempo
          // Haga lo de abajo 
          setTimeout(() => {
          this.escena.scene.start("Ganaste", {
            nivel: this.escena.nivel, 
            corazones:  corazones},1500);
        })
        };
      

    })}

  )}

  update(){
    //si gane va a la escena ganaste y luego se pasa al siguiente nivel
   events.emit("pasar-nivel");

  }

  onSecond(){
    if (!this.perdiste) {
     this.tiempo = this.tiempo - 1; // One second
     this.timeText.setText(this.tiempo);
      if (this.tiempo == 0) {
        this.timedEvent.paused = true;
         this.scene.start("Perdiste",{
          return: this.nivel,});
      };
    };
  }; 
}


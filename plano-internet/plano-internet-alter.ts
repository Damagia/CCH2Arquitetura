import { Implementation } from "../Implementation/implementation";

export class PlanoInternetAlter {
    constructor(protected device: Implementation) {}

    speedUp(): void {
      const oldSpeed = this.device.getSpeed();
      this.device.setSpeed(this.device.getSpeed() + 50);
      console.log(
        `A velocidade de banda do seu plano ${this.device.getName()} foi aumentada de ${oldSpeed}MB para ${this.device.getSpeed()}MB`,
      );
    }
  
    speedDown(): void {
      const oldSpeed = this.device.getSpeed();
      this.device.setSpeed(this.device.getSpeed() - 50);
      console.log(
        `A velocidade de banda do seu plano ${this.device.getName()} foi diminuida de ${oldSpeed}MB para ${this.device.getSpeed()}MB`,
      );
    }
  }
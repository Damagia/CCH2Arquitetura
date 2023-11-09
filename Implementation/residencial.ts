import { Implementation } from "./implementation";

export class Residencial implements Implementation {
    private speed = 100;
    private name = 'Residencial';
  
    getName(): string {
      return this.name;
    }
  
    setSpeed(internetSpeed: number): void {
      if (internetSpeed < 0) return;
      if (internetSpeed > 500) return;
      this.speed = internetSpeed;
    }
  
    getSpeed(): number {
      return this.speed;
    }
  }
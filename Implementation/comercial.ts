import { Implementation } from "./implementation";

export class Comercial implements Implementation {
    private name = 'Comercial';
    private speed = 500;
  
    getName(): string {
      return this.name;
    }
  
    setSpeed(internetSpeed: number): void {
      if (internetSpeed < 0) return;
      if (internetSpeed > 2000) return;
      this.speed = internetSpeed;
    }
  
    getSpeed(): number {
      return this.speed;
    }
  }
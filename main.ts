import { Comercial } from "./Implementation/comercial";
import { Residencial } from "./Implementation/residencial";
import { PlanoInternetAlter } from "./plano-internet/plano-internet-alter";

export function updateInternet(
  abstraction: PlanoInternetAlter,
): void {
  abstraction.speedUp();
}

export function downInternet(
  abstraction: PlanoInternetAlter,
): void {
  abstraction.speedDown();
}

const comercial = new Comercial();
const residencial = new Residencial();

const residencialInternet = new PlanoInternetAlter(residencial);
downInternet(residencialInternet);

const comercialInternet = new PlanoInternetAlter(comercial);
updateInternet(comercialInternet);
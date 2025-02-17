import express from "express";
import { Proizvod, proizvodi } from "../data.js";
const router = express.Router();

class Narudzba {
  constructor(id, naruceni_proizvodi) {
    (this.id = id), (this.naruceni_proizvodi = naruceni_proizvodi);
  }
  get Ukupna_cijena() {
    let ukupno = this.naruceni_proizvodi.reduce((a, e) => {
      let proizvod = proizvodi.find((p) => p.id == e.id);
      if (proizvod) {
        return a + proizvod.cijena * e.narucena_kolicina;
      } else {
        console.error(
          "Ne postoji proizvod u nasoj trgovini stoga ne mozemo izracunat ukupnu cijenu!"
        );
        return;
      }
    }, 0);
    return ukupno;
  }
}

const narudzba = new Narudzba(1, [
  { id: 1, velicina: "M", narucena_kolicina: 2 },
  { id: 3, velicina: "onesize", narucena_kolicina: 1 },
]);

console.log(narudzba.Ukupna_cijena);

let narudzbe = [];

router.post("/naruci", (req, res) => {});

export default router;

import express from "express";
import { Proizvod, proizvodi } from "../data.js";
const router = express.Router();

router.get("/", (req, res) => {
  if (proizvodi) {
    res.status(200).json(proizvodi);
  } else {
    res.status(404).json({ message: "Ne postoje proizvodi za sad!" });
  }
});

router.get("/:id", (req, res) => {
  const id_proizvod = req.params.id;
  if (isNaN(id_proizvod)) {
    res.status(400).json({ error: "Id mora biti broj!!!" });
    return;
  }

  let proizvod = proizvodi.find((p) => p.id == id_proizvod);

  if (!proizvod) {
    res.status(404).json({ error: "Ne postoji proizvod!!" });
    return;
  }

  res.status(200).json(proizvod);
});

export default router;

import express from "express";
import proizvodiRouter from "./routes/proizvodi.js";
import narudzbeRouter from "./routes/narudzbe.js";
import cors from "cors";
import router from "./routes/proizvodi.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.use("/proizvodi", proizvodiRouter);
app.use("/narudzbe", narudzbeRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log("Greska prilikom posluzitelja!");
  } else {
    console.log("Posluzitelj je uspjesno pokrenut!");
  }
});

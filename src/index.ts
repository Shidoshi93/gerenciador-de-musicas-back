import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { musicRouter } from "./routes/MusicRouter";
import cors from "cors";



dotenv.config();
const app = express();

/* const allowedOrigins = ['http://localhost:3003'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
}; */

app.use(cors({origin: "http://localhost:3003", 
optionsSuccessStatus: 200}))
app.use(express.json());
app.use("/user", userRouter);
app.use("/music", musicRouter)

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
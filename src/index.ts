import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { musicRouter } from "./routes/MusicRouter";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/user", userRouter);
app.use("/music", musicRouter)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
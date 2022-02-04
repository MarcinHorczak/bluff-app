import express from "express";
import http from "http";
import "dotenv/config";
import { Server } from "socket.io";

const app = express();

const router = express.Router();
router.get("/", (_, res) => res.send("API"));

app.use("/", router);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

server.listen(process.env.API_PORT, () => {
  console.log(`Server started.`);

  io.on("connection", console.log);
});

import App from "./src/app";
import { config as dotenv } from "dotenv";

dotenv();

const port: number = Number(process.env.APP_PORT);
const app = new App().app;

app.listen(port, () => {
  console.info(`NODE\t\t: ${process.env.NODE_ENV}`);
  console.info(`Running on\t: http://localhost:${port}`);
});

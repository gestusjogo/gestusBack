import express from "express";
import routes from "./routes.js";
import cors from "cors";
const app = express();
app.use(cors(
{
origin: '*',
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization']
}
));
app.use(express.json());

//use routes
app.use(routes);

export default app;

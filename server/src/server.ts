import express, { Request } from "express";
import dotenv from "dotenv";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middleware/error";
import endpoints from "./services/";
import RouteHelper from "./libs/helpers/route.helper";
import userControler from "./services/user/user.controller";

// const app: express.Application = express();
const app = express();

dotenv.config();

// MiddleWare
app.use(helmet()); //Security first middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // enable CORS - Cross Origin Resource Sharing
app.use(cookieParser());
if(process.env.NODE_ENV === "development"){
  app.use(morgan("dev"));
}
// csurf config
// const csrfProtection = csrf({ cookie: true });
// app.use(csrfProtection);

// Routes
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, World!');
// });

app.use(errorHandler);

// console.log("port", process.env.PORT);

try {
  RouteHelper.initRoutes(endpoints, app);
} catch (error) {
  console.error(error);
}

export default app;
import dotenv from "dotenv";
import { Router } from "express";

import RateLimit from "express-rate-limit";

let limiter: any;

dotenv.config();

function rateLimitHandler(req: any, res: any, windowMs: any) {
  res.setHeader("Retry-After", Math.ceil(windowMs / 1000));
  console.log(`Rate limit exceeded for ip: ${req.ip}`);
  return res
    .status(429)
    .send({ message: `Rate limit exceeded for ip: ${req.ip}`, code: 429 });
}

class RouteHelper {
  static initRoutes(routes: any[], router: Router) {
    for (const route of routes) {
      const { method, path, handler } = route;
      (router as any)[method](`/${process.env.NODE_ENV}${path}`, handler);
    };

    // eslint-disable-next-line dot-notation
    router["get"](`/${process.env.NODE_ENV}`, async (req: any, res: any) => {
      console.log("I GOT HEREEEE");
      res.setHeader("content-type", "text/plain");
      const report = {
        message: "You are welcome to Koboweb",
        code: 201,
      };
      res.status(201).send(report);
    });
  }

  static getLimiter() {
    return limiter;
  }

  static handleRateLimiter(router: any) {
    limiter = RateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      handler(req, res) {
        console.log("here");
        return rateLimitHandler(req, res, 15 * 60 * 1000);
      },
    });
    router.use(limiter);
  }
}

export default RouteHelper;
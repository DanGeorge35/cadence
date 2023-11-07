import jwt from "jsonwebtoken";

function Authorization(req: any, res: any, next: any) {
  // eslint-disable-next-line no-unused-vars
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("Not Authorised");

  // eslint-disable-next-line consistent-return
  const JWT_KEY: any = process.env.jwtkey;
  jwt.verify(token, JWT_KEY, (err: any, user: any) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
}

function GenerateToken(id: any) {
  const JWT_SECRET: any = process.env.jwtkey;
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "30d" });
}

export {
  Authorization,
  GenerateToken
}
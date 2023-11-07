import JWT from "jsonwebtoken";
import ErrorResponse from "../messages/ErrorMessage";
import { NextFunction, Request, Response } from "express";

const protect = (req: any, res: Response, next: NextFunction) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
        const JWT_SECRET: any =  process.env.JWT_SECRET
        const decoded: any = JWT.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }else {
        return next(new ErrorResponse("Invalid Token", 401));
    }

    if(!token){
        return next(new ErrorResponse(`No token, sent`, 401));
    }

}

export default protect;
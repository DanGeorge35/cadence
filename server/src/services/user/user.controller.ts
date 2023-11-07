import { GenerateToken } from "../../libs/utils/app.helper";
import User from "../../models/user/User.model";

class userControler {
  static async loginUser(req: any, res: any, next: any) {
    try {

      let token;
      const { email, password } = req.body;

      console.log("req.body", req.body);
        
      if(!email || !password){
        return res.status(400).json({ message: "Email and password is required" }); 
      }

      const user = await User.findOne({ where: { email: email } });

      console.log("user>>>>>", user);

      
      if(!user){
        return res.status(400).json({ message: "Invalid credentials" }); 
      }

      if (user !== null) {
        const userId = user.dataValues.id;
        token = GenerateToken(userId)
      } 

      res.status(200).json({ success: true, data: user, token });
      
    } catch (error) {
      console.log("error login user", error);
      next(error);
    }
  };
}

export default userControler;
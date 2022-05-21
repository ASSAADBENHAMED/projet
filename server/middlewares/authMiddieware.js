const jwt = require('jsonwebtoken');


exports.authMiddleware = async (req,res, next) =>{
    try {
      const token= req.headers.token;
      if(!token) return res.status(401).json({msg:'you are not authorized.'});
      const verifyToken = jwt.verify(token,process.env.JWT_SECRET);
      res.personId = verifyToken.id ;   
      next();
    } catch (error) {
      console.log(error);
      return  res.status(500).json({msg:'something went wrong !'});
    }
};
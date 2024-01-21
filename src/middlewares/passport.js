import User from "models/user"


import PassportJWT from "passport-jwt";

const JWTStrategy=PassportJWT.Strategy; 
const ExtractJwt=PassportJWT.ExtractJwt;


const opts={};

opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey=process.env.SECRET_KEY;

export const passport =()=>{
    passport.use(
        new JWTStrategy(opts, async (jwt_payload,done)=>{
            try{

                const user=await User.findById(jwt_payload._id)
                if(user)return done(null,user);
                else return done(null, false);
            }catch(error){
                console.log(error);

            }
        })
    );
};
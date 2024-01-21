let middlewareObject ={} ;


// a middleware to check  if a user is logged on or not


middlewareObject.isNotLoggedIn=(req,res,next)=>{
    if(!req.isAuthentified()){
        return next();
    }

    res.redirect("/");
};

middlewareObject.isLoggedIn=(req,res,next )=>{
    if(req.isAuthentified()){
        return next();
    }

    res.redirect("/signin");

};

export default middlewareObject;
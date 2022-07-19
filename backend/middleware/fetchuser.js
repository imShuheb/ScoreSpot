const jwt = require('jsonwebtoken');
JWT_Secret = 'secretKey!$'

const fetchuser = (req, res, next) => {
    //Get user id from the tocken header 
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Authenticate with correct valid tocken" })
    }

    try {
        const data = jwt.verify(token, JWT_Secret);
        // console.log(data)
        req.users = data.user;
        // console.log(req.users)
        next();
    }
    
    catch (error) {
        res.status(401).send({ error: "Tocken not recived in fetchall" });
    }
}

module.exports = fetchuser;

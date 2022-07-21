const express = require('express');
const User = require('../models/User')
const Profile = require('../models/profile')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();

JWT_Secret = 'secretKey!$'


// ROUTE TO SIGN-IN
// ("/api/auth/reg" = path ,"[]" = array of valadatiors," (req,res) "= response)
router.post('/reg', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })],

    //ERROR VALADATION AND ERROR 404 DISPLAY
    async (req, res) => {
        let success = "false"
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        //refer express-validator for more info
        //check user exist
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ success, error: "email already exists" })
            }

            const Salt = await bcrypt.genSalt(5);
            secPass = await bcrypt.hash(req.body.password, Salt);

            //create new user 
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })

            // using jsonweb tocken
            //sigining and passing tocken to client 
            const data = {
                user: {
                    id: user.id
                }
            }
            const Tocken = jwt.sign(data, JWT_Secret);
            success = 'true'
            res.json({ success, Tocken })
        }

        catch (error) {
            console.log(error)
            res.status(500).send("Internal server error occured")
        }
    });


//ROUTE TO LOG-IN
//("/api/auth/login" = path ,"[]" = array of valadatiors," (req,res) "= response)
router.post('/login', [
    body('email', 'enter the vaild email').isEmail(),
    body('password', 'Password cannot be blank').exists()],

    async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //TAKING VALUES FROM BODY OR CLIENT
        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                success = false;
                return res.status(400).json({ error: "enter the correcr cridentials" })
            }

            const PasswordCompare = await bcrypt.compare(password, user.password);
            if (!PasswordCompare) {
                success = false;
                return res.status(400).json({ success, error: "enter the correcr cridentials" })
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const Tocken = jwt.sign(data, JWT_Secret);
            success = true;
            res.json({ success, Tocken })
        }

        catch (error) {
            console.log(error)
            res.status(500).send("Internal server error occured")
        }
    })


// ROUTE TO FETCH DATA USING TOCKEN /api/auth/userdata
router.post('/userdata', fetchuser, async (req, res) => {
    try {
        const userId = req.users.id;
        const user = await User.findById(userId).select('-password')
        res.send(user);
    }

    catch (error) {
        console.log(error)
        res.status(500).send("Internal server error occured")
    }
})

// ROUTE TO FETCH DATA USING TOCKEN /api/auth/userdata
router.post('/userlist', async (req, res) => {
    try {
       const user = await User.find({});
       res.send(user);   
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Internal server error occured")
    }
})

module.exports = router 

const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Profile = require('../models/profile');
const User = require('../models/User');


//Route 1 : get user data dashboard : GET "localhost/api/fetchuser"
router.post('/teams', fetchuser, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.users.id });
        const user = await User.findOne({ _id: req.users.id });
        res.json({ profile, user });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router


const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Profile = require('../models/profile');
const User = require('../models/User');
const Teams = require('../models/Teams');


//Route 1 : get user data dashboard : GET "localhost/teams/players/fetchteams"
router.get('/players/fetchteams', fetchuser, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.users.id });
        const teams = await Teams.findOne({ user: req.users.id })
        res.status(200).json({ profile, teams });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/players', fetchuser, async (req, res) => {
    try {
        const { data } = req.body
        // const string = JSON.stringify(data);
        // console.log(string)
        const profile = new Teams({
            user: req.users.id, data
        })

        const saveProfile = await profile.save()
        success = "true"
        res.status(200).json({ success, saveProfile })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router


const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Profile = require('../models/profile');
const Schedule = require('../models/schedule')
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
        const { data, name } = req.body
        const teams = await Teams.findOne({ name: name })
        if (teams) {
            const error = "Player already exist"
            return res.status(200).json({ error })
        }
        const profile = new Teams({
            user: req.users.id, data, name
        })

        const saveProfile = await profile.save()
        success = "true"
        res.status(200).json({ success, saveProfile })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
router.post('/schedule/match', fetchuser, async (req, res) => {
    try {
        let success = "false"
        const { team1, team2, time, date, ground } = req.body
        const profile = new Schedule({
            user: req.users.id, team1, team2, time, ground, date
        })
        const saveProfile = await profile.save()
        success = "true"
        res.status(200).json({ success, saveProfile })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/teamlist', async (req, res) => {
    try {
        const teams = await Teams.find({});
        res.status(200).json(teams);
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Internal server error occured")
    }
})



module.exports = router


const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Profile = require('../models/profile');
const Schedule = require('../models/schedule')
const Teams = require('../models/Teams');
const Matchs = require('../models/match');



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
            const error = "Team Name Already Exists"
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
        const { team1, team2, time, date, ground, balltype, overs, perbowler } = req.body
        const profile = new Schedule({
            user: req.users.id, team1, team2, time, ground, date, balltype, overs, perbowler
        })
        const saveProfile = await profile.save()
        success = "true"
        res.status(200).json({ success, saveProfile })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/check', fetchuser, async (req, res) => {
    const { user } = req.body;
    let success = "false"
    try {
        if (user === req.users.id) {
            success = 'true'
            res.status(200).json({ success })
        } else {
            success = 'false'
            res.status(200).json({ success })

        }
    } catch (e) {
        res.status(500).send("Internal server error")
    }
})

router.post('/matchlist', async (req, res) => {
    try {
        const teams = await Schedule.find({});
        res.status(200).json(teams);

    }
    catch (error) {
        console.log(error)
        res.status(500).send("Internal server error occured")
    }
})



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


router.post('/matches/add', fetchuser, async (req, res) => {
    try {
        let success = "false"
        const { team1, team2, time, date, ground, balltype, overs, perbowler, toss, select_b } = req.body
        const profile = new Matchs({
            user: req.users.id, team1, team2, time, ground, date, balltype, overs, perbowler, toss, select_b
        })
        const Live = await profile.save()
        success = "true"
        res.status(200).json({ success, Live })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/updateschedule/:id', fetchuser, async (req, res) => {
    const { message } = req.body;

    try {
        // Create a newprofile object
        const newProfile = {};
        if (status) { newProfile.status = message };


        // Find the note to be updated and update it
        const id = req.params.id;
        let profile = await Schedule.findById(id);

        profile = await Schedule.findByIdAndUpdate(id, { $set: newProfile }, { new: true })
        res.json({ profile })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router


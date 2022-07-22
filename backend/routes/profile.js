const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Profile = require('../models/profile');
const User = require('../models/User');




//Route 1 : get user data dashboard : GET "localhost/api/fetchuser"
router.get('/fetchuser', fetchuser, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.users.id });
        const user = await User.findOne({ _id: req.users.id });

        res.json({ profile, user });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// Route 2: add user proflie to database : post "localhost/api/userdata/add"
router.post('/add', fetchuser, async (req, res) => {
    let success = "false"

    try {
        const { fname, lname, dob, phone, address, batsman, bowller, wicketKeeper, allRounder } = req.body

        const profile = new Profile({
            fname, lname, dob, phone, address, batsman, bowller, wicketKeeper, allRounder, user: req.users.id
        })

        const saveProfile = await profile.save()
        success = "true"
        res.status(200).json({ success, saveProfile })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// ROUTE 3: Update an existing Note using: PUT "/api/updateprofile/:id". Login required
router.put('/updateprofile/:id', fetchuser, async (req, res) => {
    const { fname, lname, phone, dob, address} = req.body;

    try {
        // Create a newprofile object
        const newProfile = {};
        if (fname) { newProfile.fname = fname };
        if (lname) { newProfile.lname = lname };
        if (phone) { newProfile.phone = phone };
        if (dob) { newProfile.dob = dob };
        if (address) { newProfile.address = address };

        // Find the note to be updated and update it
        const id = req.params.id;
        let profile = await Profile.findById(id);
        if (!profile) {
            return res.status(404).send("Not Found")
        }

        if (profile.user.toString() !== req.users.id) {
            return res.status(401).send("Not Allowed");
        }

        profile = await Profile.findByIdAndUpdate(id, { $set: newProfile }, { new: true })
        res.json({ profile })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// to delete
router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {

        // Find the profile to be delete and delete it
        let profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).send("Not Found")
        }

        // Allow deletion only if user has profile
        if (profile.user.toString() !== req.users.id) {
            return res.status(401).send("Not Allowed");
        }

        profile = await Profile.findByIdAndDelete(req.params.id)
        res.json({ "Success": "profile has been deleted", profile: profile });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});


module.exports = router


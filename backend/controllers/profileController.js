const Profile = require('../models/profileModel')
const mongoose = require('mongoose')
const User = require('../models/userModel')
const Qna = require('../models/qnaModel')



const getProfile = async (req, res) => {
    const userid = req.user._id;
    const profile = await Profile.findOne({ user_id: userid }).sort({ createdAt: -1 })

    const user = await User.findById(userid)
    const username = user.username
    const qna = await Qna.find({ username, ispublic: true })
    // console.log(qna)
    if (!profile) {
        // If no profile is found, send a 404 response
        return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json({profileData: profile, qnas: qna})
}

const getOtherProfile = async (req, res) => {
    // console.log("ejn")
    try {
        const { usenam } = req.params; // Correctly destructure the parameter from req.params
        console.log(usenam)
        if (!usenam) {
            return res.status(400).json({ error: 'Username is required' });
        }

        const profile = await Profile.findOne({ username: usenam });
        // console.log(profile)
        // if (!profile) {
        //     return res.status(404).json({ error: 'Profile not found' });
        // }
        const qna = await Qna.find({ username: usenam, ispublic: true })
        // console.log(qna)
        // if(qna.length===0)
        console.log("go", profile, qna);
        res.status(200).json({ profileData: profile, qnas: qna , userName: usenam});
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ error: 'An error occurred while fetching the profile' });
    }
};



const createProfile = async (req, res) => {
    if (!req.user) {
        // console.log(req.body)
        return res.status(401).json({ error: 'Authentication required' });

    }
    const { name, age, bio } = req.body;
    try {
        const user_id = req.user._id;
        const user = await User.findById(user_id);


        const profile = await Profile.create({
            name,
            age,
            bio,
            user_id,
            username: user.username, // Access username from userInfo
            email: user.email // Access email from userInfo
        });

        res.status(200).json(profile);
        console.log("yooy")
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const updateProfile = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    const user_id = req.user._id;
    const user = await User.findById(user_id);
    const { name, age, bio } = req.body;

    try {
        const profile = await Profile.findOneAndUpdate(
            { user_id },
            { name, age, bio, user_id, username: user.username },
            { new: true, runValidators: true }
        );

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        console.log(profile);
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




module.exports = {
    updateProfile,
    getProfile,
    createProfile,
    getOtherProfile
}
const LocationModel = require('../models/location');

exports.findBus = async (req, res) => {
    try {
        const blogs = await LocationModel.find();
        const findArray = [];

        blogs.map((item) => {
            if (item.busnumber === req.params.id) {
                findArray.push(item)
            }
        });

        res.json(findArray)

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateLocation = async (req, res) => {
    try {

        const blogs = await LocationModel.find();
        const findArray = [];

        blogs.map((item) => {
            if (item.busnumber === req.params.id) {
                findArray.push(item)
            }
        });
        const dbId = findArray[0]._id;

        const updatedPost = await LocationModel.findByIdAndUpdate(
            dbId,
            {
                lat: req.body.lat,
                lng: req.body.lng,
                lastupdate: req.body.lastupdate
            },
            { new: true }
        );
        res.json(updatedPost);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
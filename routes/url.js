// Used to post a url and create a shortened url
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

// Url --> mongoose UrlSchema
const Url = require('../models/Url');



// @route   POST /api/url/shorten
// @desc    Create short URL


router.post('/shorten', async (req, res) => {
    const {
        longUrl
    } = req.body;
    const baseUrl = config.get('baseUrl');

    // Checks if config baseurl is a legit url  --> suspect
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json({
            success: false,
            msg: 'Invalid Base Url'
        });
    }

    // Create url code
    // Generates a random shortId
    const urlCode = shortId.generate();

    // Check if long url is valid
    if (validUrl.isUri(longUrl)) {
        try {
            // Check database for long url
            let url = await Url.findOne({
                longUrl: longUrl
            });
            // if there is already a valid short url for the long url
            // we return the url object
            if (url) {
                res.json(url);
            } else {
                // We create the short url
                const shortUrl = baseUrl + '/' + urlCode;

                // create new url object
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode
                });

                // Stores in database
                await url.save();

                // Sends url to client
                res.json(url);

            }

        } catch (error) {
            console.log(`routes/url.js error: ${error}`);
            res.status(500).json({
                success: false,
                msg: error
            })

        }
    } else {
        res.status(401).json({
            success: false,
            msg: 'Invalid Url was given'
        })
    }
});








module.exports = router;
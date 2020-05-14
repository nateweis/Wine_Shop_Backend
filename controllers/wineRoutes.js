const express = require('express');
const multer = require('multer');
const Wine = require('../models/wine');

const storage = multer.diskStorage({
    destination: function(req, file, cb){cb(null, `./public/wine_imgs/New Wines/uploads/`)},
    filename: function(req, file, cb){cb(null, `${Date.now()}-${file.originalname}`)}
})

const router = express.Router();
const upload = multer({storage: storage});

router.get('/', Wine.getWineList);
router.post('/', upload.single('newImg') ,Wine.addWine);


module.exports = router
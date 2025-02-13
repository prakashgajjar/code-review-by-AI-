const express = require('express');
const multer = require('multer');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body)
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        res.json({ message: 'File uploaded successfully', filePath: `/public/images/${req.file.filename}` });
    } catch (error) {
        res.status(500).json({ error: 'File upload failed' });
    }
});

module.exports = router;

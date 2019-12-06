const router = require("express").Router();
const projectModel = require('../helpers/projectModel');
const middleware = require("../middleware")


router.get('/', (req, res) => {
    projectModel
        .get()
        .then(project => {res.status(200).json(project)})
        .catch(error => {res.status(500).json({Error_Message})})
})



module.exports = router; 
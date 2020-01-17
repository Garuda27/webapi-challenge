const router = require("express").Router();
const projectModel = require('../helpers/projectModel');
const { validateProject, validateProjectID } = require("../middleware")


router.get('/', (req, res) => {
    projectModel
        .get()
        .then(project => {res.status(200).json(project)})
        .catch(error => {res.status(500).json({Error_Message})})
})

router.get('/:id', validateProjectID, (req, res) => {
    res.status(200).json(req.project)
})


router.post('/', (req, res) => {
    projectModel
        .insert(req.body)
        .then(newProject => {res.send(201).json(newProject)})
        .catch(error => {res.send(500).json({message: "The project could not be found"})})
})

router.put('/:id', validateProject, (req, res) => {
    projectModel
        .update(req.params.id, req.body)
        .then(update => {
            if(update){
                res.status(200).json(update)
            } else {
                res.status(404).json({message: "The project could not be found"})
            }
        })
        .catch(error => {
            res.status(500).json(Error_Message)
        })
})


module.exports = router; 
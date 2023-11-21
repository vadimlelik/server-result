const {Router} = require('express')
const {loginUser, addUser} = require("../users.controller");
const {addNote, getNotes} = require("../notes.controller");
const auth = require('../middlewares/auth')


const router = new Router()

router.post('/', async (req, res) => {
    try {
        const note = await addNote(req.body.title, req.body.owner)
        res.send(note)
    } catch (e) {

    }
})
router.get('/', auth, async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})
// // get postById
// router.get('/:id', getById)

// get postById
// router.delete('/:id', checkAuth, removePost)
// router.put('/:id', checkAuth, updatePost)




module.exports = router
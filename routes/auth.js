const {Router} = require('express')
const {loginUser, addUser} = require("../users.controller");


const router = new Router()

router.post('/login', async (req, res) => {
    try {
        const {token, user} = await loginUser(req.body.email, req.body.password);

        res.cookie('token', token,)
            .send({accessToken: token, user});
    } catch (e) {
        res.send({error: e.message || "Unknown error"})
    }
})
router.post('/register', async (req, res) => {
        try {

            const {user, token} = await addUser(req.body.email, req.body.password);
            res.cookie('token', token).send({accessToken: token, user})

        } catch (e) {
            if (e.code === 11000) {
                return res.json({message: 'requested failed '})
            }
        }
    }
)
router.get('/logout', (req, res) => {
    res.cookie('token', '', {httpOnly: true})
})


module.exports = router
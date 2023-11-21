const User = require('./models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./constants');

async function addUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10)
    await User.create({ email, password: passwordHash });
}

async function loginUser(email, password) {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('User is not found')
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        throw new Error('Wrong password')
    }
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '30d' });

    return {
        token,
        user
    }
}

module.exports = { addUser, loginUser }
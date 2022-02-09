// check username . password in post(login) request
// if exists create a new JWT
// send back to frontend
// setup authentication so only the request with JWT can access the dashboard.

const jwt = require("jsonwebtoken")
const { BadRequest } = require("../errors")

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequest('Please provide username and passwords')
    } else {
        //To generate a  demo id usually created by DB:
        const id = new Date().getDate()

        //try to keep payload small , better experience for user
        //Secret key should be long unguessable string .
        const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

        return res.status(200).json({ 'msg': "user created", token })
    }
}

const dashboard = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `Here is your authorized data , your lucky number is ${luckyNumber}` })

}

module.exports = { login, dashboard }


const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const User = require('./User')

const app = express();
app.use(express.json());
app.use(cors());



// mongoose.connect('mongodb://127.0.0.1:27017/myDB')
mongoose.connect('mongodb+srv://ofins:Password@nodeexpressproject.o28jccr.mongodb.net/?retryWrites=true&w=majority')


app.post('/teams', (req, res) => {
    async function run() {
        try {
            console.log(req.body)
            const user = await User.create({
                teamName: req.body.teamName,
                // players:[
                    //     {name:'Kobe Bryant', number: 24},
                    //     {name:'Lebron James', number: 6}
                    // ]
                })
            return res.json(user)
        } catch (error) {
            console.log(error.message)
        }
    }
    run();
})

app.put('/teams/:id', (req, res) => {
    const teamId = req.params.id
    console.log(req.body)
    updateTeam();
    async function updateTeam() {
        console.log('run updateTeam')
        try {
            const user = await User.findOne({_id:teamId}).updateOne({teamName: req.body.teamName})
            return res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
})

app.delete('/teams/:id', (req, res) => {
    const teamId = req.params.id
    deleteTeam();
    async function deleteTeam() {
        try {
            const user = await User.findOne({_id: teamId}).deleteOne()
            return res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
})

app.get('/', (req, res) => {
    res.json('this is backend!')
})

app.get('/teams', (req, res) => {
    async function find(){
        try {
            const user = await User.find()
            res.json(user)
        } catch (error) {
            console.log(error.message)
        }
    }
    find();
})

app.listen(5000, () => {
    console.log('running on port 5000...')
})
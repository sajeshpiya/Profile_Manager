const express = require('express');
const app = express();




const Profile = require('./database/models/profile');
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTION, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

app.get('/profiles', (req, res) => {
    Profile.find({})
       .then(profiles => res.send(profiles))
       .catch((error) => console.log(error));
});

app.post('/profiles', (req, res) => {
    (new Profile({
        'full_name': req.body.full_name,
        'mobile_no': req.body.mobile_no,
        'email': req.body.email,
        'about': req.body.about
    }))
       .save()
       .then(profiles => res.send(profiles))
       .catch((error) => console.log(error));
});

app.patch('/profiles/:profileId', (req, res) => {
    Profile.findOneAndUpdate({ '_id': req.params.profileId}, {$set: req.body})
       .then(profiles => res.send(profiles))
       .catch((error) => console.log(error));
});

app.delete('/profiles/:profileId', (req, res) => {
   Profile.findOneAndDelete(req.params.profileId)
   .then(profiles => res.send(profiles))
   .catch((error) => console.log(error));
});



app.listen(3000, () => console.log("Server is Connected on port 3000"));
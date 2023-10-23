/// http request (frontend, fetch(http:3001)) -> server.js
/// -> app.js (figures out where to route) 
/// -> controller (handling the logic for the response)
const app = require('./app');
const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send("Welcome to Budgter");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})



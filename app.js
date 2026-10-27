//import
import express from 'express';

//app
const app = express();

//define port
const PORT = 3005;

//enable static file serving
app.use(express.static('.'));

//define a default
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/index.html`);
})

//start on designated port
app.listen(PORT, () => {
    console.log(`Server is running at http:localhost:${PORT}`);
});

//add a route to displays a thanks page
app.get('/thanks', (req, res) => {
    //send this file
    res.sendFile(`${import.meta.dirname}/views/thanks.html`);
})
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
const express = require('express'); 
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
     res.sendFile('index.html', {root: __dirname + '/public/'});
});

app.listen(process.env.PORT || 5000)
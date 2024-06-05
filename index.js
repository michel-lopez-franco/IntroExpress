const express = require('express')
const path = require('path');

const app = express()
const port = 3001

// Read CSS as a static file
// from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


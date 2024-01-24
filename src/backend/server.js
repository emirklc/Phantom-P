const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const port = 3001;

// CORS middleware'ini kullan
app.use(cors());

app.use(express.json());

app.post('/runSubfinder', (req, res) => {
    const { domain, parameters } = req.body;
    
    const commandParameters = parameters.params[0];
    const command = `subfinder ${commandParameters} ${domain}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Error during command execution' });
        }

        // stdout'u satırlara böl ve dizi olarak gönder
        const outputArray = stdout.split('\n').filter(line => line.trim() !== '');
        res.json({ output: outputArray });
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


//source

// const express = require('express');
// const { exec } = require('child_process');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// // CORS middleware'ini kullan
// app.use(cors());

// app.use(express.json());

// app.post('/runSubfinder', (req, res) => {
//     console.log(req.body); // Bu satır gelen request body'yi loglar

//     const domain = req.body.domain;
//     exec(`subfinder -d ${domain}`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return res.status(500).send('Error during command execution');
//         }
//         res.send(stdout);
//     });
// });



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

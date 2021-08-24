const express = require('express');
const path = require('path');
const app = express();

/* Listen para usar express de forma Local
app.listen(3000, () => {
    console.log('Server levantado y escuchando en el port 3000;');
});
*/

//Listen para user app con Heroku
app.listen(process.env.PORT || 3000, () => {
    console.log("Server levantado y escuchando en el port 3000");
});

//Va a servir los archivos publicos desde /img (esta es su raíz)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/registrarse', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
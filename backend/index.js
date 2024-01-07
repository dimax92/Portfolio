const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000; // Définissez le port d'écoute

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});




const connection = mysql.createConnection({
  host: `${process.env.DB_HOST}`, // adresse du serveur MySQL
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_DATABASE}`
});

// Établir la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// mise en place du storage pour kes fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads') // Répertoire où les fichiers seront enregistrés
  },
  filename: function (req, file, cb) {
    // Générer un nom de fichier unique en concaténant le nom d'origine avec un timestamp
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialiser l'upload avec les options de stockage définies ci-dessus
const upload = multer({ storage: storage });


// Définition des routes
app.post('/', upload.single('file'), (req, res) => {
  let nom = req.body.nom;
  let mail = req.body.mail;
  let description = req.body.description;
  let fileName = '';
  if(req.file){
    fileName = req.file.filename;
  }else{
    console.log('pas de fichier')
  }
  const sqlQuery = "INSERT INTO devis (nom, email, description, fichier) VALUES (?, ?, ?, ?)";
  connection.query(sqlQuery, [nom, mail, description, fileName], (error, results, fields)=>{
    if(error){
      res.status(500).json({error: 'la requete n\'a pas abouti'})
    }
    res.status(201).json({ message: 'requete envoye'});
  })
  // console.log(`${nom} ${mail} ${description} ${fileName}`)
});

// Démarrez le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

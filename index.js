const express = require('express');
const app = express();
const PORT = 3000;

// Route simple
app.get('/', (req, res) => {
  res.send('Mon app Express fonctionne !');
});

// Route de "health check"
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

const appPath = path.join(__dirname, 'dist', 'frondend-angular'); 

app.use(express.static(appPath));
app.get('/*', (req, res) => {
  res.sendFile(path.join(appPath, 'index.html'));
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
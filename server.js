const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8000;

app.use('/dist', express.static(path.join(path.dirname(__dirname), 'wolf-dashboard/dist')));
app.use('/static', express.static(path.join(path.dirname(__dirname), 'wolf-dashboard/dist/static')));

app.get('*', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'wolf-dashboard/dist/index.html'));
});

app.listen(port, () => {
  console.log(`App available on port ${port}`);
});

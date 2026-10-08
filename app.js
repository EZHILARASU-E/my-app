const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello CI/CDPipeline'));

// Only start the server when run directly (so tests can import the app)
if (require.main === module) {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = app;

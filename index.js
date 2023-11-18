const mongoose = require('mongoose');
const config = require('./utils/config');
const app = require('./server');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch((err) => console.error('Error connecting to MongoDB', err));

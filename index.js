// Entry Point Code
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');
const app = require('./server');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info('Connected to MongoDB');
        app.listen(config.PORT, () => {
            logger.info(`Server is running on port ${config.PORT}`);
        });
    })
    .catch((err) => logger.error('Error connecting to MongoDB', err));

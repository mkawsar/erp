import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || '';
const MONGO_DB_URL = process.env.MONGO_DB_URL || '';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';
const MONGO_DB_PORT = process.env.MONGO_DB_PORT || '';
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const MONGO_URL = `mongodb://${MONGO_DB_URL}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;

//CREATE CONFIG OBJECT
const config = {
    mongo: {
        url: MONGO_DB_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};

//CHECK FOR ENVIRONMENT
if (NODE_ENV === 'production') {
    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
} else if (NODE_ENV === 'local') {
    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
}

//EXPORT
export default config;

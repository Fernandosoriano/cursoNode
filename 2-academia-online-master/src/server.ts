// console.log('Hola a la academia onlinedddd');
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema';
import expressPlayGround from 'graphql-playground-middleware-express';

const app = express();
//configuración de cors y compression:
app.use('*', cors());
app.use(compression());

const servidor = new ApolloServer ({
    schema,
    introspection: true
});

servidor.applyMiddleware({app});
app.get('/', expressPlayGround ({
    endpoint: '/graphql'
}));
// inicio del servidor http
const httpServer = createServer(app);

const PORT = 5200;

httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
);
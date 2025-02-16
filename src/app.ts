import Fastify from 'fastify';

export const app = Fastify();

app.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

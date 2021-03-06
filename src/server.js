const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { msg: 'Hello World from Fastify' };
});

const start = async () => {
  try {
    await fastify.listen(process.env.SERVER_PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

const findAll = {
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          name: { type: 'string' }
        }
      }
    }
  }
};

const findOne = {
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      }
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    }
  },
  params: {
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
  }
};

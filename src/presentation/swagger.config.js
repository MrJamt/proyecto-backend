const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation for the API',
  },
  tags: [
    {
      name: 'Users',
      description: 'Operations about users',
    },
    {
      name: 'Cupons',
      description: 'Operations about roles',
    },
  ],
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@example.com'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      UserInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@exmaple.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      Cupon: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          code: {
            type: 'string',
            example: 'DESCUENTO20'
          },
          discount: {
            type: 'number',
            example: 20
          },
          fromDate: {
            type: 'string',
            format: 'date-time',
            example: '2025-01-01T00:00:00.000Z'
          },
          toDate: {
            type: 'string',
            format: 'date-time',
            example: '2025-12-31T23:59:59.000Z'
          }
        }
      },
      CuponInput: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
            example: 'DESCUENTO20'
          },
          discount: {
            type: 'number',
            example: 20
          },
          fromDate: {
            type: 'string',
            format: 'date-time',
            example: '2025-01-01T00:00:00.000Z'
          },
          toDate: {
            type: 'string',
            format: 'date-time',
            example: '2025-12-31T23:59:59.000Z'
          }
        }
      }
    }
  },
  security: [{
    bearerAuth: []
  }]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/presentation/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

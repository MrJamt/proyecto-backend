const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "Documentation for the API",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
      description: "Development server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "60c72b2f9b1e8a001f8e4caa",
          },
          name: {
            type: "string",
            example: "John Doe",
          },
          email: {
            type: "string",
            example: "jhon.doe@example.com",
          },
          roles: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["user"],
          },
        },
      },
      UserInput: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "John Doe",
          },
          email: {
            type: "string",
            example: "jhon.doe@exmaple.com",
          },
          password: {
            type: "string",
            example: "password123",
          },
          roles: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["user"],
          },
        },
      },
      Role: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "60c72b2f9b1e8a001f8e4cab",
          },
          name: {
            type: "string",
            example: "admin",
          },
        },
      },
      RoleInput: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            example: "user",
            description: "Name of the role (e.g., admin, user)",
          },
        },
      },
      Product: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "60c72b2f9b1e8a001f8e4cac",
          },
          name: {
            type: "string",
            example: "Laptop Dell XPS 15",
          },
          description: {
            type: "string",
            example: "High-performance laptop with 16GB RAM and 512GB SSD",
          },
          price: {
            type: "number",
            example: 1299.99,
          },
          stock: {
            type: "number",
            example: 25,
          },
          category: {
            type: "string",
            example: "Electronics",
          },
          imageUrl: {
            type: "string",
            example: "https://example.com/images/laptop-dell-xps15.jpg",
          },
        },
      },
      ProductInput: {
        type: "object",
        required: ["name", "price", "stock"],
        properties: {
          name: {
            type: "string",
            example: "Laptop Dell XPS 15",
            description: "Product name",
          },
          description: {
            type: "string",
            example: "High-performance laptop with 16GB RAM and 512GB SSD",
            description: "Detailed product description",
          },
          price: {
            type: "number",
            example: 1299.99,
            description: "Product price in USD",
          },
          stock: {
            type: "number",
            example: 25,
            description: "Available quantity in stock",
          },
          category: {
            type: "string",
            example: "Electronics",
            description: "Product category",
          },
          imageUrl: {
            type: "string",
            example: "https://example.com/images/laptop-dell-xps15.jpg",
            description: "URL of the product image",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./src/presentation/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

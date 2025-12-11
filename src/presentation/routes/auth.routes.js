const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const asyncHandler = require('../utils/async.handler');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate user and get JWT token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login successful. Returns JWT token and user information.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Bad request - Email and password are required
 *       401:
 *         description: Unauthorized - Invalid credentials
 */
router.post("/login", asyncHandler(authController.login));

module.exports = router;

# Node.js CRUD API with Authentication

A robust Node.js REST API built with Express.js and MongoDB featuring user authentication, authorization, and complete CRUD operations.

## Features

- **User Authentication**: Secure JWT-based authentication
- **User Registration**: Create new user accounts with automatic password hashing
- **Role-Based Authorization**: Admin and regular user roles with different access permissions
- **User Management**: Complete CRUD operations for user records (admin only)
- **Error Handling**: Comprehensive error handling middleware
- **MongoDB Integration**: Mongoose schemas and models with proper validation
- **Security**: Password encryption, JWT token validation

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt.js** - Password hashing
- **dotenv** - Environment variable management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nodejs-crud-auth-api.git
   cd nodejs-crud-auth-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/crud_api
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Start the server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Project Structure

```
├── app.js                  # Main server configuration
├── middleware/
│   ├── authMiddleware.js   # Authentication middleware
│   └── errorMiddleware.js  # Error handling middleware
├── controllers/
│   ├── authController.js   # Auth controller (register, login)
│   └── userController.js   # User CRUD operations
├── models/
│   └── userModel.js        # User data model
└── routes/
    ├── authRoutes.js       # Authentication routes
    └── userRoutes.js       # User CRUD routes
```

## API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login user & get token | Public |
| GET | `/api/auth/profile` | Get user profile | Private |

### User Management Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/users` | Get all users | Admin |
| GET | `/api/users/:id` | Get user by ID | Admin |
| PUT | `/api/users/:id` | Update user | Admin |
| DELETE | `/api/users/:id` | Delete user | Admin |

##API Usage Examples

### Register a new user

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get user profile (requires authentication)

```http
GET /api/auth/profile
Authorization: Bearer <your_token_here>
```

### Get all users (admin only)

```http
GET /api/users
Authorization: Bearer <admin_token_here>
```

##Authentication

The API uses JWT (JSON Web Tokens) for authentication. When you register or login, the API returns a token that should be included in the Authorization header for protected routes:

```
Authorization: Bearer <your_token_here>
```

##Database Setup

### Local MongoDB Setup

1. Install MongoDB Community Edition
2. Start MongoDB service
3. The application will automatically create the database and collections

### MongoDB Atlas (Cloud)

1. Create a MongoDB Atlas account
2. Set up a cluster
3. Create a database user
4. Add your IP to the access list
5. Update the connection string in your `.env` file

## Error Handling

The API provides detailed error responses:

```json
{
  "message": "Error message",
  "stack": "Error stack trace (only in development mode)"
}
```

##License

This project is licensed under the MIT License - see the LICENSE file for details.

##Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

#Contact

jbill08 - [jakaitbill@gmail.com](mailto:jakaitbill@gmail.com)

Project Link: [https://github.com/jbill08/nodejs-crud-auth-api](https://github.com/jbill08/nodejs-crud-auth-api)

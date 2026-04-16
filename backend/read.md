# User Creation - Routes & Process

## 📍 Route

**POST /register** - Register new user and get JWT token

**Validation:**

- Email: valid format
- firstName: 3+ characters
- password: 6+ characters

---

## 🔄 Process Flow

```
Request → Route Validation → Controller → Service → Model
   ↓          ↓                ↓          ↓          ↓
/register  Check fields   Hash password  Create user  Save DB
            Email/Password  Generate JWT  Return user  Return token
```

---

## 📤 Request & Response

**Request:**

```json
{
  "fullName": { "firstName": "John", "lastName": "Doe" },
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**

```json
{
  "token": "jwt_token_here",
  "user": { "_id": "...", "firstName": "John", "email": "john@example.com" }
}
```

**Error (400):**

```json
{ "errors": [{ "msg": "Invalid Email" }] }
```

---

## 📁 Files

- `user.routes.js` - Route & validation
- `user.controller.js` - Handle request
- `user.service.js` - Create user logic
- `userModels.js` - Schema & password hashing

---

## 🔐 Security

- Password: Hashed with bcrypt (10 rounds)
- Token: JWT signed with JWT_SECRET
- Email: Unique in database

---

## 📋 Fields

| Field     | Required | Rules         |
| --------- | -------- | ------------- |
| firstName | Yes      | 3+ chars      |
| lastName  | No       | 3+ chars      |
| email     | Yes      | Valid, unique |
| password  | Yes      | 6+ chars      |

---

## 💡 Simple Flow

1. User registers with email & password
2. Validate input
3. Hash password for security
4. Save to database
5. Generate JWT token
6. Return token & user

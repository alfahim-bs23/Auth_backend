## Auth Backend.
### Features:
1. Test Route
* Route: http://localhost:5000/
* Response: 
```json
{
	"msg": "Server Running!"
}
```
2. Authentication
- [x] User registration endpoint
    * Route: http://localhost:5000/auth/register
    * Body:
    ```json
    {
        "username":"admin",
        "email":"admin@test.com",
        "password":"1234567"
    }
    ```
    * Response:
    ```json
    {
        "message": "User registered successfully."
    }
    ```
- [x] User login endpoint (JWT-based)
    * Route: http://localhost:5000/auth/login
    * Body:
    ```json
        {
            "email":"admin@test.com",
            "password":"1234567"
        }
    ```
    * Response:
    ```json
        {
            "access_token": "xyz"
        }
    ```

- [x] Passwords should be securely hashed (e.g., bcrypt)

2. Role-Based Access Control

- [x] Define roles: admin, user
- [x] Assign roles during registration or via seed/admin logic

3. Protected Routes
- [x] /admin/data — accessible only to admin
  * This will return all user list
  * Route: http://localhost:5000/admin/data
  * Headers: Bearer token xyz
  * Response:
  ```json
    [
        {
            "id": "95eaa39d-5f92-480c-8990-0b48b5f99bae",
            "username": "admin",
            "email": "admin@test.com",
            "role": "admin"
        },
        {
            "id": "fef13c25-a438-4f56-9ffe-7e20767ce9a9",
            "username": "test",
            "email": "test@test.com",
            "role": "user"
        }
    ]
    ```
- [x] /admin/user-details/:id - accessible only to admin
    * This will return specific user details
    * Route:

- [ ] /user/profile — accessible only to user role

4. Auth Guard
- [x] Use custom Auth Guard to restrict route access based on user role

5. Database
- [x] Use SQLite (or any relational DB)
- [x] Integrate with TypeORM
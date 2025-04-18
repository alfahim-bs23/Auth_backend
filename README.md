## Auth Backend.
### Features:
1. Authentication
- [X]User registration endpoint
- [X]User login endpoint (JWT-based)
- [X]Passwords should be securely hashed (e.g., bcrypt)

2. Role-Based Access Control
- [X]Define roles: admin, user
- [X]Assign roles during registration or via seed/admin logic

3. Protected Routes
- [ ]/admin/data — accessible only to admin
- [ ]/user/profile — accessible only to user role

4. Auth Guard
- [ ]Use custom Auth Guard to restrict route access based on user role

5. Database
- [ ]Use SQLite (or any relational DB)
- [ ]Integrate with TypeORM
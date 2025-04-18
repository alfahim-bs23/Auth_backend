## Auth Backend.
### Features:
1. Authentication
- [x]User registration endpoint
- [x]User login endpoint (JWT-based)
- [x]Passwords should be securely hashed (e.g., bcrypt)

2. Role-Based Access Control
- [x]Define roles: admin, user
- [x]Assign roles during registration or via seed/admin logic

3. Protected Routes
- [ ]/admin/data — accessible only to admin
- [ ]/user/profile — accessible only to user role

4. Auth Guard
- [ ]Use custom Auth Guard to restrict route access based on user role

5. Database
- [ ]Use SQLite (or any relational DB)
- [ ]Integrate with TypeORM
# Employee Hierarchy Manager - User Guide

## Accessing the System

Open the application in your browser (e.g., http://localhost:5173 or deployed URL).

## Features

### Employee Table

- View a list of all employees.
- Sort and filter by ID, name, role, or manager.
- Click on an employee to edit or delete their record.

### Employee Form

- Add a new employee by filling in all required fields:
  - First Name
  - Last Name
  - Birth Date
  - Employee Number
  - Salary
  - Role/Position
  - Manager ID (optional)
  - Email (optional, used for Gravatar)
- Click "Add Employee" to submit.

### Organisation Chart

- View a visual hierarchy of all employees.
- Managers are shown above their direct reports.
- Tree expands/collapses automatically based on reporting lines.

### Gravatar Avatars

- Employee avatars are displayed in the table if an email is provided.
- The system uses Gravatar to fetch the profile image.

## Notes

- Employees cannot be their own manager.
- Employees without a manager (e.g., CEO) will appear at the top of the hierarchy.
- All data changes are persisted in the database; no hardcoded or local data is used.

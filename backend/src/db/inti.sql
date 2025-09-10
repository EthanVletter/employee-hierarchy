CREATE TABLE IF NOT EXISTS employees {
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    employee_number VARCHAR(50) UNIQUE NOT NULL,
    salary NUMBERIC(12,2) NOT NULL,
    role VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    manager_id INT REFERENCES employees(id) ON DELETE SET NULL
};
export interface Employee {
    employee_code: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    department: string;
    designation: string;
    is_active: boolean;
}
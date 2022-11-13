export interface Employee {
    id?: string;
    employee_code: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    salary?: string;
    date_of_joining?: string;
    date_of_exit?: string;
    date_created?: string;
    is_active: boolean;
    department: string;
    designation: string;
    branch?: string;
}
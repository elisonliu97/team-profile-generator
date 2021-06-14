const Employee = require ('../lib/Employee.js');


describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an Employee object with a name, id number, and email", () => {
            const employee = new Employee("Bob", 3, "bob@bob.com");

            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("bob@bob.com")
        })
    })

    describe('getName', () => {
        it("should get the employee's name", () => {
            const employee = new Employee("Bob", 3, "bob@bob.com");
            
            expect(employee.getName()).toEqual("Bob");
        })
    })

    describe('getId', () => {
        it("should get the employee's id", () => {
            const employee = new Employee("Bob", 3, "bob@bob.com");

            expect(employee.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("should get the employee's email", () => {
            const employee = new Employee("Bob", 3, "bob@bob.com");
            
            expect(employee.getEmail()).toEqual("bob@bob.com");
        })
    })
    
    describe('getRole', () => {
        it("should get the employee's role", () => {
            const employee = new Employee("Bob", 3, "bob@bob.com");

            expect(employee.getRole()).toEqual("Employee");
        })
    })
})
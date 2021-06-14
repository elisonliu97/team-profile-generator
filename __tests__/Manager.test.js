const Manager = require ('../lib/Manager.js');


describe('Manager', () => {
    describe('Initialization', () => {
        it("should create an manager object with a name, id number, email, and office number", () => {
            const manager = new Manager("Bob", 3, "bob@bob.com", 5);

            expect(manager.name).toEqual("Bob");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("bob@bob.com")
            expect(manager.officeNumber).toEqual(5)
        })
    })

    describe('getName', () => {
        it("should get the manager's name", () => {
            const manager = new Manager("Bob", 3, "bob@bob.com", 5);
            
            expect(manager.getName()).toEqual("Bob");
        })
    })

    describe('getId', () => {
        it("should get the manager's id", () => {
            const manager = new Manager("Bob", 3, "bob@bob.com", 5);

            expect(manager.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("should get the manager's email", () => {
            const manager = new Manager("Bob", 3, "bob@bob.com", 5);
            
            expect(manager.getEmail()).toEqual("bob@bob.com");
        })
    })
    
    describe('getRole', () => {
        it("should get the manager's role", () => {
            const manager = new Manager("Bob", 3, "bob@bob.com", 5);

            expect(manager.getRole()).toEqual("Manager");
        })
    })
})
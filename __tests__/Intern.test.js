const Intern = require ('../lib/Intern.js');


describe('Intern', () => {
    describe('Initialization', () => {
        it("should create an Intern object with a name, id number, email, and school", () => {
            const intern = new Intern("Bob", 3, "bob@bob.com", "UofT");

            expect(intern.name).toEqual("Bob");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("bob@bob.com")
            expect(intern.school).toEqual("UofT")
        })
    })

    describe('getName', () => {
        it("should get the intern's name", () => {
            const intern = new Intern("Bob", 3, "bob@bob.com", "UofT");
            
            expect(intern.getName()).toEqual("Bob");
        })
    })

    describe('getId', () => {
        it("should get the intern's id", () => {
            const intern = new Intern("Bob", 3, "bob@bob.com", "UofT");

            expect(intern.getID()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("should get the intern's email", () => {
            const intern = new Intern("Bob", 3, "bob@bob.com", "UofT");
            
            expect(intern.getEmail()).toEqual("bob@bob.com");
        })
    })

    describe('getSchool', () => {
        it("should get the intern's school", () => {
            const intern = new Intern("Bob", 3, "bob@bob.com", "UofT");

            expect(intern.getSchool()).toEqual("UofT")
        })
    })
    
    describe('getRole', () => {
        it("should get the intern's role", () => {
            const intern = new Intern("Bob", 3, "bob@bob.com", "UofT");

            expect(intern.getRole()).toEqual("Intern");
        })
    })
})
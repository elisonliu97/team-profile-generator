const Engineer = require ('../lib/Engineer.js');


describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an Engineer object with a name, id number, email, and github", () => {
            const engineer = new Engineer("Bob", 3, "bob@bob.com", "bobgit");

            expect(engineer.name).toEqual("Bob");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("bob@bob.com");
            expect(engineer.github).toEqual('bobgit');
        })
    })

    describe('getName', () => {
        it("should get the engineer's name", () => {
            const engineer = new Engineer("Bob", 3, "bob@bob.com", "bobgit");
            
            expect(engineer.getName()).toEqual("Bob");
        })
    })

    describe('getId', () => {
        it("should get the engineer's id", () => {
            const engineer = new Engineer("Bob", 3, "bob@bob.com", "bobgit");

            expect(engineer.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("should get the engineer's email", () => {
            const engineer = new Engineer("Bob", 3, "bob@bob.com", "bobgit");
            
            expect(engineer.getEmail()).toEqual("bob@bob.com");
        })
    })

    describe('getGithub', () => {
        it("should get the engineer's github", () => {
            const engineer = new Engineer("Bob", 3, "bob@bob.com", "bobgit");

            expect(engineer.getGithub()).toEqual('bobgit');
        })
    })
    
    describe('getRole', () => {
        it("should get the engineer's role", () => {
            const engineer = new Engineer("Bob", 3, "bob@bob.com", "bobgit");

            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})
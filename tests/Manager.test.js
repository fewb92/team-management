const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('Initialization', () => {
        it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
            const manager = new Manager();
            expect(manager instanceof Manager).toBe(true);
        });

        it('it sets the name property based on constructor argument', () => {
            const name = "Giselle";
            const manager = new Manager(name);

            expect (manager.name).toBe(name);
        });

        it('it sets the id property based on constructor argument', () => {
            const id = 1;
            const manager = new Manager("", id);
    
            expect (manager.id).toBe(id);
        });

        it('it sets the email property based on constructor argument', () => {
            const email = 'test@email.com';
            const manager = new Manager("", 0, email);
          
            expect(manager.email).toBe(email);
        });

        it('it sets the officeNumber property based on constructor argument', () => {
                const officeNumber = 8;
                const manager = new Manager("", 0, "", 8);
                  
                expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe('getName', () => {
        it('returns the name property when the getName() method is called', () => {
            const name = "Obi";
            const manager = new Manager(name);
      
            expect(manager.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('returns the id property when the getId() method is called', () => {
            const id = 1;
            const manager = new Manager("", id);
      
            expect(manager.getId()).toBe(id);
        });
    });
    
    describe('getEmail', () => {
        it('returns the email property when the getEmail() method is called', () => {
            const email = 'test@email.com';
            const manager = new Manager("", 0, email);
            
            expect(manager.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        it("returns 'Manager' when the getRole() method is called", () => {
            const manager = new Manager();
            
            expect(manager.getRole()).toBe('Manager');
        });
    });   
});
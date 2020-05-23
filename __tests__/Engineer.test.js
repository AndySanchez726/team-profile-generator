const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Bob Ross', '7410', 'bob@bob.com', 'bobrossgit')
    
    expect(engineer.name).toBe('Bob Ross');
    expect(engineer.id).toBe('7410');
    expect(engineer.email).toBe('bob@bob.com');
    expect(engineer.github).toBe('bobrossgit');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Bob Ross', '7410', 'bob@bob.com', 'bobrossgit')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('bobrossgit'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Bob Ross', '7410', 'bob@bob.com', 'bobrossgit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
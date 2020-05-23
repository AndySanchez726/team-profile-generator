const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('New Guy', '0000', 'new@guy.com', 'College');
    expect(intern.name).toBe('New Guy');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('new@guy.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('New Guy', '0000', 'new@guy.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('New Guy', '0000', 'new@guy.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
const Intern = require("../utils/Intern");

test("Can instantiate Intern class", () => {
    const i = new Intern();
    expect(typeof(i)).toBe("object");
})

test("Can use getRole method to get title of 'Intern' ", () => {
    const i = new Intern('Clark', 'Shelk', 'Scranton College');
    expect(i.getRole()).toBe('Intern');
});

test("Can use getSchool method to get school name", () => {
    const schoolName = 'Scranton College';
    const i = new Intern('Clark', 'Shelk', schoolName);
    expect(i.getSchool()).toBe(schoolName);
});

test("Intern school should contain the word 'college' or 'university'", () => {
    const i = new Intern('Plop', 'Miller', 'Lackawana College');
    const collegeCheck = i.school.includes("College") || i.school.includes("University");
    const uniCheck = i.school.includes("College") || i.school.includes("University");

    //assertions for each case
    expect(collegeCheck).toBeTruthy();
    expect(uniCheck).toBeTruthy();
});


test("Can get string of HTML for employee card with makeHTML()", () => {
    const i = new Intern("Ryan", "Howard", "Scranton University");

    expect(typeof i.makeHTML()).toBe('string');
});

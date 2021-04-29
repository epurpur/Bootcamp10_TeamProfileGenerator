const Intern = require("../utils/Intern");

test("Can instantiate Intern class", () => {
    const i = new Intern();
    expect(typeof(i)).toBe("object");
})

test("Intern title should be 'Intern' ", () => {
    const i = new Intern();
    expect(i.title).toBe('Intern');
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

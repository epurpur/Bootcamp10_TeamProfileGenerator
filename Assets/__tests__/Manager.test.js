const Manager = require("../utils/Manager");

test("Can instantiate Manager class", () => {
    const i = new Manager();
    expect(typeof(i)).toBe("object");
})

test("Can use getRole method to get title of 'Manager' ", () => {
    const i = new Manager('Michael', 'Scott');
    expect(i.getRole()).toBe('Manager');
});

test("Can use getOffice method to get office number", () => {
    const i = new Manager('Robert', 'California');
    expect(typeof i.getOffice()).toBe('number');
});

test("office number should be a number between 0-100", () => {
    const i = new Manager("Jan", "Levinson");
    expect(i.officeNumber).toBeGreaterThan(0);
    expect(i.officeNumber).toBeLessThan(11);
  });

test("Can get string of HTML for employee card with makeHTML()", () => {
    const i = new Manager("Charles", "Miner");

    expect(typeof i.makeHTML()).toBe('string');
});

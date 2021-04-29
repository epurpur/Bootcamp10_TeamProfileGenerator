const Employee = require("../utils/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can get employee name via getName() method", () => {
  const first = "Pam";
  const last = "Beasley";
  const e = new Employee(first, last);
  expect(e.getName()).toBe(`${first} ${last}`);
});


test("Can get employee id number with getID() method", () => {
  const e = new Employee("Phyllis", "Vance");
  expect(typeof e.id).toBe('number')
});

test("employee id should be a number between 0-100", () => {
  const e = new Employee("Angela", "Martin");
  expect(e.id).toBeGreaterThan(0);
  expect(e.id).toBeLessThan(101);
});


test("Can get email with getEmail method", () => {
  const first = "Stanley";
  const last = "Hudson";
  const e = new Employee(first, last);
  expect(e.email).toBe(`${first}${last}@dundermifflin.com`);
});


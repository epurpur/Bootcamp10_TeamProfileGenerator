const Employee = require("../utils/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set first and last name via constructor arguments", () => {
  const first = "Alice";
  const last = "inWonderLand"
  const e = new Employee(first, last);
  expect(e.first).toBe(first);
  expect(e.last).toBe(last);
});

test("employee id should be number", () => {
  const e = new Employee("Foo", "Bar");
  expect(typeof e.id).toBe('number')
});

test("employee id should be a number between 0-100", () => {
  const e = new Employee("Foo", "Bar");
  expect(e.id).toBeGreaterThan(0);
  expect(e.id).toBeLessThan(101);
});

test("Check if email should be combination of firstname + lastname + @Dundermifflin.com", () => {
  const first = "foo";
  const last = "bar";
  const e = new Employee(first, last);
  expect(e.email).toBe(`${first}${last}@dundermifflin.com`);
});

test("Can get employee name via getName() method", () => {
  const first = "Michael";
  const last = "Scott";
  const e = new Employee(first, last);
  expect(e.getName()).toBe(`${first} ${last}`);
});

const Salesperson = require("../utils/Salesperson");

test("Can instantiate Salesperson class", () => {
    const s = new Salesperson();
    expect(typeof(s)).toBe("object");
})

test(" Salesperson title should be 'Salesperson' ", () => {
    const github = 'schruteFarms';
    const s = new Salesperson("Dwight","Schrute",github);

    expect(s.title).toBe('Salesperson');
});

test("Github username should be 'github.com/githubUsername' ", () => {
    const github = 'schruteFarms';
    const s = new Salesperson("Dwight","Schrute",github);

    expect(s.github).toBe(`github.com/${github}`);
});

test("Can get string of HTML for employee card with makeHTML()", () => {
    const s = new Salesperson("Andy", "Bernard", "hereComesTreble");

    expect(typeof s.makeHTML()).toBe('string');
});
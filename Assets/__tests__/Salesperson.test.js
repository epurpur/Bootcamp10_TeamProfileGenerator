const Salesperson = require("../utils/Salesperson");

test("Can instantiate Salesperson class", () => {
    const s = new Salesperson();
    expect(typeof(s)).toBe("object");
})

test("Github username should be 'github.com/githubUsername' ", () => {
    const github = 'schruteFarms';
    const s = new Salesperson("Dwight","Schrute",github);

    expect(s.getGithub()).toBe(`github.com/${github}`);
});

test("Can get salesperson role of 'Salesperson' ", () => {
    const github = 'schruteFarms';
    const s = new Salesperson("Dwight","Schrute", github);

    expect(s.getRole()).toBe("Salesperson");
});

test("Can get string of HTML for employee card with makeHTML()", () => {
    const s = new Salesperson("Andy", "Bernard", "hereComesTreble");

    expect(typeof s.makeHTML()).toBe('string');
});
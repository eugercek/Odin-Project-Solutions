import capitalize from "../src/capitalize";

test("Capitalize", () => {
  expect(capitalize("foo")).toBe("Foo");
});

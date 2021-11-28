import reverseString from "../src/reverseString";

test("Reverse String", () => {
  expect(reverseString("Foo")).toBe("ooF");
});

test("Reverse String Empty Argument", () => {
  expect(reverseString()).toBe();
});

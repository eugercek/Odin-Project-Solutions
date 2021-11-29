import caesarCipher from "../src/caesarCipher";

test("Caesar cipher (nowrap)", () => {
  expect(caesarCipher("foo")).toBe("irr");
});

test("Caesar cipher (wrap)", () => {
  expect(caesarCipher("xyz")).toBe("abc");
});

test("Caesar cipher (Uppercase)", () => {
  expect(caesarCipher("FOO")).toBe("IRR");
});

test("Caesar cipher (Mix case)", () => {
  expect(caesarCipher("FOo")).toBe("IRr");
});

test("Caesar cipher (Incudes non-character)", () => {
  expect(caesarCipher("!!foo")).toBe("!!irr");
});

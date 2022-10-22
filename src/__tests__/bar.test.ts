import { bar } from "../bar.js";

it("does not kill jest when using a module", () => {
  expect(bar()).toBe("bar bar bar");
});

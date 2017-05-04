// @flow
declare var describe: (name: string, func: () => void) => void;
declare var it: (desc: string, func: () => void) => void;

import update, { initState } from "../sources";
import { foobar } from "../../test/fixtures";
const fakeSources = foobar.sources.sources;
import expect from "expect.js";

describe("sources reducer", () => {
  it("should work", () => {
    let state = initState();
    state = update(state, {
      type: "ADD_SOURCE",
      source: fakeSources.fooSourceActor
    });
    expect(state.sources.size).to.be(1);
  });
});

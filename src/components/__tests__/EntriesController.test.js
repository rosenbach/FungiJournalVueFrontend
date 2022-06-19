import { expect, test } from "vitest";
import * as entriesController from "../../../client/controllers/EntriesController.js";


test("name", () => {
    const a = entriesController.getEntries();
    expect(a).toBe("Dummy");
})
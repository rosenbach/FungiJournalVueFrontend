import { describe, expect, test } from "vitest";
import sut from "../../client/fungiJournalAPIClient";

// describe("fungiJournalAPIClient")
test("ifEntriesGetImported", async () => {
    const entries = await sut.getEntries();
    console.log(entries);
    expect(entries).toBeTypeOf("object");
})
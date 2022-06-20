import { describe, it, expect } from "vitest";
import sut from "../../services/EntryMapper";

describe('Entry Mapper', function () {
    // it('returns a javascript date object', function () {
    //     const date = "2022-03-28T15:29:35.5930602";
    //     const mappedDate = sut.mapDate(date);
    //     console.log(mappedDate);
    //     expect(mappedDate.getFullYear()).toBe(2022);
    // });

    it('creates a viewDate object', function () {
        const date = "2022-03-28T15:29:35.5930602";
        const viewDate = sut.createViewDate(date);
        console.log(viewDate);
        expect(viewDate).toBe("28.3");
    });
});
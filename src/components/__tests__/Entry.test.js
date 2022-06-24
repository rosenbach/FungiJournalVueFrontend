import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Entry from "../../components/Entry.vue";

describe('Entry Component', () => {

    it('should contain at least one button"', () => {
        render(Entry);
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBeGreaterThanOrEqual(1);
    });

    it('should contain an entry heading', () => {
        render(Entry);
        const allheadings = screen.getAllByRole('heading');
        expect(allheadings.some(heading => heading.textContent.includes("Entry"))).toBe(true);
    });
}
);
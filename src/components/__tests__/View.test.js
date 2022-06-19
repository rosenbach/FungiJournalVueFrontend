import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from "vitest";
import View from "../View.vue";

describe("View", () => {
    const viewText = "Hello from inside a View";

    it("render span correctly", async () => {
        //arrange
        const viewId = "viewId";
        render(View, {
            props: {
                element: "span",
                id: viewId
            },
            slots: {
                default: viewText
            }
        });

        //act
        const view = await screen.findByText(viewText);

        //assert
        expect(view.id).toBe(viewId);
        expect(view.innerHTML).toBe(viewText);
        expect(view.nodeName).toBe("SPAN");
    });

    it("test", () => {
        const a = 1;

        expect(a).toBe(1);
    });

    it("snap shot matches", () => {
        const wrapper = render(View, {
            props: { element: "div" }
        });
        expect(wrapper).toMatchSnapshot();
    })
});
import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
  it("renders props.links when passed", () => {
    const links = [{ id: 1, text: "something" }];
    const wrapper = shallowMount(Nav, {
      propsData: { links }
    });
    expect(wrapper.text()).toMatch(links[0].text);
  });
});

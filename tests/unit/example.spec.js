import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";
import App from "@/App.vue";

describe("Nav.vue", () => {
  it("renders props.links when passed", () => {
    const links = [{ id: 1, text: "something" }];
    const wrapper = shallowMount(Nav, {
      propsData: { links }
    });
    expect(wrapper.text()).toMatch(links[0].text);
  });

  it("it shows default title", () => {
    const title = "Code note";
    const wrapper = shallowMount(App, {
      propsData: {}
    });
    expect(wrapper.text()).toMatch(title);
  });
});

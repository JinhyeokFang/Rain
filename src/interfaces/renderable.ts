import Renderer from "./renderer";

export default interface Renderable {
    render(renderer: Renderer): void;
}

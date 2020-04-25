import htm from "htm";
import m from "mithril";

const html = htm.bind(m);

export class GenericButton implements m.ClassComponent {
  public view() {
    return html`
      <button>Click</button>
    `;
  }
}

import htm from "htm";
import m, { mount, ClassComponent} from "mithril";
import { GenericButton } from "./components/genericButton";

const html = htm.bind(m);

class RootElement implements ClassComponent {
  public view() {
    return html`
      <div class="container">
        <article>
          <header>
            <h1>Hello, Mithril!</h1>
          </header>
          <section>
            <${GenericButton} />
          </section>
        </article>
      </div>
    `
  }
}

mount(document.body, RootElement)

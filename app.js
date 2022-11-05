/**
 *
 * Custom Elements
 *
 */

class Card extends HTMLElement {
  constructor() {
    // inherit all HTMLElement properties
    super();
  }

  // called when element is first connected to DOM
  connectedCallback() {
    // confirm component is still mounted on the page
    if (this.isConnected) {
      this.initializeCard();
    }
  }

  initializeCard() {
    const titleText = this.getAttribute("data-card-title");
    const subTitleText = this.getAttribute("data-card-subtitle") ?? "";
    const bodyText = this.getAttribute("data-card-body");

    const title = document.createElement("h3");
    const subTitle = document.createElement("p");
    const body = document.createElement("div");

    title.textContent = titleText;
    title.classList.add("card-title");

    subTitle.textContent = subTitleText;
    subTitle.classList.add("card-subtitle");

    body.textContent = bodyText;
    body.classList.add("card-body");

    this.append(title, subTitle, body);
  }
}

window.customElements.define("wc-card", Card);

/**
 *
 * Shadow DOM
 *
 */

class Heading extends HTMLElement {
  constructor() {
    // inherit all HTMLElement properties
    super();
    this.attachShadow({ mode: "open" });
  }

  // called when element is first connected to DOM
  connectedCallback() {
    // confirm component is still mounted on the page
    if (this.isConnected) {
      this.initializeCard();
    }
  }

  initializeCard() {
    const headingText = this.getAttribute("data-text");
    const heading = document.createElement("h1");
    heading.textContent = headingText;

    this.shadowRoot.append(heading);
  }
}

window.customElements.define("wc-heading", Heading);

/**
 *
 * HTML Templates
 *
 */

class CardTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.isConnected) {
      this.initializeCardTemplate();
    }
  }

  initializeCardTemplate() {
    const content = document.getElementById("card-template").content;

    this.shadowRoot.appendChild(content.cloneNode(true));
  }
}

window.customElements.define("wc-card-template", CardTemplate);

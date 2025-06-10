export class AmazonLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `

      <link rel="stylesheet" href="styles/shared/amazon-header.css" />
     <div class="amazon-header-left-section">
        <a href="amazon.html" class="header-link">
          <img class="amazon-logo" src="images/amazon-logo-white.png" />
          <img
            class="amazon-mobile-logo"
            src="images/amazon-mobile-logo-white.png"
          />
        </a>
            <link rel="stylesheet" href="styles/shared/general.css" />
    <link rel="stylesheet" href="styles/shared/amazon-header.css" />
    <link rel="stylesheet" href="styles/pages/amazon.css" />

`;
  }
}

customElements.define("amazon-logo", AmazonLogo);

class Logo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.classList.add(
			"flex",
			"justify-center",
			"items-center",
		);

		const a = document.createElement("a");
		a.href = "/";
		a.classList.add(
			"flex",
			"items-center",
			"mx-auto",
		);

		const img = document.createElement("img");
		img.src = "/assets/logo.png";
		img.alt = "logo";
		img.classList.add(
			"transform",
			"-rotate-45",
			"flex-shrink-0",
		);

		a.appendChild(img);

		const textSpan = document.createElement("span");
		textSpan.textContent = "Text Text";
		textSpan.classList.add(
			"flex-shrink-0",
		);

		a.appendChild(textSpan);

		this.appendChild(a);
	}
}

customElements.define("logo-component", Logo);

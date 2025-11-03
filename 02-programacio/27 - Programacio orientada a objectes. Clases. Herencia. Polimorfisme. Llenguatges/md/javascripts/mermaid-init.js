if (window.mermaid) {
  window.mermaid.initialize({
    startOnLoad: true,
    securityLevel: "loose",
    theme:
      document.documentElement.classList.contains("theme-dark") ||
      document.body.classList.contains("md-scheme-dark")
        ? "dark"
        : "default",
  });
}

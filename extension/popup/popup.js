document.addEventListener("DOMContentLoaded", async () => {
  const text = await navigator.clipboard.readText();
  document.querySelector("#selected-text").innerText = text;
});

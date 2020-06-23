export default function scroll() {
  return window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

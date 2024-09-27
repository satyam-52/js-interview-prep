// Implement a function getElementsByStyle(property, value) that returns all elements in the DOM that match that style.
// E.g. getElementsByStyle("color", "#fff") will return all elements in the DOM with white text.

function getElementsByStyle(property, value) {
  const elements = Array.from(document.querySelectorAll("*"));

  return elements.filter((element) => {
    const computedStyles = window.getComputedStyle(element);
    return computedStyles[property] === value;
  });
}

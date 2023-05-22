export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userevent) => {
      setTimeout(() => {
        html.addEventListener(userevent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userevent) => {
        html.removeEventListener(userevent, handleOutsideClick);
      });
      callback();
    }
  }
}

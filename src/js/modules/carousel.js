export function runCarousel(event) {
    const imageHref = event.target.parentNode.getAttribute("href");
    const titleText = event.target.title;
    document.querySelector("figure img").setAttribute("src", imageHref);
    // document.querySelector("figure img").src = imageHref;
    document.querySelector("figcaption").innerHTML = titleText;
  }
  
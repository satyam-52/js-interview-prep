async function logger(href, label, path, link) {
  // log the invalid href and the path of the current page to the logging service.
  console.log({ href, label, path, link });
  // async fetch("https://reportlogger.com/post/mycompany", {method: "POST", body: {url, label, path}})
}

async function getInvalidURLs(html) {
  const parser = new DOMParser();

  const doc = parser.parseFromString(html, "text/html");

  let anchors = doc.getElementsByTagName("a");

  for (let link of anchors) {
    if (!URL.canParse(link.href)) {
      await logger(link.href, link.innerText, window.location.pathname, link);
    }
  }
}

let htmlString = `<div>
  <a href"><span><img src="https://example.com/example.png" alt="Label" />Label for image</span> Get it?</a>
  <a href="htp:xyz1">2</a>
  <a href="aac:://xyz2">3</a>
  <a href="invalid://xyz3">4</a>
</div>`;

getInvalidURLs(htmlString);

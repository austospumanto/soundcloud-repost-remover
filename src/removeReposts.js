/*global Math*/

export function removeReposts() {
  if (!document.querySelector("div.lazyLoadingList > div.loading")) {
    return;
  }

  if (document.querySelectorAll("li.soundList__item").length > 10) {
    const selector = "div[aria-label*=', reposted by ']";
    console.log("Removing all reposts on the page..");
    document.querySelectorAll(selector).forEach(element => {
      const soundListItem = element.parentElement.parentElement;
      soundListItem.parentElement.removeChild(soundListItem);
    });
  }
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 5
  ) {
    if (Math.random() < 0.1) {
      console.log("Scrolling to top..");
      window.scrollTo(0, 0);
    }
    // console.log("you're at the bottom of the page");
  } else {
    console.log("Scrolling to bottom..");
    window.scrollTo(0, document.body.scrollHeight);
  }
}

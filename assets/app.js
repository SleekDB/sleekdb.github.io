// Disable auto scroll on hash url
window.onunload = function () {
  window.scrollTo(0, 0);
};

var menulinks = document.getElementsByClassName("gotoblock");

window.onload = function () {
  var arr = document.getElementsByTagName("pre");
  for (let index = 0; index < arr.length; index++) {
    var element = arr[index];
    hljs.highlightBlock(element);
  }

  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].addEventListener("click", goToBlock);
  }

  document
    .getElementsByClassName("toggler")[0]
    .addEventListener("click", toggleSiderbarFromMenu);

  checkPage();
  toggleSidebar();

  if (navigator.userAgent.search("Firefox") > -1) {
    this.document.getElementById("firefox-issue").style.display = "";
  }
};

function goToBlock(event) {
  event.preventDefault();
  var id = event.target.href.split("#")[1];
  history.pushState(null, "", "/#/" + id);
  // change bg menu.
  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].classList.remove("visited");
  }
  event.target.classList.add("visited");

  var intros = document.getElementsByClassName("intro");
  for (let index = 0; index < intros.length; index++) {
    const element = intros[index];
    if (element.id === "block_" + id) {
      element.classList.remove("hide");
      document.title = element.querySelector("h3").innerText;
    } else {
      element.classList.add("hide");
    }
  }
  // rightTop()
}

function resetHome(event) {
  event.preventDefault();
  window.location.hash = "home";
  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].classList.remove("visited");
  }

  var intros = document.getElementsByClassName("intro");
  for (let index = 0; index < intros.length; index++) {
    const element = intros[index];
    element.classList.remove("hide");
  }
}

function rightTop() {
  setTimeout(() => {
    document.getElementsByClassName("right")[0].scrollTop = 0;
  }, 150);
}

function checkPage() {
  if (window.location.hash) {
    let id = window.location.hash.replace("#/", "");
    var intros = document.getElementsByClassName("intro");
    for (let index = 0; index < intros.length; index++) {
      const element = intros[index];
      if (element.id === "block_" + id) {
        element.classList.remove("hide");
        document.title = element.querySelector("h3").innerText;
      } else {
        element.classList.add("hide");
      }
    }
  }
}

window.onresize = function () {
  toggleSidebar();
};

var sidebarIsOpen = true;
function toggleSidebar() {
  if (window.innerWidth < 900) {
    if (sidebarIsOpen) {
      document.getElementsByClassName("left")[0].style.display = "none";
      sidebarIsOpen = false;
    }
  } else {
    if (!sidebarIsOpen) {
      document.getElementsByClassName("left")[0].style.display = "";
      sidebarIsOpen = true;
    }
  }
}
function toggleSiderbarFromMenu() {
  if (sidebarIsOpen) {
    document.getElementsByClassName("left")[0].style.display = "none";
  } else {
    document.getElementsByClassName("left")[0].style.display = "";
  }
  sidebarIsOpen = !sidebarIsOpen;
}

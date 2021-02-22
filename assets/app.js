// Disable auto scroll on hash url
window.onunload = function() {
  window.scrollTo(0, 0);
};

var menulinks = document.getElementsByClassName('gotoblock');

var rightElement = document.getElementById('layoutRight');
var headerElement = document.getElementsByClassName('header')[0];

var sidebarIsOpen = true;

function removeMenuHighlight() {
  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].classList.remove('visited');
  }
}

function addMenuHighlight(blockName) {
  var blockRegex = new RegExp('#/' + blockName + '$');
  for (let index = 0; index < menulinks.length; index++) {
    var menulink = menulinks[index];
    if (blockRegex.test(menulink)) {
      menulink.classList.add('visited');
    }
  }
}

window.onload = function() {
  var arr = document.getElementsByTagName('pre');
  for (let index = 0; index < arr.length; index++) {
    var element = arr[index];
    hljs.highlightBlock(element);
  }

  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].addEventListener('click', goToBlock);
  }

  document.getElementsByClassName('toggler')[0].addEventListener('click', toggleSiderbarFromMenu);

  checkPage();
  toggleSidebar();

  if (navigator.userAgent.search('Firefox') > -1) {
    this.document.getElementById('firefox-issue').style.display = '';
  }
};

function syncTitle(el) {
  const title = el.querySelector('h1').innerText;
  document.title = title || 'SleekDB';
}

function _goToBlock(blockName, sectionId = null) {
  removeMenuHighlight();
  addMenuHighlight(blockName);
  var intros = document.getElementsByClassName('intro');
  for (let index = 0; index < intros.length; index++) {
    const element = intros[index];
    if (element.id === 'block_' + blockName) {
      element.classList.remove('hide');
      syncTitle(element);
    } else {
      element.classList.add('hide');
    }
  }

  if (sidebarIsOpen && window.innerWidth < 900) {
    toggleSiderbarFromMenu();
  }

  if (sectionId !== null) {
    setTimeout(function() {
      scrollToSection(sectionId);
    }, 100);
  } else {
    rightElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goToBlock(event) {
  event.preventDefault();

  var target = event.target;

  if (target.hash === undefined) {
    target = event.target.parentNode;
  }
  var blockName = target.hash.replace('#/', '');

  var sectionId = null;

  if (blockName.includes('#')) {
    blockName = blockName.split('#');
    sectionId = blockName.join('-');
    blockName = blockName[0];
  }

  history.pushState(null, '', `${target.pathname}${target.hash}`);

  _goToBlock(blockName, sectionId);
}

function resetHome(event) {
  event.preventDefault();
  window.location.hash = 'home';
  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].classList.remove('visited');
  }

  var intros = document.getElementsByClassName('intro');
  for (let index = 0; index < intros.length; index++) {
    const element = intros[index];
    element.classList.remove('hide');
  }
}

function checkPage() {
  if (window.location.hash) {
    var sectionId = null;
    var blockName = window.location.hash.replace('#/', '');
    if (blockName.includes('#')) {
      blockName = blockName.split('#');
      sectionId = blockName.join('-');
      blockName = blockName[0];
    }

    _goToBlock(blockName, sectionId);
  }
}

function scrollToSection(sectionId) {
  var sectionElement = document.getElementById(sectionId);
  var navHeight = headerElement.clientHeight + 10;
  rightElement.scrollTo({ top: sectionElement.offsetTop - navHeight, behavior: 'smooth' });
}

window.onresize = function() {
  toggleSidebar();
};

function toggleSidebar() {
  if (window.innerWidth < 900) {
    if (sidebarIsOpen) {
      document.getElementsByClassName('left')[0].style.display = 'none';
      sidebarIsOpen = false;
    }
  } else {
    if (!sidebarIsOpen) {
      document.getElementsByClassName('left')[0].style.display = '';
      sidebarIsOpen = true;
    }
  }
}
function toggleSiderbarFromMenu() {
  if (sidebarIsOpen) {
    document.getElementsByClassName('left')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('left')[0].style.display = '';
  }
  sidebarIsOpen = !sidebarIsOpen;
}

window.addEventListener(
  'popstate',
  function(event) {
    // The popstate event is fired each time when the current history entry changes.
    var sectionId = null;
    var blockName = window.location.hash.replace('#/', '');
    if (blockName.includes('#')) {
      blockName = blockName.split('#');
      sectionId = blockName.join('-');
      blockName = blockName[0];
    }
    if (blockName === '') {
      blockName = 'home';
    }

    _goToBlock(blockName, sectionId);
  },
  false
);

window.onload = function () {
  var arr = document.getElementsByTagName('pre')
  for (let index = 0; index < arr.length; index++) {
    var element = arr[index];
    hljs.highlightBlock( element )
  }
  document.getElementById('doc_link').addEventListener('click', handleDocNav)
  var menulinks = this.document.getElementsByClassName('gotoblock')
  for (let index = 0; index < menulinks.length; index++) {
    menulinks[index].addEventListener('click', goToBlock)    
  }
}

var scrollpls = function( tagid ) {
  var element = document.getElementById( tagid )
  window.scroll( {
    left: 0,
    top: element.offsetTop
  } );
  element.classList += " flash-bg"
  setTimeout(function(){
    element.classList = element.classList.value.replace( "flash-bg", "" )
  }, 1000)
}

function goToBlock(event) {
  var id = event.target.href.split('#')[1]
  scrollpls(id)
  setTimeout(() => {
    window.scrollBy(0,-50)
  }, 50);
}

var docNavOpen = false
function handleDocNav(event) {
  event.preventDefault()
  // console.log(event)
  if ( docNavOpen ) {
    document.getElementById('docs_menu_container').classList = 'docs_menu animate_docs_menu_up'
    setTimeout(function(){
      document.getElementById('docs_menu_container').classList = 'docs_menu dn'
      document.body.removeEventListener('click', handleDocNav)
      docNavOpen = false
    }, 300)
  } else {
    setTimeout(function(){
      document.body.addEventListener('click', handleDocNav)
      docNavOpen = true
    }, 300)
    document.getElementById('docs_menu_container').classList = 'docs_menu animate_docs_menu'
  }
}

window.onscroll = function ( e ) {
  var windowWidth = document.body["scrollWidth"]
  if ( windowWidth > 800 ) {
    if ( document.documentElement.scrollTop > 0 ) {
      this.document.getElementById( 'header' ).classList.remove( 'undoActAnimationOnHeader' )
      if ( this.document.getElementById( 'header' ).classList[1] != 'actAnimationOnHeader' ) {
        this.document.getElementById( 'header' ).classList.add( 'actAnimationOnHeader' )
        this.document.getElementById( 'header' ).classList.add( 'actAnimationOnHeader' )
      }
    } else if ( document.documentElement.scrollTop == 0 ) {
      if ( this.document.getElementById( 'header' ).classList[1] == 'actAnimationOnHeader' ) {
        this.document.getElementById( 'header' ).classList.remove( 'actAnimationOnHeader' )
        this.document.getElementById( 'header' ).classList.add( 'undoActAnimationOnHeader' )
      }
    }
  }
}
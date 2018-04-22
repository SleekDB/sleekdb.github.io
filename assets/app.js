window.onload = function () {
  var arr = document.getElementsByTagName('pre')
  for (let index = 0; index < arr.length; index++) {
    var element = arr[index];
    hljs.highlightBlock( element )
  }
  document.getElementById('doc_link').addEventListener('click', handleDocNav)
}


var docNavOpen = false
function handleDocNav(event) {
  event.preventDefault()
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
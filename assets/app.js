window.onload = function () {
  var arr = document.getElementsByTagName('pre')
  for (let index = 0; index < arr.length; index++) {
    var element = arr[index];
    hljs.highlightBlock( element )
  }
}

window.onscroll = function ( e ) {
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
window.onload = function () {
  var arr = document.getElementsByTagName('pre')
  for (let index = 0; index < arr.length; index++) {
    var element = arr[index];
    hljs.highlightBlock( element )
  }
}
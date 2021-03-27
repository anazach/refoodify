var url = new URL(location.href)

var error = url.searchParams.get('err')
var errorDocument = document.getElementById('error')

if(error != undefined){
  errorDocument.innerText = error

  window.history.replaceState({}, document.title, location.pathname)
}
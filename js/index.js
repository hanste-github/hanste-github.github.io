function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
 
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// Funktion zum Speichern des Hintergrundbilds als Cookie
function saveBackgroundImage(imageUrl) {
  document.cookie = "backgroundImage=" + imageUrl + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// Funktion zum Laden des Hintergrundbilds aus dem Cookie
function loadBackgroundImage() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("backgroundImage=") === 0) {
      var imageUrl = cookie.substring("backgroundImage=".length, cookie.length);
      document.body.style.backgroundImage = "url('" + imageUrl + "')";
      break;
    }
  }
}

// Event-Listener für das Hochladen des Bildes
document.getElementById("imageUpload").addEventListener("change", function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var imageUrl = e.target.result;
    document.body.style.backgroundImage = "url('" + imageUrl + "')";
    saveBackgroundImage(imageUrl);
  };

  reader.readAsDataURL(file);
});

// Beim Laden der Seite das Hintergrundbild aus dem Cookie laden
loadBackgroundImage();
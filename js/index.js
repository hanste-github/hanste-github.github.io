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

// Hintergrundbild

document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var fileInput = document.getElementById('imageUpload');
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
      document.body.style.backgroundImage = "url(" + reader.result + ")";
  }

  if (file) {
      reader.readAsDataURL(file);
  }
});

document.getElementById('urlForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var imageUrl = document.getElementById('imageUrl').value;
  document.body.style.backgroundImage = "url(" + imageUrl + ")";
});
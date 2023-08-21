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


// CookieModal
var hsmodal = document.getElementById("hsModal");
var hscloseBtn = document.getElementsByClassName("hs-close")[0];
var hsacceptBtn = document.getElementById("hsacceptBtn");

hscloseBtn.onclick = function() {
  hsmodalhidden();
};

window.onclick = function(event) {
	if (event.target == hsmodal) {
    hsmodalhidden();
	}
};

window.onload = function() {
	hsmodal.style.display = "block";
};

if (localStorage.getItem("akzeptiert") === "true") {
  hsactivateScript();
  hsmodalhidden();
}

hsacceptBtn.onclick = function() {
  localStorage.setItem("akzeptiert", "true");
  hsactivateScript();
  hsmodalhidden();
}

function hsactivateScript() {

  // Hintergrundbild
  document.addEventListener('DOMContentLoaded', function() {
    var savedImageUrl = localStorage.getItem('backgroundImage');
    if (savedImageUrl) {
        document.body.style.backgroundImage = "url(" + savedImageUrl + ")";
    }
  });

  document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var fileInput = document.getElementById('imageUpload');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        document.body.style.backgroundImage = "url(" + reader.result + ")";
        localStorage.setItem('backgroundImage', reader.result);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
  });

  document.getElementById('urlForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var imageUrl = document.getElementById('imageUrl').value;
    document.body.style.backgroundImage = "url(" + imageUrl + ")";
    localStorage.setItem('backgroundImage', imageUrl);

  });

  function hsmodalhidden() {
    document.getElementById("hsModal").classList.add("hidden");
  };

};
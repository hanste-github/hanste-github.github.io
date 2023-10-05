// CookieModal
var hsmodal = document.getElementById("hsModal");
var hscloseBtn = document.getElementsByClassName("hs-close")[0];
var hsacceptBtn = document.getElementById("hsacceptBtn");

hscloseBtn.onclick = function() {
  hsmodal.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == hsmodal) {
    hsmodal.style.display = "none";
	}
};

window.onload = function() {
	hsmodal.style.display = "block";
  if (localStorage.getItem("akzeptiert") === "true") {
    hsmodal.style.display = "none";
  }
};

if (localStorage.getItem("akzeptiert") === "true") {
  hsactivateScript();
  hsmodal.style.display = "none";
}

hsacceptBtn.onclick = function() {
  localStorage.setItem("akzeptiert", "true");
  hsactivateScript();
  hsmodal.style.display = "none";
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
};

// Navbar
window.onscroll = function() {hsscrollFunction()};
function hsscrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById('hs-navbar').style.borderRadius = "0 0 0.375rem 0.375rem";
  } else {
    document.getElementById('hs-navbar').style.borderRadius = "0.375rem";
  };
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('hs-navbar').style.padding = "5px";
    document.getElementById('hs-navbar').style.height = "45px";
  } else {
    document.getElementById('hs-navbar').style.padding = "10px";
    document.getElementById('hs-navbar').style.height = "55px";
  };
};

// Navbar show links
function hsshow(hsshowId) {
  var hsshowElement = document.getElementById(hsshowId);
  hsshowElement.style.display = "block";
};
function hsclose(hscloseId) {
  var hscloseElement = document.getElementById(hscloseId);
  hscloseElement.style.display = "none";
};

// Search
document.getElementById("hs-search-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Überprüfen, ob die Eingabetaste gedrückt wurde
    event.preventDefault(); // Verhindern, dass das Formular gesendet wird
    hssearch(); // Funktion zum Durchführen der Suche aufrufen
  }
});
function hssearch() {
  document.getElementById('hs-search-content').style.display = "block";

  var input = document.getElementById('hs-search-input');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('hs-search-ul');
  var li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  };
  var hssearchhide = document.getElementsByClassName("hs-search-hide");
  hssearchhide.style.display = "none !important";
}
function hssearchclose2() {
  document.getElementById("hs-navbar-link-search-hover").style.display = "none";
  document.getElementById('hs-search-content').style.display = "none";
  var hssearchhide = document.getElementsByClassName("hs-search-hide");
  hssearchhide.style.display = "";
};
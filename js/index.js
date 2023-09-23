function myFunction() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName('li');
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

// Navbar
window.onscroll = function() {hsscrollFunction()};
function hsscrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById('hs-navbar').style.borderRadius = "0 0 0.375rem 0.375rem";
  } else {
    document.getElementById('hs-navbar').style.borderRadius = "0.375rem";
  }
};
function hsnavbarshowwiki() {
  document.getElementById('hs-navbar-link-wiki-hover').style.display = "block !important";
};
function hsnavbarshowstore() {
  document.getElementById('hs-navbar-link-store-hover').style.display = "block";
};
function hsnavbarshowos() {
  document.getElementById('hs-navbar-link-os-hover').style.display = "block !important";
};
function hsnavbarshowmedia() {
  document.getElementById('hs-navbar-link-media-hover').style.display = "block !important";
};
function hsnavbarshowblog() {
  document.getElementById('hs-navbar-link-blog-hover').style.display = "block !important";
};
function hsnavbarshowshop() {
  document.getElementById('hs-navbar-link-shop-hover').style.display = "block !important";
};

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
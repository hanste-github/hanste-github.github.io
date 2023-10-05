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
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 10) {
    document.getElementById('hs-navbar').style.padding = "5px";
    document.getElementById('hs-navbar').style.height = "45px";
  } else {
    document.getElementById('hs-navbar').style.padding = "15px";
    document.getElementById('hs-navbar').style.height = "65px";
  };
};

// Navbar show links
var navbarLinkWiki = document.getElementById("hs-navbar-link-wiki");
var navbarLinkStore = document.getElementById("hs-navbar-link-store");
var navbarLinkOS = document.getElementById("hs-navbar-link-os");
var navbarLinkMedia = document.getElementById("hs-navbar-link-media");
var navbarLinkBlog = document.getElementById("hs-navbar-link-blog");
var navbarLinkShop = document.getElementById("hs-navbar-link-shop");
var navbarLinkSearch = document.getElementById("hs-navbar-link-search");

navbarLinkWiki.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-wiki-hover");
  hoverElement.style.display = "block";
});
navbarLinkWiki.addEventListener("mouseout", function() {
  var hoverElement = document.getElementById("hs-navbar-link-wiki-hover");
  hoverElement.style.display = "none";
});

navbarLinkStore.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-store-hover");
  hoverElement.style.display = "block";
});
navbarLinkStore.addEventListener("mouseout", function() {
  var hoverElement = document.getElementById("hs-navbar-link-store-hover");
  hoverElement.style.display = "none";
});

navbarLinkOS.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-os-hover");
  hoverElement.style.display = "block";
});
navbarLinkOS.addEventListener("mouseout", function() {
  var hoverElement = document.getElementById("hs-navbar-link-os-hover");
  hoverElement.style.display = "none";
});

navbarLinkMedia.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-media-hover");
  hoverElement.style.display = "block";
});
navbarLinkMedia.addEventListener("mouseout", function() {
  var hoverElement = document.getElementById("hs-navbar-link-media-hover");
  hoverElement.style.display = "none";
});

navbarLinkBlog.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-blog-hover");
  hoverElement.style.display = "block";
});
navbarLinkBlog.addEventListener("mouseout", function() {
  var hoverElement = document.getElementById("hs-navbar-link-blog-hover");
  hoverElement.style.display = "none";
});

navbarLinkShop.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-shop-hover");
  hoverElement.style.display = "block";
});
navbarLinkShop.addEventListener("mouseout", function() {
  var hoverElement = document.getElementById("hs-navbar-link-shop-hover");
  hoverElement.style.display = "none";
});

navbarLinkSearch.addEventListener("click", function() {
  var hoverElement = document.getElementById("hs-navbar-link-search-hover");
  if (hoverElement.style.display = "none") {
    hoverElement.style.display = "block";
  } else {
    hoverElement.style.display = "none";
  };
});
navbarLinkSearch.addEventListener("mouseover", function() {
  var hoverElement = document.getElementById("hs-navbar-link-search-hover");
  hoverElement.style.display = "block";
});
function hssearchclose() {
  var hoverElement = document.getElementById("hs-navbar-link-search-hover");
  hoverElement.style.display = "none";
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
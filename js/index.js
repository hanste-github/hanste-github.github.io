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

// Navbar show links
var navbarLinkStore = document.getElementById("hs-navbar-link-store");
var navbarLinkOS = document.getElementById("hs-navbar-link-os");
var navbarLinkMedia = document.getElementById("hs-navbar-link-media");
var navbarLinkBlog = document.getElementById("hs-navbar-link-blog");
var navbarLinkShop = document.getElementById("hs-navbar-link-shop");

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
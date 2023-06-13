// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


$(document).ready(function(){
  $('#hs-search').click(function(){
      // toggleClass is used just for testing
      $('.hs-menu-item').addClass('hide-item') 
      $('.hs-search-form').addClass('active')
      $('.hs-close').addClass('active')
      $('#hs-search').hide()
  })
  $('.hs-close').click(function(){
      // toggleClass is used just for testing
      $('.hs-menu-item').removeClass('hide-item') 
      $('.hs-search-form').removeClass('active')
      $('.hs-close').removeClass('active')
      $('#hs-search').show()
  })
})
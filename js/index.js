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

//Music

var audioPlayer = document.getElementById("audioPlayer");
var currentAudioIndex = 0;

function playNext() {
  currentAudioIndex++;
  if (currentAudioIndex >= audioPlayer.children.length) {
    currentAudioIndex = 0;
  }
  audioPlayer.children[currentAudioIndex].selected = true;
  audioPlayer.load();
  audioPlayer.play();
}

function playPrevious() {
  currentAudioIndex--;
  if (currentAudioIndex < 0) {
    currentAudioIndex = audioPlayer.children.length - 1;
  }
  audioPlayer.children[currentAudioIndex].selected = true;
  audioPlayer.load();
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function playAudio(index) {
  currentAudioIndex = index - 1;
  audioPlayer.children[currentAudioIndex].selected = true;
  audioPlayer.load();
  audioPlayer.play();
}

// Cookies
//function acceptCookies() {
  // Hier können Sie den Code einfügen, um die Zustimmung des Benutzers zu speichern
  // z.B. durch das Setzen eines Cookies oder das Speichern in der Datenbank
  // Beispiel: document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  // Hier können Sie auch zusätzliche Funktionen hinzufügen, wie das Laden von Skripten von Drittanbietern
  // Beispiel: loadThirdPartyScripts();
  //document.getElementsByClassName('.cookie-banner').style.display = 'none';
//}
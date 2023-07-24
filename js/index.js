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

//Tabs

function openTab(evt, tabName) {
  var i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Music

// Array mit den Audiodateien
var audioFiles = [
  "https://info2.sermon-online.com/english/SoundforthSingers/A_Quiet_Heart_Song_14_He_Is_Seeking_You_2006.mp3",
  "https://info2.sermon-online.com/english/SoundforthSingers/A_Quiet_Heart_Song_13_Only_Jesus_2006.mp3",
  "https://info2.sermon-online.com/english/SoundforthSingers/A_Quiet_Heart_Song_12_We_Are_Not_Alone_2006.mp3"
  ];
  
  var audioIndex = 0; // Aktueller Index des Audios
  
  var audioPlayer = document.getElementById("audioPlayer");
  var audioSource = document.getElementById("audioSource");
  var backButton = document.getElementById("backButton");
  var playButton = document.getElementById("playButton");
  var pauseButton = document.getElementById("pauseButton");
  var stopButton = document.getElementById("stopButton");
  var nextButton = document.getElementById("nextButton");
  
  // Funktion zum Laden und Abspielen des aktuellen Audios
  function loadAudio() {
  audioSource.src = audioFiles[audioIndex];
  audioPlayer.load();
  audioPlayer.play();
  }
  
  // Funktion zum Wechseln zum vorherigen Audio
  function previousAudio() {
  audioIndex--;
  if (audioIndex < 0) {
  audioIndex = audioFiles.length - 1;
  }
  loadAudio();
  }
  
  // Funktion zum Wechseln zum nächsten Audio
  function nextAudio() {
  audioIndex++;
  if (audioIndex >= audioFiles.length) {
  audioIndex = 0;
  }
  loadAudio();
  }
  
  // Funktion zum Pausieren des aktuellen Audios
  function pauseAudio() {
  audioPlayer.pause();
  }
  
  // Funktion zum Stoppen des aktuellen Aud
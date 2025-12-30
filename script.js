const orientationContainer = document.getElementById("orientationContainer");
const countdownElement = document.getElementById("Countdown-Containor");
const wishContainer = document.getElementById("bWishContainer");
const letterContainer = document.getElementById("letterContainer");
const cardContainer = document.getElementById("cardContainer");
const CardtoLetterButton = document.getElementById("CardtoLetterButton");
const CardtoVideoMsgButton = document.getElementById("CardtoVideoMsgButton");
const videoMsgContainer = document.getElementById("videoMsgContainer");
const video = document.getElementById('videoMessage');
const closureContainer = document.getElementById("closureContainer");

// Preload images and audio files
// Note: Add your image URLs in the images array and audio URLs in the audios array

    const images = [
      "https://files.catbox.moe/ao2tyy.jpg",
      "https://files.catbox.moe/lpl3uc.png",
      "https://files.catbox.moe/i3k3kl.jpg"
    ];

    const audios = [
      "https://files.catbox.moe/z4l8j0.mp3",
      "https://files.catbox.moe/edv654.mp3"
    ];

    let loadedAssets = 0;
    const totalAssets = images.length + audios.length;

     function updateProgress() {
      const progress = ((loadedAssets / totalAssets) * 100).toFixed(0);
      document.getElementById("progress-bar").style.width = `${progress}%`;
    }

    function assetLoaded() {
      updateProgress();
      loadedAssets++;
      if (loadedAssets === totalAssets) {
        document.getElementById("loading-screen").style.display = "none";
        console.log("All assets loaded successfully!");

      }
    }

    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = assetLoaded;
      img.onerror = assetLoaded;
    });

    // Preload audio
    audios.forEach((src) => {
      const audio = new Audio();
      audio.src = src;
      audio.preload = "auto";
      audio.oncanplaythrough = assetLoaded;
      audio.onerror = assetLoaded;
    });

//function to preload letter page imaged
function preloadImages(urls = []) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  console.log("Preloaded image: " + url);
  });
}





// Function to check the orientation and show/hide the message
function checkOrientation() {
    
    if (window.innerHeight > window.innerWidth) {
        orientationContainer.style.display = "flex";
        //countdownElement.style.display = "none";
    } else {
        orientationContainer.style.display = "none";
        //countdownElement.style.display = "flex";
    }
}

// Add event listeners for resize and orientation change
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("load", checkOrientation);


//Countdown Timer
const targetDate = new Date("2020-01-19T00:00:00").getTime();

const countdownInterval = setInterval(() => {
const now = new Date().getTime();
const diff = targetDate - now;

if (diff < 0) {
clearInterval(countdownInterval);

document.getElementById("startParty").style.display = "block";
document.getElementById("countdown").textContent = "Its the time!";
document.getElementById("para").textContent = "";
return;

}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById("countdown").textContent =
`${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


//funtion to show date time
function updateDateTime() {
      const now = new Date();
      document.getElementById("dateTime").innerHTML = now.toLocaleString();
    }

    // Update every second
    setInterval(updateDateTime, 1000);
    updateDateTime(); // initial call



  
// Function to trigger confetti
function triggerConfetti() {
confetti({
particleCount: 300,
spread: 100,
origin: { y: 0.6 },
colors: ['#ff80ab', '#f06292', '#fce4ec', '#ff4081']
});

countdownElement.style.display = "none";
wishContainer.style.display = "flex";

countdownMusic.pause();
startMusic("https://files.catbox.moe/z4l8j0.mp3");

 preloadImages([
  "https://files.catbox.moe/sxm6bz.webp",
  "https://files.catbox.moe/evdhja.png"
]);

}




// Function to enter fullscreen mode
function enterFullscreen() {
const elem = document.documentElement;
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
elem.webkitRequestFullscreen(); // Safari
} else if (elem.msRequestFullscreen) {
elem.msRequestFullscreen(); // IE11
}
}
// Function to start music
const music = document.getElementById("bgMusic");
const audioSource = document.getElementById("audioSource");
function startMusic(Source){
audioSource.src = Source;
music.load();
music.volume = 0.3;
music.play();
console.log("Music started");
console.log("Music source set to: " + audioSource.src);
}

// funtion to go to letter page

function toLetterPage() {
    wishContainer.style.display = "none";
    letterContainer.style.display = "flex";
    CardtoLetterButton.style.display = "none";
    cardContainer.style.height = "0";
    CardtoVideoMsgButton.style.display = "none";
    typeWriter()

     preloadImages([
  "https://res.cloudinary.com/dneca52hi/image/upload/v1767104638/assets/pg1_eubbbc.png",
  "https://res.cloudinary.com/dneca52hi/image/upload/v1767104641/assets/pg2_autafd.png",
  "https://res.cloudinary.com/dneca52hi/image/upload/v1767104638/assets/pg3_u806xp.png",
    "https://res.cloudinary.com/dneca52hi/image/upload/v1767104636/assets/pg4_rxn4p7.png",
    "https://res.cloudinary.com/dneca52hi/image/upload/v1767104647/assets/pg5_zijxe9.png",
    "https://res.cloudinary.com/dneca52hi/image/upload/v1767104638/assets/pg6_fpvqiu.png",
    "https://res.cloudinary.com/dneca52hi/image/upload/v1767105077/assets/image4_agxydu.png",
]);
    
}

// Function to go back to the bday wishpage
function toWishPage() {
    letterContainer.style.display = "none";
    wishContainer.style.display = "flex";
    
}
// Function to go back to the card page
function toCardPage() {
    video.pause();
    music.play();
    videoMsgContainer.style.display = "none";
    letterContainer.style.display = "none";
    cardContainer.style.height = "100vh";
    CardtoLetterButton.style.display = "block";
    CardtoVideoMsgButton.style.display = "block";
    document.getElementById("cardBackgroundText").style.display = "block";

    preloadImages(["https://res.cloudinary.com/dneca52hi/image/upload/v1767105107/assets/ss_tyjgjr.png"
    ]);
    
    
    

}

function toVideoMsgPage() {
    CardtoVideoMsgButton.style.display = "none";
    videoMsgContainer.style.display = "flex";
    cardContainer.style.height = "0";
    CardtoLetterButton.style.display = "none";
    closureContainer.style.display = "none";
    CardtoLetterButton.style.display = "none";
    video.play();
    music.pause();

    preloadImages(["https://res.cloudinary.com/dneca52hi/image/upload/v1767105314/assets/closure_ezcwdf.jpg"]);

    // Add any additional logic to show the video message page
}

function toClosurePage() {
    videoMsgContainer.style.display = "none";
    closureContainer.style.display = "flex";
    video.pause();
    startMusic("https://files.catbox.moe/1597d5.mp3")
}



// letter animation
const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fadeEl => {
    observer.observe(fadeEl);
  });



var i = 0;
var txt = 'Babes, I honestly dont even have words to describe how much I love you. I am just sooo happy today, Salonii itss your bdayyyy 😭💕 Thank you so much for always being there for me, even during the times when I was hurting you. Babu, you are the cutest person I could ever imagine. Truly everything about you feels perfect to me. And its not just your heavenly looks, but your genuinely beautiful heart. The way you treat people, the way you make them feel seen and heard, the way you make everyone feel like there is someone who truly cares enough to listen. Even the people who treat you badly, you still behave kindly with them. Babes You are the BEST and you will always be, Dont let anything change you true charming personality. Always Keep Smiling, Keep Grinding, and Keep dancing(I really love to see you dance) Enjoy Your dayy to the fullest Loveee youuuu Muahhhhhh and lulu Happyy birthdaayyy <3';
var speed = 50;
const box = document.getElementById("Letter");


function typeWriter() {
 if (i < txt.length) {
    let start = box.scrollHeight;
    document.getElementById("letterText").innerHTML += txt.charAt(i);
    i++;
     let end = box.scrollHeight;
    setTimeout(typeWriter, speed);
  }

}


// audio play function

let originalRect = null;
    let clonedSection = null;

    function expandSection(button) {
      const section = button.parentElement;
      originalRect = section.getBoundingClientRect();
      document.querySelectorAll('.section').forEach(s => s.style.visibility = 'hidden');

      clonedSection = section.cloneNode(true);
      clonedSection.classList.add('fullscreen-section');
      clonedSection.style.top = originalRect.top + 'px';
      clonedSection.style.left = originalRect.left + 'px';
      clonedSection.style.width = originalRect.width + 'px';
      clonedSection.style.height = originalRect.height + 'px';

      const oldButton = clonedSection.querySelector('button');
      if (oldButton) oldButton.remove();

      const backBtn = document.createElement('button');
      backBtn.className = 'back-btn';
      backBtn.innerText = 'Back';
      backBtn.onclick = collapseSection;
      clonedSection.appendChild(backBtn);

      document.body.appendChild(clonedSection);

      gsap.to(clonedSection, {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        visibility: 'visible',
        duration: 0.6,
        ease: 'power3.inOut'
      });
    }

    function collapseSection() {
      if (!clonedSection || !originalRect) return;

      gsap.to(clonedSection, {
        top: originalRect.top + 'px',
        left: originalRect.left + 'px',
        width: originalRect.width + 'px',
        height: originalRect.height + 'px',
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          clonedSection.remove();
          clonedSection = null;
          document.querySelectorAll('.section').forEach(s => s.style.visibility = 'visible');
        }
      });
    }

    document.querySelectorAll('.section').forEach(section => {
      const video = section.querySelector('video');
      section.addEventListener('mouseenter', () => { if (video) video.play(); });
      section.addEventListener('mouseleave', () => { if (video) video.pause(); });
    });

    // Drag logic
    const MusicCard = document.getElementById('popupMusicCard');
    const MessageCard = document.getElementById('popupMessageCard');
  
    
    let offsetXMusic = 0, offsetYMusic = 0, isDraggingMusic = false;
    let offsetXMessage = 0, offsetYMessage = 0, isDraggingMessage = false;

    const startDragMessage = (e) => {
      isDraggingMessage = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      offsetXMessage = clientX - MessageCard.offsetLeft;
      offsetYMessage = clientY - MessageCard.offsetTop;
      MessageCard.style.cursor = 'grabbing';
    }
    const stopDragMessage = () => {
      isDraggingMessage = false;
      MessageCard.style.cursor = 'grab';
    }

    const onDragMessage = (e) => {
      if (!isDraggingMessage) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      MessageCard.style.left = `${clientX - offsetXMessage}px`;
      MessageCard.style.top = `${clientY - offsetYMessage}px`;
    }

    MessageCard.addEventListener('mousedown', startDragMessage);
    document.addEventListener('mouseup', stopDragMessage);
    document.addEventListener('mousemove', onDragMessage);
    MessageCard.addEventListener('touchstart', startDragMessage, { passive: false });
    document.addEventListener('touchend', stopDragMessage);
    document.addEventListener('touchmove', onDragMessage, { passive: false });


    const startDragMusic = (e) => {
      isDraggingMusic = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      offsetXMusic = clientX - MusicCard.offsetLeft;
      offsetYMusic = clientY - MusicCard.offsetTop;
      MusicCard.style.cursor = 'grabbing';
    };

    const stopDragMusic = () => {
      isDraggingMusic = false;
      MusicCard.style.cursor = 'grab';
    };

    const onDragMusic = (e) => {
      if (!isDraggingMusic) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      MusicCard.style.left = `${clientX - offsetXMusic}px`;
      MusicCard.style.top = `${clientY - offsetYMusic}px`;
    };

    MusicCard.addEventListener('mousedown', startDragMusic);
    document.addEventListener('mouseup', stopDragMusic);
    document.addEventListener('mousemove', onDragMusic);

    MusicCard.addEventListener('touchstart', startDragMusic, { passive: false });
    document.addEventListener('touchend', stopDragMusic);
    document.addEventListener('touchmove', onDragMusic, { passive: false });

    // Minimize + Restore
    const restoreTab = document.getElementById('showMusicCardBtn');
    function minimizeCard() {
      MusicCard.style.left = '-200px';
      restoreTab.style.display = 'flex';
    }

    function restoreCard() {
      MusicCard.style.left = '20px';
      restoreTab.style.display = 'none';
    }


function minimizeMusicCard() {
  gsap.to(MusicCard, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      MusicCard.style.display = 'none';
      document.getElementById('showMusicCardBtn').style.display = 'flex';
    }
  });
}

function minimizeMsgCard() {
  gsap.to(MessageCard, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      MessageCard.style.display = 'none';
      document.getElementById('showMsgBtn').style.display = 'flex';
    }
  });
}

function showMusicCard() {
    MusicCard.style.display = 'block';
  gsap.fromTo(MusicCard,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.inOut'
    }
  );

  document.getElementById('showMusicCardBtn').style.display = 'none';
}

function showMsgCard() {
    MessageCard.style.display = 'flex';
  gsap.fromTo(MessageCard,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.inOut'
    }
  );

  animate(); // Start the progress circle animation
   animateCount(); // Start the sunrise count animation

  document.getElementById('showMsgBtn').style.display = 'none';
}

 const countdownMusic = document.getElementById('countdownAudio');
    const playPauseBtn = document.getElementById('playPause');
    const slider = document.getElementById('slider');
    const current = document.getElementById('current');
    const duration = document.getElementById('duration');
    const songTitle = document.getElementById('songTitle');
    const playlistBox = document.getElementById('playlistBox');
    const playlistUl = document.getElementById('playlist');
    const playIcon = document.getElementById("playBtn");
    const pauseIcon = document.getElementById("pauseBtn");

    const songs = [
      { title: "Good Goodbye", src: "https://files.catbox.moe/ybua5q.mp3" },
      { title: "Take on me", src: "https://files.catbox.moe/v7kmvu.mp3" },
      { title: "Co2", src: "https://files.catbox.moe/d62tmk.mp3"},
      { title: "Green Flag", src: "https://files.catbox.moe/sp05mi.mp3" },
      { title: "Forever Young", src: "https://files.catbox.moe/jffftr.mp3" },
      { title: "Seet Leher", src: "https://files.catbox.moe/n07xvp.mp3" },
      { title: "Jutti Meri", src: "https://files.catbox.moe/7flu7y.mp3"},
      { title: "Alag Aasmaan", src: "https://files.catbox.moe/cumuet.mp3" },
      { title: "Bahoon Mai Chale Aao", src: "https://files.catbox.moe/u65eyd.mp3" },
      { title: "Save Room", src: "https://files.catbox.moe/kmua8b.mp3" },
      { title: "Dooron Dooron", src: "https://files.catbox.moe/uo3hsq.mp3" },
      { title: "Please Please Please", src: "https://files.catbox.moe/ygr6nt.mp3" }
      
    ];



    let currentSongIndex = 0;

    function loadSong(index) {
      const song = songs[index];
      countdownMusic.src = song.src;
      songTitle.innerText = song.title;
      countdownMusic.load();
      pauseIcon.style.display = 'none';
    }

    function playPause() {
      if (countdownMusic.paused) {
        countdownMusic.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
      } else {
        countdownMusic.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
    }

    function restart() {
      countdownMusic.currentTime = 0;
    }

    function nextSong() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      countdownMusic.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    }

    function prevSong() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong(currentSongIndex);
      countdownMusic.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    }

    function togglePlaylist() {
      playlistBox.classList.toggle('active');
    }

    function formatTime(sec) {
      let m = Math.floor(sec / 60);
      let s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' + s : s}`;
    }

    playPauseBtn.onclick = playPause;

    countdownMusic.onloadedmetadata = () => {
      slider.max = Math.floor(countdownMusic.duration);
      duration.innerText = formatTime(countdownMusic.duration);
    };

    countdownMusic.ontimeupdate = () => {
      slider.value = Math.floor(countdownMusic.currentTime);
      current.innerText = formatTime(countdownMusic.currentTime);
    };

    slider.oninput = () => {
      countdownMusic.currentTime = slider.value;
    };

    // Load initial song
    loadSong(currentSongIndex);

    // Load playlist
    songs.forEach((song, index) => {
      const li = document.createElement('li');
      li.innerText = song.title;
      li.onclick = () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        countdownMusic.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playlistBox.classList.remove('active');
      };
      playlistUl.appendChild(li);
    });



     // 🎂 set your birthday (month is 0-indexed, so 0 = January)
  const birthMonth = 0; // Jan
  const birthDay = 19;


  function getPersonalYearProgress() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // determine last birthday and next birthday
    let lastBirthday = new Date(currentYear, birthMonth, birthDay);
    let nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);

    if (now < lastBirthday) {
      // if birthday hasn’t come yet this year, go one year back
      lastBirthday = new Date(currentYear - 1, birthMonth, birthDay);
      nextBirthday = new Date(currentYear, birthMonth, birthDay);
    }



    const total = nextBirthday - lastBirthday;
    const passed = now - lastBirthday;
    return (passed / total) * 100;
  }

  const progressCircle = document.querySelector('.progress');
  const text = document.querySelector('.text');
  const totalLength = 2 * Math.PI * 60;
  const targetPercent = getPersonalYearProgress();
  let currentPercent = 0;

  function animate() {
    if (currentPercent < targetPercent) {
      currentPercent += 0.5;
      if (currentPercent > targetPercent) currentPercent = targetPercent;

      const offset = totalLength - (totalLength * currentPercent) / 100;
      progressCircle.style.strokeDashoffset = offset;
      text.textContent = currentPercent.toFixed(1) + '%';
      requestAnimationFrame(animate);
    }
  }

  
  // 💓 set your birth date and average heart rate
  const birthDate = new Date("2007-01-19T00:00:00"); // change yours
  const avgBPM = 72; // average beats per minute

  const beatsEl = document.getElementById("beats");

  function updateBeats() {
    const now = new Date();
    const diffMs = now - birthDate; // total milliseconds since birth
    const totalMinutes = diffMs / (1000 * 60);
    const totalBeats = totalMinutes * avgBPM;

    beatsEl.textContent = Math.floor(totalBeats).toLocaleString();
  }

  // initial render
  updateBeats();

  // update every second to keep counting live
  setInterval(updateBeats, 1000);
  const now = new Date();
  const diffTime = now - birthDate;
  const daysAlive = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const target = daysAlive;
  let curren = 0;

  function animateCount() {
    if (curren < target) {
      curren += Math.ceil((target - curren) / 25);
      if (curren > target) current = target;
      document.getElementById("sunrises").textContent = curren.toLocaleString();
      requestAnimationFrame(animateCount);
    }
  }

function updateBloodPumped() {

  const litersPerBeat = 0.07 / 1000 * 1000; // 70 ml per beat (0.07 L)

  
  const bloodEl = document.getElementById("bloodLiters");
    const now = new Date();
    const diffMs = now - birthDate;
    const totalMinutes = diffMs / (1000 * 60);
    const totalLiters = totalMinutes * (avgBPM * litersPerBeat);
    bloodEl.textContent = totalLiters.toLocaleString(undefined, {maximumFractionDigits: 0}) + " L";
    
  }

  updateBloodPumped();
  setInterval(updateBloodPumped, 1000);
 
// Date-based text display

  const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // months are 0-indexed

    let textt = '';

    // You can add whatever you want for each day
    const messages = {
  '1-1': 'Babes!! Happy New Year!😘🎉 January aagyi babes wowowwowow Happy BirthMonth cutuu. I wish harr din tera best din jaaye es mahinee ka puri saal ka infact noo yrrrr purii lifee ke days he mst jaayee tereee hopefully 😭❤. This is a very small bday gift from my side to my lovely baby(aint that u? YES ITS UH SALONI). I hope it can put a smile on ur cutie sa face. If possible try to come here everyday for some sweet lil msgs just for uhh🤭 Love uh Muahhhhhhhh 💗 ',
  '2-1': 'Hey cutie!😋 Just wanted to remind you how amazing you are. One more day closer to your birthday andd babes am keep getting more excited with each day. hehe MERI CUTU KA BDAY AARA YRRRR BEST HONA CHAHEYE!!!!! Always be happy always keep smiliing and spreading your positive vibes ❣. Lovee uhh Muahhhhhhhhhh 🌟💖',
  '3-1': 'Hemlo my lovely kuchu puchu!🦄 tussi aa gyee?? awwwwwwwwww welcome ji welcomee ~_~ Just wanted to tell uhh how much I adore Yuhh. Babes I can\'t wait to celebrate your special day😭💙  Only 16 days left until we make some really good memories. Stay amazing as u are, my luvlu💕 Muahhhhhh! 😘',
  '4-1': 'Heyyy sunshine!💛 Babes your birthday is coming up so soon I can hardly contain my excitementttt!!! Hope uhh have a fantastic day filled with love and laughter and me ofc hehe. Babuu Songs chala liyaa kroo fir padhaa kro moree feel aayegi 🤭. Tenuu bht jyadaaa chahtaaa maii bohot jyadaaa ishq krtaa teresee jaan hai tu merii luluu😔 Can\'t wait to celebrate with uhh. Lovee uhh shonaa Muahhhhhhhhhh 😘🧡',
  '5-1': 'Hey cutie pie!🥧 Beboo do uh know how much special you are to me?? Youh are as precious to me as my life.💗 I just cant think of a day without Yuh. I am just soooo muchh intoo uhhh 😭!!! Babes I hope uhh have a day as wonderful as you are. Only 14 days left till your big day! Hoo nii parhaa waitt abh tohh😔 chll aaja wp pr batlayengee. Lovee uhh Muahhhhhhhhhh 💖💫',
  '6-1': 'Ssup my lovely star!🌟 Aaj na aapki beauty prr charchaa krte hai chaloo😔 yrrr meraa tohh mann hee khushh ho uthtaa terekoo dekhteee hee😭 Kitni pyaari tu bruhh😋💕?? So mashalaha type💣. Bdayy aara teraa ykk?? Bht aache se celebratee krengeee bht enjoy krna tu hnaaa khush rhti jb tu toh bht he jyada pyaari lgtii sb aacha aacha lgne lgta. I am sooo exciteddd yrrrrr !!! Lovee uhh Muahhhhhhhhhh 😘💜',
  '7-1': 'Hillo my cutuu!🐰 Just some more days left and then yahoooooo!!🐣 No matter how old u get u will always be a child by heart. Ittu si chori ke andarr itta bda dil btaoo😔 kitnaa saara dhyan rakhti mera tuu. Thankuu babesss reallyy I really feel so good with uH 💑. I am so lucky to have uhh in my lifee 😭💗. I just lovee you yrrr Muahhhhhhhhhh 💗😘🌹',
  '8-1': 'Heyyy my lovely berry!🍓 Ye puraa mahinaa babess tere naam. Merii tohh purii lifee he tere naam yrr😘. Tera bday aaraa yahii rhta dil dimag mai pure tym aurr yrrr sch mai bohot excited maiiiii🥳 Kaafi tym se kaafi kch plan krra hopefully aachaa lgraa ho terekoo sbb. Khushh rhaaa krrr aurrr merese gltii ho jaya kre glti see tohh smjha diyaa kr mereko aur mereko manane ka bhi moka diyaa krrrr. Lovee uhh shonaa Muahhhhhhhhhh 😋💞',
  '9-1': 'U here? muffin!🧁 First of all i want to remind uhh how much I cherish every moment i spent with Yuh even if its all virtual. Babes terese milne baad life mai alag he roshni si feel hoti😭💖 Sab adhuraa saa lgtaa tere binaa fika fika saa. Jyadaa aachaa niii aataa yrrr mereprr likhnaa prr mai chahtaa ki likhuu tere liyee hamesa likhu roj likhuu deservee krti tuu bruhh❤😔 Jyada din na rhee bday mai betaa jiii aariyaa bss taiyarriya chalu krdoo abhh band baaje bajne chaheye hehehee Lovee uhh Muahhhhhhhhhh 💗😘',
  '10-1': 'Heyyy preety girl🌷 Babyy U are THE BEST!! Litreally the MOST gorgeous girl, the MOST caring girlfriend, the MOST sensitive lulu. You are a fine piece of Art. Babess the way u talk is the most cutest way i have even seen and i love that soooo muchh tho we dont get to talk much on calls but still every call feels special din sa bann jataa puraa dimag mai awaj gunjti rhtii terii waah waah waahh soo lovelyy voice u got srslyy! Sending lots of love Muahhhhhhhhhhh 🤭😘',
  '11-1': 'Hello Cupcake 👁! Aap ko dekhtee hee dil pighaal jataa meraa ykk?😔 Bohot he bohott Jyada sundar aadaye hai aapki and babes the way u dance is soo  charismatic😭❣ feels so good to eyes. Its been a year of us trying to know eachother better and as much as i have understood uh, U aree likee a very beautifully carved scripture which has been through a lot of stuff but still it shines the same. All the past damages happend to it are not able to reduce its charisma thats all i can say. Lovee You Salu muahhhhhhhhhhhh 💟',
  '12-1': 'Namaste MahilaMitr 🌼, Babes yrr urr bday coming so so sooon and my heart going dhuk dhuk. Sbsee special month ye meree liyeee🥳 I just feel so luckyy to havee uhh yrr kitnaa aachaa lgtaa terese baatein krnaa merekoo udkk😭💗 You make me feel so special You make me feel so blessed Thank Youu  so much babess for everythingg😌🧡 I really really love you saloni Muahhhhhhhhhhhhhh 💋😘',
  '13-1': 'Welcome again baby ji🤗! Yk tareekh kyaa aaj🤔? aaj hai 13 tohhhhhhh😲 mai 13 mai 13 mai 13 mai 13, mai 13 Hero No. 1😔💗 hehehe joks. babess aap kaa tohh obsession he hotaa jarhaa hamkoo😭 kii kree hamm aap hmko khaa kyu nhi leti yrrrr khaa loo naa yaarr😟 jaao aap yrrr msgg krnaa meko romantic baatien krengee 👉👈 Jaoooo. So much love uhhhh Muahhhhhhhhhhhhhh 💗😘',
  '14-1': 'Hey meri jaan 🥺💛, Aaj tere baare mein 200 baar socha(normal hai👁). Aaj se ek mahine baad meri babuu mst valentine\'s day celebrate krre honge ham😘 wowow yrr TU hogi meri valentines wowowowow kitnaa mja aayegaaa hehehe😁😋 babuuu soo muchh mann yrr teresee milne ka tereko rose dene ka hug krne kaa baatien krne ka terese tera hath pakadne kaa bht craving hoti teri yrrr😭😘 jldi milna tuu hnaaa love U Muaahhhhhhhhh 🌷💕',
  '15-1': 'Babby ji aap aagyi? aajaoo Helloo😌, Aaj khush rhnaa hnaa? Smile krtee rhnaa abhi bhi kroo. arey kroo kroo? goodddd ye hui na baaat. Smilee krtee huee bht pyaari lgtii. Babyy aaliyaa bdayy bss sooo much excited yrr maii bht mja aayegaa. Dhyan rakh apna sardi hori kaafi aur mstt rh ekdamm chill cool ohh yeaahhh. kal milteee Lovuhhhhhh Muahhhhhhhhhhhhhh ',
  '16-1': 'Heyyy pookie!🎀  Yrrr justt 3 din bacheee abhh toh damnnn!😶 Wait nii ho paraa mereprrr tohhh meri laddoo kaaaa bdayyyyyy aaraaa wowowowow😭 Yrr teri kapdo ki choice kitni aachii kitnee shi shi kapde pehenti yrr tuu and not just kapdee sabb cheeje he terii sab unique hoti cute si teri trh ekdam hehe🤭 Kitniiii saarii khubiyaa babuuu teremaii bht appriciation hai mere mann mai un sbke liyee😔 tu kaamaal hai yrrr bht he jyadaaa Ufffff Lovee uhh Muahhhhhhhhhh💋❤',
  '17-1': 'Babess Onlyy two dayss are left!! 😭 Are you not excited!?? You are ikk and babes u should😔. I am also waiting for you bday from a long time, tried to do some stuffs too for uhh I hope they will put a smile to your face. I Am just so really really lucky to have u luluu. Its just You cuz of whom I am feeling this better today ❤ You are an absolute example of perfection I am soo obssessed with you and babes U are Intelligent tooo all u need is it give it more time ikk u will succedd. Thats It Will see ya tommorow. Lovee Youuuu luluu Muahhhhhhhhhhhh 🌷',
  '18-1': 'Heyyy my cutuu!🐰 The big day is tomorrowwwww!!!🥳 I am so so so exciteddd yrrr meree cutuu ka bdayy aaraa😭💗 Babess I just want to say thanku for being in my lifee. Youh make my life so much better just by being in it. I cant wait to celebrate your special day with uhh and make some unforgettable memories together. Its today from when we started to talk regularly Its been a year babess wowow. Thanks for all the beautiful memories. I Lovee uhh Muahhhhhhhhhh 😘💖',
  '19-1': 'Finally its here! Happyy Birthdaayyy Saloni 💋💟🎀 Loveee youuuu Muahhhhhhhhhh 🌹',

};

const key = `${day}-${month}`;
textt = messages[key] || 'I love you!';

const dailyMsgs = document.getElementById('messages');

dailyMsgs.textContent = textt;

if (now.getFullYear() < 2026) {
   const subtext = document.getElementById("subtext");
   subtext.textContent = `of 19th year completed`;
}
 if (now.getFullYear() === 2026 && now.getDate() < 19) {
    subtext.textContent = `of 19th year completed`;
} 
if (now.getFullYear() === 2026 && now.getDate() >= 19) {
   subtext.textContent = `of 20th year completed`;
}
  

 const tt = new Date().toISOString().slice(5, 10); // MM-DD

  if (tt === "01-19") {
    document.title = "Happy Birthday Saloni! 🎉";
  } else {
    document.title = "ForMyCutu";
  }
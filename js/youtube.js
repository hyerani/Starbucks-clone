// 2. This code loads the IFrame Player API code asynchronously.
// Youtube IFrame API를 비동기로 로드
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 함수 이름은 변경 불가
  new YT.Player("player", {
    // player id 값을 가진 요소를 찾음
    videoId: "An6LvWQuj_8", // 영상 url 맨 뒤의 값이 곧 id 값
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 id
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}

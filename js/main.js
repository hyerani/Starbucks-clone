const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// 포커스가 해제됐을때
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
// window는 브라우저 창, 화면 자체
// lodash 라이브러리 사용, 0.3초 단위로 부하를 줘서 함수가 한꺼번에 실행되는 것을 방지
// 사이드 광고 배너 사라지고 나타나게 해주는 애니메이션 gsap 사용
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// 이미지 순차 출력
const fadeEls = document.querySelectorAll(".visual .fade-in");
// index는 반복되는 횟수
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7s, 1.4s, 2.1s, 2.7s 뒤에 순차적으로 이미지가 나타남
    opacity: 1,
  });
});

// 공자사항 슬라이드
// new Swiper(선택자, {옵션})
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

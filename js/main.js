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

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, // 5초 동안 자동 슬라이드
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 이전버튼 다음버튼
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// TOGGLE 기능
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add("hide");
  } else {
    //보임 처리
    promotionEl.classList.remove("hide");
  }
});

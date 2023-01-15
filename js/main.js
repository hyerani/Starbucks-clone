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
    // 배지 숨기기
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to("#to-top", 0.2, {
        x: 100,
      });
    }
  }, 300)
);

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0, // 페이지가 시작하는 상단 0 으로 이동
  });
});

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

// 메인 슬라이드 부분
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

// 하단 슬라이드 부분
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
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

// 범위 랜덤 함수(소수점 2자리까지), (1, 7)을 입력해주면 1~7까지의 랜덤한 숫자를 반환
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// 둥둥 떠다니는 에니메이션 이미지
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 에니메이션 동작 시간
    {
      // 옵션
      y: size, // y축 이동
      repeat: -1, // 무한반복
      yoyo: true, // 재생된 에니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut, // gsap easing 사이트 참고 조금 더 자연스럽게 설정해주는 옵션
      delay: random(0, delay), // 지연시간
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
// Scene() 특정한 요소를 감시하는 옵션을 지정해주는 메서드
// setClassToggle() html 클래스를 넣었다 뺐다 제어해주는 역할
// addTo() 컨트롤러라는 개념의 내용을 추가하기 위해 사용해야함
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 뷰포트 지점
  })
    .setClassToggle(spyEl, "show") // hook 지점을 넘으면 실행되면서 'show'라는 클래스가 추가됨 (요소, 클래스이름)
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2023

// User email&pw
let userInformation = {
  userEmail: "user@example.com",
  userPassword: "1234",
};
// Login
function btn_login() {
  let inputEmail = document.getElementById("input_email_value").value;
  let inputPw = document.getElementById("input_pw_value").value;

  if (inputEmail == "") {
    alert("이메일을 입력해 주세요.");
  } else if (inputPw == "") {
    alert("비밀번호를 입력해 주세요.");
  } else if (
    inputEmail !== userInformation.userEmail ||
    inputPw !== userInformation.userPassword
  ) {
    alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
  } else {
    alert("로그인 성공.");
    window.location.href = "/portfolio/website-works/04/html/main.html";
  }
}
// 핸드폰 인증
function btn_phone_auto() {
  let phoneAutoTime = document.getElementsByClassName("phone-auto-time")[0];
  phoneAutoTime.classList.add("view");
}
// 약관동의
function agree_check() {
  let agreeCheckAll = document.querySelectorAll(
    ".agree-item input[type='checkbox']"
  )[0];
  let agreeCheckMain = document.querySelectorAll(
    ".agree-item input[type='checkbox']"
  )[1];
  let agreeCheckSub = document.querySelectorAll(
    ".agree-item input[type='checkbox']"
  )[2];
  if (agreeCheckAll.checked) {
    agreeCheckMain.checked = true;
    agreeCheckSub.checked = true;
  }
}
// Sign Up
function signup_test() {
  const email_regex = /\S+@\S+\.\S+/;
  const pw_regex = /^.{6,}$/;

  let inputEmail = document.getElementById("input_signup_email_value").value;
  let inputPw = document.getElementById("input_signup_pw_value").value;
  let inputPwCheck = document.getElementById(
    "input_signup_pw_value_check"
  ).value;
  let agreeCheckMain = document.querySelectorAll(
    ".agree-item input[type='checkbox']"
  )[1];

  if (email_regex.test(inputEmail) === false) {
    alert("이메일 형식이 아닙니다. 다시 시도해주세요.");
  } else if (pw_regex.test(inputPw) === false) {
    alert("비밀번호는 최소 6글자 이상이어야 합니다. 다시 시도해주세요.");
  } else if (inputPw !== inputPwCheck) {
    alert("비밀번호가 일치하지 않습니다.");
  } else if (!agreeCheckMain.checked) {
    alert("이용약관에 동의해주세요.");
  } else {
    alert("회원가입 성공.");
    window.location.href = "/portfolio/website-works/04/html/petprofile.html";
  }
}
// Go To Main
function go_to_main() {
  window.location.href = "/portfolio/website-works/04/html/main.html";
}
// Go To PetProfileDetail
function go_to_petprofile_detail() {
  window.location.href = "/portfolio/website-works/04/html/petprofiledetail.html";
}
// PetProfileDetail Modal Open
function breed_select_modal_open() {
  document.getElementsByClassName("breed-select-modal")[0].style.display =
    "block";
}
function breed_select_modal_close() {
  document.getElementsByClassName("breed-select-modal")[0].style.display =
    "none";
}
// UpLoad Pet
function btn_upload_pet() {
  window.location.href = "/portfolio/website-works/04/html/main.html";
}

// Main Slider
let slider_img_num = 1;
setInterval(btn_slider_right, 5000);
function btn_slider_right() {
  const sliderContainer = document.querySelectorAll(
    ".main-slider-container"
  )[0];
   if (slider_img_num < 5) {
    sliderContainer.style.transform = `translateX(-${slider_img_num}00vw)`;
    sliderContainer.style.transition  = '1s';
    slider_img_num++;
  } else {
    slider_img_num = 0;
  }
}
function btn_slider_left() {
  const sliderContainer = document.querySelectorAll(
    ".main-slider-container"
  )[0];
  if (slider_img_num > 1) {
    slider_img_num--;
    sliderContainer.style.transform =
      "translateX(-" + (slider_img_num - 1) + "00vw)";
  }
}
// Notice
let notice_num = 30;
setInterval(notice, 5000);
function notice() {
  const notice_items_span = document.querySelectorAll(".notice-items")[0];
  if (notice_num > -60) {
    notice_items_span.style.transform = `translateY(${notice_num}px)`;
    notice_num -= 30;
  } else {
    notice_num = 30;
  }
}
// Detail Slider
let slider_detail_img_num = 1;
function btn_detail_slider_rigth() {
  const sliderContainer = document.querySelectorAll(
    ".detail-slider-container"
  )[0];
  if (slider_detail_img_num < 6) {
    sliderContainer.style.transform = `translateX(-${slider_detail_img_num}00vw)`;
    sliderContainer.style.transition = "0.5s";
    slider_detail_img_num++;
  } else {
    slider_detail_img_num = 0;
    sliderContainer.style.transition = "none";
  }
  updateDots();
}
function btn_detail_slider_left() {
  const sliderContainer = document.querySelectorAll(
    ".detail-slider-container"
  )[0];

  if (slider_detail_img_num > 1) {
    slider_detail_img_num--;
    sliderContainer.style.transform =
      "translateX(-" + (slider_detail_img_num - 1) + "00vw)";
  }
  updateDots();
}
function updateDots() {
  const sliderDots = document.querySelectorAll(".detail-slider-dots span");
  sliderDots.forEach(sliderDots => {
    sliderDots.classList.remove('slider-active');
  });
  sliderDots[slider_detail_img_num - 1].classList.add('slider-active');
}
// category Tab Content View
function category_tab_open(event) {
  let dataNum = event.target.getAttribute("data-id");
  let tabBtns = document.querySelectorAll(".tab-btn");
  let tabContent = document.querySelectorAll(".tab-content");
  tabBtns.forEach(function (tabBtn) {
    tabBtn.classList.remove("category-active");
  });
  tabBtns[dataNum].classList.add("category-active");
  tabContent.forEach(function (tabContent) {
    tabContent.classList.remove("category-show");
  });
  tabContent[dataNum].classList.add("category-show");
}
// Detail - More
function btn_detail_more() {
  document
    .querySelectorAll(".product-details-content")[0]
    .classList.add("active");
  document
    .querySelectorAll(".btn-product-details-more")[0]
    .classList.add("no-view");
  document
    .querySelectorAll(".btn-product-details-close")[0]
    .classList.add("view");
}
function btn_detail_close() {
  document
    .querySelectorAll(".product-details-content")[0]
    .classList.remove("active");
  document
    .querySelectorAll(".btn-product-details-more")[0]
    .classList.remove("no-view");
  document
    .querySelectorAll(".btn-product-details-close")[0]
    .classList.remove("view");
}
function btn_order_modal_open() {
  document.querySelectorAll(".detail-order-modal")[0].classList.add("view");
}
function btn_order_modal_close() {
  document.querySelectorAll(".detail-order-modal")[0].classList.remove("view");
}
// Detail - More Select
function select_check() {
  let selectValue = document.querySelectorAll(".select-check")[0].value;
  console.log(selectValue);
  if (selectValue == "북어") {
    document
      .querySelectorAll(".detail-order-final-info")[0]
      .classList.add("view");
    document.querySelectorAll(".detail-order-final-info p")[0].innerHTML =
      "촉촉 트릿 북어 맛";
    document.querySelectorAll(".product-num")[0].innerText = 1;
    document.querySelectorAll(".final-price h4")[0].innerText = 8900;
  } else if (selectValue == "연어") {
    document
      .querySelectorAll(".detail-order-final-info")[0]
      .classList.add("view");
    document.querySelectorAll(".detail-order-final-info p")[0].innerHTML =
      "촉촉 트릿 연어 맛";
    document.querySelectorAll(".product-num")[0].innerText = 1;
    document.querySelectorAll(".final-price h4")[0].innerText = 8900;
  }
}

function btn_minus() {
  let productNum = document.querySelectorAll(".product-num")[0].innerText;
  let productPrice =
    document.querySelectorAll(".final-price h4")[0].innerText * 1;
  if (productNum > 0) {
    productNum--;
    productPrice -= 8900;
    document.querySelectorAll(".product-num")[0].innerText = productNum;
    document.querySelectorAll(".final-price h4")[0].innerText = productPrice;
  }
}
function btn_plus() {
  let productNum = document.querySelectorAll(".product-num")[0].innerText * 1;
  let productPrice =
    document.querySelectorAll(".final-price h4")[0].innerText * 1;
  if (productNum < 99) {
    productNum++;
    productPrice += 8900;
    document.querySelectorAll(".product-num")[0].innerText = productNum;
    document.querySelectorAll(".final-price h4")[0].innerText = productPrice;
  }
}

// Search Btn
let searchNum = 0;
function btn_search_clear(event) {
  let searchItem = event.target.closest(".item");
  searchItem.classList.add("no-view");
  searchNum++;
  if (searchNum == 3) {
    document.querySelectorAll(".search-history-not-content")[0].style.display =
      "block";
  }
}
function btn_search_clear_all() {
  let items = document.querySelectorAll(".search-history-content .item");
  items.forEach((item) => {
    item.style.display = "none";
  });
  document.querySelectorAll(".search-history-not-content")[0].style.display =
    "block";
}

// Cart
function product_check_all() {
  let productCheckAll = document.querySelectorAll(
    ".cart-items-header input[type='checkbox']"
  )[0];
  let productCheck01 = document.querySelectorAll(
    ".cart-items input[type='checkbox']"
  )[0];
  let productCheck02 = document.querySelectorAll(
    ".cart-items input[type='checkbox']"
  )[1];
  if (productCheckAll.checked) {
    productCheck01.checked = true;
    productCheck02.checked = true;
  }
}
function product_check_all_clear() {
  let productCheckAll = document.querySelectorAll(
    ".cart-items-header input[type='checkbox']"
  )[0];
  let productCheck01 = document.querySelectorAll(
    ".cart-items input[type='checkbox']"
  )[0];
  let productCheck02 = document.querySelectorAll(
    ".cart-items input[type='checkbox']"
  )[1];

  productCheckAll.checked = false;
  productCheck01.checked = false;
  productCheck02.checked = false;
}
// 상품 개별 삭제
function product_check_clear(event) {
  let item = event.target.closest(".cart-item-title");
  let itemCheck = item.querySelector("label input[type='checkbox']");
  if (itemCheck.checked) {
    itemCheck.checked = false;
  }
}
// 뒤로가기 버튼
function btn_back(){
  window.history.back();
}
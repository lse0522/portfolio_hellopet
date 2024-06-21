// 상품 자료
const recommendedProduct = [
  {
    id: 0,
    title: "[NEW]촉촉 트릿 북어 150g",
    price: 8900,
    stars: 5,
    comment: 6842,
    origPrice: 14000,
    sale: 36,
  },
  {
    id: 1,
    title: "[NEW]신상 우주모래벤토나이트 19kg",
    price: 30900,
    stars: 4,
    comment: 220,
  },
  {
    id: 2,
    title: "마로스트펫 북어트릿 120g",
    price: 16000,
    stars: 5,
    comment: 6399,
  },
  {
    id: 3,
    title: "캣 챠 츄 참치 14g*4p",
    price: 2250,
    stars: 5,
    comment: 5246,
    origPrice: 4700,
    sale: 52,
  },
  {
    id: 4,
    title: "촉촉한 닭가슴살 캔 85g",
    price: 2150,
    stars: 4,
    comment: 352,
    origPrice: 2500,
    sale: 14,
  },
  {
    id: 5,
    title: "츄르 치킨&참치 30g*4p",
    price: 2500,
    stars: 3,
    comment: 21,
  },
  {
    id: 6,
    title: "사료cat 전연령 20kg",
    price: 45760,
    stars: 4,
    comment: 428,
    origPrice: 67000,
    sale: 32,
  },
  {
    id: 7,
    title: "고양이 유산균 30포",
    price: 27500,
    stars: 4,
    comment: 1488,
  },
  {
    id: 8,
    title: "츄르 닭&참치 14g*4p",
    price: 3000,
    stars: 4,
    comment: 60,
  },
  {
    id: 9,
    title: "캣 전연령 소화기 건강",
    price: 45000,
    stars: 5,
    comment: 5246,
  },
  {
    id: 10,
    title: "모래 무향 6kg",
    price: 10900,
    stars: 4,
    comment: 27894,
    origPrice: 16000,
    sale: 32,
  },
  {
    id: 11,
    title: "영양제 30캡슐",
    price: 16800,
    stars: 3,
    comment: 2,
    origPrice: 23900,
    sale: 30,
  },
];
const categoryProduct = [
  {
    id: 0,
    title: "미로터널 중형/대형",
    price: 17000,
    stars: 5,
    comment: 5560,
    origPrice: 19500,
    sale: 13,
  },
  {
    id: 1,
    title: "사냥장난감 11종 모음",
    price: 7900,
    stars: 5,
    comment: 4742,
  },
  {
    id: 2,
    title: "바스락 스크류 터널",
    price: 8990,
    stars: 5,
    comment: 1314,
    origPrice: 12900,
    sale: 30,
  },
  {
    id: 3,
    title: "플레이 서킷",
    price: 19800,
    stars: 4,
    comment: 246,
    origPrice: 30000,
    sale: 34,
  },
  {
    id: 4,
    title: "체크 캣 터널 숨숨집 옐로우/블루",
    price: 28900,
    stars: 4,
    comment: 41,
  },
  {
    id: 5,
    title: "고양이 숨숨터널 베이지/그린",
    price: 31900,
    stars: 5,
    comment: 2128,
    origPrice: 48900,
    sale: 36,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < recommendedProduct.length; i++) {
    document.querySelectorAll(".recommended-products-item p")[i].innerHTML =
      recommendedProduct[i].title;
    document.querySelectorAll(".recommended-products-item b")[i].innerHTML =
      recommendedProduct[i].price + "원";
    document.querySelectorAll(".best-products-item p")[i].innerHTML =
      recommendedProduct[i].title;
    document.querySelectorAll(".best-products-item b")[i].innerHTML =
      recommendedProduct[i].price + "원";
    if (recommendedProduct[i].origPrice && recommendedProduct[i].sale) {
      document.querySelectorAll(".recommended-products-item s")[i].innerHTML =
        recommendedProduct[i].origPrice + "원";
      document.querySelectorAll(".recommended-products-item span")[
        i
      ].innerHTML = recommendedProduct[i].sale + "%";
      document.querySelectorAll(".best-products-item s")[i].innerHTML =
        recommendedProduct[i].origPrice + "원";
      document.querySelectorAll(".best-products-item span")[i].innerHTML =
        recommendedProduct[i].sale + "%";
    } else {
      document.querySelectorAll(".recommended-products-item s")[
        i
      ].style.display = "none";
      document.querySelectorAll(".recommended-products-item span")[
        i
      ].style.display = "none";
      document.querySelectorAll(".best-products-item s")[i].style.display =
        "none";
      document.querySelectorAll(".best-products-item span")[i].style.display =
        "none";
    }
    document.querySelectorAll(
      ".recommended-products-item .product-rating .comment"
    )[i].innerHTML = "(" + recommendedProduct[i].comment + ")";
    document.querySelectorAll(".best-products-item .product-rating .comment")[
      i
    ].innerHTML = "(" + recommendedProduct[i].comment + ")";
  }
  for (let i = 0; i < categoryProduct.length; i++) {
    document.querySelectorAll(".category-products-item p")[i].innerHTML =
      categoryProduct[i].title;
    document.querySelectorAll(".category-products-item b")[i].innerHTML =
      categoryProduct[i].price + "원";
    if (categoryProduct[i].origPrice && categoryProduct[i].sale) {
      document.querySelectorAll(".category-products-item s")[i].innerHTML =
        categoryProduct[i].origPrice + "원";
      document.querySelectorAll(".category-products-item span")[i].innerHTML =
        categoryProduct[i].sale + "%";
    } else {
      document.querySelectorAll(".category-products-item s")[i].style.display =
        "none";
      document.querySelectorAll(".category-products-item span")[
        i
      ].style.display = "none";
    }
    document.querySelectorAll(
      ".category-products-item .product-rating .comment"
    )[i].innerHTML = "(" + categoryProduct[i].comment + ")";
  }
});
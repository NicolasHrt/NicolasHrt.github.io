const navSlide = () => {
  console.log("yes");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("bonjour");
  });
};

navSlide();

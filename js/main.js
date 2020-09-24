/* === My Custom Global Functions === */
const $ = (elem) => {
  return document.querySelector(elem);
};
const elem = (elem) => {
  return document.getElementById(elem);
};
const getCtrl = () => {
  return $("body").getAttribute("data-ctrl");
};
/* === End of Custom Global Functions ===  */
/* ... */
/* Components */
const showContent = `
<section id="showContent"></section>
`;
const endPoint = `
<section id="endPoint">
  <h2>This device size is not supported</h2>
</section>
`;
const SplashScreen = `
<section class="splashScreen">
  <img src="assets/LogoMain.svg" alt="LogoMain" />
  <p>Appointment App</p>
</section>
`;
/* Components End */
/* ... */
/* Initialization of Pages */
(() => {
  $("body").innerHTML += `
    ${showContent}
    ${endPoint}
  `;
})();

if (getCtrl() == "splashScreen") {
  elem("showContent").innerHTML = SplashScreen;
  setTimeout(() => {
    elem("showContent").classList.add("opOut");
  }, 1200);
  setTimeout(() => {
    location.replace("pages/login.html");
  }, 1600);
}

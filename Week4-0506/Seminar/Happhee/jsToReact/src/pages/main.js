const attachTagEvent = () => {
  const h1Tag = document.querySelector(".header__title");

  h1Tag.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
};
function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
            <main class="mainPage">
                <header>
                    <h1 class="header__title">해삐 바닐라자스 🌼</h1>
                </header>
            </main>
        `;

    attachTagEvent();
  };
  this.render();
}
export default MainPage;

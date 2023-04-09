function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = ` 
  <main class="mainPage">
  <header>
  <h1>해피 웹</h1>
  </header>
  </main>
  `;
  };
  this.render();
}

export default MainPage;

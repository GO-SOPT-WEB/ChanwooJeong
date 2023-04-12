function MyCategory($container) {
    this.$container = $container;
  
    this.render = () => {
      this.$container.innerHTML = ` 
         MyCategory
    `;
    };
    this.render();
  }
  
  export default MyCategory;
  
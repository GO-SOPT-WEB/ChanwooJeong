function Calendar($container) {
    this.$container = $container;
  
    this.render = () => {
      this.$container.innerHTML = ` 
      Calendar
    `;
    };
    this.render();
  }
  
  export default Calendar;
  
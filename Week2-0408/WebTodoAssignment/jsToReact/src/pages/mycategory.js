import "../CSS/mycategory.css";
import "../JSfile/mycategory";
function MyCategory($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = ` 
      <div id="changeCategoryContainer">
        <header>
            <h1>❤️Change Todo Category Index❤️</h1>

            
        </header>

        <div class="dragDropcontainer">
        
        </div>
      
      </div>

    `;
  };
  this.render();
}

export default MyCategory;

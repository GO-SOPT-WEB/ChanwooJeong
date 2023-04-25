import "../CSS/mycategory.css";
import "../JSfile/mycategory";
import { localStorageApi } from "../Api/Api";
import myCategoryJS from "../JSfile/mycategory";

function MyCategory($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = ` 
      <div id="changeCategoryContainer">
        <header>
            <h1>❤️Drag Todo Category Index❤️</h1>
        </header>

        <div class="dragDropcontainer">
        </div>
        <footer>
            <button type="button" onclick="window.location.href ='/'">
                <img src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844435-home-house_110321.png" alt="calendar"/>
                <div>홈</div>
            </button>
        </footer>
      </div>
    `;
  };
  this.render();
  myCategoryJS();
}

export default MyCategory;

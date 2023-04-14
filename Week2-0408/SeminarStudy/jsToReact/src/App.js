// import MainPage from "./pages/main";
// import Error404 from "./pages/error404";

// const BASE_URL = "http://localhost:5174";
// const ROUTE_LIST = [{ path: "/", element: MainPage }];


// function App($container) {
//     this.$container = $container;
//     let currentPage = undefined;

//     const init = () => {
//         const findMatchedRoute = () => ROUTE_LIST.filter((route) => route.path === location.pathname)

//         const route = () => {
//             currentPage = null;
//             console.log(findMatchedRoute())
//             const TargetPage = findMatchedRoute()?.element;
//             currentPage = new TargetPage(this.$container)
//         }

//         route()
//     }
//     init()
// }

// export default App

import MainPage from "./pages/main";
import Error404 from "./pages/error404";

const BASE_URL = "http://localhost:5174";
const ROUTE_LIST = [{ path: "/", element: MainPage }];

function App($container) {
  this.$container = $container;
  let currentPage = undefined;

  const init = () => {
    //find 는 되는데 filter는 안되네 find는 속에 있는 객체 반환 filter는 배열속 객체로 반환
    const findMatchedRoute = () =>
      ROUTE_LIST.find((route) => route.path === location.pathname);

    const route = () => {
      currentPage = null;
      console.log(findMatchedRoute())
      const TargetPage = findMatchedRoute()?.element || Error404;
      currentPage = new TargetPage(this.$container);
    };

    route();
  };
  init();
}
export default App;
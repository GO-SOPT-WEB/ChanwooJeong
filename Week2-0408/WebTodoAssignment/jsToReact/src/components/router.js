import TodoMainPage from "../pages/todoMain";
import MyCategory from "../pages/mycategory";
import Calendar from "../pages/calendar";

const ROUTE_LIST = [
  { path: "/", element: TodoMainPage },
  { path: "/calendar", element: Calendar },
  { path: "/myCategory", element: MyCategory },
];

export default ROUTE_LIST;

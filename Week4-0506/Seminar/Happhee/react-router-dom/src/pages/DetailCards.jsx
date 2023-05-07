import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const DetailCards = () => {
  return (
    <>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};

export default DetailCards;

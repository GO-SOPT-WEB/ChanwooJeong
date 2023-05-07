import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import ImgCardList from "../components/ImgCardList";

const St = {
  HeaderWrapper: styled.div`
    ${({ theme }) => theme.fonts.B_Title_1}
  `,
};

const Gallery = () => {
  // function getHappheeData() {
  //   let happhee = new Promise((resolve, reject) => {
  //     let happheeData;
  //     const data = setTimeout(function () {
  //       happheeData = "서히";
  //     }, 1000)
      
  //   }).then(res => )

  //   // return happhee.then((value) => {
  //   //   return value;
  //   // });
  //   return happhee.then((value) => {return value})
  // }
  // const HappheeData = getHappheeData();
  // console.log(HappheeData)

  // console.log(HappheeData);

  // const HAPPHEE = getHappheeData();
  // console.log(HAPPHEE);  //undefined

  // function goWeb() {
  //   console.log('웹파트');
  //   setTimeout(() => console.log('4차세미나'), 400);
  //   console.log('다음주는 합동세미나');
  // }
  // 어떤 순서로 출력될까?!
  // goWeb( );

  return (
    <>
      <PageLayout>
        <ImgCardList />
      </PageLayout>
    </>
  );
};

export default Gallery;

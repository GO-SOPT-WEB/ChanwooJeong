interface ThemeProps {
  bgColor: string;
  headerColor: string;
  textColor: string;
}

export const lightTheme: ThemeProps = {
  bgColor: "rgb(252, 233, 233)",
  headerColor: "#f8f8f8",
  textColor: "black",
};

export const darkTheme: ThemeProps = {
  bgColor: "#7b9095",
  headerColor: "#722f37",
  textColor: "white",
};

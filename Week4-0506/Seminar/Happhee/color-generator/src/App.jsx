import { useRef, useState } from "react";
import { SearchColorForm, SingleColorItem } from "./components";
import Values from "values.js";

const App = () => {
  const serachColor = useRef(null);
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  const handleColorFormSubmit = (e) => {
    e.preventDefault();
    try {
      const resultColorList = new Values(serachColor.current).all(3);
      setColorList([...resultColorList]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChange = (e) => {
    serachColor.current = e.target.value;
  };

  return (
    <div className="colorGenerator_wrapper">
      <SearchColorForm
        serachColor={serachColor}
        handleColorFormSubmit={handleColorFormSubmit}
        handleOnChange={handleOnChange}
      />
      <section>
        {colorList.map((color, idx) => (
          <SingleColorItem
            key={color.rgb}
            rgb={color.rgb}
            weight={color.weight}
            idx={idx}
            hexColor={color.hex}
          />
        ))}
      </section>
    </div>
  );
};

export default App;

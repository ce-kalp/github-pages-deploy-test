import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import "./App.css";
import "./AppV1.css";

// Version 1 Using Library
function App() {
  const images = [
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png",
    "./images/image3.png",
    "./images/image1.png",

    "./images/image2.png",
    "./images/image3.png",
    "./images/image4.png",
    "./images/image2.png",

    "./images/image1.png",

    "./images/image1.png",
    "./images/image5.png",
    "./images/image2.png",
    "./images/image3.png",
  ];
  return (
    <div className="App">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 5 }}>
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={"image-" + i}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

// Version 2 Using Custom Library built on top of Masonry
function AppV1() {
  const images = [
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png",
    "./images/image3.png",
    "./images/image1.png",

    "./images/image2.png",
    "./images/image3.png",
    "./images/image4.png",
    "./images/image2.png",

    "./images/image1.png",

    "./images/image1.png",
    "./images/image5.png",
    "./images/image2.png",
    "./images/image3.png",
  ];
  return (
    <div className="App">
      <div className="grid">
        {images.map((image, i) => (
          <div key={i} className="grid-item">
            <img key={i} src={image} alt={"image-" + i} />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default App;
export default AppV1;

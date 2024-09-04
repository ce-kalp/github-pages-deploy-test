import "./AppV1.css";

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

export default App;

import React from "react";
import "./Gallery.css";

import Rectangle67 from "../../assets/Rectangle 67 .png";
import Rectangle68 from "../../assets/Rectangle 68.png";
import Rectangle69 from "../../assets/Rectangle 69.png";
import Rectangle70 from "../../assets/Rectangle 70.png";
import Rectangle71 from "../../assets/Rectangle 71.png";
import Rectangle72 from "../../assets/Rectangle 72.png";
import Rectangle73 from "../../assets/Rectangle 73.png";
import Rectangle74 from "../../assets/Rectangle 74.png";

interface GalleryItem {
  src: string;
  height: string;
}

interface GalleryData {
  column1: GalleryItem[];
  column2: GalleryItem[];
  column3: GalleryItem[];
  column4: GalleryItem[];
}

const Gallery: React.FC = () => {
  const galleryData: GalleryData = {
    column1: [
      { src: Rectangle67, height: "450px" },
      { src: Rectangle68, height: "294px" },
    ],
    column2: [
      { src: Rectangle69, height: "287px" },
      { src: Rectangle70, height: "457px" },
    ],
    column3: [
      { src: Rectangle71, height: "444px" },
      { src: Rectangle72, height: "300px" },
    ],
    column4: [
      { src: Rectangle73, height: "372px" },
      { src: Rectangle74, height: "372px" },
    ],
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {(Object.keys(galleryData) as Array<keyof GalleryData>).map(
          (column) => (
            <div key={column} className="gallery-column">
              {galleryData[column].map((item, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  style={{
                    height: item.height,
                  }}
                >
                  <img src={item.src} alt={`Gallery ${index}`} />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Gallery;

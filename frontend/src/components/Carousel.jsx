// Carousel.jsx
import React, { useState, useEffect } from "react";
import "../styles/Carousel.css"; // Import CSS for styling

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const photos = [
        "/images/photo1.png",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo5.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Adjust the interval time as needed (in milliseconds)
        return () => clearInterval(interval);
    }, [currentIndex, photos.length]);

    return (
        <div className="carousel-container">
            {photos.map((photo, index) => (
                <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className={index === currentIndex ? "active" : ""}
                />
            ))}
        </div>
    );
}

export default Carousel;

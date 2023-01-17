import React, {useState, useEffect} from "react";
import "../assets/style/main.css";

const Carousel = () => {
    const data = ['1', '2', '3']
    const [currentIndex, setCurrentIdenx] = useState(0)
    const carouselInfinteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIdenx(0)
        }
        return setCurrentIdenx(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfinteScroll()}, 4000)

   return () => clearInterval(interval)})

   return (
    <div className="carousel-container">
    {data.map((item, index) => {
        return <h1 className="carousel-item" style={{ transform: `translate(-${currentIndex * 100}%)`}} key={index}>{item}</h1>})
    }
    </div>
   )
}

export default Carousel
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "/images/1.jpg" },
    { url: "/images/2.jpg" },
    { url: "/images/3.jpg" },
    { url: "/images/4.jpg" },
    { url: "/images/6.jpg" },
];

const Slider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={1902}
                height={800}
                images={images}
                showBullets={true}
                showNavs={true}
                slideDuration={0.5}
                navStyle={2}
                loop={true}
                autoPlay={true}
            />
        </div>
    );
}

export default Slider;
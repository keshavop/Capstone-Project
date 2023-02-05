import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://raw.githubusercontent.com/keshavop/Capstone-Project/master/public/images/1.jpg" },
    { url: "https://github.com/keshavop/Capstone-Project/blob/master/public/images/2.jpg?raw=true" },
    { url: "https://raw.githubusercontent.com/keshavop/Capstone-Project/master/public/images/3.jpg" },
    { url: "https://raw.githubusercontent.com/keshavop/Capstone-Project/master/public/images/4.jpg" },
    { url: "https://raw.githubusercontent.com/keshavop/Capstone-Project/master/public/images/6.jpg" },
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
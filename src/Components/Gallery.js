import React from 'react'
import "./Gallery.css"

function Gallery() {

    return (
        <div className="photo-gallery py-4 py-xl-5" id='gallery'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Our Painting</h2>
                        <p className="w-lg-50">I found I could say things with color and shapes that I couldn't say any other way—things I had no words for.</p>
                    </div>
                </div>
                <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos">
                    <div className="col item" id='img'><img className="img-fluid" src="https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://i.pinimg.com/564x/ea/6a/ef/ea6aeffeffa8a638673ebbb0a31c1e16.jpg" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://i.pinimg.com/736x/a4/fd/16/a4fd16e741b9170ef3fefb212547bd92.jpg" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://i.pinimg.com/564x/c4/4d/f6/c44df6b92b3935a91e7047b821000bc4.jpg" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://i.pinimg.com/564x/c2/d7/d6/c2d7d655bbdd94ac096ce483d5f9a41a.jpg" /></div>
                    <div className="col item" id='img'><img className="img-fluid" src="https://i.pinimg.com/564x/e7/05/4d/e7054d67098f580086ff0f8fd1ea6241.jpg" /></div>
                </div>
            </div>
        </div>
    )
}

export default Gallery

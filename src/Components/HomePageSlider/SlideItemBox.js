import React from 'react'

export default function SlideItemBox() {
    return (
        <div className="slide-type-box bg-image" style ={{ backgroundImage: "url(./assets/images/productimage.png)" }}>
            <div className="price-area py-3 px-4 bg-dark-blue position-absolute text-white d-flex">
                <span className="h2 mb-0 card-title fs-1"><i className="fas fa-lira-sign fa-xs"></i> 1.339</span>
            </div>
        </div>
    )
}

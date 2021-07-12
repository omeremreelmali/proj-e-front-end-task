import React from 'react'

export default function SlideItem() {
    return (
        <div className="slide-type-2">
            <div className="card text-center w-100" style={{ height: "500px" }}>
                <div className="bg-image slide-item-image" style={{ backgroundImage: "url(./assets/images/photoslide.png)" }}> </div>
                <div className="card-body px-2 pt-4">
                    <p className="card-text">IPHONE 6 16 GB AKILLI TELEFON UZAY GRİSİ</p>
                    <span className="h2 mb-0 card-title fs-1"><i className="fas fa-lira-sign fa-xs"></i> 1.339</span>
                </div>
            </div>
        </div>

    )
}

import React from 'react'

export default function ProductCard() {
    return (
        <div class="card text-center">
            <img class="card-img-top" src="./images/phone.jpg" alt="Card image cap" />
            <div class="card-body">
                <p class="card-text"><span style="color: #FF9101;" ><i class="fas fa-star"></i> 4,6 </span> (122 Yorum)</p>
                <p class="card-text mb-0">PA2N0006TR</p>
                <p class="card-text">IPHONE 6 16 GB AKILLI TELEFON UZAY GRİSİ</p>
                <h2 class="card-title  extra-bold" style="color: #1564C0; font-weight:bold;"><i class="fas fa-lira-sign fa-xs"></i> 1.339</h2>
                <p class="card-text mt-3" style="font-weight:bold; color: #E03B5D;">YALNIZCA 2 ÜRÜN KALDI!</p>
                <a href="#" class="btn text-secondary border-0" style="background-color: #EEEEEE; ">BUGÜN KARGODA</a>
            </div>
        </div>
    )
}

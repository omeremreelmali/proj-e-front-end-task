import React from 'react'

export default function Footer() {
    return (
        <footer className="py-5">
            <section className="footer-top border-bottom px-5">
                <div className="footer-area py-5 mx-auto text-white">
                    <div className="row">
                        <div className="col">
                            <span className="title">
                                KURUMSAL
                            </span>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="#">
                                        Hakkımızda
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Müşteri Hizmetleri
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Sipariş Aşamaları
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Sıkça Sorulan Sorular
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        İnsan Kaynakları
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Gizlilik Politikamız
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group no-title">
                                <li className="list-group-item">
                                    <a href="#">
                                        İletişim
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Vatan Card
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Servis Takip Formu
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Mağazalar
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        İşlem Rehberi
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col">
                            <span className="title">
                                KATEGORİLER
                            </span>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="#">
                                        Bilgisayar
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Cep Telefonu
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Tablet PC
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Akıllı Saat
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Vestel TV
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Otun Bilgisayarı
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group no-title">
                                <li className="list-group-item">
                                    <a href="#">
                                        Küçük Ev Aletleri
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Kişisel Bakım Ürünleri
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Elektrikli Süpürge
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Ütü
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Masa Üstü Bilgisayar
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Sabit Diskler
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col">
                            <span className="title">
                                ÖZEL ÜRÜNLER
                            </span>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="#">
                                        iPhone 7
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        iPhone 6S
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        iPhone 5S
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        iPhone SE
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        General Mobile 5 Plus
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Galaxy S7
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Note 5
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Galaxy S6
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom py-5 d-flex justify-content-between ">
                <div className="left my-auto">
                        <span className="h6 d-block">Türkiyenin Teknoloji Hiperstoru</span>
                        <copyright className="m-0">Copyright 2016 Vatan Bilgisayar San ve Tic A.Ş.</copyright>
                </div>
                <div className="right my-auto">
                    <img src="./assets/images/payment.png" alt="payment-method"/>
                </div>
            </section>
        </footer>
    )
}

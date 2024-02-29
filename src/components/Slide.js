import React from 'react'

export default function Slide() {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="./images/1.jpg" class="card-img-top" alt="1" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./images/2.jpg" class="card-img-top" alt="2" />

                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./images/3.jpg" class="card-img-top" alt="3" />

                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./images/4.jpg" class="card-img-top" alt="3" />

                    </div>

                    <div class="carousel-item">
                        <img src="./images/5.jpg" class="card-img-top" alt="4" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
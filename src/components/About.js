import React from 'react'
import back from "../images/back.jpg"

export default function About() {
    return (
        <>
            <div className="container-fulid cont mb-5" id="roll">
                <div className="container-fulid  pt-lg-0 " >
                    <div className="container my-5">
                        <div className="row g-5" >
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                    <img class="position-absolute w-75 h-100 my-5" src={back} alt="" style={{ objectFit: "cover" }} />
                                    <img class="position-absolute top-0 start-0 bg-white my-5 pe-3 pb-3" src={back} alt="" style={{ width: "200px", height: "200px" }} />
                                </div>
                            </div>

                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="h-100">
                                    <h1 className="text-danger text-uppercase mb-2 py-4">About Us</h1>
                                    <h1 className="display-6 mb-4 py-3">Our webiste Help Audince To get the scores & Get A breif news about the Match played</h1>
                                    <p>Don't just play sports,make it worth by scoring it!</p>
                                    <p className="mb-4">Find the features that helps u keep update with your scores and teams, you would never want to miss the match score, so it will be saved and can be accesed anytime you need to see it.  </p>
                                    <div className="row gx-5">
                                        <strong> Email : mproject@gmail.com</strong>
                                        <div className="rowgx-5 ">
                                            <strong>   Contact on : +91 0000000000</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
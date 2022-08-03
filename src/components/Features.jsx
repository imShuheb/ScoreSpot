import React from 'react'
import back from "../images/back.jpg"

export default function Features() {
    return (
        <>
            <div className="container-fulid pt-lg-0 pb-5" id="roll-fet">
                <div className="container" >
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp tick" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="text-danger text-center
                                 text-uppercase mb-2 py-4">Features</h1>
                                <h1 className="display-6 mb-4 py-3 ">Why Scorespot?</h1>

                                {/* feature box */}
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center mb-3">
                                            <li className="mb-0 h5">Ball To Ball Scoring</li>
                                        </div>
                                        <span>10x better scoring than paper-based scoresheets.</span>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                        <div className="d-flex align-items-center mb-3">
                                            <li className="mb-0 h5">Tournaments</li>
                                        </div>
                                        <span>Register and manage your entire tournament effortlessly.</span>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="d-flex align-items-center mb-3">
                                            <li className="mb-0 h5">Cricket Feed - News</li>
                                        </div>
                                        <span>Enjoy daily polls, quizzes, trivia, videos, news and much more.</span>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                        <div className="d-flex align-items-center mb-3">
                                            <li className="mb-0 h5">Score Engine</li>
                                        </div>
                                        <span>Easy scoring interface</span>
                                    </div>

                                    <div className="col-sm-6 wow fadeIn " data-wow-delay="0.4s">
                                        <div className="d-flex align-items-center mb-3">
                                            <li className="mb-0 h5">Leaderboard</li>
                                        </div>
                                        <span>Get international-grade scorecard for all your matches.</span>
                                    </div>
                                </div>
                                {/* feature box-end */}

                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp py-5" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: " 400px" }} >
                                <img className="position-absolute w-100 h-100" src={back} alt="Images" style={{ objectFit: " cover" }} />
                                <img className="position-absolute top-0 end-0 bg-white ps-3 pb-3" src={back} alt="Images" style={{ width: "250px", height: "200px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
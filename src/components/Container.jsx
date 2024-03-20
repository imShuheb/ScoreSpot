import React from 'react'
import img from '../images/background.jpg'
import '../css/style.css'
// import Newsitem from './Newsitem'

export default function Container() {

    return (
        <div className='container-fulid gy-0 py-5 my-2' id='roll-back'> 
            <div className="container-fluid p-0 wow fadeIn " data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 max" src={img} alt="Imagehere" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">
                                             <h1 className="display-2 text-light mb-5 animated slideInDown"><p className=''> Get Your Scores Here </p></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Newsitem/> */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

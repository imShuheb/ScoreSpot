import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../Navbars/HomeNav'

const Score = () => {
  return (
    <>
      <HomeNav />
      <div className="container-size  px-5 mt-5 " style={{ marginLeft: "150px" }}>
        <div className="card-header">Who won The Toss</div>
        <div className="row">
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-5" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title ">Team 1 Name </h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                  <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Won Toss</label>
                </div>

              </div>
            </div>
          </div>
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">Team 2 Name </h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Won Toss</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-header">Choose To</div>
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">To Bat </h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                  <input class="form-check-input1" type="radio" name="balltype" id="inlineRadio1" value="bat" />
                  <label class="form-check-label" for="inlineRadio1">Choose</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">To Field </h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                  <input class="form-check-input1" type="radio" name="balltype" id="inlineRadio1" value="field" />
                  <label class="form-check-label" for="inlineRadio1">Choose</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <Link to='live'className='btn-btn-danger'>Start</Link>
        </center>
      </div>


    </>
  )
}

export default Score

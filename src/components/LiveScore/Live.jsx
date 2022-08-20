import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../Navbars/HomeNav';

function Live() {
  return (
    <div>
      <HomeNav />
      <div className="container-size  px-5 mt-5 " style={{ marginLeft: "150px" }}>
        <div className="card-header">Select the bats Man</div>
        <div className="row">
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-5" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title ">Stricker </h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                {/* <a className='no-p-m' onClick={event => handle(event, ele)} role="button" >select</a> */}
                </div>

              </div>
            </div>
          </div>
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">Non-Stricker</h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                  <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Won Toss</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-header">Select the Baller</div>
          <div className="col-sm-6 p-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">Baller </h5>
                <hr />
                <div class="form-check form-check-inline mx-5">
                  <input class="form-check-input1" type="radio" name="balltype" id="inlineRadio1" value="bat" />
                  <label class="form-check-label" for="inlineRadio1">Choose</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <Link to='' className='p-m-0'>Start</Link>
        </center>
      </div>
    </div>
  )
}

export default Live

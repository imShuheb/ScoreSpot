import React, { useState } from 'react'
import HomeNav from '../Navbars/HomeNav'
import './live.css'
const Score = () => {
  const [data, setdata] = useState('')

  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }
  return (
    <>
      <HomeNav />

      <center>
        <nav class="navbar navbar-light bg-danger">
          <span class="navbar-brand1 ">Team A VS Team B
            <p>Total Over 20 | ID 01234</p></span>
        </nav>
      </center>

      <div className="row">
        <div className="row">
          <div className="col-lg-6">
            <div class="wc-table-wrapper">
              <div class="table-section">
                <div>

                  <table class="wc-table">
                    <thead>
                      <tr class="head">
                        <th colspan="3">Team-A</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rohit</td>
                        <td>140</td>
                        <td>113</td>
                      </tr>
                      <tr>
                        <td>Kohli</td>
                        <td>77</td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td>KL Rahul</td>
                        <td>57</td>
                        <td>78</td>
                      </tr>
                      <tr>
                        <td>Hardik</td>
                        <td>26</td>
                        <td>19</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div>

                  <table class="wc-table">
                    <thead>
                      <tr class="head">
                        <th colspan="3">Team-A</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Fakhar</td>
                        <td>62</td>
                        <td>75</td>
                      </tr>
                      <tr>
                        <td>Babar</td>
                        <td>48</td>
                        <td>57</td>
                      </tr>
                      <tr>
                        <td>Imad</td>
                        <td>22<sup>*</sup></td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Sarfaraz</td>
                        <td>12</td>
                        <td>30</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>


          <div className="col-lg-6">
            <div class="wc-table-wrapper">
              <div class="table-section">
                <div>

                  <table class="wc-table">
                    <thead>
                      <tr class="head">
                        <th colspan="3">Team-B</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rohit</td>
                        <td>140</td>
                        <td>113</td>
                      </tr>
                      <tr>
                        <td>Kohli</td>
                        <td>77</td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td>KL Rahul</td>
                        <td>57</td>
                        <td>78</td>
                      </tr>
                      <tr>
                        <td>Hardik</td>
                        <td>26</td>
                        <td>19</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div>

                  <table class="wc-table">
                    <thead>
                      <tr class="head">
                        <th colspan="3">Team-B</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Fakhar</td>
                        <td>62</td>
                        <td>75</td>
                      </tr>
                      <tr>
                        <td>Babar</td>
                        <td>48</td>
                        <td>57</td>
                      </tr>
                      <tr>
                        <td>Imad</td>
                        <td>22<sup>*</sup></td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Sarfaraz</td>
                        <td>12</td>
                        <td>30</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="row Scorebtns bg-danger">
        <div className="div">Press The Buttons Bellow To Score</div>
      </div>
      <center>
        <div className="col-sm mx-3 py-3 score1to6" >
          <button class="btn btn-primary mx-4 height" value='1'><i class="fa-solid fa-1 fa-2x" ></i></button>
          <button class="btn btn-primary mx-4 height" value='2'><i class="fa-solid fa-2 fa-2x" ></i></button>
          <button class="btn btn-primary mx-4 height" value='3'><i class="fa-solid fa-3 fa-2x" ></i></button>
          <button class="btn btn-primary mx-4 height" value='4'><i class="fa-solid fa-4 fa-2x" ></i></button>
          <button class="btn btn-primary mx-4 height" value='5'><i class="fa-solid fa-5 fa-2x" ></i></button>
          <button class="btn btn-primary mx-4 height" value='6'><i class="fa-solid fa-6 fa-2x" ></i></button>
        </div>
      </center >

      <div className="col p-2">
        <center>
          <button value='1' name='wide' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">Wide (No Bye)</button>
          <button value='1' name='no-ball' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">No Ball (No Bye)</button>
          <button value='0' name='out' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">OUT</button>
          <button value='1' name='wide-with-bye' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">Wide (With Bye)</button>
          <button value='2' name='no-ball-with-bye' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">No Ball (With Bye)</button>
          <button value='2' name='no-ball-with-run' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">No Ball (With Run)</button>
          <button value='2' name='leg-byes' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">Leg Byes</button>
          <button value='1' name='byes' onClick={onChange} class="btn mx-3 btn-danger btn-rounded fa-1x">Byes</button>

        </center>
      </div>

      <div className="row  SyncMatch  bg-danger">
        <div className="div">Sync Match Status With Server</div>
      </div>
      <div className='SaveScores my-3'>
        
        <center >

          <button type="button" class="btn mx-3 btn-success btn-rounded fa-1x" onClick={() => { alert('Saved on server Thank you') }}>Save Scores on Server</button>
        </center>
      </div>
    </>
  )
}

export default Score

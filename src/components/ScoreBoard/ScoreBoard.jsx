import React from 'react'

export default function ScoreBoard() {
  return (
    <>
      <center>
                <nav class="navbar navbar-light bg-danger">
                    <span class="navbar-brand1 ">Team A VS Team B
                        <p>Total Over 20 | ID 01234</p></span>
                </nav>
            </center>
            <div className="row Scorebtns bg-danger my-5">
                <div className="div">Press The Buttons Bellow To Score</div>
            </div>
            <center>
                <div className="col score1to6 mx-3 py-3">

                    <a class="btn btn-primary mx-4" style={{ height: '50px', width: '50px' }} href="/" role="button"><i
                        class="fa-solid fa-1 fa-2x" ></i></a>

                    <a class="btn btn-primary mx-4" style={{ height: '50px', width: '50px' }} href="/" role="button"><i
                        class="fa-solid fa-2 fa-2x" ></i></a>

                    <a class="btn btn-primary mx-4" style={{ height: '50px', width: '50px' }} href="/" role="button"><i
                        class="fa-solid fa-3 fa-2x" ></i></a>

                    <a class="btn btn-primary mx-4" style={{ height: '50px', width: '50px' }} href="/" role="button"><i
                        class="fa-solid fa-4 fa-2x" ></i></a>

                    <a class="btn btn-primary mx-4" style={{ height: '50px', width: '50px' }} href="/" role="button"><i
                        class="fa-solid fa-5 fa-2x" ></i></a>

                    <a class="btn btn-primary mx-4" style={{ height: '50px', width: '50px' }} href="/" role="button"><i
                        class="fa-solid fa-6 fa-2x" ></i></a>

                </div>
            </center >

            <div className="col m-5">
                <center>
                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">Wide (No Bye)</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">No Ball (No Bye)</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">OUT</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">Wide (With Bye)</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">No Ball (With Bye)</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">No Ball (With Run)</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">Leg Byes</button>

                    <button type="button" class="btn mx-3 btn-danger btn-rounded fa-1x">Byes</button>

                </center>
            </div>

            <div className="row  SyncMatch  bg-danger">
                <div className="div">Sync Match Status With Server</div>
            </div>
            <div className='SaveScores my-3'>
                <center>
                    <button type="button" class="btn mx-3 btn-success btn-rounded fa-1x">Save Scores on Server</button>
                </center>
            </div>
    </>
  )
}

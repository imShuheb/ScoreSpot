import React, { useContext, useState } from 'react'
import userContext from '../../../context/User/userContext'

const Teamselect = () => {
  const context = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState('')
  const [repeat, setRepeat] = useState('')
  const data = context.teams;

  const write = () => {
    document.write("Refresh Page")
  }

  const handleSide = (event, mess, name) => {
    const iteams = { mess, name }
    if (context.save.length > 1) {
      return alert("2 Teams are already selected")
    } else {
      if (context.save.includes(mess)) {
        return alert("Teams already exists")
      } else {
        context.setSave([...context.save, iteams])
      }
    }
  }

  const handle = (event, value) => {
    setRepeat(value)
    document.getElementById('toggle-list').click()
  }


  const clear = () => {
    setRepeat('')
  }
  return (
    <>
      <div className="teamsContainer">
        <center>
          <input type="text" placeholder='Search' className='search' onChange={(event) => { setSearchTerm(event.target.value) }} />
        </center>
        {/* modal start */}
        <button type="button" className="btn btn-primary" hidden id='toggle-list' data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <center>

            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Team members</h5>
                </div>
                <ul>
                  {Array.isArray(repeat.data)
                    // eslint-disable-next-line 
                    ? repeat.data.map(ele => {
                      return (
                        <div className="container my-3 card-size" key={ele._id}>
                          <li>
                            <ul>
                              <li>    <img src={ele.profileImg} style={{ width: '110px', height: 'auto', borderRadius: '100px' }} alt="" />  </li>
                              <li>{ele.fname} {ele.lname}</li>
                              <li>{ele.phone} </li>
                              <ol className='' style={{ listStyleType: 'decimal', padding: '0', margin: '0' }}>
                                {ele.batsman ? <>
                                  <li>
                                    <small>
                                      <strong>
                                        <img src="https://img.icons8.com/material-outlined/20/000000/baseball-player.png" className='mx-1' alt='-' />  {ele.batsman}
                                      </strong>
                                    </small>
                                  </li>
                                </> : ''}
                                {ele.wicketKeeper ? <>
                                  <li>
                                    <small>
                                      <strong>
                                        <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/20/000000/external-wicket-sports-and-games-icongeek26-glyph-icongeek26.png" className='mx-1' alt='-' />  {ele.wicketKeeper}
                                      </strong>
                                    </small>
                                  </li>
                                </> : ''}
                                {ele.bowller ? <>
                                  <li>
                                    <small>
                                      <strong>
                                        <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/20/000000/external-cricket-ball-sports-and-games-icongeek26-glyph-icongeek26.png" className='mx-1' alt='-' /> {ele.bowller}
                                      </strong>
                                    </small>
                                  </li>
                                </> : ''}
                                {ele.allRounder ? <>
                                  <li>
                                    <small>
                                      <strong>
                                        <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/20/000000/external-cricket-hobbies-and-interest-smashingstocks-mixed-smashing-stocks.png" className='mx-2' alt='-' />    {ele.allRounder}
                                      </strong>
                                    </small>
                                  </li>
                                </> : ''}
                              </ol>
                            </ul>
                            <br />
                          </li>
                        </div>
                      )
                    }) : write}
                </ul>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={clear}>Close</button>
                </div>
              </div>
            </div>
          </center>

        </div>

        {/* modal end */}

        {Array.isArray(data)
          // eslint-disable-next-line 
          ? data.filter((val) => {
            if (searchTerm === " ") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map(ele => {
            return (
              <div className="container my-3 card-size" key={ele._id}>
                <div className="card mx-4">
                  <div className="card-body row justify-content-between no-p-m ">
                    <h4 className=" text-uppercase col-sm-6 text-center"> {ele.name} </h4>
                    <div className="col-sm-6">
                      <div className="row justify-content-end text-center" style={{ marginLeft: "30px" }}>
                        <a className='no-p-m' onClick={event => handle(event, ele)} role="button" >Detials</a>
                        <a className='no-p-m' onClick={event => handleSide(event, ele, ele.name)} role="button" >Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) : write}
      </div>
    </>
  )
}

export default Teamselect


import React from 'react'
import './Dashboard.css'

import del  from '../components/LostAndFound/lfimages/delete.png'
import edit from '../components/LostAndFound/lfimages/edit.png'
import icon from '../components/LostAndFound/lfimages/icon.jpg'
import logout from '../components/LostAndFound/lfimages/logout.png'
import logo from '../components/LostAndFound/lfimages/logo.png'
import Dcontext from '../components/Dashcontext/Dcontext.js';
import Authcontext from '../components/Acontext/Authcontext.js';
import { useEffect,useContext ,useState} from 'react'
const Dashboard = () => {

          const context=useContext(Dcontext);
          const context1=useContext(Authcontext);
          const{notes,getEvent,getTravel,getHelp,getItem,getTicket}=context;
          const{user,getUser}=context1;
            const data=[]
            const[elements,setelements]=useState(data)
            const[elements1,setelements1]=useState(data)
            const[elements2,setelements2]=useState(data)
            const[elements3,setelements3]=useState(data)
            const[elements4,setelements4]=useState(data)
           
            
            const[profileId,setId]=useState("profile")

          useEffect(() => {
            
              
              getTravel();
              getUser();
              
              setelements(notes);
              
              }, [])

              const clickTravel=async()=>{
              getTravel();
              
              setelements(notes);
              setId("profile")
              
              }
              const clickTicket=async()=>{
                getTicket();
                
                setelements3(notes);
                setId("profile3")
                
                }
                const clickItem=async()=>{
                  getItem();
                  
                  setelements1(notes);
                  setId("profile1")
                  
                  }
                  const clickHelp=async()=>{
                    getHelp();
                    
                    setelements4(notes);
                    setId("profile4")
                    
                    }
                    const clickEvent=async()=>{
                      getEvent();
                      
                      setelements2(notes);
                      setId("profile2")
                      
                      }
            
          return (
            <>
            
            
              <div className="main-admin-container">
              <div className="profile-admin-container">
                <div className="card">
                  <div className="card-header"></div>

                  <div className="card-body">
                    
                    <h2 className="profile-name">{user.name}</h2>
                    
                    <h4 className="bio">{user.rollno}</h4>
                    
                    <h4 className="bio">
                    {user.email}
                    </h4>
                  </div>
                </div>
                <div className="map-redirect-control">
                  <img src={logo}/>
                
                  <h3>Easygo</h3>
                </div>
                <div className="logout-control">
                  <img src={logout} />
                  <h3>Logout</h3>
                </div>
              </div>
              <div className="main-admin-control-container">
                <div className="count">
                  <div className="update-count-container">
                    <div className="update-count-markers">
                      <h3>Total uploads</h3>
                      <h2>50</h2>
                    </div>
                    
                  </div>
                  <div className="marker-count-container">
                    <div className="marker-count">
                      <h3>Travelling</h3>
                      <h2 className="marker-academic">10</h2>
                    </div>
                    <div className="marker-count">
                      <h3>Tickets exchange</h3>
                      <h2 className="marker-nonacademic">10</h2>
                    </div>
                    <div className="marker-count">
                      <h3>Lost and found</h3>
                      <h2 className="marker-poi">10</h2>
                    </div>
                    <div className="marker-count">
                      <h3>Notices</h3>
                      <h2 className="marker-hor">10</h2>
                    </div>
                    <div className="marker-count">
                      <h3>Emergency items</h3>
                      <h2 className="marker-oaf">10</h2>
                    </div>
                  </div>
                </div>




          <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <button className="nav-link active" id="home-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="home" aria-selected="true" onClick={clickTravel}>About</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" id="profile-tab" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile" aria-selected="false"onClick={clickItem}>Timeline</button>
                                        </li>
                                        <li className="nav-item">
                                          <button className="nav-link" id="profile-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile" aria-selected="false"onClick={clickEvent}>Timeline</button>
                                      </li>
                                      <li className="nav-item">
                                        <button className="nav-link" id="profile-tab" data-toggle="tab" href="#profile3" role="tab" aria-controls="profile" aria-selected="false"onClick={clickTicket}>Timeline</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="profile-tab" data-toggle="tab" href="#profile4" role="tab" aria-controls="profile" aria-selected="false"onClick={clickHelp}>Timeline</button>
                                    </li>
                                    </ul>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    

                                {elements.map((product) => {
                                  return(
                                  
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="admin-control-markers-container">
                                      <div className="admin-control-markers">
                                        <div className="single-marker">
                                          <h5>{product.from} - {product.to}</h5>
                                          <div className="marker-links">
                                            <a href="edit.html?id="><img src={edit} /></a>
                                            <a type="button" className="marker-delete-btn">
                                              <img src={del} />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    )
                                })}

                                {elements1.map((product) => {
                                  return(
                                  
                                    <div className="tab-pane fade show active" id="profile1" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="admin-control-markers-container">
                                      <div className="admin-control-markers">
                                        <div className="single-marker">
                                          <h5>{product.status} - {product.on}</h5>
                                          <div className="marker-links">
                                            <a href="edit.html?id="><img src={edit} /></a>
                                            <a type="button" className="marker-delete-btn">
                                              <img src={del} />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    )
                                })}
                                 {elements2.map((product) => {
                                  return(
                                  
                                    <div className="tab-pane fade show active" id="profile2" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="admin-control-markers-container">
                                      <div className="admin-control-markers">
                                        <div className="single-marker">
                                          <h5>{product.ename} - {product.eon}</h5>
                                          <div className="marker-links">
                                            <a href="edit.html?id="><img src={edit} /></a>
                                            <a type="button" className="marker-delete-btn">
                                              <img src={del} />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    )
                                })}
                                {elements3.map((product) => {
                                  return(
                                  
                                    <div className="tab-pane fade show active" id="profile3" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="admin-control-markers-container">
                                      <div className="admin-control-markers">
                                        <div className="single-marker">
                                          <h5>{product.to} - {product.on}</h5>
                                          <div className="marker-links">
                                            <a href="edit.html?id="><img src={edit} /></a>
                                            <a type="button" className="marker-delete-btn">
                                              <img src={del} />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    )
                                })}
                                {elements4.map((product) => {
                                  return(
                                  
                                    <div className="tab-pane fade show active" id="profile4" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="admin-control-markers-container">
                                      <div className="admin-control-markers">
                                        <div className="single-marker">
                                          <h5>{product.name} - Help</h5>
                                          <div className="marker-links">
                                            <a href="edit.html?id="><img src={edit} /></a>
                                            <a type="button" className="marker-delete-btn">
                                              <img src={del} />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    )
                                })}
                                    
                                    
                                          
                                              
                                </div>
                            </div>
                        </div>
                    </form>           
                </div> 


                
                </div>
                
              </div>
              
              
   </>
  )
}

export default Dashboard

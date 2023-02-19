import React from 'react';
// import { LeaderBoardContext } from '../Context/Context';
import  { datas } from './Scores'



const StudentDetails = () => {
    
  return ( 
   
    <>
  
    <div>

  {datas.map((value, index)=>{
      return (  <div className="row" key={index}>
        <div className="profile-card">
        <div className="imgCard">
            <img src={value.image} alt="#" />

        </div>
        <div className="profileDetails">
            <p>Name : {value.fullName} </p>
            <p>Path :{value.path}  </p>
            <p>Date of Birth :{value.Dob}</p>

        </div>
    </div>

        <div className="score-row">
       <h2>Weekly Task Scores</h2>

       <table >
  <thead>
    <tr>
      <th>Week 1</th>
      <th>Week 2</th>
      <th>Week 3</th>
      <th>Week 4</th>
      <th>Week 5</th>
      <th>Week 6</th>
    </tr>
  </thead>
  <tbody>

    <tr>
    <td>{value.scores.week1} </td>
      <td> {value.scores.week2}</td>
      <td>{value.scores.week3}</td>
      <td>{value.scores.week4}</td>
      <td>{value.scores.week5}</td>
      <td>{value.scores.week6}</td>
    </tr>

  
   
  </tbody>
</table>



    </div>
             
        </div>
       )
    })}
       
    
       
    </div>
    
    </>
  )
}

export default StudentDetails;
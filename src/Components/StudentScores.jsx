import React,{useState, useContext} from 'react';
import { LeaderBoardContext } from '../Context/Context';
import Provider from '../Context/Provider';
import Scores, { datas } from './Scores'




const StudentScores = (props) => {

    // const {LeaderBoardContext, datas} = useContext(LeaderBoardContext);
    const {data} =props;
    
    const renderTableData =()=>{
     
      if (data.length !==0){ 
        data?.map((items, index)=>{

          console.log(items)
          return  (
          <th>{items.fullName}s</th>
         
        )

        })
       
      }
    }
  return (
    <>


   
        <div className="score-row">
          <h2>Weekly Task Scores</h2>

          <table >
      <thead>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>

        {data.map((value, index)=>{
          return ( <tr><td>{value.scores.week1}</td>
          </tr> )
        })}
        {/* <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>$80</td>
        </tr> */}
      </tbody>
    </table>



          {/* <table>
      <thead>
        <tr>
          <th>Week 1</th>
          <th>Week 2</th>
          <th>Week 3</th>
          <th>Week 4</th>
        </tr>
        {/* <tr> { renderTableData()}</tr> */}
      {/* </thead>
      <tbody style={{backgroundcolor:'red', height:'50px',width:'100%', border:'1px solid black'}}> */}
      
    {/*    
      </tbody>
    </table> */} 
        </div>
       
    </>
  )
}

export default StudentScores
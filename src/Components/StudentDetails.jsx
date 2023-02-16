import React from 'react'
import Profile from './Profile'
import StudentScores from './StudentScores'

const StudentDetails = () => {
  return (
    <>
    <div>

        <div className="row">
             <Profile />
             <StudentScores />
        </div>
        <div className="row">
             <Profile />
             <StudentScores />
        </div>
        <div className="row">
             <Profile />
             <StudentScores />
        </div>
       
    </div>
    
    </>
  )
}

export default StudentDetails
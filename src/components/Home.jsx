import React from 'react'
import useJobData from '../hooks/useJobData'

const Home = () => {
    const {jobData, isLoading} = useJobData() //using hooks to get data in my component
    console.log(jobData, isLoading)
  return (
    
    <div>
      Hello
    </div>
  )
}

export default Home

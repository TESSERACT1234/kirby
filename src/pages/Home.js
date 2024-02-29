import React from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Card5 from '../components/Card5'
import Card6 from '../components/Card6'
import Card7 from '../components/Card7'
import Card8 from '../components/Card8'
import './Home.css';


function Home() {
    return (
        <div>
            <h2> Our Expertise in Varied Applications</h2>
            <div className='sample' >
            <Card1 /> 
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
            <Card8 />
        </div>
        </div >
    )
}

export default Home

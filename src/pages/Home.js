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
// import backgroundImage from '../public/backgd.png'
// import backgroundImage from '../../public/images/BG.png';


function Home() {
    return (
        <div style={{
            backgroundImage: `url("./images/backgd.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            backgroundPosition: 'center', height: '1000px'
        }}>
            <h2 className="heading"> Our Expertise in Varied Applications</h2>
            <div className='sample' >
                <h1 className='s'> Our Expertise in Varied Applications</h1>
                <div className='s1' style={{ paddingTop: "250px" }}>
                    <Card1 />
                </div>
                <div className='s2' style={{ paddingTop: "70px" }}>

                    <Card2 />
                    <Card3 />
                </div>
                <div className='s3' style={{ paddingTop: "180px" }}>

                    <Card4 />
                    <Card5 />
                </div>
                <div className='s4' style={{}}>

                    <Card6 />
                    <Card7 />
                    <Card8 />
                    <div />
                </div>
            </div>
        </div >
    )
}

export default Home

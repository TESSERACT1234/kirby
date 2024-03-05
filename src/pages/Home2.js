import React from 'react'
import Card11 from '../components/Card11'
import Card12 from '../components/Card12'
import Card13 from '../components/Card13'

import Card15 from '../components/Card15'
import Card16 from '../components/Card16'
import Card14 from '../components/Card14'
import './Home2.css';
import Carddummy from '../components/Carddummy'
function Home2() {
    return (
        <div>
            <div className='sample'>
             <Carddummy/>
                <div>
                    <Card11 />
                    <Card12 />
                </div>
                <div className='s1' style={{ paddingTop: "70px" }}>
                    <Card13 />
                    <Card14 />
                </div>
                <div>
                   <Card15 />
                   <Card16 />
                   </div>
            </div>
        </div>
    )
}

export default Home2

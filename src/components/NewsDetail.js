import React from 'react'
import './NewsDetail.css'

function NewsDetail() {
    return (
        <div className='Newsdetail' style={{paddingTop:"10rem"}}>
            <div className="container1">
        <div className="info">
            <h1> Kirby Family Day</h1>
            <h4 className='date_newsdetail'> date</h4>
            <p>
                To foster strong relationships among teammates and celebrate their hard work among their loved ones, Kirby organized a Family Day for its staff in Kuwait. Taking place at Al Arabi Sorts Club in Mansouriya,
            </p>
            <p>
                A carnival full of games, Competitions and engagement as our employees showcased their creative skills in a talent show, our vice president James Minato further addressed everyone and their families thanking them for attending this joyous event and convey how kirby building systems became the pioneers of steel building solutions due to the hard work and commitment of our employees.

                It was a day where all gathered to truly reinforce the meaning of what Kirby family stands for.
            </p>
        </div>
        <div className="imgdetail">
        <img src="./images/jan01.png" className="imgdetail1" alt="..."/>
        </div>
        </div>
    </div>
    )
}

export default NewsDetail

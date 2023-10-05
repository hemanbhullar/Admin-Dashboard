import React, { useState } from 'react'
import "./Card.css"
import {LayoutGroup} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
    const [expanded, setExpanded] = useState(false)
  return (
    <LayoutGroup>
        {
            expanded? ('Expanded'): <CompactCard param = {props}/>
        }
    </LayoutGroup>
  )
}

//CompactCard
function CompactCard({param}){
    const Png = param.png;
    return(
        <div className='CompactCard' style={{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow
        }}>
            <div className='radialBar'>
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`}/>
            </div>
            <div className='detail'>
                <Png/>
                <span>{param.value}</span>
                <span> Last 24 hours</span>
            </div>
        </div>

    )
}

export default Card
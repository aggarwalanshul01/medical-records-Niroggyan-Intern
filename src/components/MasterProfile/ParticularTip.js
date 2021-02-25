import React,{useState} from 'react'
import { Route, Link,NavLink } from "react-router-dom";


function ParticularTip(props) {
    
    let data=props.data;
    let index=props.index;
    let lang=props.Lang;
    let func=props.func;
    let presvgPath='/assets-blue/';
    let classs=props.classs;

    let getDataFullHead=()=>{
        let d=data;
        if(lang=='hindi' && d.head.hindi){
            return d.head.hindi
        }
        
        return d.head.en
    }
    let getDataFull=()=>{
        let d=data;
        if(lang=='hindi' && d.tip.hindi){
            return d.tip.hindi.substring(0,40)
        }
        
        return d.tip.en.substring(0,40)
    }

    return (
        <div>
            <div className = {classs} onClick={
                ()=>{
                    func(index)
                }
            }>
                <div className='particular_tip_svg'>
                    <object data={`${presvgPath}${data.svgImage}`} type="image/svg+xml"></object>
                </div>
                <div className='particular_tip_data'>
                    <span className='particular_tip_data1'>{getDataFullHead()}</span> 
                    <span className='particular_tip_data2'>{getDataFull()}...</span>    
                </div>
                
            </div>

        </div>
        
    )
}

export default ParticularTip

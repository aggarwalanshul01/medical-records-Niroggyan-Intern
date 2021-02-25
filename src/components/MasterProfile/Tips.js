import React,{useState} from 'react'
import { Route, Link,NavLink } from "react-router-dom";
import tips from '../../JsonPassed/Tips'
import '../../css/MasterProfile/Tips.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ParticularTip from './ParticularTip';

function Tips(props) {
    const [active, setactive] = useState(0);

    const getActive=(i)=>{
        setactive(i);
        // console.log(i+"[[]]");
    }

    let profileName=props.profileName;
    let lang=props.Lang;
    let presvgPath='/assets-blue/';
    // {tips[profileName] && tips[profileName][0].tip.en}
    const [onee, setonee] = useState(0);
    const tipsno=[];
    if(tips[profileName]){
        //console.log(profileName+" )))");
        let a = tips[profileName].length;
        for(let i=0;i<a;i++){
            tipsno.push(i);
        }
    }
    const getWidth=()=>{
        if(!tips[profileName]){
            return '100%';
        }
        
        let a = tips[profileName].length;
        return (100/a)+'%';
    }
    let classes='tips_main';
    let getComp=()=>{
        if(onee==0){
            classes='tips_main';
            return <KeyboardArrowDownIcon/>
        }else{
            classes='not_display_Tips tips_main'
            return <KeyboardArrowRightIcon/>
        }
        
    }
    let getDataFullHead=()=>{
        if(!tips[profileName]){
            return null;
        }
        let d=tips[profileName][active];
        if(lang=='hindi' && d.head.hindi){
            return d.head.hindi
        }
        
        return d.head.en
    }
    let getDataFull=()=>{
        if(!tips[profileName]){
            return null;
        }
        let d=tips[profileName][active];
        if(lang=='hindi' && d.tip.hindi){
            return d.tip.hindi
        }
        
        return d.tip.en
    }
    return (
        <div className='tipsHead'>
            <div className='about_top' style={{color:'blue',fontSize:'30px'}}>
                <div className='about_head' style={{fontSize:'30px'}}>
                    {(lang=='eng')?'Tips':'टिप्स'}
                </div>
                <button className='about_button' onClick={()=>{
                    if(onee==0){
                        return setonee(1);
                    }else{
                        return setonee(0);
                    }
                }}>
                    {getComp()}
                </button>
            </div>
            <div className={classes}>
                <div className='tipsInOrder'>
                    {tipsno.map((tip,index)=>{
                        return <div className='tipIntro' style={{width:getWidth()}}><ParticularTip classs={(index==active)?'particular_tip_main particular_tip_main_active':'particular_tip_main'} func={getActive} data={tips[profileName][index]} Lang={lang} index={index} /></div>
                    })}
                </div>
                <div className="tip_opened_data">
                    {getDataFullHead()} {getDataFull()}
                </div>
            </div>
        </div>
    )
}

export default Tips

import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../../JsonPassed/testsDatabase";
import testsOriginal from '../../JsonPassed/curTestCopy';
import { Route, Link, NavLink } from "react-router-dom";

function DashboardProfile(props) {
    let tests=[];
    let results=[];
    for(let i=0;i<testsOriginal.length;i++){
        if(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]==props.data){
            tests.push(TEST_DATABASE_MAPPING[testsOriginal[i].TestName]);
            results.push(testsOriginal[i].TestResultValue);
        }
    }let colored= { normal: "#0F9D58", finalCritial: "#DB4437", oneFromNormal: "#F4B400", twoFromNormal: "#C47D63", threeFromNormal: "#C26564" };
    const getTestName=(test)=>{
        if(props.Lang=='hindi' && TEST_DATABASE[test].displayName.hindi){
            return TEST_DATABASE[test].displayName.hindi
        }return TEST_DATABASE[test].displayName.en;
    }
    const howering=(index,test)=>{
        //
        
        let testDetails=TEST_DATABASE[test];
        let result=results[index];
        let spl=result.split("-");
        if(spl.length>1){
            result=Number(spl[spl.length-1]);
        }
        if(testDetails.sliderType=='LNH'){
            if(result>=testDetails.lowThreshold && result<=testDetails.highThreshold){
                return '#0F9D58';
            }else if(result<testDetails.lowThreshold){
                return '#DB4437'
            }else{
                return '#DB4437';
            }
        }
        //
        else if(testDetails.sliderType=='NH'){
            if(result<=testDetails.highThreshold){
                return '#0F9D58'
            }else{
                return '#DB4437'
            }
        }
        //
        else if(testDetails.sliderType=='LN'){
            let one={backgroundColor:'#DB4437'},onea={};
            let two='#0F9D58'
            if(result<testDetails.lowThreshold){
                return '#DB4437'
            }else{
                return two;
            }
        }
        //
        else if(testDetails.sliderType=='NHH'){
            let one='#0F9D58'
            let two='#F4B400',three='#DB4437';

            if(result<testDetails.boderline){
                return one
            }else if(result>=testDetails.boderline&&result<=testDetails.highThreshold){
                return two
            }else{
                return three
            }
        }
        //
        else if(testDetails.sliderType=='LLN'){
            let one='#DB4437';
            let two='#F4B400',three='#0F9D58';

            if(result<testDetails.lowThreshold){
                return one
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return two
            }else{
                return three
            }
        }//
        else if(testDetails.sliderType=='LLNH'){
            let one='#DB4437';
            let two='#F4B400',three='#0F9D58';
            let four='#DB4437';
           
            if(result<testDetails.lowThreshold){
                return one
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return two
            }else if(result>testDetails.boderline&&result<=testDetails.highThreshold){
                return three
            }
            else{
                return four
            }
        }
        //
        else if(testDetails.sliderType=='NHHH'){
            let one='#0F9D58';
            let two='#F4B400',three='#C47D63';
            let four='#DB4437';
           
            if(result<testDetails.boderline){
                return one
            }else if(result>=testDetails.boderline&&result<=testDetails.high){
                return two
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return three
            }
            else{
                return four
            }
        }
        //
        else if(testDetails.sliderType=='NHHHH'){
            let one='#0F9D58';
            let two='#F4B400',three='#C47D63';
            let four='#C26564';
            let five='#DB4437';
           
            if(result<testDetails.nearOptimal){
                return one
            }else if(result>=testDetails.nearOptimal&&result<=testDetails.boderline){
                return two
            }else if(result>testDetails.boderline&&result<=testDetails.high){
                return three
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return four
            }
            else{
                return five
            }
        }//
        else if(testDetails.sliderType=='LLLLN'){
            let one='#DB4437';
            let two='#C26564',three='#C47D63';
            let four='#F4B400';
            let five='#0F9D58';
           
            if(result<testDetails.lowThreshold){
                return one
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.tooLow){
                return two
            }else if(result>testDetails.tooLow&&result<=testDetails.low){
                return three
            }else if(result>testDetails.low&&result<=testDetails.boderline){
                return four
            }
            else{
                return five
            }
        }
         else if(testDetails.sliderType=='POSITIVE_NEGETIVE'||testDetails.sliderType=='POSITIVE_NEGETIVE_UNIQUE'){
             let normal= "#0F9D58", finalCritial= "#DB4437";
             if(testDetails.normalValue[1]==result[1]||(result=='nil'&&testDetails.normalValue[1]=='e')){
                 return normal;
             }else{
                 return finalCritial;
             }
         }else if(testDetails.sliderType=='NORMAL_VALUES'){
            let normal= "#0F9D58", finalCritial= "#DB4437";
             if(testDetails.normalValue[0]=='any'){
                 return normal
             }
             for(let p=0;p<testDetails.normalValue.length;p++){
                 if(testDetails.normalValue[p].toLowerCase()==result.toLowerCase()){
                    return normal;
                 }
             }return finalCritial;
         }
        return 'blue'
        
    }
    const getRange=(index,test)=>{
        
        //
        
        let testDetails=TEST_DATABASE[test];
        let result=results[index];
        if(testDetails.sliderType=='LNH'){
            return testDetails.lowThreshold+' - '+testDetails.highThreshold;
        }
        //
        else if(testDetails.sliderType=='NH'){
            return '< '+testDetails.highThreshold
    
        }
        //
        else if(testDetails.sliderType=='LN'){
            return '> '+testDetails.lowThreshold
        }
        //
        else if(testDetails.sliderType=='NHH'){
            
            return "< "+testDetails.boderline;
        }
        //
        else if(testDetails.sliderType=='LLN'){
            return "> "+testDetails.boderline
                
        }//
        else if(testDetails.sliderType=='LLNH'){
            return testDetails.boderline+" - "+testDetails.highThreshold
            
        }
        //
        else if(testDetails.sliderType=='NHHH'){
            return "< "+testDetails.boderline
               
            
        }
        //
        else if(testDetails.sliderType=='NHHHH'){
            
            return "< "+testDetails.nearOptimal;
        }//
        else if(testDetails.sliderType=='LLLLN'){
             return "> "+testDetails.boderline
        }
        else if(testDetails.sliderType=='POSITIVE_NEGETIVE'||testDetails.sliderType=='POSITIVE_NEGETIVE_UNIQUE'){
            return testDetails.normalValue;
        }
        
        return testDetails.normalValue[0];
   
    }
    return (

        <div className='particuler_profile_main'>
            <NavLink exact className='navlink_normal' activeClassName='navlink_active' to={`/${props.data}`}>
            <div className='particuler_profile_name'>
                {props.data}
            </div>
            </NavLink>
            <div className='profile_data'>
                <div className="heading_tests">
                    <div className="test_name_head">{(props.Lang=='eng')? <span>Test Name</span> : <span>परीक्षण का नाम</span>}</div>
                    <div className="result_head">{(props.Lang=='eng')? <span>Result(unit)</span> : <span>परिणाम (इकाई)</span>}</div>
                    <div className="normal_range_head">{(props.Lang=='eng')? <span>Normal Range</span> : <span>सामान्य परिसर</span>}</div>
                </div>
                {tests.map((test,index)=>{
                    //console.log(test);
                    let color='green';
                    
                    return(
                        <div className="_tests">
                        {
                            
                            <div className="test_name_"><FiberManualRecordIcon style={{marginTop:'-4px', color:`${howering(index,test)}`}}/><span style={{marginTop:'0px'}}>{getTestName(test)}</span></div>}
                        <div className="result_">{results[index]} {TEST_DATABASE[test].unit}</div>
                        <div className="normal_range_">{getRange(index,test)}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardProfile
import React from 'react'
import '../../css/menu/Summary.css'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import testsOriginal from "../../JsonPassed/curTestCopy";
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../../JsonPassed/testsDatabase";

let P_name=testsOriginal[0].PName;
let Gender=testsOriginal[0].Gender;
let Age=testsOriginal[0].Age;

const profiles=[],map={};
for(let i=0;i< testsOriginal.length;i++){
    if(!map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]){
    profiles.push(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]);
    map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]=1;
    }
}
const howering=(result,test)=>{
    //
    
    let testDetails=TEST_DATABASE[test];
    
    let spl=result.split("-");
    if(spl.length>1){
        result=Number(spl[spl.length-1]);
    }
    if(testDetails.sliderType=='LNH'){
        if(result>=testDetails.lowThreshold && result<=testDetails.highThreshold){
            return 1;
        }else if(result<testDetails.lowThreshold){
            return 3
        }else{
            return 3;
        }
    }
    //
    else if(testDetails.sliderType=='NH'){
        if(result<=testDetails.highThreshold){
            return 1
        }else{
            return 3
        }
    }
    //
    else if(testDetails.sliderType=='LN'){
        let one={backgroundColor:'#DB4437'},onea={};
        let two='#0F9D58'
        if(result<testDetails.lowThreshold){
            return 3
        }else{
            return 1;
        }
    }
    //
    else if(testDetails.sliderType=='NHH'){
        let one='#0F9D58'
        let two='#F4B400',three='#DB4437';

        if(result<testDetails.boderline){
            return 1
        }else if(result>=testDetails.boderline&&result<=testDetails.highThreshold){
            return 2
        }else{
            return 3
        }
    }
    //
    else if(testDetails.sliderType=='LLN'){
        let one='#DB4437';
        let two='#F4B400',three='#0F9D58';

        if(result<testDetails.lowThreshold){
            return 3
        }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
            return 2
        }else{
            return 1
        }
    }//
    else if(testDetails.sliderType=='LLNH'){
        let one='#DB4437';
        let two='#F4B400',three='#0F9D58';
        let four='#DB4437';
       
        if(result<testDetails.lowThreshold){
            return 3
        }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
            return 2
        }else if(result>testDetails.boderline&&result<=testDetails.highThreshold){
            return 1
        }
        else{
            return 3
        }
    }
    //
    else if(testDetails.sliderType=='NHHH'){
        let one='#0F9D58';
        let two='#F4B400',three='#C47D63';
        let four='#DB4437';
       
        if(result<testDetails.boderline){
            return 1
        }else if(result>=testDetails.boderline&&result<=testDetails.high){
            return 2
        }else if(result>testDetails.high&&result<=testDetails.highThreshold){
            return 3
        }
        else{
            return 3
        }
    }
    //
    else if(testDetails.sliderType=='NHHHH'){
        let one='#0F9D58';
        let two='#F4B400',three='#C47D63';
        let four='#C26564';
        let five='#DB4437';
       
        if(result<testDetails.nearOptimal){
            return 1
        }else if(result>=testDetails.nearOptimal&&result<=testDetails.boderline){
            return 2
        }else if(result>testDetails.boderline&&result<=testDetails.high){
            return 3
        }else if(result>testDetails.high&&result<=testDetails.highThreshold){
            return 3
        }
        else{
            return 3
        }
    }//
    else if(testDetails.sliderType=='LLLLN'){
        let one='#DB4437';
        let two='#C26564',three='#C47D63';
        let four='#F4B400';
        let five='#0F9D58';
       
        if(result<testDetails.lowThreshold){
            return 3
        }else if(result>=testDetails.lowThreshold&&result<=testDetails.tooLow){
            return 3
        }else if(result>testDetails.tooLow&&result<=testDetails.low){
            return 3
        }else if(result>testDetails.low&&result<=testDetails.boderline){
            return 2
        }
        else{
            return 1
        }
    }
     else if(testDetails.sliderType=='POSITIVE_NEGETIVE'||testDetails.sliderType=='POSITIVE_NEGETIVE_UNIQUE'){
         let normal= "#0F9D58", finalCritial= "#DB4437";
        if(testDetails.normalValue[1]==result[1]){
             return 1;
             
         }else{
             return 3;
         }
     }else if(testDetails.sliderType=='NORMAL_VALUES'){
        let normal= "#0F9D58", finalCritial= "#DB4437";
         if(testDetails.normalValue[0]=='any'){
             return 1
         }
         for(let p=0;p<testDetails.normalValue.length;p++){
             if(testDetails.normalValue[p].toLowerCase()==result.toLowerCase()){
                return 1;
             }
         }return 3;
     }
    return 1
    
}
let p1='',p2='',p3='';
for(let l=0;l<profiles.length;l++){
    let tests=[];
    let results=[];let max=1;
    for(let i=0;i<testsOriginal.length;i++){
        
        if(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]==profiles[l]){
            tests.push(TEST_DATABASE_MAPPING[testsOriginal[i].TestName]);
            results.push(testsOriginal[i].TestResultValue);
            max=Math.max(howering(results[results.length-1],tests[tests.length-1]),max)
        }
    }if(max==1){
        p1=p1+", "+(profiles[l]);
    }else if(max==2){
        p2+=", "+(profiles[l]);
    }else{
        p3+=", "+(profiles[l]);
    }
}


function Summary(props) {
    return (
        <div className='topSum'>
        <div className='main_summary'>
            <div className='entities_sum first_leave'>
                <h3 className='firstHead_sum '>
                    <InsertEmoticonIcon fontSize='large' style={{color:'green' , marginRight:'5px'}}/><span>{(props.Lang=='eng')? <span>YOUR NORMAL PROFILE</span> : <span >आपका सामान्य प्रोफ़ाइल</span>}</span>
                </h3>
                <h4 className='firstHead_sum1'>{p1.substring(2)}</h4>
            </div>
            <div className='entities_sum'>
                <h3 className='firstHead_sum'><SentimentDissatisfiedIcon fontSize='large' style={{color:'rgba(243, 171, 14, 0.767)', marginRight:'5px'}}/><span>{(props.Lang=='eng')? <span>YOUR BORDERLINE PROFILE</span> : <span >आपकी सीमापर प्रोफ़ाइल</span>}</span></h3>
                <h4 className='firstHead_sum1'>{p2.substring(2)}</h4>
            </div>
            <div className='entities_sum'>
                <h3 className='firstHead_sum'><SentimentVeryDissatisfiedIcon fontSize='large' style={{color:'red', marginRight:'5px'}}/><span>{(props.Lang=='eng')? <span>YOUR ABNORMAL PROFILE</span> : <span>आपका असामान्य प्रोफ़ाइल</span>}</span></h3>
                <h4 className='firstHead_sum1'>{p3.substring(2)}</h4>
            </div>
            
        </div>
        <hr style={{marginRight:'10px',marginLeft:'10px', marginTop:'20px'}}/>
        <div className='suggest_text'>
            {P_name}, as a {Age} old {Gender}, regular testing is a very important way to keep track of your overall physical well-being. Here's the summary of your reports, and moreover you can either <b>search or click on particular profile from left menu</b> to go to that particular section.
        </div>
        </div>
    )
}

export default Summary

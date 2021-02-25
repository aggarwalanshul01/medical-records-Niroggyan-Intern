import React,{useState} from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import '../../css/MasterProfile/ParticularTest.css';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../../JsonPassed/testsDatabase";


function ParticularTest(props) {
    let testName=props.test,testDetails={},result=(props.result);
    if(Number(result)){
        result=Number(result);
    }else{
        let j=result.split("-");
        if(j.length>1){
            result=Number(j[0]);
        }
    }
    // console.log(testName);
    let colored= { normal: "#0F9D58", finalCritial: "#DB4437", oneFromNormal: "#F4B400", twoFromNormal: "#C47D63", threeFromNormal: "#C26564" };
    let greyscaled= { normal: "#D2D2D2", finalCritial: "#111111", oneFromNormal: "#969696", twoFromNormal: "#7B7B7B", threeFromNormal: "#444444" };
    for(let i in TEST_DATABASE){
        if(i==testName){
            testDetails=TEST_DATABASE[i];
            break;
        }
    }//console.log("testDetails=" +testDetails);
    const [classBelow, setclassBelow] = useState('data_when_short');
    const getGraphTypeDown=()=>{
        
        //
        if(testDetails.sliderType=='LNH'){
            return(
                <div className='graph_test'>
                    <div className='low_three'>
                        <div className='test_range_division'>{lessThan} {testDetails.lowThreshold}</div>
                        <div className='low_three_graph'></div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division'>{testDetails.lowThreshold} - {testDetails.highThreshold}</div>
                        <div className='normal_three_graph'></div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division'>{greaterThan} {testDetails.highThreshold}</div>
                        <div className='high_three_graph'></div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='NH'){
            return (
                <div className='graph_test'>
                <div className='normal_two'>
                        <div className='test_range_division'>{lessThan} {testDetails.highThreshold}</div>
                        <div className='normal_two_graph'></div>
                    </div>
                    <div className='high_two'>
                        <div className='test_range_division'>{greaterThan} {testDetails.highThreshold}</div>
                        <div className='high_two_graph'></div>
                    </div>
                    </div>
            )
        }
        //
        else if(testDetails.sliderType=='LN'){
            return (
                <div className='graph_test'>
                <div className='normal_two'>
                        <div className='test_range_division'>{lessThan} {testDetails.lowThreshold}</div>
                        <div className='normal_two_graph' style={{backgroundColor:'#DB4437'}}></div>
                    </div>
                    <div className='high_two'>
                        <div className='test_range_division'>{greaterThan} {testDetails.lowThreshold}</div>
                        <div className='high_two_graph' style={{backgroundColor:'#0F9D58'}}></div>
                    </div>
                    </div>
            )
        }
        //
        else if(testDetails.sliderType=='NHH'){
            return(
                <div className='graph_test'>
                    <div className='low_three'>
                        <div className='test_range_division'>{lessThan} {testDetails.boderline}</div>
                        <div className='low_three_graph' style={{backgroundColor:'#0F9D58'}}></div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division'>{testDetails.boderline} - {testDetails.highThreshold}</div>
                        <div className='normal_three_graph' style={{backgroundColor:'#F4B400'}}></div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division'>{greaterThan} {testDetails.highThreshold}</div>
                        <div className='high_three_graph' style={{backgroundColor:'#DB4437'}}></div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='LLN'){
            return(
                <div className='graph_test'>
                    <div className='low_three'>
                        <div className='test_range_division'>{lessThan} {testDetails.lowThreshold}</div>
                        <div className='low_three_graph' style={{backgroundColor:'#DB4437'}}></div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division'>{testDetails.lowThreshold} - {testDetails.boderline}</div>
                        <div className='normal_three_graph' style={{backgroundColor:'#F4B400'}}></div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division'>{greaterThan} {testDetails.boderline}</div>
                        <div className='high_three_graph' style={{backgroundColor:'#0F9D58'}}></div>  
                    </div>
                </div>
            )
        }//
        else if(testDetails.sliderType=='LLNH'){
            return(
                <div className='graph_test'>
                    <div className='low_four1'>
                        <div className='test_range_division'>{lessThan} {testDetails.lowThreshold}</div>
                        <div className='normal_four_graph_start' style={{backgroundColor:'#DB4437'}}></div>
                    </div>
                    <div className='low_four2'>
                        <div className='test_range_division'>{testDetails.lowThreshold} - {testDetails.boderline}</div>
                        <div className='normal_four_graph' style={{backgroundColor:'#F4B400'}}></div>
                    </div>
                    <div className='low_four3'>
                        <div className='test_range_division'>{testDetails.boderline} - {testDetails.highThreshold}</div>
                        <div className='normal_four_graph' style={{backgroundColor:'#0F9D58'}}></div>  
                    </div>
                    <div className='low_four4'>
                        <div className='test_range_division'>{greaterThan} {testDetails.highThreshold}</div>
                        <div className='normal_four_graph_end' style={{backgroundColor:'#DB4437'}}></div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='NHHH'){
            return(
                <div className='graph_test'>
                    <div className='low_four1'>
                        <div className='test_range_division'>{lessThan} {testDetails.boderline}</div>
                        <div className='normal_four_graph_start' style={{backgroundColor:'#0F9D58'}}></div>
                    </div>
                    <div className='low_four2'>
                        <div className='test_range_division'>{testDetails.boderline} - {testDetails.high}</div>
                        <div className='normal_four_graph' style={{backgroundColor:'#F4B400'}}></div>
                    </div>
                    <div className='low_four3'>
                        <div className='test_range_division'>{testDetails.high} - {testDetails.highThreshold}</div>
                        <div className='normal_four_graph' style={{backgroundColor:'#C47D63'}}></div>  
                    </div>
                    <div className='low_four4'>
                        <div className='test_range_division'>{greaterThan} {testDetails.highThreshold}</div>
                        <div className='normal_four_graph_end' style={{backgroundColor:'#DB4437'}}></div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='NHHHH'){
            return(
                <div className='graph_test'>
                    <div className='low_five1'>
                        <div className='test_range_division'>{lessThan} {testDetails.nearOptimal}</div>
                        <div className='normal_five_graph_start' style={{backgroundColor:'#0F9D58'}}></div>
                    </div>
                    
                    <div className='low_five2'>
                        <div className='test_range_division'>{testDetails.nearOptimal} - {testDetails.boderline}</div>
                        <div className='normal_five_graph' style={{backgroundColor:'#F4B400'}}></div>
                    </div>
                    <div className='low_five3'>
                        <div className='test_range_division'>{testDetails.boderline} - {testDetails.high}</div>
                        <div className='normal_five_graph' style={{backgroundColor:'#C47D63'}}></div>  
                    </div>
                    <div className='low_five4'>
                        <div className='test_range_division'>{testDetails.high} - {testDetails.highThreshold}</div>
                        <div className='normal_five_graph' style={{backgroundColor:'#C26564'}}></div>  
                    </div>
                    <div className='low_five5'>
                        <div className='test_range_division'>{greaterThan} {testDetails.highThreshold}</div>
                        <div className='normal_five_graph_end' style={{backgroundColor:'#DB4437'}}></div>  
                    </div>
                </div>
            )
        }//
        else if(testDetails.sliderType=='LLLLN'){
            
            return(
                <div className='graph_test'>
                    <div className='low_five1'>
                        <div className='test_range_division'>{lessThan} {testDetails.lowThreshold} </div>
                        <div className='normal_five_graph_start' style={{backgroundColor:'#DB4437'}}></div>
                    </div>
                    <div className='low_five2'>
                        <div className='test_range_division'>{testDetails.lowThreshold} - {testDetails.tooLow}</div>
                        <div className='normal_five_graph' style={{backgroundColor:'#C26564'}}></div>
                    </div>
                    <div className='low_five3'>
                        <div className='test_range_division'>{testDetails.tooLow} - {testDetails.low}</div>
                        <div className='normal_five_graph' style={{backgroundColor:'#C47D63'}}></div>  
                    </div>
                    <div className='low_five4'>
                        <div className='test_range_division'>{testDetails.low} - {testDetails.boderline}</div>
                        <div className='normal_five_graph' style={{backgroundColor:'#F4B400'}}></div>  
                    </div>
                    <div className='low_five5'>
                        <div className='test_range_division'>{greaterThan} {testDetails.boderline}</div>
                        <div className='normal_five_graph_end' style={{backgroundColor:'#0F9D58'}}></div>  
                    </div>
                </div>
            )
        }
    
        
        
    }
    const getGraphType=()=>{
        //
        if(testDetails.sliderType=='LNH'){
            let no=howering();
            let one={},onea={};
            let two={},twoa={},three={},threea={};
            if(1==no){
                onea={fontWeight: '700'}
                one={ boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={ boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }
            return(
                <div className='graph_test'>
                    <div className='low_three'>
                        <div className='test_range_division' style={onea}>LOW</div>
                        <div className='low_three_graph' style={one}>{lessThan} {testDetails.lowThreshold} </div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division' style={twoa}>NORMAL</div>
                        <div className='normal_three_graph' style={two}>{testDetails.lowThreshold} - {testDetails.highThreshold}</div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division' style={threea}>HIGH</div>
                        <div className='high_three_graph' style={three}>{greaterThan} {testDetails.highThreshold}</div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='NH'){let no=howering();
            let one={},onea={};
            let two={},twoa={};
            if(1==no){
                onea={fontWeight: '700'}
                one={ boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }
            return (
                <div className='graph_test'>
                <div className='normal_two'>
                        <div className='test_range_division' style={onea}>NORMAL</div>
                        <div className='normal_two_graph' style={one}>{lessThan} {testDetails.highThreshold} </div>
                    </div>
                    <div className='high_two'>
                        <div className='test_range_division' style={twoa}>HIGH</div>
                        <div className='high_two_graph' style={two}>{greaterThan} {testDetails.highThreshold}</div>
                    </div>
                    </div>
            )
        }
        //
        else if(testDetails.sliderType=='LN'){let no=howering();
            let one={backgroundColor:'#DB4437'},onea={};
            let two={backgroundColor:'#0F9D58'},twoa={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#0F9D58',boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }
            return (
                <div className='graph_test'>
                <div className='normal_two'>
                        <div className='test_range_division'style={onea}>LOW</div>
                        <div className='normal_two_graph' style={one}>{lessThan} {testDetails.lowThreshold} </div>
                    </div>
                    <div className='high_two'>
                        <div className='test_range_division' style={twoa}>NORMAL</div>
                        <div className='high_two_graph' style={two}>{greaterThan} {testDetails.lowThreshold}</div>
                    </div>
                    </div>
            )
        }
        //
        else if(testDetails.sliderType=='NHH'){let no=howering();
            let one={backgroundColor:'#0F9D58'},onea={};
            let two={backgroundColor:'#F4B400'},twoa={},three={backgroundColor:'#DB4437'},threea={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#0F9D58', boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#F4B400',boxShadow:'2px 2px 20px #F4B400',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }
            return(
                <div className='graph_test'>
                    <div className='low_three'>
                        <div className='test_range_division' style={onea}>NORMAL</div>
                        <div className='low_three_graph' style={one}>{lessThan} {testDetails.boderline} </div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division' style={twoa}>BORDERLINE</div>
                        <div className='normal_three_graph' style={two}>{testDetails.boderline} - {testDetails.highThreshold}</div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division' style={threea}>HIGH</div>
                        <div className='high_three_graph' style={three}>{greaterThan} {testDetails.highThreshold}</div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='LLN'){let no=howering();
            let one={backgroundColor:'#DB4437'},onea={};
            let two={backgroundColor:'#F4B400'},twoa={},three={backgroundColor:'#0F9D58'},threea={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#F4B400',boxShadow:'2px 2px 20px #F4B400',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={backgroundColor:'#0F9D58', boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }
            return(
                <div className='graph_test'>
                    <div className='low_three'>
                        <div className='test_range_division' style={onea}>LOW</div>
                        <div className='low_three_graph' style={one}>{lessThan} {testDetails.lowThreshold} </div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division' style={twoa}>BORDERLINE</div>
                        <div className='normal_three_graph' style={two}>{testDetails.lowThreshold} - {testDetails.boderline}</div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division' style={threea}>NORMAL</div>
                        <div className='high_three_graph' style={three}>{greaterThan} {testDetails.boderline}</div>  
                    </div>
                </div>
            )
        }//
        else if(testDetails.sliderType=='LLNH'){let no=howering();
            let one={backgroundColor:'#DB4437'},onea={};
            let two={backgroundColor:'#F4B400'},twoa={},three={backgroundColor:'#0F9D58'},threea={};
            let four={backgroundColor:'#DB4437'},foura={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#F4B400',boxShadow:'2px 2px 20px #F4B400',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={backgroundColor:'#0F9D58', boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }else{
                foura={fontWeight: '700'}
                four={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}

            }
            return(
                <div className='graph_test'>
                    <div className='low_four1'>
                        <div className='test_range_division' style={onea}>LOW</div>
                        <div className='normal_four_graph_start' style={one}>{lessThan} {testDetails.lowThreshold} </div>
                    </div>
                    <div className='low_four2'>
                        <div className='test_range_division' style={twoa}>BODERLINE</div>
                        <div className='normal_four_graph' style={two}>{testDetails.lowThreshold} - {testDetails.boderline}</div>
                    </div>
                    <div className='low_four3'>
                        <div className='test_range_division' style={threea}>NORMAL</div>
                        <div className='normal_four_graph' style={three}>{testDetails.boderline} - {testDetails.highThreshold}</div>  
                    </div>
                    <div className='low_four4'>
                        <div className='test_range_division' style={foura}>HIGH</div>
                        <div className='normal_four_graph_end' style={four}>{greaterThan} {testDetails.highThreshold}</div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='NHHH'){let no=howering();
            let one={backgroundColor:'#0F9D58'},onea={};
            let two={backgroundColor:'#F4B400'},twoa={},three={backgroundColor:'#C47D63'},threea={};
            let four={backgroundColor:'#DB4437'},foura={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#0F9D58', boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#F4B400',boxShadow:'2px 2px 20px #F4B400',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={backgroundColor:'#C47D63', boxShadow:'2px 2px 20px #C47D63',fontWeight: '700'}
            }else{
                foura={fontWeight: '700'}
                four={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}

            }
            return(
                <div className='graph_test'>
                    <div className='low_four1'>
                        <div className='test_range_division' style={onea}>NORMAL</div>
                        <div className='normal_four_graph_start' style={one}>{lessThan} {testDetails.boderline} </div>
                    </div>
                    <div className='low_four2'>
                        <div className='test_range_division' style={twoa}>BODERLINE</div>
                        <div className='normal_four_graph' style={two}>{testDetails.boderline} - {testDetails.high}</div>
                    </div>
                    <div className='low_four3'>
                        <div className='test_range_division' style={threea}>HIGH</div>
                        <div className='normal_four_graph' style={three}>{testDetails.high} - {testDetails.highThreshold}</div>  
                    </div>
                    <div className='low_four4'>
                        <div className='test_range_division' style={foura}>EXTREMELY HIGH</div>
                        <div className='normal_four_graph_end' style={four}>{greaterThan} {testDetails.highThreshold}</div>  
                    </div>
                </div>
            )
        }
        //
        else if(testDetails.sliderType=='NHHHH'){let no=howering();
            let one={backgroundColor:'#0F9D58'},onea={};
            let two={backgroundColor:'#F4B400'},twoa={},three={backgroundColor:'#C47D63'},threea={};
            let four={backgroundColor:'#C26564'},foura={};
            let five={backgroundColor:'#DB4437'},fivea={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#0F9D58', boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#F4B400',boxShadow:'2px 2px 20px #F4B400',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={backgroundColor:'#C47D63', boxShadow:'2px 2px 20px #C47D63',fontWeight: '700'}
            }
            else if(no==4){
                foura={fontWeight: '700'}
                four={backgroundColor:'#C26564', boxShadow:'2px 2px 20px #C26564',fontWeight: '700'}
            }else{
                fivea={fontWeight: '700'}
                five={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}

            }
            return(
                <div className='graph_test'>
                    <div className='low_five1'>
                        <div className='test_range_division' style={onea}>NORMAL</div>
                        <div className='normal_five_graph_start' style={one}>{lessThan} {testDetails.nearOptimal} </div>
                    </div>
                    
                    <div className='low_five2'>
                        <div className='test_range_division' style={twoa}>BODERLINE</div>
                        <div className='normal_five_graph' style={two}>{testDetails.nearOptimal} - {testDetails.boderline}</div>
                    </div>
                    <div className='low_five3'>
                        <div className='test_range_division' style={threea}>HIGH</div>
                        <div className='normal_five_graph' style={three}>{testDetails.boderline} - {testDetails.high}</div>  
                    </div>
                    <div className='low_five4'>
                        <div className='test_range_division' style={foura}>VERY HIGH</div>
                        <div className='normal_five_graph' style={four}>{testDetails.high} - {testDetails.highThreshold}</div>  
                    </div>
                    <div className='low_five5'>
                        <div className='test_range_division' style={fivea}>EXTREMELY HIGH</div>
                        <div className='normal_five_graph_end' style={five}>{greaterThan} {testDetails.highThreshold}</div>  
                    </div>
                </div>
            )
        }//
        else if(testDetails.sliderType=='LLLLN'){let no=howering();
            let one={backgroundColor:'#DB4437'},onea={};
            let two={backgroundColor:'#C26564'},twoa={},three={backgroundColor:'#C47D63'},threea={};
            let four={backgroundColor:'#F4B400'},foura={};
            let five={backgroundColor:'#0F9D58'},fivea={};
            if(1==no){
                onea={fontWeight: '700'}
                one={backgroundColor:'#DB4437', boxShadow:'2px 2px 20px #DB4437',fontWeight: '700'}
            }else if(2==no){
                twoa={fontWeight: '700'}
                two={backgroundColor:'#C26564',boxShadow:'2px 2px 20px #C26564',fontWeight: '700'}
            }else if(no==3){
                threea={fontWeight: '700'}
                three={backgroundColor:'#C47D63', boxShadow:'2px 2px 20px #C47D63',fontWeight: '700'}
            }
            else if(no==4){
                foura={fontWeight: '700'}
                four={backgroundColor:'#F4B400', boxShadow:'2px 2px 20px #F4B400',fontWeight: '700'}
            }else{
                fivea={fontWeight: '700'}
                five={backgroundColor:'#0F9D58', boxShadow:'2px 2px 20px #0F9D58',fontWeight: '700'}

            }
            return(
                <div className='graph_test'>
                    <div className='low_five1'>
                        <div className='test_range_division' style={onea}>EXTREMELY LOW</div>
                        <div className='normal_five_graph_start' style={one}>{lessThan} {testDetails.lowThreshold} </div>
                    </div>
                    <div className='low_five2'>
                        <div className='test_range_division' style={twoa}>VERY LOW</div>
                        <div className='normal_five_graph' style={two}>{testDetails.lowThreshold} - {testDetails.tooLow}</div>
                    </div>
                    <div className='low_five3'>
                        <div className='test_range_division' style={threea}>LOW</div>
                        <div className='normal_five_graph' style={three}>{testDetails.tooLow} - {testDetails.low}</div>  
                    </div>
                    <div className='low_five4'>
                        <div className='test_range_division' style={foura}>BODERLINE</div>
                        <div className='normal_five_graph' style={four}>{testDetails.low} - {testDetails.boderline}</div>  
                    </div>
                    <div className='low_five5'>
                        <div className='test_range_division' style={fivea}>NORMAL</div>
                        <div className='normal_five_graph_end' style={five}>{greaterThan} {testDetails.boderline}</div>  
                    </div>
                </div>
            )
        }
    }
    let lessThan='<';
    let greaterThan='>';
    const howering=()=>{
        //
        if(testDetails.sliderType=='LNH'){
            if(result>=testDetails.lowThreshold && result<=testDetails.highThreshold){
                return 2
            }else if(result<testDetails.lowThreshold){
                return 1
            }else{
                return 3
            }
        }
        //
        else if(testDetails.sliderType=='NH'){
            if(result<=testDetails.highThreshold){
                return 1
            }else{
                return 2
            }
        }
        //
        else if(testDetails.sliderType=='LN'){
            if(result<testDetails.lowThreshold){
                return 1
            }else{
                return 2
            }
        }
        //
        else if(testDetails.sliderType=='NHH'){
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
            if(result<testDetails.lowThreshold){
                return 1
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return 2
            }else{
                return 3
            }
        }//
        else if(testDetails.sliderType=='LLNH'){
            if(result<testDetails.lowThreshold){
                return 1
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return 2
            }else if(result>testDetails.boderline&&result<=testDetails.highThreshold){
                return 3
            }
            else{
                return 4
            }
        }
        //
        else if(testDetails.sliderType=='NHHH'){
            if(result<testDetails.boderline){
                return 1
            }else if(result>=testDetails.boderline&&result<=testDetails.high){
                return 2
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return 3
            }
            else{
                return 4
            }
        }
        //
        else if(testDetails.sliderType=='NHHHH'){
            if(result<testDetails.nearOptimal){
                return 1
            }else if(result>=testDetails.nearOptimal&&result<=testDetails.boderline){
                return 2
            }else if(result>testDetails.boderline&&result<=testDetails.high){
                return 3
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return 4
            }
            else{
                return 5
            }
        }//
        else if(testDetails.sliderType=='LLLLN'){
            if(result<testDetails.lowThreshold){
                return 1
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.tooLow){
                return 2
            }else if(result>testDetails.tooLow&&result<=testDetails.low){
                return 3
            }else if(result>testDetails.low&&result<=testDetails.boderline){
                return 4
            }
            else{
                return 5
            }
        }
        
    }
    const getZoneStatus=()=>{
        //
        if(testDetails.sliderType=='LNH'){
            if(result>=testDetails.lowThreshold && result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }else if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>LOW</span>
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>HIGH</span>
            }
        }
        //
        else if(testDetails.sliderType=='NH'){
            if(result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>;
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>HIGH</span>;
            }
        }
        //
        else if(testDetails.sliderType=='LN'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>LOW</span>;
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>;
            }
        }
        //
        else if(testDetails.sliderType=='NHH'){
            if(result<testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }else if(result>=testDetails.boderline&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>BODERLINE</span>
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>HIGH</span>
            }
        }
        //
        else if(testDetails.sliderType=='LLN'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>LOW</span>
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>BODERLINE</span>
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }
        }//
        else if(testDetails.sliderType=='LLNH'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>LOW</span>
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>BODERLINE</span>
            }else if(result>testDetails.boderline&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>HIGH</span>
            }
        }
        //
        else if(testDetails.sliderType=='NHHH'){
            if(result<testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }else if(result>=testDetails.boderline&&result<=testDetails.high){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>BODERLINE</span>
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/>NORMAL</span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>HIGH</span>
            }
        }
        //
        else if(testDetails.sliderType=='NHHHH'){
            if(result<testDetails.nearOptimal){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }else if(result>=testDetails.nearOptimal&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>BODERLINE</span>
            }else if(result>testDetails.boderline&&result<=testDetails.high){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/>HIGH</span>
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C26564'}}/>VERY HIGH</span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>EXTREMELY HIGH</span>
            }
        }//
        else if(testDetails.sliderType=='LLLLN'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>EXTREMELY LOW</span>
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.tooLow){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C26564'}}/>VERY LOW</span>
            }else if(result>testDetails.tooLow&&result<=testDetails.low){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/>LOW</span>
            }else if(result>testDetails.low&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>BODERLINE</span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>NORMAL</span>
            }
        }
        
    }
    const getZoneStatusDown=()=>{
        //
        if(testDetails.sliderType=='LNH'){
            if(result>=testDetails.lowThreshold && result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }else if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }
        }
        //
        else if(testDetails.sliderType=='NH'){
            if(result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>;
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>;
            }
        }
        //
        else if(testDetails.sliderType=='LN'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>;
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>;
            }
        }
        //
        else if(testDetails.sliderType=='NHH'){
            if(result<testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }else if(result>=testDetails.boderline&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/></span>
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }
        }
        //
        else if(testDetails.sliderType=='LLN'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/></span>
            }else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }
        }//
        else if(testDetails.sliderType=='LLNH'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/></span>
            }else if(result>testDetails.boderline&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }
        }
        //
        else if(testDetails.sliderType=='NHHH'){
            if(result<testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }else if(result>=testDetails.boderline&&result<=testDetails.high){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/></span>
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/></span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }
        }
        //
        else if(testDetails.sliderType=='NHHHH'){
            if(result<testDetails.nearOptimal){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }else if(result>=testDetails.nearOptimal&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/></span>
            }else if(result>testDetails.boderline&&result<=testDetails.high){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/></span>
            }else if(result>testDetails.high&&result<=testDetails.highThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C26564'}}/></span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }
        }//
        else if(testDetails.sliderType=='LLLLN'){
            if(result<testDetails.lowThreshold){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/></span>
            }else if(result>=testDetails.lowThreshold&&result<=testDetails.tooLow){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C26564'}}/></span>
            }else if(result>testDetails.tooLow&&result<=testDetails.low){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/></span>
            }else if(result>testDetails.low&&result<=testDetails.boderline){
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/></span>
            }
            else{
                return <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/></span>
            }
        }    
    }
    const getTestName=()=>{
        if(props.Lang=='hindi' && TEST_DATABASE[testName].displayName.hindi){
            return TEST_DATABASE[testName].displayName.hindi
        }return TEST_DATABASE[testName].displayName.en;
    }
    const getTestDesc=()=>{
        if(props.Lang=='hindi' && TEST_DATABASE[testName].text.hindi){
            return TEST_DATABASE[testName].text.hindi
        }return TEST_DATABASE[testName].text.en;
    }
    return (
        <div className='ParticularTest_main'>
            <div className='ParticularTest_head'>
                <div className='ParticularTest_name'>
                    {getTestName()} : {result} {testDetails.unit}
                </div>
                <div className='ParticularTest_status'>
                    {getZoneStatus()}
                    
                </div>
                <div className='ParticularTest_status_short' onClick={()=>{
                    setclassBelow('data_when_short show_data')
                }}>
                    <InfoIcon style={{color:'blue'}}/>
                </div>
            </div>
            <div className="test_description">
                {getTestDesc()}
            </div>
            <div className='graph_representation'>
                {getGraphType()}
            </div>
            <div className={classBelow}>

                <div className='Particular_test_status_down'>
                    <div className='Particular_test_status_down_one'>{getZoneStatusDown()}</div>
                    <button className='buttonClose_down' onClick={()=>{
                        setclassBelow('data_when_short');
                    }}><CloseIcon/></button>
                    
                </div>
                <div className="test_description_down">
                    {getTestDesc()}
                </div>
                <div className='graph_representation_down'>
                    {getGraphTypeDown()}
                </div>
            </div>
        </div>
    )
}

export default ParticularTest

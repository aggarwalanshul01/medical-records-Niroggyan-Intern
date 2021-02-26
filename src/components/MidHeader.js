import React,{useState,useEffect} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import '../css/MidHeader.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import AllOutIcon from '@material-ui/icons/AllOut';
import { Switch , Route,Link ,Redirect} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import testsOriginal from '../JsonPassed/curTestCopy';
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from '../JsonPassed/testsDatabase';

const profiles=[],map={};
for(let i=0;i< testsOriginal.length;i++){
    if(!map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]){
    profiles.push(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]);
    map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]=1;
    }
    
}const getTests=(profile)=>{
    let tests=[];
    
    for(let i=0;i<testsOriginal.length;i++){
        if(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]==profile){
            tests.push(TEST_DATABASE_MAPPING[testsOriginal[i].TestName]);
        }
    }
    return tests;
}
let ttAll={};
for(let i=0;i<profiles.length;i++){
    //let ab={[profiles[i]]:[]};
    let testsO=getTests(profiles[i]);
    ttAll[profiles[i].toUpperCase()]=profiles[i];
    for(let j=0;j<testsO.length;j++){
        for(let k in TEST_DATABASE_MAPPING){
            if(testsO[j]==TEST_DATABASE_MAPPING[k]){
                ttAll[k.toUpperCase()]=profiles[i];
                //console.log("OOOO");
            }
        }
    }
    //ttAll.push(ab);
}
//console.log(ttAll);


//console.log(profiles+"}}");
//let ss=['aa','as'];


export default function PrimarySearchAppBar(props) {
    const [classSearch, setclassSearch] = useState('search')
    const [searchval, setsearchval] = useState('');
    const [search_options_main, setsearch_options_main] = useState('search_options_main')
    let searchedArray=[];

    const rediect=(e)=>{
            
        if(e.key == 'Enter'){
            let sss=ttAll[searchval.toUpperCase()]
            window.location.href = `http://localhost:3000/${sss}`
        }
    
    }
    const getOptions=()=>{
        if(searchval==''){
            //setsearch_options_main('search_options_main search_options_main_none');
            return null;
        }//setsearch_options_main('search_options_main')
        let opt=[];
        for(let i in ttAll){
            //console.log(i);
            if(i.length>=searchval.length && searchval.toUpperCase()==i.substring(0,searchval.length).toUpperCase()){
                opt.push(i);
            }
        }//console.log(opt);
        let ret=opt.map((option,ind)=>{
            if(opt.length==1){
                return (
                    <div className='inside_option_elements' style={{paddingLeft:'10px',paddingTop:'10px',paddingBottom:'10px',marginBottom:'0px'}} onClick={
                        ()=>{
                            let sss=ttAll[option.toUpperCase()]
                            window.location.href = `http://localhost:3000/${sss}`
                        }
                    }>
                        <span >{option}</span>
                        
                    </div>
                )
            }
            if(ind==0){
                return (
                    <div className='inside_option_elements' style={{paddingLeft:'10px',paddingTop:'10px',paddingBottom:'10px',marginBottom:'0px',borderBottom: '2px solid lightgrey'}} onClick={
                        ()=>{
                            let sss=ttAll[option.toUpperCase()]
                            window.location.href = `http://localhost:3000/${sss}`
                        }
                    }>
                        <span >{option}</span>
                        
                    </div>
                )
            }if(ind==opt.length-1){
                return (
                    <div className='inside_option_elements' style={{paddingLeft:'10px',paddingTop:'10px',paddingBottom:'10px',marginBottom:'0px',borderBottom: '2px solid lightgrey'}} onClick={
                        ()=>{
                            let sss=ttAll[option.toUpperCase()]
                            window.location.href = `http://localhost:3000/${sss}`
                        }
                    }>
                        
                        <span >{option}</span>
                    </div>
                )
            }
            return (
                <div className='inside_option_elements' style={{paddingLeft:'10px',paddingTop:'10px',paddingBottom:'10px',marginBottom:'0px',borderBottom: '2px solid lightgrey'}} onClick={
                    ()=>{
                        let sss=ttAll[option.toUpperCase()]
                        window.location.href = `http://localhost:3000/${sss}`
                    }
                }>
                    
                    <span >{option}</span>
                    
                </div>
            )
        })
        return ret;
    }    
  return (
    <div className='main_header' >
        <span className={classSearch}>

            <span >
            <SearchIcon style={{marginBottom:'-6px',marginRight:'4px',width:'10%'}}/>
            </span>
            <InputBase style={{width:'80%'}} value={searchval} onChange={(e)=>{
                setsearchval(e.target.value);
                
            }} onKeyPress={rediect}
                placeholder="Search…"
            />
            
        </span>
        {searchval!='' && getOptions().length!=0 && <span className={search_options_main} >{getOptions()}</span>}

        <span className='buttons' >
        <span title="Go To Home" className='largeButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                window.location.href = `http://localhost:3000/`
                // console.log(props.engtohindi);
            }}>
            <span style={{marginTop:'3.5px'}}>Home</span><HomeIcon/>
            </Button>
            </span>
            <span title="Go To Home" className='smallButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                window.location.href = `http://localhost:3000/`
                // console.log(props.engtohindi);
            }}>
            <HomeIcon/>
            </Button>
            </span>
            <span title="Change Language to English" className='largeButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.hinditoeng();
                // console.log(props.hinditoeng);
            }}>
                <span style={{marginTop:'3px'}}>English</span><AllOutIcon/>
            </Button>
            </span>
            <span title="Change Language to English" className='smallButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.hinditoeng();
                
            }}>
                Eng
            </Button>
            </span>
            <span title="Change Language to Hindi" className='largeButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.engtohindi();
                // console.log(props.engtohindi);
            }}>
            <span style={{marginTop:'3px'}}>हिन्दी</span><AllOutIcon/>
            </Button>
            </span>
            <span title="Change Language to Hindi" className='smallButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.engtohindi()
                // console.log(props.engtohindi);
            }}>
            हिन्दी
            </Button>
            </span>
            <span title="Leave the page" className='smallButton' >
            {/* <a href=" " title="This is some text I want to display." style={{backgroundColor:'#FFFFFF',color:'#000000',textDecoration:'none'}}>This link has mouseover text.</a> */}
            <Button variant="contained" color="secondary" style={{marginRight:'13px'}}>
                <ExitToAppIcon/>
            </Button>
            </span>
            <span title="Leave the page" className='largeButton'>
            {/* <a href=" " title="This is some text I want to display." style={{backgroundColor:'#FFFFFF',color:'#000000',textDecoration:'none'}}>This link has mouseover text.</a> */}
            <Button variant="contained" color="secondary" style={{marginRight:'13px'}}>
                SignUp<ExitToAppIcon/>
            </Button>
            </span>
        </span>
    </div>
  );
}



import React from 'react'
import '../../css/menu/Profile.css';

function Profile() {
    return (
        <div className='main_profile'>
            <img className='imgUser' src='./img/BoyDemo.jpg' alt='Photo' width='50px' />
            <div className='entities'>
                <h2 className='firstHead'>Ms. ANSHUL AGGARWAL</h2>
                <h5 className='firstHead'>Male, 20 years old</h5>
            </div>
            <div className='entities1'>
                <h5 className='afterHead firstHead'>Lab ID : 012011090007</h5>
                <h5 className='afterHead firstHead'>Date : 09-11-2020</h5>
            </div>
            <div className='entities2'>
                <h5 className='afterHead firstHead'>Ref. By : Self</h5>
                <h5 className='afterHead firstHead'>Collected By : Mr. Manpreet</h5>
            </div>
        </div>
    )
}

export default Profile

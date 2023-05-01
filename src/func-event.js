import React from 'react'

export default function Button(){
    const onclickButtonOk =() =>{
        alert('OK')
    }
    const onclickButtonCancel =() =>{
        alert('Cancel')
    }

    let banner= './image/b2.jpg'
    let url = 'https://www.youtube.com/watch?v=XoXvsSuPqFw'
    const bannerClick =() => {
        window.open(url)
    }
    return (
        <div>
        <img src={banner} onClick={bannerClick} style={{cursor:'pointer',width:'30%'}}/>
        <button onClick={onclickButtonOk}>OK</button>
        <button onClick={onclickButtonCancel}>Cancel</button>
        </div>
    )

}

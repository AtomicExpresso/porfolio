import React, {useState} from 'react'; 
import upArrow from '../../assets/images/icons/functionalIcon/angle-up-solid.svg'
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <div className='scroll-btn'  onClick={scrollToTop}  
    style={{display: visible ? 'flex' : 'none'}}>
      <img src={upArrow} draggable="false" alt="Scroll to top"></img>
    </div>
  ); 
} 
  
export default ScrollButton; 
import React, {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faUpload,faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import './App.css';

const PinCard = (props) => {
  const [inHover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave= {() =>    setHover(false)}
    style={ { ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    >
    {inHover &&
      <div className='capa'>
        
        <div style={_stylesPinCard.content_up}>
          <div className="guardar" style={_stylesPinCard.guardar}>Guardar</div>
        </div>
        <div style={_stylesPinCard.content_down}>
            
            <button className="btndown" style={_stylesPinCard.btn_down}><FontAwesomeIcon icon={faUpload} /></button>
            <button className="btndown" style={_stylesPinCard.btn_down}><FontAwesomeIcon icon={faEllipsisH} /></button>
        </div>
          

      </div>
      }
      
      <img className={ `${ inHover ? "imgenHover" : ""}` } src={props.image} alt="No se puede cargar la imagen" style={{..._stylesPinCard.image}}>
      </img>
      

      <div style={_stylesPinCard.container_card}>
        <div style={_stylesPinCard.descripcion_card}>
            Imagen Pinterest
        </div>
        <div style={_stylesPinCard.menu_card}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      
      </div >
      

    </div>
    


    

  );
};

const _stylesPinCard = {
  
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    position:'relative',
    
  },
  small: {
    gridRowEnd: 'span 26',
    zIndex:'1986',
  },
  medium: {
    gridRowEnd: 'span 33',
    zIndex:'1986'
  },
  large: {
    gridRowEnd: 'span 45',
    zIndex:'1986'
  },

  image:{
    height: '100%',
    width: '100%',
    borderRadius: "15px",
    zIndex:'1986'
  },

 

  guardar:{
    position: 'absolute',
    zIndex:'1987',
    top:'10px',
    right:'10px',
    borderRadius:'24px',
    border: 'none',
    cursor:'pointer',
    color:'white',
    textAlign: 'center',
    fontWeight: '700',
    padding: '12px 16px'
  },

  content_down:{
    
    position: 'absolute',
    bottom:'10px',
    right:'10px',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
    
  },

  btn_down:{
    height:'30px',
    zIndex:'1987',
    width:'30px',
    borderRadius:'24px',
    border: 'none',
    /*padding: '12px 16px',*/
    marginLeft: '4px',
    marginRight: '4px',
    boxSizing: 'boder-box',
    transition: 'transform 85ms ease-out',
  },

  container_card:{
    display: 'flex',

  },
  descripcion_card:{
    color:'black',
    textDecoration:'none',
    border: 'none',
    fontWeight: '700',
    width: '100%',
    fontSize: '11px',
    display: 'flex'
  },

  menu_card:{
    color:'black',
    display: 'flex'
  }
/*
  btn_menu:{
    position: 'absolute',
    padding: '32px 32px',
    display:'block'
    

  }*/

};





export default PinCard;

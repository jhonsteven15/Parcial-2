import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBell,faCommentDots,faSearch, faUser, faAngleDown, faHome} from '@fortawesome/free-solid-svg-icons';
import{faPinterest}from '@fortawesome/free-brands-svg-icons';


const HeaderLayout = () => {
  
  return (
  <header>
    <div className="contenedor" style={_stylesHeader.header_container}>
      <div className= "logo" style={_stylesHeader.header_logo}>
        <FontAwesomeIcon icon={faPinterest} />
      </div>
        <div className= "inicio" style={_stylesHeader.header_inicio}>
          Inicio 
        </div>
      <div className="hoy"style={_stylesHeader.header_hoy}> Hoy</div>

      <div className= "search" style={_stylesHeader.header_search}>

          <div style={_stylesHeader.search_icon}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div >
            <input type="text" placeholder="Buscar" style={_stylesHeader.input_search} />
          </div>

      </div>

      <div className="logo" style={_stylesHeader.bell_icon}>
          <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="logo"style={_stylesHeader.comments_icon}>
          <FontAwesomeIcon icon={faCommentDots} />
      </div>
      <div style={_stylesHeader.user_icon}>
          <FontAwesomeIcon  icon={faUser} />
      </div>
      
      <div className="logo" style={_stylesHeader.angle_icon}>
          <FontAwesomeIcon icon={faAngleDown} />
      </div>  

    </div>    
     
    <div className="headermobile" style={_stylesHeader.header_mobile}>
        <div className="boton" style={_stylesHeader.btn_mobile}>
          <span>Para ti</span>
        </div>
        <div className="boton" style={_stylesHeader.btn_mobile}>
          <span>Hoy</span>
        </div>
        <div className="boton" style={_stylesHeader.btn_mobile}>
          <span>Illustration...</span>
        </div>
        <div className="boton" style={_stylesHeader.btn_mobile}>
          <span>Recetas de</span>
        </div>
    </div>
    <div className="footermobile" style={_stylesHeader.footer_mobile}>
        <div className="logo" style={_stylesHeader.home_footer}>
          <FontAwesomeIcon icon={faHome}/>
        </div>
        <div className="logo" style={_stylesHeader.boton_footer}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="logo" style={_stylesHeader.boton_footer}>
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <div className="logo" style={_stylesHeader.boton_footer}>
          <FontAwesomeIcon  icon={faUser} />
        </div>
    </div>
    
    
  </header>
  
  
  );
};

const _stylesHeader = {

  header_container: {
    /*position: 'fixed',
    top: '0%',
    opacity: 1,
    margin: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width: '100vw',
    height: '75px',
    backgroundColor: 'white',
    padding:'4px 16px '*/
    //display:'flex',
    margin:'10px 15px',
    paddig:'0',
    borderRadius: '40px',
    backgroundColor: 'white',
  },

  header_logo: {
    display: 'flex',
    width: '57px',
    height: '50px',
    borderRadius: '50%',
    padding:'5px',
    justifyContent:'center',
    //backgroundColor: 'transparent',
    alignItems: 'center',
    color: 'red',
    fontSize: 'x-large',
    /* border: 'none',*/
    boxSizing: 'border-box'
    
  },

  header_inicio: {
    display: 'flex',
    height: '18px',
    textDecoration:'none',
    border: 'none',
    padding: '16px',
    alignItems:'center',
    borderWidth: '3px',
    borderRadius:'35px', 
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: '700',
  },
  
  header_hoy: {
    display: 'flex',
    textDecoration:'none',
    fontSize: '16px',
    fontWeight: '700',
    height: '18px',
    padding: '16px',
    alignItems:'center',
    borderRadius:'35px',
    border: 'none',
  },

  input_search:{
    border:'none',
    position:'relative',
    boxSizing:'border-box',
    height: '48px',
    width:'600%',
    top:'0%',
    fontSize: '14px',
    outline: 'none',
    padding: '0',
    backgroundColor: 'transparent',
    marginLeft: '4px'
 
    
  },

  search_icon:{
    color: 'gray'
  },

  header_search:{
    /*width: '70%',*/
    height:'48px',
    display:'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    flexBasis: 'auto',
    alignItems: 'center',
    boxSizing: 'boder-box',
    paddingTop:'0px',
    paddingBottom:'0px',
    paddingLeft:'16px',
    paddingRight:'16px',
    backgroundColor:'#efefef',
    borderWidth: '3px',
    borderRadius:'35px',
  },
  
  bell_icon:{
    width: '57px',
    height: '50px',
    boxSizing: 'boder-box',
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'gray',
    fontSize: 'x-large',
    borderRadius: '50%',
  },

  comments_icon:{
    width: '57px',
    height: '50px',
    boxSizing: 'boder-box',
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'gray',
    fontSize: 'x-large',
    borderRadius: '50%',
  },

  user_icon:{
    width: '57px',
    height: '50px',
    position: 'relative',
    boxSizing: 'boder-box',
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'gray',
    fontSize: 'x-large',
    borderRadius: '50%',
  },
  angle_icon:{
    width: '57px',
    height: '50px',
    boxSizing: 'boder-box',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'gray',
    fontSize: 'larger',
    cursor: 'pointer',
  },
  header_mobile:{
    height: '50px',
    width: '100%',
    position: 'fixed',
    zIndex: '1987',
    top:'0px',
    justifyContent: 'center',
    alignItems: 'center',
    /*margin:'10px 15px',*/
    paddig:'0',
    backgroundColor: 'white',
  },

  btn_mobile:{
    textDecoration:'none',
    fontSize: '14px',
    fontWeight: '700',
    height: '18px',
    marginRight: '25px',
    paddingBottom:'6px',
    alignItems:'center',
    marginLeft: '10px',
    /*borderRadius:'35px',*/
    /*border: '1px solid ',*/
    color: 'black'
  },

  footer_mobile:{
    height: '60px',
    width: '60%',
    position: 'fixed',
    zIndex: '1987',
    left: '20vw',
    bottom: '35px',
    justifyContent: 'center',
    alignItems: 'center',
    /*margin:'10px 15px',*/
    paddig:'0',
    borderRadius: '40px',
    backgroundColor: 'white',
    boxShadow: 'rgb(0 0 0 / 20%) 9px 9px 30px, rgb(0 0 0 / 20%) -9px -9px 30px'
  },

  boton_footer:{
    width: '50px',
    height: '50px',
    boxSizing: 'boder-box',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'gray',
    fontSize: 'larger',
    cursor: 'pointer',
  },

  home_footer:{
    width: '50px',
    height: '50px',
    boxSizing: 'boder-box',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    fontSize: 'larger',
    cursor: 'pointer',
  }
  
};
export default HeaderLayout;

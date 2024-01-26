import React from 'react';
// import styled from 'styled-components';

// const Nav = styled.div`
// width: 100%;
//   height: 70px;
//   background-color: greenyellow;
//   display: flex;
//   justify-content: space-between;
// `


export default class Navbar extends React.Component{
    render(){
        return (
            <>
           <div style={styles.nav}>
             <div style={styles.title}>
                The Movie Application    </div>
             <div styles={styles.cartIconContainer} >
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt='cart icon' style={styles.cartIcon}/>
                    <span style={styles.cartCount}>3</span>
             </div>
           </div>
            </>
        )
    }
}

const styles = {
    cartIcon: {
      height: 48,
      marginRight: 20,
    },
    nav: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between" ,
        alignItems: "center",
        position: "relative",
    },
    title:{
      fontSize: 30,
      color: "#fff",
      fontWeight: 600,
      fontFamily: '"Montserrat", sans-serif',
      textTransform: "uppercase",
      marginLeft: 20
    },
    
    cartIconContainer: {
      position: "relative",
      cursor: "pointer",
    },
    cartCount: {
      background: "orange",
      borderRadius: "50%",
      padding: "4px 8px",
      position: "absolute",
      right: 10,
      top: -5,
      fontSize: 12,
    },
  };
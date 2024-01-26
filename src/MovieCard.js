// import React from "react";

// class MovieCard extends React.Component{
   
 
//     render(){
//         //Destructing the state object in render function
//         const {movies, addStars, remStars,toggleFav,toggleCart} = this.props.movies;

//         const {title, plot, poster, price, rating,star,fav,isInCart} =  this.props.movies;
          
//         return(
//             //Movie Card
//             <div className="movie-card">

//                 {/**Left section of Movie Card */}
//                 <div className="left">
//                     <img alt="poster" src={poster} />
//                 </div>
                
//                 {/**Right section Movie Card */}
//                 <div className="right">

//                     {/**Title, plot, price of the movie */}
//                     <div className="title">{title}</div>
//                     <div className="plot">{plot}</div>
//                     <div className="price">Rs. {price}</div>

//                     {/**Footer starts here with ratings, stars and buttons */}
//                     <div className="footer">
//                         <div className="rating">{rating}</div>

//                         {/**Star image with increase and decrease buttons and star count */}
//                         <div className="star-dis">
//                             <img className="str-btn" 
//                                 alt="Decrease" 
//                                 src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
//                                 onClick={()=>remStars(movies)}
//                             />
//                             <img className="stars" 
//                                     alt="stars" 
//                                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
//                             />
//                             <img className="str-btn" 
//                                 alt="increase" 
//                                 src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
//                                 // No binding required as addStars() is an arrow function
//                                 onClick={()=>addStars(movies)}
//                             />
//                             <span className="starCount">{star}</span>
//                         </div>

//                         {/**conditional rendering on Favourite button */}
//                         <button className={fav?"unfavourite-btn":"favourite-btn"}  
//                             onClick={()=>toggleFav(movies)}>
//                             {fav ? "Un-favourite":"Favourite"}
//                         </button>
//                         {/**
//                          * {fav? <button className="unfavourite-btn" onClick={this.toggleFav}> Un-favourite </button> :
//                          *       <button className="favourite-btn" onClick={this.toggleFav}> favourite </button>}
//                          */}

//                             {/**Conditional Rendering on Add to Cart Button */}
//                         <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={()=>toggleCart(movies)}>
//                             {isInCart ? "Remove from Cart":"Add to Cart"}
//                         </button>
                        
//                     </div>
//                 </div>

//             </div>
          
//         )
//     }
// }

// export default MovieCard;

import React from "react";

class MovieCard extends React.Component {
  render() {
    const { addStars, remStars, toggleFav, toggleCart } = this.props;

    const { title, plot, poster, price, rating, star, fav, isInCart } = this.props.movies;

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={poster} />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                alt="Decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                onClick={() => remStars(this.props.movies)}
              />
              <img
                className="stars"
                alt="stars"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />
              <img
                className="str-btn"
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                onClick={() => addStars(this.props.movies)}
              />
              <span className="starCount">{star}</span>
            </div>
            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={() => toggleFav(this.props.movies)}>
              {fav ? "Un-favourite" : "Favourite"}
            </button>
            <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={() => toggleCart(this.props.movies)}>
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

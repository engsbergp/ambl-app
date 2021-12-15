// import React from "react";
// import Sketch from "react-p5";

// import audio from "../../assets/like-the-second-half.mp3";

//   const windowHeight = window.screen.height;
//   const windowWidth = window.screen.width;

// const Visualization = (props) => {

//   let song = new Audio(audio);

// 	const setup = (p5, canvasParentRef) => {
// 		p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);
// 	}

// 	const draw = (p5) => {
// 		p5.background(0);
// 	}

//   function playAudio() {
//     song.play();
//   }

//   // function playAudio() {
//   //   if (song.isPlaying()) {
//   //     song.play()
//   //   } else {
//   //     song.pause()
//   //   }
//   // };


// 	return (
//   <div>
//       <div onClick={playAudio}>
//         <Sketch setup={setup} draw={draw} /> 
//       </div>
         
//   </div>  
  
//   )
// };

// export default Visualization
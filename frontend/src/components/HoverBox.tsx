import { useEffect, useRef } from "react";

export default function HoverBox({ children }) {
  const cardRef = useRef(null)
  let bounds;

  useEffect(() => {
    let $card = cardRef.current;
    
    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x**2 + center.y**2);
      
      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance)* 2}deg
        )
      `;
      
      $card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width/2}px
          ${center.y * 2 + bounds.height/2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }

    function addEvent () {
      bounds = $card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    }

    function leaveEvent () {
      document.removeEventListener('mousemove', rotateToMouse);
      $card.style.transform = '';
      $card.style.background = '';
    }

    $card.addEventListener('mouseenter', addEvent);
    $card.addEventListener('mouseleave', leaveEvent);

    return () => {
      $card.removeEventListener('mouseenter', addEvent)
      $card.removeEventListener('mouseleave', leaveEvent)
    }
  }, [cardRef])

  return (
      <div id="ex1-layer" ref={cardRef} className="border-2 border-red-500 h-96 w-96 relative transition duration-100">
          {children}
      </div>
  )
}
// export default function HoverBox({ children }) {
//   const mouseOverContainerRef = useRef(null)
//   const ex1LayerRef = useRef(null)
  
//   let constrain = 370;

//   function transforms(x, y, el) {
//     let box = el.getBoundingClientRect();
//     let calcX = -(y - box.y - (box.height / 2)) / constrain;
//     let calcY = (x - box.x - (box.width / 2)) / constrain;

//     return "perspective(100px) "
//       + "   rotateX("+ calcX +"deg) "
//       + "   rotateY("+ calcY +"deg) ";
//   };
  
//   function transformElement(el, xyEl) {
//     el.style.transform  = transforms.apply(null, xyEl);
//   }

//   useEffect(() => {
//     let mouseOverContainer = mouseOverContainerRef.current;
//     let ex1Layer = ex1LayerRef.current;

//     function move(e) {
//       let xy = [e.clientX, e.clientY];
//       let position = xy.concat([ex1Layer]);
    
//       window.requestAnimationFrame(function(){
//         transformElement(ex1Layer, position);
//       });
//     };

//     mouseOverContainer.onmousemove = move;

//     return () => {
//       mouseOverContainer.removeEventListener("onmousemove", move);
//     }
//   }, [ex1LayerRef, mouseOverContainerRef])

//   return (
//     <div id="ex1" ref={mouseOverContainerRef} className="h-screen w-full flex items-center justify-center">
//         <div id="ex1-layer" ref={ex1LayerRef} className="border-2 border-red-500 h-96 w-96 absolute">
//           {children}
//         </div>
//     </div>
//   )
// }

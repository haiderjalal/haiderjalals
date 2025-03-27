// components/BackgroundAnimation.js

// export default function BackgroundAnimation() {
//   return (
//     <div className="absolute inset-0 -z-10">
//       <script
//         type="module"
//         src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"
//       ></script>
//       <spline-viewer url="https://prod.spline.design/GMbDwrW2gPTDjuwt/scene.splinecode"></spline-viewer>
//     </div>
//   );
// }



// import Spline from '@splinetool/react-spline/next';

// export default function BackgroundAnimation() {
//   return (
//     <main className="absolute inset-0 -z-10">
//       <Spline
//         scene="https://prod.spline.design/GMbDwrW2gPTDjuwt/scene.splinecode" 
//       />
//     </main>
//   );
// }



import Spline from '@splinetool/react-spline/next';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full">
        <Spline scene="https://prod.spline.design/GMbDwrW2gPTDjuwt/scene.splinecode" />
      </div>
    </div>
  );
}
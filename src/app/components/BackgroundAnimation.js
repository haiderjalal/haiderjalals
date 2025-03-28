
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
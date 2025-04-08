
import Spline from '@splinetool/react-spline/next';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-0 top-[-850px] pb-10">
      <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/8lv5IGlb-mFK5QUB/scene.splinecode" 
      />
      </div>
    </div>
  );
}
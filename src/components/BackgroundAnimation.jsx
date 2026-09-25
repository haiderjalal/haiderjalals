"use client";
import Spline from '@splinetool/react-spline/next';
import { useEffect } from 'react';

export default function BackgroundAnimation() {
  useEffect (() => { 
    console.log('BackgroundAnimation component mounted');
  },[]);
  return (
    <div className="absolute inset-0 -z-10 top-[-850px] pb-10">
      <div className="w-full h-full">
      <Spline
       scene="https://prod.spline.design/8lv5IGlb-mFK5QUB/scene.splinecode" 

      />
      </div>
    </div>
  );
}
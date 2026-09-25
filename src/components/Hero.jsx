// Server Component. The only client JS here is LazySpline itself.
import Image from "next/image";
import LazySpline from "./LazySpline";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between p-8 overflow-hidden bg-black">
      {/* Background Spline Animation.
          `defer` holds the WebGL runtime back until the browser is idle so it
          does not compete with the hero text and portrait for the first paint. */}
      <div className="absolute inset-0 -z-0 bg-black">
        <LazySpline
          scene="https://prod.spline.design/veyxO-A64L241GHs/scene.splinecode"
          showLoader={false}
          defer
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-white z-10 hero-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi There, I&apos;m<br />
          <span className="text-[#C5C505]">Haider Jalal</span>
        </h1>
        <p className="text-lg md:text-xl">A Full Stack Engineer</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 z-10 hero-in-right">
        <Image
          src="/haiderjalal.png"
          alt="Haider Jalal"
          width={400}
          height={400}
          className="rounded-full"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp"
        />
      </div>
    </section>
  );
}

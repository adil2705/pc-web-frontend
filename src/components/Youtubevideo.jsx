import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Youtubevideo() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-8/10 mx-4  max-w-7xl flex-1 rounded-lg bg-orange-600 p-2 shadow-xl sm:p-3 md:mx-auto md:mt-24 md:w-3/5"
    >
      <div className="aspect-w-16 aspect-h-9 ">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3V1PciBdUJM?si=T6RBEFZ5d2fqiHpZ&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

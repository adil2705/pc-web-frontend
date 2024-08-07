import React from "react";
import Landing from "../components/Landing";
import Youtubevideo from "../components/Youtubevideo";
import EventCard from "../components/EventCard";
import eventCard from "../data/eventCard";
import Opportunity from "../components/Opportunity";
import Faq from "../components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const runCallback = cb => {
    return cb();
  };
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="space-y-5">
      <Landing />
      <Youtubevideo />
      
      <section className="mx-auto mt-6 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            id="codeaajkal"
            className="mb-14 text-center"
          >
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Event & Workshops
            </h1>
          </div>
          
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col rounded-lg bg-gray-100 xl:flex-row shadow-xl "
          >
            <img
              className=" round w-auto rounded-t-lg xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
              src="/img/WhatsApp Image 2024-02-25 at 5.03.02 PM.jpeg"
              alt="banner"
            />
            <div className="p-10 xl:p-16">
              <div className=" mb-8">
                <h1 className=" mb-4 w-full text-2xl font-semibold text-blue-600">
                  <span classname="text-4xl font-semibold text-orange-500 ">A</span>lgorithm <span className=" text-orange-500">8.0</span>
                </h1>
                <p>
                Algorithm hackathon is an event where participants come together to solve real world problems, basically in a competitive environment.
                </p>
              </div>
              <div>
                <a href="https://programmersclubtest.netlify.app/" class="relative inline-block my-2 text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-orange-600  rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
<span class="relative">Recruitment</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
              </div>
            </div>
          </div> 
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-10 text-center"
          >
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
              Recent Events
            </p>
          </div>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {runCallback(() => {
              const row = [];
              for (let i = 0; i < 4; i++) {
                row.push(
                  <EventCard events={eventCard[i]} key={eventCard[i].title} />
                );
              }
              return row;
            })}
          </section>
        </article>
      </section>
      <Opportunity />
      <Faq />
    </div>
  );
}

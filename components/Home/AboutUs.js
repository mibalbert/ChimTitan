/**
 * AboutUs.js
 */

const AboutUs = () => {
  return (
    <div className="w-full pt-20 pb-24 bg-zinc-100">
      {/* <div className="max-w-4xl mx-auto pb-3 text-xl ">About Us</div> */}
      {/* <div className="text-bold text-2xl max-w-[92%] 2xl:max-w-[1300px] mx-auto py-8 md:pt-10 md:pb-8 mt-10 md:mt-0 text-center md:text-left"> */}
      <div
        className="text-bold text-2xl max-w-[92%] 2xl:max-w-[1300px] 
      mx-auto  text-center md:text-left "
      >
        About Us
      </div>
      <div className="max-w-[92%] 2xl:max-w-[1300px] mx-auto ">
        <p className="max-w-[1100px] mx-auto my-5">
          {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          inventore placeat ratione omnis blanditiis repudiandae ex porro fuga
          perspiciatis culpa, in impedit rem praesentium fugit, reprehenderit
          laboriosam harum quaerat odit facilis consectetur non qui. Deserunt,
          ipsum ad. Minima inventore repudiandae, magnam soluta autem cumque
          non! laboriosam harum quaerat odit facilis consectetur non qui.
          Deserunt, ipsum ad. Minima inventore repudiandae, magnam soluta autem
          cumque non! laboriosam harum quaerat odit facilis consectetur non qui.
          Deserunt, ipsum ad. Minima inventore repudiandae, magnam soluta autem
          cumque non!"`}
        </p>
        <p className="max-w-[1100px] mx-auto text-right ">
          Founder, John O. Doe
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

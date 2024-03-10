import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Welcome to my portfolio! I'm a versatile and skilled developer
            proficient in a range of technologies including HTML, CSS, Tailwind
            CSS, Redux, Express.js, React, JavaScript, and MongoDB. With a
            passion for crafting beautiful and efficient web applications, I
            bring creativity, dedication, and expertise to every project I
            undertake. {" "}
          </p>
          {/* <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            1. **Frontend Excellence**: I specialize in creating responsive and
            visually stunning user interfaces using HTML, CSS, and Tailwind CSS.
            Whether it's designing a sleek landing page or developing complex
            web applications, I ensure a seamless and intuitive user experience.
          </p>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            2. **React Mastery**: As a React expert, I leverage the power of
            this cutting-edge library to build dynamic and interactive UIs. From
            state management with Redux to component-based architecture, I
            employ best practices to create scalable and maintainable React
            applications.
          </p>

          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            3. **Backend Proficiency**: With experience in Express.js and
            MongoDB, I develop robust backend solutions that seamlessly
            integrate with frontend interfaces. From RESTful APIs to database
            management, I ensure the backend of your application is secure,
            efficient, and scalable.
          </p>

          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            4. **Full Stack Solutions**: I excel in full stack development,
            seamlessly bridging the gap between frontend and backend
            technologies. Whether it's crafting APIs, implementing
            authentication mechanisms, or optimizing performance, I deliver
            end-to-end solutions tailored to your unique requirements.{" "}
          </p>

          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            5. **Problem-Solving Skills**: I thrive on solving complex technical
            challenges and am adept at troubleshooting issues to deliver
            high-quality results within deadlines. With a proactive and
            detail-oriented approach, I tackle problems head-on and implement
            effective solutions that exceed expectations.
          </p>

          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            6. **Collaborative Spirit**: I believe in effective communication
            and collaboration throughout the development process. Whether
            working independently or as part of a team, I actively engage with
            stakeholders to ensure alignment with project goals and deliver
            results that drive success. If you're looking for a dedicated and
            skilled developer to bring your vision to life, look no further.
            Let's collaborate to build exceptional web experiences that leave a
            lasting impression. Reach out to discuss your project requirements
            and take the next step towards turning your ideas into reality!
          </p> */}

          <a href="#contact">
            <button className="btn-primary mt-10">Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32em] h-80 lg:absolute bottom-0 -right-2 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;

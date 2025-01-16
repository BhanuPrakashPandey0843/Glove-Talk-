import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      {/* <!--Container --> */}
      {/* <!-- Component --> */}
      <motion.div
        className="bg-white p-8 text-center sm:p-10 md:p-16"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // Animation will only trigger once when in view
      >
        {/* <!-- Title --> */}
        <h2 className="mb-4 text-3xl font-bold md:text-5xl text-[#000] ">
          Join the <span style={{ color: 'red' }}>Beast Boxing</span> Community
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-[#647084] md:mb-10">
          Step into the ring of camaraderie and strength—join the Beast Boxing Community, where every punch thrown is a testament to resilience, and every member is a champion in the making.
        </p>
        {/* <!-- Form --> */}
        <form name="email-form" method="get" className="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row">
          <input
            type="email"
            className="mb-3 mr-6 block h-9 w-full bg-white px-6 py-7 text-sm text-[#333333] focus:border-[#000]"
            placeholder="Enter your email"
            required
          />
          <input
            type="submit"
            value="Subscribe"
            className="inline-block w-full cursor-pointer bg-[#000] px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] sm:w-28"
          />
        </form>
      </motion.div>
    </section>
  );
}

export default Newsletter;
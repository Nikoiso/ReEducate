import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function About() {
  const [openHowItWorks, setOpenHowItWorks] = useState<number | null>(1);
  const [openSafeDriving, setOpenSafeDriving] = useState<number | null>(1);

  const howItWorksData: FAQItem[] = [
    {
      id: 1,
      question: "How do I download the app?",
      answer:
        "To download the Scoot app, you can search 'Scoot' in both the App store and Google Play store. An even simpler way to do it would be to click the relevant link at the bottom of this page and you'll be re-directed to the correct page.",
    },
    {
      id: 2,
      question: "Can I find a nearby Scoots?",
      answer:
        "Yes, open the app and use the interactive map to locate the nearest available Scoot scooter around you.",
    },
    {
      id: 3,
      question: "Do I need a license to ride?",
      answer:
        "Depending on your local regulations, you may need a valid driver's license or ID to register and ride.",
    },
  ];

  const safeDrivingData: FAQItem[] = [
    {
      id: 1,
      question: "Should I wear a helmet?",
      answer:
        "Yes, please do. All cities have different laws, but we strongly encourage helmet use regardless of local laws. We want you to be as safe as possible while Scooting.",
    },
    {
      id: 2,
      question: "How about the rules & regulations?",
      answer:
        "Always follow traffic laws, stick to bike lanes where available, and never ride on sidewalks unless local laws permit.",
    },
    {
      id: 3,
      question: "What if I damage my Scoot?",
      answer:
        "Report any issues or damage directly in the app before or after your ride so our team can assist and service the vehicle.",
    },
  ];

  const toggleAccordion = (
    id: number,
    state: number | null,
    setState: (val: number | null) => void,
  ) => {
    setState(state === id ? null : id);
  };

  return (
    <main className="w-full overflow-x-clip font-sans text-[#495567] bg-white">
      <section className="relative bg-[#2f3b47] py-16 px-8 text-white md:px-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About</h1>

        <svg
          className="absolute -right-7.75 top-1/2 -translate-y-1/2 hidden md:block"
          width="234"
          height="63"
          viewBox="0 0 234 63"
          fill="none"
        >
          <circle opacity="0.2" cx="31.5" cy="31.5" r="31.5" fill="white" />
          <circle opacity="0.2" cx="117" cy="31.5" r="31.5" fill="white" />
          <circle opacity="0.2" cx="202.5" cy="31.5" r="31.5" fill="white" />
        </svg>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-32">
        <div className="relative flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-md space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl text-[#495567]">
              Mobility for the digital era
            </h2>
            <p className="text-[#939caa]">
              Getting around should be simple and even fun for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>

          <div className="relative">
            <img
              src="/Bitmap.png"
              alt="Mobility for digital era"
              className="h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
            />

            <div className="absolute -right-24 top-0 -z-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#e5ecf4]/60 translate-x-1/2" />

            <motion.svg
              className="absolute -bottom-12 -left-32 md:-left-44 hidden md:block"
              width="741"
              height="151"
              viewBox="0 0 741 151"
              fill="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M741 15H300V136H15"
                stroke="#FCB72B"
                strokeWidth="15"
                strokeLinejoin="miter"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: { duration: 1.2, ease: "easeInOut" },
                      opacity: { duration: 0.2 },
                    },
                  },
                }}
              />

              <motion.path
                d="M25 121L0 136L25 151V121Z"
                fill="#FCB72B"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.1,
                      duration: 0.3,
                      ease: "backOut",
                    },
                  },
                }}
              />
            </motion.svg>
          </div>
        </div>

        <div className="relative flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
          <div className="relative">
            <img
              src="Bitmap (1).png"
              alt="Better urban living"
              className="h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
            />

            <div className="absolute -left-24 top-0 -z-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#e5ecf4]/60 -translate-x-1/2" />

            <motion.svg
              className="absolute top-0 -left-64 md:-left-96 hidden md:block"
              width="500"
              height="151"
              viewBox="0 0 500 151"
              fill="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M0 15H350V136H480"
                stroke="#FCB72B"
                strokeWidth="15"
                strokeLinejoin="miter"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: { duration: 1.2, ease: "easeInOut" },
                      opacity: { duration: 0.2 },
                    },
                  },
                }}
              />
              <motion.path
                d="M470 121L495 136L470 151V121Z"
                fill="#FCB72B"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.1,
                      duration: 0.3,
                      ease: "backOut",
                    },
                  },
                }}
              />
            </motion.svg>
          </div>

          <div className="max-w-md space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl text-[#495567]">
              Better urban living
            </h2>
            <p className="text-[#939caa]">
              We're helping connect cities and bring people closer together. Our
              scooters are also fully electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-16 text-3xl font-bold md:text-4xl text-[#495567]">
          Our values
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <img
                src="Bitmap (2).png"
                alt="Our tech"
                className="h-56 w-56 rounded-full object-cover"
              />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fcb72b] px-6 py-3 font-bold text-[#333a42] text-lg">
                01
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#495567]">Our tech</h3>
            <p className="text-sm text-[#939caa] max-w-xs leading-relaxed">
              We're using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <img
                src="Bitmap (3).png"
                alt="Our integrity"
                className="h-56 w-56 rounded-full object-cover"
              />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fcb72b] px-6 py-3 font-bold text-[#333a42] text-lg">
                02
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#495567]">
              Our integrity
            </h3>
            <p className="text-sm text-[#939caa] max-w-xs leading-relaxed">
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <img
                src="Bitmap (4).png"
                alt="Our community"
                className="h-56 w-56 rounded-full object-cover"
              />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fcb72b] px-6 py-3 font-bold text-[#333a42] text-lg">
                03
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#495567]">
              Our community
            </h3>
            <p className="text-sm text-[#939caa] max-w-xs leading-relaxed">
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-[#495567]">
          FAQs
        </h2>

        <div className="mb-16 flex flex-col gap-8 md:flex-row md:justify-between">
          <h3 className="text-2xl font-bold md:w-1/3 text-[#495567]">
            How it works
          </h3>
          <div className="space-y-4 md:w-2/3">
            {howItWorksData.map((item) => (
              <div
                key={item.id}
                className="bg-[#f2f5f9] p-8 rounded-lg transition-all"
              >
                <button
                  onClick={() =>
                    toggleAccordion(item.id, openHowItWorks, setOpenHowItWorks)
                  }
                  className="flex w-full items-center justify-between text-left font-bold text-lg text-[#495567] hover:text-[#fcb72b]"
                >
                  <span>{item.question}</span>
                  <span className="text-[#fcb72b]">
                    {openHowItWorks === item.id ? "▲" : "▼"}
                  </span>
                </button>
                {openHowItWorks === item.id && (
                  <p className="mt-4 text-sm leading-relaxed text-[#495567]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <h3 className="text-2xl font-bold md:w-1/3 text-[#495567]">
            Safe driving
          </h3>
          <div className="space-y-4 md:w-2/3">
            {safeDrivingData.map((item) => (
              <div
                key={item.id}
                className="bg-[#f2f5f9] p-8 rounded-lg transition-all"
              >
                <button
                  onClick={() =>
                    toggleAccordion(
                      item.id,
                      openSafeDriving,
                      setOpenSafeDriving,
                    )
                  }
                  className="flex w-full items-center justify-between text-left font-bold text-lg text-[#495567] hover:text-[#fcb72b]"
                >
                  <span>{item.question}</span>
                  <span className="text-[#fcb72b]">
                    {openSafeDriving === item.id ? "▲" : "▼"}
                  </span>
                </button>
                {openSafeDriving === item.id && (
                  <p className="mt-4 text-sm leading-relaxed text-[#495567]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

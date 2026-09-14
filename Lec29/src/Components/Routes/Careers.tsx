import { motion } from "framer-motion";

interface JobItem {
  id: number;
  title: string;
  location: string;
}

export default function Careers() {
  const jobsData: JobItem[] = [
    { id: 1, title: "General Manager", location: "Jakarta, Indonesia" },
    { id: 2, title: "UI/UX Designer", location: "Yokohama, Japan" },
    {
      id: 3,
      title: "Blog Content Copywriter",
      location: "New York, United States",
    },
    { id: 4, title: "Graphic Designer", location: "New York, United States" },
    { id: 5, title: "Fleet Supervisor", location: "Jakarta, Indonesia" },
    { id: 6, title: "UX Analyst", location: "London, United Kingdom" },
  ];

  return (
    <main className="w-full overflow-x-clip font-sans text-[#495567] bg-white">
      <section className="relative bg-[#2f3b47] py-16 px-8 text-white md:px-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Careers
        </h1>

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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-md space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl text-[#495567]">
              Care to join our mission?
            </h2>
            <p className="text-[#939caa]">
              We're always looking for ambitious individuals to help us on our
              journey. If you're passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
            <button className="bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3 rounded hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-all">
              Say Hello
            </button>
          </div>

          <div className="relative">
            <img
              src="/Bitmap (5).png"
              alt="Join our mission"
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
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-16 text-3xl font-bold md:text-4xl text-[#495567]">
          Why join us?
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <img
                src="/Bitmap (2).png"
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
                src="/Bitmap (3).png"
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
                src="/Bitmap (4).png"
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

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-center justify-between gap-4 bg-[#f2f5f9] p-8 text-center rounded-lg sm:flex-row sm:text-left"
          >
            <div>
              <h3 className="text-xl font-bold text-[#495567]">{job.title}</h3>
              <p className="text-sm text-[#939caa]">{job.location}</p>
            </div>
            <button className="w-full sm:w-auto bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3 rounded hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-all">
              Apply
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

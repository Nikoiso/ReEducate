import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-white font-sans text-[#495567]">
      <section className="relative h-162.5 w-full overflow-hidden flex items-center px-8 md:px-24 bg-[#2f3b47]">
        <img
          src="/Bitmap.jpg"
          alt="Scooter sharing hero"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-[#2f3b47]/70 z-10" />

        <div className="max-w-xl space-y-8 text-white z-20 relative">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl leading-tight text-white">
            Scooter sharing made simple
          </h1>
          <p className="text-lg text-[#e5ecf4] leading-relaxed max-w-md">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you're away!
          </p>
          <button className="bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3.5 hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-colors">
            Get Scootin
          </button>
        </div>

        <svg
          className="absolute -right-8 top-95 hidden md:block z-20"
          width="234"
          height="63"
          viewBox="0 0 234 63"
          fill="none"
        >
          <circle
            cx="31.5"
            cy="31.5"
            r="30.5"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
          />
          <circle
            cx="117"
            cy="31.5"
            r="30.5"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
          />
          <circle cx="202.5" cy="31.5" r="31.5" fill="white" />
        </svg>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-4 bg-[#e5ecf4] -z-10" />

          <div className="flex flex-col items-center md:items-start space-y-6 bg-white pr-4">
            <div className="w-24 h-24 rounded-full bg-[#fcb72b] flex items-center justify-center">
              <img
                src="/Combined Shape.png"
                alt="Locate app icon"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#495567]">
              Locate with app
            </h3>
            <p className="text-sm text-[#939caa] leading-relaxed">
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 bg-white px-2">
            <div className="w-24 h-24 rounded-full bg-[#fcb72b] flex items-center justify-center">
              <img
                src="/Scooticon.png"
                alt="Pick scooter icon"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#495567]">
              Pick your scooter
            </h3>
            <p className="text-sm text-[#939caa] leading-relaxed">
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 bg-white pl-4">
            <div className="w-24 h-24 rounded-full bg-[#fcb72b] flex items-center justify-center">
              <img
                src="/Scooticon.png"
                alt="Enjoy ride icon"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#495567]">
              Enjoy the ride
            </h3>
            <p className="text-sm text-[#939caa] leading-relaxed">
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you're off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-32">
        <div className="relative flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-md space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl text-[#495567]">
              Easy to use riding telemetry
            </h2>
            <p className="text-[#939caa] leading-relaxed">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <button className="bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3.5 hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-colors">
              Learn More
            </button>
          </div>

          <div className="relative">
            <img
              src="/Bitmap1.png"
              alt="Telemetry preview"
              className="h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
            />
            <div className="absolute -right-24 top-0 -z-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#e5ecf4]/60 translate-x-1/2" />

            <motion.svg
              className="absolute top-40 -right-64 md:-right-96 hidden md:block"
              width="741"
              height="151"
              viewBox="0 0 741 151"
              fill="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M741 15H300V136H25"
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
                d="M35 121L10 136L35 151V121Z"
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
              src="Bitmap2.png"
              alt="Coming to city"
              className="h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
            />
            <div className="absolute -left-24 top-0 -z-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#e5ecf4]/60 -translate-x-1/2" />

            <motion.svg
              className="absolute -top-12 -left-64 md:-left-80 hidden md:block"
              width="500"
              height="151"
              viewBox="0 0 500 151"
              fill="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M0 15H320V136H465"
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
                d="M455 121L480 136L455 151V121Z"
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
              Coming to a city near you
            </h2>
            <p className="text-[#939caa] leading-relaxed">
              Scoot is available in 4 major cities so far. We're expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We're aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <button className="bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3.5 hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-md space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl text-[#495567]">
              Zero hassle payments
            </h2>
            <p className="text-[#939caa] leading-relaxed">
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
            <button className="bg-[#fcb72b] text-[#333a42] font-bold px-8 py-3.5 hover:bg-transparent hover:text-[#fcb72b] border-2 border-[#fcb72b] transition-colors">
              Learn More
            </button>
          </div>

          <div className="relative">
            <img
              src="Bitmap3.png"
              alt="Hassle free payments"
              className="h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
            />
            <div className="absolute -right-24 top-0 -z-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#e5ecf4]/60 translate-x-1/2" />

            <motion.svg
              className="absolute top-24 -right-64 md:-right-96 hidden md:block"
              width="741"
              height="151"
              viewBox="0 0 741 151"
              fill="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M741 15H300V136H25"
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
                d="M35 121L10 136L35 151V121Z"
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
    </main>
  );
}

import '../App.css';
import { motion } from "framer-motion";
import Hero from "./Hero";
import Products from "./Products";
import type { WorkStep, Testimonial } from "../types";

const workSteps: WorkStep[] = [
  {
    number: "01",
    title: "Contact",
    description: "Tell us what you are looking for.",
  },
  {
    number: "02",
    title: "Baking",
    description: "Our bakers prepare everything fresh.",
  },
  {
    number: "03",
    title: "Delivery",
    description: "Your order arrives fresh and ready.",
  },
  {
    number: "04",
    title: "Tasty",
    description: "Enjoy every delicious bite.",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mary",
    role: "Food lover",
    text: "Very tasty bakery products and always incredibly fresh.",
    rating: 5,
  },
  {
    id: 2,
    name: "David",
    role: "Happy customer",
    text: "The bread is amazing and the service is always great.",
    rating: 5,
  },
  {
    id: 3,
    name: "Will",
    role: "Customer",
    text: "Everything tastes homemade and beautifully prepared.",
    rating: 5,
  },
];

const MainContent = () => {
  return (
    <main>
      <Hero />

      <section
        id="about"
        className="relative overflow-hidden bg-[#F7D3A4] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-[1110px]">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto h-[300px] w-full max-w-[390px]"
            >
              <div className="absolute left-[8%] top-[4%] h-[55%] w-[55%] bg-black" />
              <div className="absolute bottom-[4%] left-[17%] h-[65%] w-[67%] rounded-full bg-[#A7B999]" />
              <div className="absolute bottom-[12%] left-[25%] z-10 h-[62%] w-[58%] bg-[#BFC1BC]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[8px] uppercase tracking-[0.2em] text-black/60">
                Our story
              </p>

              <h2 className="mt-3 max-w-[400px] font-serif text-[39px] font-black leading-[0.95] tracking-[-0.045em] text-[#121716] sm:text-[48px]">
                Baking Special
                <br />
                Moments
              </h2>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[8px] text-white">
                    01
                  </span>
                  <div>
                    <h3 className="text-[10px] font-bold">Best Ingredients</h3>
                    <p className="mt-1 max-w-[300px] text-[8px] leading-5 text-black/60">
                      We use carefully selected ingredients for every recipe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[8px] text-white">
                    02
                  </span>
                  <div>
                    <h3 className="text-[10px] font-bold">Made With Love</h3>
                    <p className="mt-1 max-w-[300px] text-[8px] leading-5 text-black/60">
                      Every product is prepared by hand with attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {workSteps.map((step) => (
              <div key={step.number} className="rounded-xl bg-white/40 p-4 backdrop-blur-sm">
                <span className="text-xl font-bold text-[#F2A64E]">{step.number}</span>
                <h3 className="mt-1 font-serif text-[14px] font-black">{step.title}</h3>
                <p className="mt-1 text-[8px] leading-4 text-black/60">{step.description}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <p className="text-center text-[8px] uppercase tracking-[0.2em] text-black/60">
              Our values
            </p>

            <h2 className="mt-3 text-center font-serif text-[34px] font-black tracking-[-0.04em]">
              Baked With Love
            </h2>

            <div className="mx-auto mt-8 grid max-w-[800px] gap-[2px] sm:grid-cols-3">
              {[
                ["♨", "Fresh", "Freshly prepared every morning."],
                ["⌁", "Natural", "Simple and natural ingredients."],
                ["◉", "Tasty", "Made to taste absolutely delicious."],
              ].map(([icon, title, description], index) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.03 }}
                  className={`relative min-h-[150px] p-6 ${
                    index === 2 ? "bg-[#A7B999]" : "bg-[#F7F5ED]"
                  }`}
                >
                  {index === 2 && (
                    <span className="absolute right-0 top-0 h-14 w-14 rounded-bl-full bg-[#F2A64E]" />
                  )}

                  <div className="relative z-10">
                    <span className="text-2xl text-[#F2A64E]">{icon}</span>
                    <h3 className="mt-5 font-serif text-[18px] font-black">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-[150px] text-[8px] leading-5 text-black/55">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#121716] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1110px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#121716] shadow-xl"
            >
              ▶
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/50">
              Our story
            </p>

            <h2 className="mt-3 font-serif text-[38px] font-black leading-[0.95] tracking-[-0.045em]">
              Story Behind
              <br />
              Every Piece
            </h2>
          </motion.div>
        </div>
      </section>

      <Products />

      <section className="bg-[#F7D3A4] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1110px] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[8px] uppercase tracking-[0.2em] text-black/60">
              Our expert
            </p>

            <h2 className="mt-3 max-w-[400px] font-serif text-[40px] font-black leading-[0.95] tracking-[-0.045em] text-[#121716] sm:text-[50px]">
              Meet Our
              <br />
              Professional
              <br />
              Baker
            </h2>

            <div className="mt-7 space-y-3 text-[9px]">
              <p className="font-bold">01 &nbsp; Sofia Rodriguez</p>
              <p className="max-w-[320px] leading-5 text-black/60">
                Professional baker with years of experience creating fresh
                artisan bakery products.
              </p>
              <p className="font-bold">Expertise</p>
              <p className="text-black/60">Pastry · Bread · Cakes</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto h-[350px] w-full max-w-[420px]"
          >
            <div className="absolute left-[20%] top-[7%] h-[78%] w-[58%] rounded-full bg-[#A7B999]" />
            <div className="absolute right-[10%] top-0 h-[95%] w-[55%] bg-white" />
            <div className="absolute left-[9%] top-[34%] z-10 h-10 w-10 border border-dashed border-black" />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7D3A4] px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1110px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[480px] text-center"
          >
            <p className="text-[8px] uppercase tracking-[0.2em] text-black/60">
              Testimonials
            </p>

            <h2 className="mt-2 font-serif text-[34px] font-black leading-none tracking-[-0.04em]">
              People Say About
              <br />
              Our Bakery
            </h2>
          </motion.div>

          <div className="mt-9 grid gap-2 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`min-h-[160px] p-5 ${
                  index === 1 ? "bg-[#A7B999]" : "bg-[#F7F5ED]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-widest text-[#F2A64E]">
                    {"★".repeat(testimonial.rating)}
                  </span>
                  <span className="h-7 w-7 rounded-full bg-[#D3D3CD]" />
                </div>

                <h3 className="mt-7 font-serif text-[15px] font-black">
                  {testimonial.name}
                </h3>

                <p className="mt-2 text-[8px] leading-5 text-black/55">
                  {testimonial.text}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#F7D3A4] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1110px] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto h-[330px] w-full max-w-[420px]"
          >
            <div className="absolute left-[15%] top-[5%] h-[78%] w-[58%] bg-white" />
            <div className="absolute bottom-0 left-[15%] h-20 w-[58%] rounded-full bg-[#A7B999]" />
            <div className="absolute right-[10%] top-[25%] h-14 w-14 border border-dashed border-black" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[8px] uppercase tracking-[0.2em] text-black/60">
              Get in touch
            </p>

            <h2 className="mt-3 font-serif text-[43px] font-black leading-[0.9] tracking-[-0.045em] text-[#121716]">
              Contact
              <br />
              With Us
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-6 text-[9px]">
              <div>
                <p className="font-bold">Email</p>
                <p className="mt-2 text-black/55">hello@bkr.com</p>
              </div>

              <div>
                <p className="font-bold">Phone</p>
                <p className="mt-2 text-black/55">+1 234 567 890</p>
              </div>
            </div>

            <motion.a
              href="mailto:hello@bkr.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-block bg-[#121716] px-7 py-3 text-[8px] uppercase tracking-widest text-white"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
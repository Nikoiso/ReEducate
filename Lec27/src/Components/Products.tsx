import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    name: "Classic Croissant",
    description:
      "Buttery, flaky and freshly baked to golden perfection.",
    price: "$3.50",
    image: "/images/croissant.jpg",
  },
  {
    id: 2,
    name: "Chocolate Cake",
    description:
      "Rich chocolate cake layered with smooth chocolate cream.",
    price: "$6.50",
    image: "/images/chocolate-cake.jpg",
  },
  {
    id: 3,
    name: "Cinnamon Roll",
    description:
      "Soft cinnamon pastry finished with a delicious vanilla glaze.",
    price: "$4.25",
    image: "/images/cinnamon-roll.jpg",
  },
  {
    id: 4,
    name: "Sourdough Bread",
    description:
      "Naturally fermented bread with a crisp crust and soft center.",
    price: "$5.50",
    image: "/images/sourdough.jpg",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="bg-[#FFFDFB] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-[650px] text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C77B48] sm:text-sm">
            Our favorites
          </p>

          <h2 className="mt-3 font-serif text-[38px] font-bold leading-tight tracking-[-0.03em] text-[#3D251E] sm:text-[50px]">
            Fresh From The Oven
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#806B61] sm:text-base">
            From flaky pastries to artisan breads, every product is baked
            fresh with care.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
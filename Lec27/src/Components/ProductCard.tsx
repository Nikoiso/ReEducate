import '../App.css';
import { motion } from "framer-motion";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isLarge = product.size === "large";
  const isMedium = product.size === "medium";

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden bg-[#A5A5A5] ${
        isLarge
          ? "md:col-span-2 md:row-span-2"
          : isMedium
            ? "md:col-span-1"
            : "md:col-span-1"
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[#A5A5A5]" />

      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#F7F5ED] px-4 py-4 text-[#121716] ${
          isLarge ? "sm:px-5 sm:py-5" : ""
        }`}
      >
        <p className="text-[6px] uppercase tracking-[0.18em] text-black/50">
          {product.category}
        </p>

        <div className="mt-1 flex items-end justify-between gap-2">
          <h3
            className={`font-serif font-black leading-none ${
              isLarge ? "text-[22px]" : "text-[13px]"
            }`}
          >
            {product.name}
          </h3>

          <span className="text-[8px] font-bold">{product.price}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
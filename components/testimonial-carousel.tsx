import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Blockchain Developer",
    company: "TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    content:
      "BlockLearn transformed my career in blockchain development. The practical approach and expert guidance were invaluable.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    role: "DeFi Specialist",
    company: "DeFi Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    content:
      "The DeFi courses are comprehensive and up-to-date. I particularly enjoyed the hands-on projects and community support.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emma Williams",
    role: "Smart Contract Auditor",
    company: "Security First",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1890&auto=format&fit=crop",
    content:
      "The security-focused content helped me become a better smart contract auditor. Highly recommended!",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-60  bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 gradient-text-2"
        >
          What Our Students Say
        </motion.h2>

        <div className="relative max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800">
                <div className="flex flex-col items-center text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-24 h-24"
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonials[current].gradient} blur-lg opacity-50`}
                    />
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-white/20"
                    />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl italic text-gray-200"
                  >
                    "{testimonials[current].content}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-blue-300">
                      {testimonials[current].role} at{" "}
                      {testimonials[current].company}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

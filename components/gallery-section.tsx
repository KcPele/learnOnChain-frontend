import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/ai-blockchain-city.jpg", // Futuristic city with blockchain networks
    alt: "Blockchain Technology",
    title: "Advanced Blockchain Concepts",
    description: "Explore the future of decentralized technology",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    src: "/ai-crypto-trading.jpg", // Abstract visualization of crypto markets
    alt: "Crypto Trading",
    title: "Professional Trading",
    description: "Master digital asset trading strategies",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    src: "/ai-smart-contract.jpg", // Digital contract with glowing code
    alt: "Smart Contracts",
    title: "Smart Contract Development",
    description: "Build secure and efficient contracts",
    gradient: "from-pink-500 to-red-500",
  },
  {
    src: "/ai-nft-world.jpg", // Digital art gallery in virtual space
    alt: "NFT Artwork",
    title: "NFT Creation & Trading",
    description: "Create and trade digital collectibles",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    src: "/ai-defi-finance.jpg", // Futuristic financial district
    alt: "DeFi Platform",
    title: "DeFi Protocols",
    description: "Navigate decentralized finance",
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    src: "/ai-metaverse.jpg", // Virtual world with blockchain integration
    alt: "Web3 Development",
    title: "Metaverse & Web3",
    description: "Build the future of the internet",
    gradient: "from-violet-500 to-purple-500",
  },
];

export function GallerySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text-3"
        >
          Explore Our Learning Universe
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.h3
                      className="text-white text-2xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {image.description}
                    </motion.p>
                    <motion.div
                      className="h-1 w-20 bg-gradient-to-r from-white to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

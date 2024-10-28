"'use client'";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { GallerySection } from "./gallery-section";
import { StatsSection } from "./stats-section";
import { TestimonialCarousel } from "./testimonial-carousel";
import { AnimatedSection } from "./ui/animated-section";

// Animation variants
// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5 },
// };

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const cardHover = {
//   rest: { scale: 1, transition: { duration: 0.2 } },
//   hover: { scale: 1.05, transition: { duration: 0.2 } },
// };

// Add this new constant for navigation items
const navigationItems = [
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
];

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/20"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-500"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
              </motion.svg>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                LearnOnChain
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Log in
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                Sign up
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-800 bg-black/90 backdrop-blur-md"
            >
              <nav className="flex flex-col items-center py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center gap-2 w-full px-4"
                >
                  <Button
                    variant="ghost"
                    className="w-full text-gray-300 hover:text-white hover:bg-gray-800/50"
                    onClick={toggleMenu}
                  >
                    Log in
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                    onClick={toggleMenu}
                  >
                    Sign up
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <main className="flex-grow">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="container px-4 md:px-6"
            >
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <div className="space-y-2">
                  <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  >
                    Master Blockchain Technology
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
                  >
                    Learn blockchain, earn NFTs, and advance your career with
                    our cutting-edge courses and organizational subscriptions.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-x-4"
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-6 rounded-full text-lg"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-sm">
            <div className="container px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              >
                Platform Features
              </motion.h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Free & Paid Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Access a wide range of blockchain courses, from beginner to
                    advanced levels, with both free and premium options.
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">NFT Rewards</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Earn unique NFTs upon course completion, showcasing your
                    achievements and skills on the blockchain.
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Organization Subscriptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Tailored plans for organizations to manage their own courses
                    and provide dedicated learning paths for employees.
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Interactive Coding Exercises
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Practice your blockchain coding skills with hands-on
                    exercises and real-time feedback.
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Expert Instructors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Learn from industry professionals and blockchain experts
                    with years of experience in the field.
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Community Forums
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Engage with fellow learners, ask questions, and participate
                    in discussions to enhance your learning experience.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Course Categories Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900">
            <div className="container px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 gradient-text-2"
              >
                Course Categories
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Blockchain Fundamentals",
                    icon: "🔗",
                    description:
                      "Learn the basics of blockchain technology and its applications.",
                    gradient: "from-blue-500 to-purple-500",
                  },
                  {
                    title: "Smart Contract Development",
                    icon: "📝",
                    description:
                      "Master the art of writing and deploying smart contracts.",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "Cryptocurrency Trading",
                    icon: "💱",
                    description:
                      "Understand the principles of crypto trading and market analysis.",
                    gradient: "from-pink-500 to-red-500",
                  },
                  {
                    title: "DeFi and NFTs",
                    icon: "🏦",
                    description:
                      "Explore decentralized finance and non-fungible tokens.",
                    gradient: "from-cyan-500 to-blue-500",
                  },
                  {
                    title: "Blockchain Security",
                    icon: "🔒",
                    description:
                      "Learn best practices for securing blockchain applications.",
                    gradient: "from-emerald-500 to-cyan-500",
                  },
                  {
                    title: "Enterprise Blockchain",
                    icon: "🏢",
                    description:
                      "Discover how blockchain is transforming businesses across industries.",
                    gradient: "from-violet-500 to-purple-500",
                  },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Card className="bg-gray-900/50 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden group">
                      <CardHeader>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        <CardTitle className="flex items-center text-gray-100 relative z-10">
                          <span className="mr-3 text-3xl">{category.icon}</span>
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 group-hover:from-white group-hover:to-gray-100 transition-all duration-300">
                            {category.title}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {category.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className={`w-full bg-gradient-to-r ${category.gradient} text-white hover:opacity-90 transition-opacity duration-300`}
                        >
                          Explore Courses
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section with enhanced animations */}
        <AnimatedSection>
          <StatsSection />
        </AnimatedSection>

        {/* Gallery Section with staggered animations */}
        <AnimatedSection>
          <GallerySection />
        </AnimatedSection>

        {/* Testimonial Section */}
        <AnimatedSection>
          <TestimonialCarousel />
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
            <div className="container px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-12 gradient-text-1"
              >
                Pricing Plans
              </motion.h2>
              <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
                {[
                  {
                    title: "Basic",
                    description: "For small teams",
                    price: "$99",
                    gradient: "from-blue-500 to-cyan-500",
                    features: [
                      "Access to all courses",
                      "5 user accounts",
                      "Basic analytics",
                      "Community support",
                      "Course completion certificates",
                    ],
                    popular: false,
                  },
                  {
                    title: "Standard",
                    description: "For growing organizations",
                    price: "$299",
                    gradient: "from-purple-500 to-pink-500",
                    features: [
                      "All Basic features",
                      "20 user accounts",
                      "Advanced analytics",
                      "Custom course upload",
                      "Priority support",
                      "Team collaboration tools",
                      "API access",
                    ],
                    popular: true,
                  },
                  {
                    title: "Enterprise",
                    description: "For large enterprises",
                    price: "Custom",
                    gradient: "from-orange-500 to-red-500",
                    features: [
                      "All Standard features",
                      "Unlimited user accounts",
                      "Dedicated support",
                      "Custom integrations",
                      "White-labeling options",
                      "Advanced security features",
                      "Custom reporting",
                    ],
                    popular: false,
                  },
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card
                      className={`relative overflow-hidden bg-gray-900/50 border-gray-800 backdrop-blur-sm ${
                        plan.popular ? "ring-2 ring-purple-500" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0">
                          <div className="text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-bl-lg">
                            Most Popular
                          </div>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${plan.gradient}">
                          {plan.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-5xl font-bold text-white">
                            {plan.price}
                          </p>
                          <p className="text-sm text-gray-400">/month</p>
                        </div>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.1 + featureIndex * 0.1,
                              }}
                              className="flex items-center text-gray-300"
                            >
                              <svg
                                className={`w-5 h-5 mr-2 bg-gradient-to-r ${plan.gradient} rounded-full p-1`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full"
                        >
                          <Button
                            className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-opacity duration-200`}
                          >
                            {plan.price === "Custom"
                              ? "Contact Sales"
                              : "Get Started"}
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

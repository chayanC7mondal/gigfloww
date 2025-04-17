import { Navbar } from "../components/navbar";
import { TestimonialSlider } from "../components/testimonials";
import { SignUpForm } from "../components/signup";
import { CustomButton } from "../components/ui/button-library";
import { ArrowRight, Cpu, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Footer } from "../components/footer";

const Index = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation();
  const { ref: testimonialsRef, controls: testimonialsControls } =
    useScrollAnimation();
  const { ref: signUpRef, controls: signUpControls } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="relative pt-32 pb-24 overflow-hidden"
      >
        {/* ...background decorations... */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#0B0B1E] to-transparent" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Boost Your Freelance Career
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Connect with top clients, showcase your skills, and grow your
            business with our advanced platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              customVariant="gradient"
              className="text-lg px-8 py-4"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5 inline" />
            </CustomButton>
            <CustomButton
              customVariant="secondary"
              className="text-lg px-8 py-4"
            >
              Learn More
            </CustomButton>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="py-24 bg-[#0F0F2A] relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Why Choose GigFloww?
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Empowering freelancers with cutting-edge tools and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              /* Features array — unchanged */
              {
                title: "Smart Matching",
                description:
                  "AI-powered system connects you with perfect projects matching your skills",
                gradient: "from-blue-500 to-indigo-500",
                icon: <Cpu className="w-8 h-8" />,
              },
              {
                title: "Secure Payments",
                description:
                  "Get paid on time with our secure escrow payment system",
                gradient: "from-indigo-500 to-purple-500",
                icon: <ShieldCheck className="w-8 h-8" />,
              },
              {
                title: "Career Growth",
                description:
                  "Access professional development resources and networking",
                gradient: "from-purple-500 to-pink-500",
                icon: <TrendingUp className="w-8 h-8" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group transition-all duration-300 hover:scale-105"
              >
                <div className="h-full relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-10`}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold mt-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mt-2 mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.div
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <TestimonialSlider />
      </motion.div>

      {/* Sign Up Section */}
      <motion.section
        ref={signUpRef}
        initial="hidden"
        animate={signUpControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="py-24 bg-[#0F0F2A]/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-400 mt-4">
              Start your journey with GigFloww today and unlock endless
              opportunities.
            </p>
          </div>
          <SignUpForm />
        </div>
      </motion.section>

      <Footer className="pb-8" />
    </div>
  );
};

export default Index;

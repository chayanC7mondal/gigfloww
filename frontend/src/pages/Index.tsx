import { Navbar } from "../components/navbar";
import { TestimonialSlider } from "../components/testimonials";
import { SignUpForm } from "../components/signup";
import { CustomButton } from "../components/ui/button-library";
import { ArrowRight, Cpu, ShieldCheck, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#0B0B1E] to-transparent" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0F0F2A] relative overflow-hidden">
        {/* Background decoration */}
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
              {
                title: "Smart Matching",
                description:
                  "AI-powered system connects you with perfect projects matching your skills",
                gradient: "from-blue-500 to-indigo-500",
                icon: <Cpu className="w-8 h-8" />,
                wireframe: (
                  <div className="mt-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-blue-400/20 rounded animate-pulse" />
                        <div className="h-2 w-1/2 bg-blue-400/20 rounded animate-pulse" />
                        <div className="h-8 w-full bg-blue-400/10 rounded-lg mt-4" />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "Secure Payments",
                description:
                  "Get paid on time with our secure escrow payment system",
                gradient: "from-indigo-500 to-purple-500",
                icon: <ShieldCheck className="w-8 h-8" />,
                wireframe: (
                  <div className="mt-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-indigo-400/10 rounded col-span-2" />
                        <div className="h-12 bg-indigo-400/20 rounded" />
                        <div className="h-2 w-full bg-indigo-400/20 rounded col-span-3 mt-2" />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "Career Growth",
                description:
                  "Access professional development resources and networking",
                gradient: "from-purple-500 to-pink-500",
                icon: <TrendingUp className="w-8 h-8" />,
                wireframe: (
                  <div className="mt-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex space-x-2">
                        <div className="w-1/3">
                          <div className="h-16 bg-purple-400/10 rounded" />
                          <div className="h-2 w-full bg-purple-400/20 rounded mt-2" />
                        </div>
                        <div className="w-1/3">
                          <div className="h-12 bg-purple-400/15 rounded" />
                          <div className="h-2 w-full bg-purple-400/20 rounded mt-2" />
                        </div>
                        <div className="w-1/3">
                          <div className="h-20 bg-purple-400/20 rounded" />
                          <div className="h-2 w-full bg-purple-400/20 rounded mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`h-full relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors`}
                >
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
                  {feature.wireframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with dark theme */}
      <TestimonialSlider />

      {/* Sign Up Section with dark theme */}
      <section className="py-24 bg-[#0F0F2A]/50">
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
      </section>
    </div>
  );
};

export default Index;

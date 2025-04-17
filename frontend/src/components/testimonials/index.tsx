import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "../../components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Freelance Designer",
    content:
      "GigFloww transformed how I manage my freelance career. The platform is intuitive and powerful!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Web Developer",
    content:
      "Finding quality projects has never been easier. GigFloww's matching system is spot-on!",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Content Writer",
    content:
      "The support and community here are unmatched. I've grown my business significantly!",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-24 overflow-hidden bg-[#0F0F2A]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border-white/10 overflow-hidden">
                  <div className="relative p-8">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-purple-400/20" />
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-purple-500/20 relative z-10">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20" />
                      </div>
                      <blockquote className="text-xl text-gray-200 mb-6 relative z-10">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="mt-2">
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-full text-white/80 hover:text-white transition-all duration-200 border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-full text-white/80 hover:text-white transition-all duration-200 border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

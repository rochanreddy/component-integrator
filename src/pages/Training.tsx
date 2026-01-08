import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, Eye, Award, Star } from "lucide-react";

const courses = [
  {
    icon: Shield,
    title: "Security Guard Training",
    description: "Comprehensive training for professional security personnel",
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description: "Crisis management and emergency handling procedures",
  },
  {
    icon: Eye,
    title: "Surveillance & Communication",
    description: "Modern surveillance techniques and communication protocols",
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Industry-recognized certification courses",
  },
];

const Training = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-background">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Training Institute</h1>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border p-8 rounded-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <course.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground">{course.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Train With Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Certified training programs",
                "Experienced instructors",
                "Practical hands-on training",
                "Placement assistance",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;

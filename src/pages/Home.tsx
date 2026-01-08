import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Hospital,
  ShoppingBag,
  Calendar,
  Shield,
  Users,
  Target,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Industrial Security",
    description: "Comprehensive security solutions for industrial facilities",
    path: "/services/industrial",
  },
  {
    icon: Building2,
    title: "Corporate Security",
    description: "Professional security for corporate offices and IT parks",
    path: "/services/corporate",
  },
  {
    icon: Hospital,
    title: "Hospital Security",
    description: "Specialized security for healthcare facilities",
    path: "/services/hospital",
  },
  {
    icon: ShoppingBag,
    title: "Retail Security",
    description: "Theft prevention and crowd control for retail spaces",
    path: "/services/retail",
  },
  {
    icon: Calendar,
    title: "Event Security",
    description: "Professional event management and security services",
    path: "/services/event",
  },
  {
    icon: Shield,
    title: "IT / ITES Security",
    description: "Advanced security for technology companies",
    path: "/services/corporate",
  },
];

const values = [
  {
    icon: Users,
    title: "Professional Workforce",
    description: "Trained and certified security professionals",
  },
  {
    icon: Target,
    title: "Customized Solutions",
    description: "Tailored security plans for your needs",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance and support",
  },
  {
    icon: Award,
    title: "Trusted by Industries",
    description: "Serving multiple sectors with excellence",
  },
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80)",
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background mb-6"
          >
            Professional Security Services
            <br />& Certified Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-background/70 mb-8 max-w-3xl mx-auto"
          >
            Providing expert security solutions and industry-recognized training
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-background text-background px-8 py-4 rounded-lg hover:bg-background hover:text-foreground transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                alt="Security Professional"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Who We Are
                <div className="w-20 h-1 bg-primary mt-2" />
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Red Tigers Security Services is a trusted security provider with
                years of professional service in industrial, corporate and
                institutional safety. We combine experienced personnel with modern
                technology to deliver comprehensive security solutions.
              </p>
              <Link
                to="/about"
                className="text-primary font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.path}
                  className="block bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-left group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-primary font-medium flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="opacity-60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "1000+", label: "Trained Professionals" },
              { value: "500+", label: "Successful Deployments" },
              { value: "150+", label: "Client Organizations" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="w-16 h-1 bg-primary mx-auto mb-2" />
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Looking for Reliable Security Solutions?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-lg hover:bg-background/90 transition-colors font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

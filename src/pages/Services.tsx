import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Hospital, ShoppingBag, Calendar, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Industrial Security",
    description: "Comprehensive security for manufacturing and industrial facilities",
    path: "/services/industrial",
  },
  {
    icon: Building2,
    title: "Corporate Security",
    description: "Professional security for offices and corporate campuses",
    path: "/services/corporate",
  },
  {
    icon: Hospital,
    title: "Hospital Security",
    description: "Specialized security for healthcare environments",
    path: "/services/hospital",
  },
  {
    icon: ShoppingBag,
    title: "Retail Security",
    description: "Loss prevention and customer safety for retail spaces",
    path: "/services/retail",
  },
  {
    icon: Calendar,
    title: "Event Security",
    description: "Professional crowd management and event security",
    path: "/services/event",
  },
  {
    icon: Shield,
    title: "IT / ITES Security",
    description: "Advanced security for technology companies",
    path: "/services/corporate",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="block bg-background border border-border p-8 rounded-lg hover:shadow-xl transition-all text-left group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-primary font-medium flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

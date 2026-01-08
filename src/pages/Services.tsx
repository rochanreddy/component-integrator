import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Shield,
  Landmark,
  Hospital,
  ShoppingBag,
  HardHat,
  Home as HomeIcon,
  UserCheck,
  Calendar,
  Sparkles,
  Users2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Factory,
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
    icon: Shield,
    title: "IT / ITES Security",
    description: "Advanced security for technology companies",
    path: "/services/ites",
  },
  {
    icon: Landmark,
    title: "Banking/Financial Institution Security",
    description: "Specialized security for banks and financial institutions",
    path: "/services/banking",
  },
  {
    icon: Hospital,
    title: "Hospital Security",
    description: "Specialized security for healthcare environments",
    path: "/services/hospital",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Retail Security",
    description: "Loss prevention and customer safety for retail spaces",
    path: "/services/retail",
  },
  {
    icon: HardHat,
    title: "Infrastructure / Construction Security",
    description: "Security solutions for construction sites and infrastructure projects",
    path: "/services/construction",
  },
  {
    icon: HomeIcon,
    title: "Residential/Gated Community Security",
    description: "Professional security for residential complexes and gated communities",
    path: "/services/residential",
  },
  {
    icon: UserCheck,
    title: "Escort Security",
    description: "Personal protection and escort services for VIPs and executives",
    path: "/services/escort",
  },
  {
    icon: Calendar,
    title: "Event Management (Bouncers & Personal Security Officers)",
    description: "Professional event security with bouncers and personal security officers",
    path: "/services/event",
  },
  {
    icon: Sparkles,
    title: "Housekeeping Services",
    description: "Professional housekeeping and maintenance services",
    path: "/services/housekeeping",
  },
  {
    icon: Users2,
    title: "Helper/Support Staff",
    description: "Reliable support staff and helper services for various needs",
    path: "/services/support-staff",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </motion.div>

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

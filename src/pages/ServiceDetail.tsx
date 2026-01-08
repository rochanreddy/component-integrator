import { Link, useParams } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  image: string;
  details: string[];
  benefits: string[];
}

const serviceData: Record<string, ServiceData> = {
  industrial: {
    title: "Industrial Security",
    subtitle: "Comprehensive Security for Industrial Facilities",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
    details: [
      "Our industrial security services provide comprehensive protection for manufacturing facilities, warehouses, and industrial sites.",
      "We deploy trained security personnel equipped with modern surveillance systems to ensure 24/7 monitoring and protection.",
    ],
    benefits: [
      "Site guarding and perimeter security",
      "Advanced surveillance systems",
      "Access control management",
      "Safety protocol implementation",
      "Emergency response teams",
      "Regular security audits",
    ],
  },
  corporate: {
    title: "Corporate Security",
    subtitle: "Professional Security for Corporate Environments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    details: [
      "Specialized security solutions for corporate offices, IT parks, and data centers.",
      "Our team ensures a safe and secure environment for your employees and assets.",
    ],
    benefits: [
      "Corporate office security",
      "IT park protection",
      "Data center security",
      "Employee safety programs",
      "Visitor management systems",
      "Physical and IT security coordination",
    ],
  },
  hospital: {
    title: "Hospital Security",
    subtitle: "Specialized Security for Healthcare Facilities",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80",
    details: [
      "Healthcare facilities require specialized security that balances safety with patient care.",
      "Our trained personnel understand the unique challenges of hospital environments.",
    ],
    benefits: [
      "Patient and visitor monitoring",
      "Emergency response protocols",
      "Access management",
      "Parking lot security",
      "Pharmacy and medication security",
      "Conflict de-escalation training",
    ],
  },
  retail: {
    title: "Retail Security",
    subtitle: "Loss Prevention and Customer Safety",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
    details: [
      "Protect your retail business from theft while ensuring a safe shopping experience for customers.",
      "Our retail security solutions combine visible deterrence with discreet monitoring.",
    ],
    benefits: [
      "Crowd control and management",
      "Theft prevention strategies",
      "Cash desk and payment security",
      "CCTV monitoring",
      "Loss prevention programs",
      "Customer service training",
    ],
  },
  event: {
    title: "Event Security",
    subtitle: "Professional Event Management and Security",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
    details: [
      "From corporate events to large public gatherings, we provide comprehensive event security services.",
      "Our experienced team ensures smooth operations and guest safety throughout your event.",
    ],
    benefits: [
      "Crowd management expertise",
      "Entry and exit screening",
      "Emergency coordination",
      "VIP security services",
      "Parking management",
      "Incident response teams",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const service = serviceData[serviceType || ""] || serviceData.industrial;

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-background">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{service.title}</h1>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {service.subtitle}
            </h2>
            <div className="space-y-4 mb-12">
              {service.details.map((detail, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span>Request {service.title}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

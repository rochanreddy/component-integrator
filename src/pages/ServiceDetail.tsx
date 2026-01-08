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
    title: "Malls & Retail Security",
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
    title: "Event Management (Bouncers & Personal Security Officers)",
    subtitle: "Professional Event Management and Security",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
    details: [
      "From corporate events to large public gatherings, we provide comprehensive event security services.",
      "Our experienced team of bouncers and personal security officers ensures smooth operations and guest safety throughout your event.",
    ],
    benefits: [
      "Crowd management expertise",
      "Entry and exit screening",
      "Professional bouncers",
      "Personal security officers",
      "VIP security services",
      "Parking management",
      "Incident response teams",
    ],
  },
  ites: {
    title: "IT / ITES Security",
    subtitle: "Advanced Security for Technology Companies",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    details: [
      "Specialized security solutions for IT and ITES companies, data centers, and technology parks.",
      "Our team understands the unique security requirements of technology environments.",
    ],
    benefits: [
      "Data center security",
      "IT park protection",
      "Access control systems",
      "Cybersecurity coordination",
      "24/7 monitoring",
      "Emergency response protocols",
    ],
  },
  banking: {
    title: "Banking/Financial Institution Security",
    subtitle: "Specialized Security for Banks and Financial Institutions",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80",
    details: [
      "Comprehensive security solutions designed specifically for banks and financial institutions.",
      "We provide multi-layered security to protect assets, employees, and customers.",
    ],
    benefits: [
      "ATM security and monitoring",
      "Vault and cash handling security",
      "Customer safety protocols",
      "Fraud prevention measures",
      "Emergency response systems",
      "Compliance with banking regulations",
    ],
  },
  construction: {
    title: "Infrastructure / Construction Security",
    subtitle: "Security Solutions for Construction Sites and Infrastructure Projects",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    details: [
      "Specialized security services for construction sites, infrastructure projects, and development areas.",
      "Our team ensures protection of equipment, materials, and personnel at construction sites.",
    ],
    benefits: [
      "Site perimeter security",
      "Equipment and material protection",
      "Access control for workers",
      "Night watch services",
      "Theft prevention",
      "Safety compliance monitoring",
    ],
  },
  residential: {
    title: "Residential/Gated Community Security",
    subtitle: "Professional Security for Residential Complexes and Gated Communities",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80",
    details: [
      "Comprehensive security solutions for residential complexes, gated communities, and housing societies.",
      "We provide round-the-clock security to ensure the safety and peace of mind of residents.",
    ],
    benefits: [
      "Gate and entry management",
      "Visitor verification systems",
      "Patrol services",
      "CCTV monitoring",
      "Emergency response",
      "Community safety programs",
    ],
  },
  escort: {
    title: "Escort Security",
    subtitle: "Personal Protection and Escort Services for VIPs and Executives",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    details: [
      "Professional personal protection and escort services for VIPs, executives, and high-profile individuals.",
      "Our trained security personnel provide discreet and effective protection during travel and events.",
    ],
    benefits: [
      "Personal bodyguard services",
      "VIP protection",
      "Travel security",
      "Event escort services",
      "Threat assessment",
      "Discreet security operations",
    ],
  },
  housekeeping: {
    title: "Housekeeping Services",
    subtitle: "Professional Housekeeping and Maintenance Services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    details: [
      "Comprehensive housekeeping and maintenance services for offices, facilities, and commercial spaces.",
      "Our trained staff ensures clean, organized, and well-maintained environments.",
    ],
    benefits: [
      "Regular cleaning services",
      "Deep cleaning programs",
      "Maintenance support",
      "Sanitization services",
      "Waste management",
      "Facility upkeep",
    ],
  },
  "support-staff": {
    title: "Helper/Support Staff",
    subtitle: "Reliable Support Staff and Helper Services for Various Needs",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80",
    details: [
      "Professional support staff and helper services for various operational needs.",
      "We provide trained and reliable staff to assist with day-to-day operations and support functions.",
    ],
    benefits: [
      "General support staff",
      "Operational assistance",
      "Administrative support",
      "Logistics support",
      "Multi-skilled workers",
      "Flexible staffing solutions",
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

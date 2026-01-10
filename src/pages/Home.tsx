import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
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
  Factory,
  Briefcase,
  Store,
  Building,
  Warehouse,
  Hotel,
  School,
  Plane,
  Car,
  Landmark,
  HardHat,
  Home as HomeIcon,
  UserCheck,
  Sparkles,
  Users2,
  Star,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Factory,
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
    description: "Specialized security for healthcare facilities",
    path: "/services/hospital",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Retail Security",
    description: "Theft prevention and crowd control for retail spaces",
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

const heroImages = [
  "/image/istockphoto-130406310-612x612.webp",
  "/image/istockphoto-130406867-612x612.webp",
  "/image/istockphoto-983223912-612x612.webp",
  "/image/istockphoto-983236090-612x612.webp",
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechCorp Industries",
    rating: 5,
    text: "Red Tigers Security has been providing exceptional service for our industrial facility. Their team is professional, reliable, and always responsive to our needs.",
  },
  {
    name: "Priya Sharma",
    company: "Metro Healthcare Group",
    rating: 5,
    text: "The security personnel understand the unique requirements of a hospital environment. We feel safe and secure with their services.",
  },
  {
    name: "Amit Patel",
    company: "Global Manufacturing Ltd",
    rating: 5,
    text: "Outstanding security services with 24/7 monitoring. Their trained professionals have significantly improved our facility's security posture.",
  },
  {
    name: "Sneha Reddy",
    company: "Prime Retail Chain",
    rating: 5,
    text: "Excellent service and professional staff. They handle our retail security needs with great attention to detail and customer service.",
  },
  {
    name: "Vikram Singh",
    company: "Elite Corporate Solutions",
    rating: 5,
    text: "Red Tigers has been our security partner for over 3 years. Their commitment to excellence and round-the-clock support is unmatched.",
  },
  {
    name: "Anjali Mehta",
    company: "City Infrastructure Group",
    rating: 5,
    text: "Professional, punctual, and reliable. The security team integrates seamlessly with our operations and provides peace of mind.",
  },
];

const TestimonialsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll / 2) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused || isDragging) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container) {
        container.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto gap-6 md:gap-8 items-stretch cursor-grab active:cursor-grabbing"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        handleMouseLeave();
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={(e) => {
        e.preventDefault();
        const container = scrollContainerRef.current;
        if (container) {
          container.scrollLeft += e.deltaY;
        }
      }}
    >
      {testimonials.concat(testimonials).map((testimonial, index) => (
        <div
          key={index}
          className="bg-muted p-6 rounded-xl border border-border flex-shrink-0 w-[350px] md:w-[400px] select-none"
        >
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-primary fill-primary"
              />
            ))}
          </div>
          <p className="text-muted-foreground mb-4 italic min-h-[80px]">
            "{testimonial.text}"
          </p>
          <div>
            <div className="font-bold text-foreground">
              {testimonial.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.company}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Stat Card Component with animation
const StatCard = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const { ref, count } = useCountUp({ end: value, suffix, duration: 2.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-muted p-6 rounded-lg hover:shadow-lg transition-shadow"
    >
      <div className="text-3xl font-bold text-primary mb-2">{count}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

// Large Stat Card Component with animation
const LargeStatCard = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const { ref, count } = useCountUp({ end: value, suffix, duration: 2.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-5xl font-bold text-foreground mb-2">{count}</div>
      <div className="w-16 h-1 bg-primary mx-auto mb-2" />
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() % heroImages.length);

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex % heroImages.length);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0" style={{ height: '100vh', width: '100vw' }}>
          <Carousel 
            setApi={setApi} 
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
              duration: 30,
            }}
          >
            <CarouselContent className="-ml-0" style={{ height: '100vh' }}>
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 basis-full" style={{ height: '100vh' }}>
                  <div className="relative w-full h-full" style={{ height: '100vh', width: '100vw' }}>
                    <img
                      src={image}
                      alt={`Security service ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
                      loading={index === 0 ? "eager" : "lazy"}
                      onError={(e) => {
                        console.error("Image failed to load:", image);
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/90 pointer-events-none" style={{ height: '100vh', width: '100vw' }} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pt-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-background mb-3 sm:mb-4 leading-tight"
              style={{ letterSpacing: '0.05em' }}
            >
              Red Tigers Security Guarding Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-background/90 mb-4 sm:mb-6"
            >
              Providing expert security solutions for all industries
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 text-sm font-medium"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto border-2 border-background text-background px-6 py-3 rounded-lg hover:bg-background hover:text-foreground transition-colors text-sm font-medium"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-background/50 hover:bg-background/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Who We Are
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Red Tiger Security Guarding Services is a trusted security provider with
              years of professional service in industrial, corporate and
              institutional safety. We combine experienced personnel with modern
              technology to deliver comprehensive security solutions.
            </motion.p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <StatCard value={30} suffix="+" label="Years of Experience" delay={0.4} />
              <StatCard value={500} suffix="+" label="Successful Projects" delay={0.5} />
              <StatCard value={150} suffix="+" label="Happy Clients" delay={0.6} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Comprehensive security solutions tailored to your needs
            </motion.p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.path}
                  className="group relative block h-full bg-gradient-to-br from-background to-muted/50 border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:space-x-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  
                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Features
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          </motion.div>
          {[
            {
              title: "24/7 Security Monitoring",
              description:
                "Round-the-clock surveillance and monitoring services to ensure your premises are always protected. Our advanced monitoring systems and trained personnel work tirelessly to maintain security at all times.",
              image: "/image/istockphoto-983236090-612x612.webp",
              reverse: false,
            },
            {
              title: "Trained Security Personnel",
              description:
                "Our security guards undergo rigorous training and certification programs. They are equipped with the latest knowledge and skills to handle various security situations professionally and effectively.",
              image: "/image/istockphoto-130406310-612x612.webp",
              reverse: true,
            },
            {
              title: "Advanced Security Technology",
              description:
                "We utilize state-of-the-art security technology including CCTV systems, access control, and alarm systems to provide comprehensive security solutions tailored to your needs.",
              image: "/image/istockphoto-130406867-612x612.webp",
              reverse: false,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                feature.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className={feature.reverse ? "md:order-2" : "md:order-1"}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className={feature.reverse ? "md:order-1" : "md:order-2"}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  {feature.title}
                </h3>
                <div className="w-20 h-1 bg-primary mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </motion.div>
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

      {/* Our Clients - Infinite Scroll */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Clients
            </h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </motion.div>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll gap-12 md:gap-16 lg:gap-20 items-center whitespace-nowrap" style={{ transform: 'translate3d(0, 0, 0)' }}>
                {[
                  { name: "Client 1", logo: "/logos/10001.png" },
                  { name: "Client 2", logo: "/logos/2035e27d-7267-4e17-a740-141f99f9f80d.png" },
                  { name: "Client 3", logo: "/logos/37814a76-d5f7-4901-a88e-1dd92bbe7236.jpg" },
                  { name: "Client 4", logo: "/logos/3ea75a16-93e9-4aee-be54-42e690b61222.png" },
                  { name: "Client 5", logo: "/logos/5f03b2af-fe55-4a32-924a-8fe879a93111.png" },
                  { name: "Client 6", logo: "/logos/5fec94b0-f492-41df-bec3-137c5b3458c8.png" },
                  { name: "Client 7", logo: "/logos/853ea67b-4a8f-4d0d-9c11-ebc258da2238.png" },
                  { name: "Client 8", logo: "/logos/93692763-f906-4cff-9462-0ad4a32efa46.jpg" },
                  { name: "Client 9", logo: "/logos/9b2d70c1-a6ea-4ac1-b224-a26078e90015.png" },
                  { name: "Client 10", logo: "/logos/a5a9d67d-ff9e-498f-a611-6cf0d16e9d5f.png" },
                  { name: "Client 11", logo: "/logos/b0c9048a-c2f9-4186-961a-21db1c4a583b.jpg" },
                  { name: "Client 12", logo: "/logos/b946a0d8-e348-4cd9-a4ed-ab82bdd9515f.png" },
                  { name: "Client 13", logo: "/logos/c540fdef-abf0-44ee-ba0a-5273c88784a4.png" },
                  { name: "Client 14", logo: "/logos/c9e343fe-7b45-4394-9ee7-f6e27ad89f93.png" },
                  { name: "Client 15", logo: "/logos/d6ef3655-51b0-4497-b23c-2dd8c90d19d6.png" },
                  { name: "Client 16", logo: "/logos/d943b09c-72d8-429f-89c7-842897b4c68a.jpg" },
                  { name: "Client 17", logo: "/logos/fc9042ed-c5fe-4371-865f-de1bd63ea147.png" },
                ]
                  .concat([
                    { name: "Client 1", logo: "/logos/10001.png" },
                    { name: "Client 2", logo: "/logos/2035e27d-7267-4e17-a740-141f99f9f80d.png" },
                    { name: "Client 3", logo: "/logos/37814a76-d5f7-4901-a88e-1dd92bbe7236.jpg" },
                    { name: "Client 4", logo: "/logos/3ea75a16-93e9-4aee-be54-42e690b61222.png" },
                    { name: "Client 5", logo: "/logos/5f03b2af-fe55-4a32-924a-8fe879a93111.png" },
                    { name: "Client 6", logo: "/logos/5fec94b0-f492-41df-bec3-137c5b3458c8.png" },
                    { name: "Client 7", logo: "/logos/853ea67b-4a8f-4d0d-9c11-ebc258da2238.png" },
                    { name: "Client 8", logo: "/logos/93692763-f906-4cff-9462-0ad4a32efa46.jpg" },
                    { name: "Client 9", logo: "/logos/9b2d70c1-a6ea-4ac1-b224-a26078e90015.png" },
                    { name: "Client 10", logo: "/logos/a5a9d67d-ff9e-498f-a611-6cf0d16e9d5f.png" },
                    { name: "Client 11", logo: "/logos/b0c9048a-c2f9-4186-961a-21db1c4a583b.jpg" },
                    { name: "Client 12", logo: "/logos/b946a0d8-e348-4cd9-a4ed-ab82bdd9515f.png" },
                    { name: "Client 13", logo: "/logos/c540fdef-abf0-44ee-ba0a-5273c88784a4.png" },
                    { name: "Client 14", logo: "/logos/c9e343fe-7b45-4394-9ee7-f6e27ad89f93.png" },
                    { name: "Client 15", logo: "/logos/d6ef3655-51b0-4497-b23c-2dd8c90d19d6.png" },
                    { name: "Client 16", logo: "/logos/d943b09c-72d8-429f-89c7-842897b4c68a.jpg" },
                    { name: "Client 17", logo: "/logos/fc9042ed-c5fe-4371-865f-de1bd63ea147.png" },
                  ])
                  .map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 lg:h-24 px-6 md:px-8"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-auto max-w-[140px] md:max-w-[160px] object-contain opacity-100"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <LargeStatCard value={1000} suffix="+" label="Trained Professionals" delay={0} />
            <LargeStatCard value={500} suffix="+" label="Successful Deployments" delay={0.1} />
            <LargeStatCard value={150} suffix="+" label="Client Organizations" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite Scroll with Mouse Control */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </motion.div>
          <div className="relative">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Looking for Reliable Security Solutions?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-lg hover:bg-background/90 transition-colors font-medium hover:scale-105 transform duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

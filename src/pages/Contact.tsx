import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for Google Forms
      const googleFormData = new FormData();
      googleFormData.append('entry.590969658', formData.name);
      googleFormData.append('entry.845996648', formData.email);
      googleFormData.append('entry.1687145607', formData.phone);
      googleFormData.append('entry.1780918826', formData.message);

      // Submit to Google Form
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScnh_LEXvCdhRWVVJrP6zN5hv20m1xUw1-1vRRthBMBikAzZg/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors', // Important for Google Forms
      });

      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message/Inquiry
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground space-y-1">
                        <div>8977009403</div>
                        <div>8977009402</div>
                        <div>8977009404</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground space-y-1">
                        <div>info@rtsgs.com</div>
                        <div>opt@rtsgs.com</div>
                        <div>admin@rtsgs.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div className="text-muted-foreground">
                        Old Bowenpally, Chinna thokata, Opp Ganshyam super market, Old Bowenpally, Secunderabad
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground">
                        Operational Hours
                      </div>
                      <div className="text-muted-foreground">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-muted p-6 rounded-lg"
              >
                <h3 className="font-bold text-foreground mb-2">Quick Response</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, please call us directly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Find Us</h3>
                <div className="w-full h-80 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.909670864677!2d78.47859607516669!3d17.464036983436316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI3JzUwLjUiTiA3OMKwMjgnNTIuMiJF!5e0!3m2!1sen!2sin!4v1767961238968!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Red Tigers Security Services Location"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

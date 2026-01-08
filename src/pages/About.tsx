import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              About Us
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 bg-primary mx-auto mb-6"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted p-8 md:p-12 rounded-xl border border-border shadow-lg mb-8"
            >
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Red Tigers, we are dedicated to providing top-tier industrial security guarding services 
                  and comprehensive training programs. With years of experience in the security industry, we 
                  have built a reputation for excellence, reliability, and innovation.
                </p>
                <p>
                  Our commitment to protecting your assets and ensuring the safety of your personnel is at the 
                  core of everything we do.
                </p>
                <p>
                  Established in 1995, Red Tigers has been a trusted name in the security industry for nearly 
                  three decades. With a strong foundation in providing top-tier security services, we expanded 
                  our offerings in 2020 to include housekeeping and helper/support staff services. Our comprehensive 
                  approach ensures that we meet the diverse needs of our clients across various sectors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              What Makes Us Special?
            </motion.h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Our Mission",
                description: "Our mission is to deliver exceptional security solutions and training that meet the highest industry standards. Red Tigers strives to create secure environments for our clients and empower security professionals through rigorous training and education.",
                color: "from-blue-500/20 to-blue-600/10",
              },
              {
                title: "Our Vision",
                description: "Red Tigers envisions a world where industrial facilities are safeguarded against all threats, and security professionals are equipped with the knowledge and skills to effectively protect and serve. We aim to be the leading provider of industrial security services and training, known for our integrity, professionalism, and excellence.",
                color: "from-yellow-500/20 to-yellow-600/10",
              },
              {
                title: "Our Values",
                description: (
                  <ul className="space-y-3 text-left">
                    <li><strong>Integrity:</strong> We operate with the highest ethical standards, ensuring transparency and honesty in all our dealings.</li>
                    <li><strong>Professionalism:</strong> Our team is composed of highly trained and experienced professionals who are dedicated to providing superior service.</li>
                    <li><strong>Innovation:</strong> We continually adopt the latest technologies and best practices to enhance our security solutions and training programs.</li>
                    <li><strong>Customer Focus:</strong> We prioritize the needs and satisfaction of our clients, offering personalized solutions and exceptional support.</li>
                  </ul>
                ),
                color: "from-red-500/20 to-red-600/10",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <div className="text-muted-foreground leading-relaxed">
                  {typeof item.description === 'string' ? (
                    <p>{item.description}</p>
                  ) : (
                    item.description
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Why Choose Us?
            </motion.h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Expertise",
                description: "With years of experience in the security industry, Red Tigers have the expertise to provide effective and reliable security solutions.",
              },
              {
                title: "Customized Services",
                description: "We tailor our security plans to meet the specific needs of each client, ensuring comprehensive protection.",
              },
              {
                title: "Advanced Training",
                description: "Red Tigers's training programs are designed to equip security professionals with the latest knowledge and skills, making them ready for any challenge.",
              },
              {
                title: "Customer Satisfaction",
                description: "We are committed to exceeding our clients' expectations, offering high-quality services and support.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

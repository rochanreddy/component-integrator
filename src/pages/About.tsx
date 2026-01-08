import { Eye, Target, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="Team"
              className="rounded-lg shadow-xl"
            />
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Eye className="w-6 h-6 text-primary" />
                  <span>Who We Are</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Red Tigers Security Services is a leading provider of
                  comprehensive security solutions, serving diverse industries with
                  professionalism and dedication.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Target className="w-6 h-6 text-primary" />
                  <span>Mission</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class security services through trained
                  professionals and innovative solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>Vision</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted security partner across all industries in
                  India.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-primary" />
                  <span>Values</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, professionalism, excellence, and commitment to client
                  safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

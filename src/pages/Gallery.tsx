import { motion } from "framer-motion";

const images = [
  "/gallary/145b7648-bf5c-4b2d-89f3-52460f572bd8.jpg",
  "/gallary/5a58b6e0-c175-49c8-aff2-c7f28e54cd8f.jpg",
  "/gallary/60c4efa9-5f26-4f3b-aee8-defc81442f68.jpg",
  "/gallary/82298b2c-ff24-4b41-a65e-568562286580.png",
  "/gallary/894a0f8e-8072-4f55-91a7-608106379bd5.jpg",
  "/gallary/9e278e57-3397-4d85-962c-78c3966be9eb.jpg",
  "/gallary/bdd98e46-98e8-49b6-b017-77c83624e733.jpg",
  "/gallary/cf5ea07a-f97f-47e2-aa3f-9717827558c1.jpg",
  "/gallary/d58d9b9c-65b0-47ea-8624-c4c93fb96f37.png",
];

const Gallery = () => {
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
              Gallery
            </h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </motion.div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error("Image failed to load:", image);
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

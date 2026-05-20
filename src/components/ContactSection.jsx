import { Instagram, Linkedin, MapPin, Twitter, Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();

  const SERVICE_ID = "service_j5uaqal";
  const TEMPLATE_ID = "template_j5oi3o7";
  const PUBLIC_KEY = "yUoXlg9lGWsJShc9s";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          I’m a passionate developer eager to contribute and grow. If you have an opportunity, a project, or just want to connect, I’d love to hear from you. Let’s create something impactful together.
        </p>

        {/* Grid */}
        <div className="grid gap-12 text-center items-start md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col justify-start space-y-8 text-left">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:nishadbhoyar223@gamil.com"
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    nishadbhoyar223@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917058875849"
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    +91 7058875849
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    India, Maharashtra<br />
                    Pune
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Connect With Me</h4>
              <div className="flex items-center gap-4">
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-5 bg-background/80 p-6 rounded-2xl shadow-lg shadow-primary/10"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                placeholder="Enter your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                placeholder="Enter your email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                required
                placeholder="Enter your message"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 h-32 resize-none"
              />
            </div>

            <button
              type="submit"
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300"
              )}
            >
              Send Message <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

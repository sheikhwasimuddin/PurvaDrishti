import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  ArrowLeft,
  Send,
  MessageSquare,
  Globe,
  Building,
  Calendar,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import Chatbot from "../components/Chatbot";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const teamMembers = [
    {
      name: "Devid Deshmukh",
      role: "Backend Developer",
      description: "Expert in AI/ML and Backend Development",
      expertise: ["Python", "Django", "Machine Learning", "Data Science"],
      linkedinUrl: 'https://www.linkedin.com/in/deviddeshmukh/'
    },
    {
      name:"Vaibhav Dhyani",
      role:"Backend Developer",
      description:"Specialist in API Development and Database Management",
      expertise:["Node.js", "Express", "MongoDB", "RESTful APIs"],
      linkedinUrl:"https://www.linkedin.com/in/vaibhav-dhyani-126436353"
    },
    {
      name:"Arpit Dhumane",
      role:"AI/ML Developer",
      description:"Focused on AI Model Training and Data Analysis",
      expertise:["Python", "TensorFlow", "Data Analysis", "AI/ML"],
      linkedinUrl: 'https://www.linkedin.com/in/arpit-dhumane-7a235a278/'
    },
    {
      name:"Tanmay Patil",
      role:"IoT Developer",
      description:"Expert in IoT Solutions and Sensor Integration",
      expertise:["Arduino", "Raspberry Pi", "MQTT", "IoT Protocols"],
      linkedinUrl: 'https://www.linkedin.com/in/tanmaypatil2109/'
      
    },
    {
      name:"Nidhi Patil",
      role:"UI/UX Designer",
      description:"Passionate about creating intuitive user experiences",
      expertise:["Figma", "Framer", "User Research", "Prototyping"],
      linkedinUrl: 'https://www.linkedin.com/in/nidhi-patil-160444369/'
    },
    {name:"Sheikh Wasimuddin",
      role:"Frontend Developer",
      description:"Skilled in building responsive and dynamic web interfaces",
      expertise:["React", "JavaScript", "Tailwind CSS"],
      linkedinUrl: 'https://www.linkedin.com/in/sheikhwasimuddin/'
    },
  ];

  const projectInfo = [
    {
      title: "Problem Statement ID",
      value: "25071",
      icon: <Award className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Project Title",
      value: "AI Based Rockfall Prediction and Alert System",
      icon: <Shield className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Theme",
      value: "Disaster Management",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Category",
      value: "Software",
      icon: <Building className="w-6 h-6 text-orange-600" />,
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Us",
      description: "Send us an email for inquiries and support",
      contact: "contact@purvadrishti.com",
      action: "mailto:contact@purvadrishti.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91-XXX-XXXX-XXXX",
      action: "tel:+91-XXX-XXXX-XXXX",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Visit Us",
      description: "Our development center",
      contact: "Ministry of Mines, Govt. of India",
      action: "#",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "#",
      color: "text-gray-600 hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "#",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "#",
      color: "text-blue-400 hover:text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-white-600 to-gray-600 rounded-lg flex items-center justify-center">
               <img src="/logo.png" alt="Logo" className="w-16 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PurvaDrishti</h1>
                <p className="text-xs text-gray-600">AI Rockfall Prediction System</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
              <Link to="/auth" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
              <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
            </div>

            
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Team PurvaDrishti
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to revolutionize mine safety with AI-powered rockfall prediction? 
              Get in touch with our team to learn more about our solution, request a demo, 
              or discuss implementation possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Information</h2>
            <p className="text-lg text-gray-600">
              Learn more about our innovative solution for disaster management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you understand how PurvaDrishti can transform your 
                  mine safety operations. Reach out to us through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-gray-600 mb-3">{method.description}</p>
                        <a
                          href={method.action}
                          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                        >
                          {method.contact}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} hover:scale-110 transition-transform duration-200`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The innovative minds behind PurvaDrishti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
  <a 
    href={member.linkedinUrl} 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition-colors duration-200" // Subtle hover effect
  >
    {member.name}
  </a>
</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our AI-powered rockfall prediction system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How accurate are the predictions?</h3>
              <p className="text-gray-600">
                Our AI system achieves 99.7% prediction accuracy through advanced machine learning 
                algorithms trained on comprehensive multi-source data.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Can the system work offline?</h3>
              <p className="text-gray-600">
                Yes, PurvaDrishti includes robust offline capabilities with local database, 
                SMS alerts, and full functionality over LAN networks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What languages are supported?</h3>
              <p className="text-gray-600">
                The system supports 12+ languages with easy addition of new languages 
                through translation files for diverse workforces.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How quickly do alerts arrive?</h3>
              <p className="text-gray-600">
                Critical alerts are sent within 2 minutes of risk detection, ensuring 
                rapid response and maximum safety for mine workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing mine safety with AI-powered predictions. 
            Contact our team today to learn more or schedule a demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Live Demo
            </Link>
            <a
              href="mailto:contact@purvadrishti.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us Now
            </a>
          </div>
        </div>
      </section>
<Chatbot />
      {/* Footer */}
     <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-white-600 to-gray-600 rounded-lg flex items-center justify-center">
               <img src="/logo.png" alt="Logo" className="w-16 h-8" />
              </div>
                <span className="text-xl font-bold">PurvaDrishti</span>
              </div>
              <p className="text-gray-400">
                AI-powered rockfall prediction system for safer mining operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link to="/auth" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="purvadrishti/public/Contact Us.docx" className="text-gray-400">Contact Us</Link></li>
                <li><Link to="purvadrishti/public/Terms and Condition.docx" className="text-gray-400">Terms and Condition</Link></li>
                <li><Link to="purvadrishti/public/Privacy Policy.docx" className="text-gray-400">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Team: PurvaDrishti</li>
                <li>Problem ID: 25071</li>
                <li>Theme: Disaster Management</li>
                <li>Category: Software</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PurvaDrishti Team. All rights reserved. Ministry of Mines, Govt. of India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Brain,
  Satellite,
  AlertTriangle,
  Globe,
  BarChart3,
  Smartphone,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Zap,
  Database,
  Wifi,
  MessageSquare,
} from "lucide-react";
import Chatbot from "../components/Chatbot";
// This component now correctly inherits styles from the global CSS file (index.css)
// instead of importing it directly.

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Deep Learning algorithms analyze multi-source data for accurate rockfall predictions",
    },
    {
      icon: <Satellite className="w-8 h-8 text-green-600" />,
      title: "7 Data Sources",
      description: "Integrates drone, DEM, sensors, environment, satellite, geological maps, and historical data",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Real-Time Monitoring",
      description: "24×7 continuous monitoring with instant alerts and risk assessments",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Proactive Safety",
      description: "Early warning system that prevents accidents before they occur",
    },
    {
      icon: <Wifi className="w-8 h-8 text-purple-600" />,
      title: "Offline Operation",
      description: "Robust offline functionality with local database and SMS alerts",
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Multilingual Support",
      description: "Dashboard and alerts available in multiple languages for diverse workforces",
    },
  ];

  const benefits = [
    "Early warnings save lives",
    "24×7 real-time monitoring",
    "Cost savings by reducing accidents",
    "Clear safe vs. risk zone mapping",
    "Protects assets & infrastructure",
    "AI improves accuracy over time",
    "Scalable to mines, tunnels, highways",
  ];

  const sdgGoals = [
    { number: "3", title: "Good Health", description: "Ensuring healthy lives and promoting well-being" },
    { number: "8", title: "Decent Work", description: "Promoting sustained economic growth and employment" },
    { number: "9", title: "Industry Innovation", description: "Building resilient infrastructure and innovation" },
    { number: "11", title: "Sustainable Cities", description: "Making cities inclusive, safe, and resilient" },
    { number: "12", title: "Responsible Consumption", description: "Ensuring sustainable consumption patterns" },
    { number: "13", title: "Climate Action", description: "Taking urgent action to combat climate change" },
    { number: "15", title: "Life on Land", description: "Protecting terrestrial ecosystems" },
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
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="h-0.5 bg-gray-600 w-full"></div>
                  <div className="h-0.5 bg-gray-600 w-full"></div>
                  <div className="h-0.5 bg-gray-600 w-full"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-4">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium px-4">About</Link>
                <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium px-4">Features</Link>
                <Link to="/auth" className="text-gray-700 hover:text-blue-600 font-medium px-4">Dashboard</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium px-4">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                AI-Based Rockfall Prediction and Alert System
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                An intelligent system that forecasts open-pit mine slope instabilities before they occur,
                shifting from reactive to proactive safety management with comprehensive data fusion and real-time monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Live Dashboard
                </Link>
                <Link
                  to="/features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Current Risk Level</h3>
                  <p className="text-4xl font-bold text-red-400 mt-2">HIGH</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Bench 2 Stability</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rainfall Impact</span>
                    <span className="text-yellow-400 font-semibold">Moderate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Next Assessment</span>
                    <span className="text-blue-400 font-semibold">2 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Data Fusion & AI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system integrates seven critical data sources using advanced AI to provide
              accurate, transparent, and real-time rockfall predictions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose PurvaDrishti?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered system delivers measurable benefits that save lives,
                reduce costs, and improve operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99.7%</h3>
                <p className="text-gray-600">Prediction Accuracy</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Monitoring</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2 min</h3>
                <p className="text-gray-600">Alert Response</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">7</h3>
                <p className="text-gray-600">Data Sources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our system contributes to multiple SDGs, promoting safety, sustainability,
              and responsible mining practices worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoals.map((goal, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">{goal.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                <p className="text-gray-300 text-sm">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Mine Safety?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the revolution in proactive safety management. Get early warnings,
            save lives, and reduce operational costs with AI-powered predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Live Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Team PurvaDrishti
            </Link>
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
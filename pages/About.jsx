import { Link } from "react-router-dom";
import {
  Shield,
  Brain,
  Database,
  Globe,
  AlertTriangle,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  ArrowLeft,
  CheckCircle,
  BarChart3,
  Smartphone,
  Clock,
} from "lucide-react";
import Chatbot from "../components/Chatbot";
export default function About() {
  const challenges = [
    {
      challenge: "Data Imbalance",
      solution: "Synthetic data generation techniques",
      icon: <Database className="w-6 h-6 text-blue-600" />,
    },
    {
      challenge: "Multiple Dataset Integration",
      solution: "Standardized pipelines and sensor fusion",
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    },
    {
      challenge: "Real-Time Processing",
      solution: "Edge Computing and compressed data",
      icon: <Clock className="w-6 h-6 text-orange-600" />,
    },
  ];

  const futureScope = [
    {
      title: "IoT & Sensors",
      description: "Real-time monitoring of geotechnical and environmental factors for enhanced mine and worker safety",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Blockchain Integration",
      description: "Automated alerts and tamper-proof safety records for transparent operations",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Scalable Solutions",
      description: "Cost-effective, extendable to other sectors including tunnels, highways, and infrastructure",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    },
  ];

  const dataSources = [
    { name: "Drone Imagery", description: "High-resolution aerial photography and LiDAR data" },
    { name: "Digital Elevation Model", description: "3D terrain mapping and slope analysis" },
    { name: "Geotechnical Sensors", description: "Ground movement, vibration, and structural monitoring" },
    { name: "Environmental Data", description: "Weather, rainfall, temperature, and atmospheric conditions" },
    { name: "Satellite (Sentinel-2)", description: "Remote sensing and land surface monitoring" },
    { name: "Geological Maps", description: "Rock formations, fault lines, and geological history" },
    { name: "Historical Records", description: "Past incidents, patterns, and trend analysis" },
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
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
              <Link to="/auth" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
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
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Problem Statement ID: 25071</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About PurvaDrishti
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              An AI-powered system that forecasts open-pit mine slope instabilities before they occur, 
              shifting from reactive to proactive safety management. Our comprehensive solution integrates 
              multiple data sources to provide real-time risk monitoring and multilingual alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-6">
                Traditional mine safety systems are reactive, responding to incidents after they occur. 
                This approach results in:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Delayed Response</h3>
                    <p className="text-gray-600">Critical time lost between incident occurrence and response</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Worker Safety Risk</h3>
                    <p className="text-gray-600">Miners exposed to unpredictable rockfall hazards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Operational Inefficiency</h3>
                    <p className="text-gray-600">Mining operations disrupted by unexpected safety incidents</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Proactive Risk Assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Real-Time Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Early Warning System</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Multilingual Alerts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Offline Operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Data Fusion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system integrates seven critical data sources to provide accurate, 
              real-time rockfall predictions with explainable AI insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataSources.map((source, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.name}</h3>
                <p className="text-gray-600">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Challenges & Strategic Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've identified key challenges in rockfall prediction and developed 
              innovative strategies to overcome them.
            </p>
          </div>

          <div className="space-y-8">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h3 className="text-xl font-semibold text-gray-900 ml-3">
                        {item.challenge}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key System Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities that make PurvaDrishti the most comprehensive 
              rockfall prediction system available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Transparent AI Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Uses Deep Learning to analyze multi-source inputs with Explainable AI 
                highlighting key factors behind each prediction for complete trust and transparency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Real-Time Risk Monitoring</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Generates real-time risk maps and forecasts, viewable on a centralized, 
                multilingual dashboard for informed decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Robust Offline Operation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The dashboard, local database, and SMS alerts function seamlessly offline 
                via local server/LAN, ensuring continuous operation even without internet.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Multilingual Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated SMS/Email alerts and the dashboard are delivered in multiple 
                languages using translation files for diverse workforces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Future Scope & Improvements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continuous innovation and expansion to serve diverse industries 
              and applications beyond mining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureScope.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future of Mine Safety?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing safety management with AI-powered predictions 
            that save lives and protect assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Dashboard
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Our Team
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



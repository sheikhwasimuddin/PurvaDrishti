import { Link } from "react-router-dom";
import { useState } from "react";
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
  Satellite,
  Wifi,
  MessageSquare,
  Zap,
  Eye,
  Settings,
  Download,
  Upload,
  Server,
  Lock,
  Monitor,
  Map,
  Gauge,
  Activity,
  Cloud,
  Mountain,
} from "lucide-react";

import Chatbot from "../components/Chatbot";
export default function Features() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <Eye className="w-5 h-5" /> },
    { id: "data", label: "Data Sources", icon: <Database className="w-5 h-5" /> },
    { id: "ai", label: "AI Analysis", icon: <Brain className="w-5 h-5" /> },
    { id: "monitoring", label: "Real-Time", icon: <Clock className="w-5 h-5" /> },
    { id: "offline", label: "Offline Mode", icon: <Wifi className="w-5 h-5" /> },
    { id: "multilingual", label: "Multilingual", icon: <Globe className="w-5 h-5" /> },
  ];

  const dataSources = [
    {
      name: "Drone Imagery",
      icon: <Satellite className="w-8 h-8 text-blue-600" />,
      description: "High-resolution aerial photography and LiDAR data for detailed terrain analysis",
      features: ["Aerial Photography", "LiDAR Scanning", "3D Point Clouds", "Change Detection"],
      frequency: "Daily",
    },
    {
      name: "Digital Elevation Model",
      icon: <Mountain className="w-8 h-8 text-green-600" />,
      description: "3D terrain mapping and slope analysis for structural assessment",
      features: ["3D Terrain Maps", "Slope Analysis", "Elevation Profiles", "Topographic Data"],
      frequency: "Real-time",
    },
    {
      name: "Geotechnical Sensors",
      icon: <Activity className="w-8 h-8 text-orange-600" />,
      description: "Ground movement, vibration, and structural monitoring sensors",
      features: ["Vibration Sensors", "Tiltmeters", "Strain Gauges", "Pore Pressure"],
      frequency: "Continuous",
    },
    {
      name: "Environmental Data",
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      description: "Weather, rainfall, temperature, and atmospheric conditions",
      features: ["Rainfall Monitoring", "Temperature Tracking", "Wind Speed", "Atmospheric Pressure"],
      frequency: "Hourly",
    },
    {
      name: "Satellite (Sentinel-2)",
      icon: <Satellite className="w-8 h-8 text-indigo-600" />,
      description: "Remote sensing and land surface monitoring via satellite imagery",
      features: ["Multispectral Imagery", "NDVI Analysis", "Land Surface Monitoring", "Change Detection"],
      frequency: "Every 5 days",
    },
    {
      name: "Geological Maps",
      icon: <Map className="w-8 h-8 text-red-600" />,
      description: "Rock formations, fault lines, and geological history data",
      features: ["Rock Formations", "Fault Lines", "Geological History", "Mineral Composition"],
      frequency: "Static/Updated",
    },
    {
      name: "Historical Records",
      icon: <BarChart3 className="w-8 h-8 text-gray-600" />,
      description: "Past incidents, patterns, and trend analysis from historical data",
      features: ["Incident Records", "Pattern Analysis", "Trend Detection", "Risk Assessment"],
      frequency: "Continuous",
    },
  ];

  const aiFeatures = [
    {
      title: "Deep Learning Models",
      description: "Advanced neural networks trained on multi-source data for accurate predictions",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      details: [
        "Convolutional Neural Networks (CNN) for image analysis",
        "Recurrent Neural Networks (RNN) for time series data",
        "Transformer models for complex pattern recognition",
        "Ensemble methods for improved accuracy"
      ]
    },
    {
      title: "Explainable AI",
      description: "Transparent AI decisions with clear explanations of prediction factors",
      icon: <Eye className="w-8 h-8 text-green-600" />,
      details: [
        "Feature importance visualization",
        "Prediction confidence scores",
        "Decision tree explanations",
        "Risk factor breakdown"
      ]
    },
    {
      title: "Data Fusion",
      description: "Intelligent combination of multiple data sources for comprehensive analysis",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      details: [
        "Multi-modal data integration",
        "Sensor fusion algorithms",
        "Cross-validation techniques",
        "Data quality assessment"
      ]
    },
    {
      title: "Continuous Learning",
      description: "Self-improving system that learns from new data and incidents",
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      details: [
        "Online learning algorithms",
        "Model retraining pipelines",
        "Performance monitoring",
        "Adaptive threshold adjustment"
      ]
    },
  ];

  const monitoringFeatures = [
    {
      title: "Real-Time Risk Maps",
      description: "Live visualization of risk zones across the mining area",
      icon: <Map className="w-8 h-8 text-red-600" />,
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous surveillance with instant alerts and notifications",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Predictive Analytics",
      description: "Forecasting system that predicts potential incidents hours in advance",
      icon: <Target className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Dashboard Interface",
      description: "Centralized control panel for monitoring and decision-making",
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
    },
  ];

  const offlineFeatures = [
    {
      title: "Local Database",
      description: "Complete data storage and processing capabilities without internet",
      icon: <Server className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "SMS Alerts",
      description: "Emergency notifications sent via SMS even when offline",
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
    },
    {
      title: "LAN Operation",
      description: "Full system functionality over local area network",
      icon: <Wifi className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Data Sync",
      description: "Automatic synchronization when connection is restored",
      icon: <Upload className="w-8 h-8 text-purple-600" />,
    },
  ];

  const multilingualFeatures = [
    {
      title: "Multi-Language Dashboard",
      description: "Interface available in multiple languages for diverse workforces",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Localized Alerts",
      description: "Emergency notifications in workers' preferred languages",
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Cultural Adaptation",
      description: "Alerts and interfaces adapted to local cultural contexts",
      icon: <Users className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Translation Files",
      description: "Easy addition of new languages through translation files",
      icon: <Settings className="w-8 h-8 text-orange-600" />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">System Overview</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                PurvaDrishti integrates seven critical data sources using advanced AI to provide 
                accurate, real-time rockfall predictions with comprehensive monitoring capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">7 Data Sources</h4>
                <p className="text-sm text-gray-600">Comprehensive data integration</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">AI Analysis</h4>
                <p className="text-sm text-gray-600">Deep learning predictions</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Real-Time</h4>
                <p className="text-sm text-gray-600">24/7 monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Multilingual</h4>
                <p className="text-sm text-gray-600">Global accessibility</p>
              </div>
            </div>
          </div>
        );

      case "data":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Sources Integration</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our system seamlessly integrates seven critical data sources to provide 
                comprehensive insights for accurate rockfall prediction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataSources.map((source, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {source.icon}
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{source.name}</h4>
                      <p className="text-sm text-blue-600 font-medium">Update: {source.frequency}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{source.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {source.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced artificial intelligence and machine learning capabilities that provide 
                transparent, accurate, and continuously improving predictions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case "monitoring":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Monitoring</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive real-time monitoring capabilities that provide instant insights 
                and proactive alerts for enhanced safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {monitoringFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "offline":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offline Operation</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Robust offline capabilities ensuring continuous operation even without internet connectivity, 
                critical for remote mining operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offlineFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "multilingual":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multilingual Support</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive multilingual capabilities ensuring accessibility for diverse workforces 
                and global mining operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {multilingualFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              <Link to="/features" className="text-blue-600 font-medium">Features</Link>
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
              <span className="text-sm font-medium text-blue-800">Advanced Features</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              System Features & Capabilities
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore the comprehensive features that make PurvaDrishti the most advanced 
              AI-powered rockfall prediction system. From data integration to real-time monitoring, 
              discover how our technology revolutionizes mine safety.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technical capabilities and performance metrics that ensure 
              reliable and accurate rockfall predictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Gauge className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">99.7%</h3>
              <p className="text-gray-300">Prediction Accuracy</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">2 min</h3>
              <p className="text-gray-300">Alert Response Time</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">7</h3>
              <p className="text-gray-300">Data Sources</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">12+</h3>
              <p className="text-gray-300">Languages Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience These Features in Action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how our advanced features work together to provide comprehensive 
            rockfall prediction and monitoring capabilities.
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



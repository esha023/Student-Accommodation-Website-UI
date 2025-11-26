import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Users, Receipt, Wrench, Shirt, UtensilsCrossed, Home, Star, ArrowRight, ChevronLeft, ChevronRight, Shield, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const quickActions = [
    { icon: Search, label: 'Find Rooms', path: '/search', color: 'teal' },
    { icon: Users, label: 'Vibe Match', path: '/vibe-match', color: 'yellow' },
    { icon: Users, label: 'Roommate Finder', path: '/vibe-match', color: 'teal' },
    { icon: Receipt, label: 'Bills Split', path: '/bills', color: 'yellow' },
    { icon: Wrench, label: 'House Help', path: '/house-help', color: 'teal' },
    { icon: Shirt, label: 'Nearby Laundry', path: '/nearby', color: 'yellow' },
    { icon: UtensilsCrossed, label: 'Food Places', path: '/nearby', color: 'teal' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Engineering Student, IIT Delhi',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'CampusNest made finding a safe PG near my college so easy! The vibe match feature helped me find the perfect roommate.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      role: 'Medical Student, AIIMS',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The bills splitter is a lifesaver! No more awkward money conversations with roommates. Everything is transparent and fair.',
      rating: 5,
    },
    {
      name: 'Ananya Das',
      role: 'MBA Student, ISB',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Love how everything is in one place - accommodation, services, and even nearby food spots. Super convenient!',
      rating: 5,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/search';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-yellow-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Shield className="w-4 h-4 text-teal-500" />
              <span className="text-sm text-gray-600">Safe, Verified & Student-Friendly</span>
            </div>
            <h1 className="text-gray-900 mb-6">
              Find Your Perfect Home
              <br />
              <span className="text-teal-500">Near Your College</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover safe, verified, and affordable accommodation. Connect with like-minded roommates, split bills, and access essential services.
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for rooms, PGs or hostels near your college"
                className="w-full pl-14 pr-36 py-5 rounded-3xl border-2 border-gray-100 focus:border-teal-400 focus:outline-none shadow-lg bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-3xl transition-all flex items-center gap-2"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  to={action.path}
                  className="group"
                >
                  <div className={`bg-white hover:shadow-xl rounded-3xl p-6 text-center transition-all cursor-pointer border-2 border-transparent hover:border-${action.color}-200`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                      action.color === 'teal'
                        ? 'from-teal-400 to-teal-500'
                        : 'from-yellow-300 to-yellow-400'
                    } flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-sm text-gray-700">{action.label}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-gray-900 mb-3">Explore Nearby</h2>
            <p className="text-gray-600">Find accommodation on the map</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 shadow-lg h-96 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Interactive Map View</p>
                <Link
                  to="/search"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-2xl transition-all"
                >
                  View on Map
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Mock map pins */}
            <div className="absolute top-20 left-32 w-8 h-8 bg-teal-500 rounded-full shadow-lg border-4 border-white animate-pulse"></div>
            <div className="absolute top-40 right-48 w-8 h-8 bg-yellow-400 rounded-full shadow-lg border-4 border-white animate-pulse"></div>
            <div className="absolute bottom-32 left-64 w-8 h-8 bg-teal-500 rounded-full shadow-lg border-4 border-white animate-pulse"></div>
            <div className="absolute top-32 right-80 w-8 h-8 bg-yellow-400 rounded-full shadow-lg border-4 border-white animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">Why Choose CampusNest?</h2>
            <p className="text-gray-600">Everything you need in one platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">100% Verified</h3>
              <p className="text-gray-600">All properties are verified for safety and authenticity. Your security is our priority.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">Smart Matching</h3>
              <p className="text-gray-600">Find roommates who match your vibe, habits, and lifestyle preferences.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">All-in-One Platform</h3>
              <p className="text-gray-600">From finding rooms to splitting bills and booking services - we've got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">What Students Say</h2>
            <p className="text-gray-600">Trusted by thousands of students across the country</p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-50 to-yellow-50 rounded-3xl p-10 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <ImageWithFallback
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 max-w-2xl text-lg">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <p className="text-gray-900">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-teal-50 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-teal-600" />
            </button>
            
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-teal-50 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-teal-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-teal-500 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-white">CampusNest</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted platform for finding safe, verified student accommodation.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/search" className="text-gray-400 hover:text-teal-400 transition-colors">Find Rooms</Link></li>
                <li><Link to="/vibe-match" className="text-gray-400 hover:text-teal-400 transition-colors">Vibe Match</Link></li>
                <li><Link to="/bills" className="text-gray-400 hover:text-teal-400 transition-colors">Bills Splitter</Link></li>
                <li><Link to="/house-help" className="text-gray-400 hover:text-teal-400 transition-colors">House Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 flex items-center justify-center transition-colors">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 flex items-center justify-center transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 flex items-center justify-center transition-colors">
                  <span className="text-sm">IG</span>
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Email: help@campusnest.com
                <br />
                Phone: +91-800-123-4567
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 CampusNest. All rights reserved. Made with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

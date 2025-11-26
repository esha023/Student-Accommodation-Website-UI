import { useState } from 'react';
import { User, Heart, Users, Receipt, Calendar, Settings, MapPin, Star, Shirt, Utensils, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState<'saved' | 'matches' | 'expenses' | 'services'>('saved');

  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91-98765-43210',
    college: 'IIT Delhi',
    course: 'Computer Science',
    year: '3rd Year',
    image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const savedProperties = [
    {
      id: '1',
      title: 'Cozy Single Room in Modern PG',
      address: 'Hauz Khas, New Delhi',
      rent: 8500,
      image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbXxlbnwxfHx8fDE3NjQxNzQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      distance: '0.8 km',
    },
    {
      id: '2',
      title: 'Shared Apartment near Campus',
      address: 'Mukherjee Nagar, Delhi',
      rent: 6000,
      image: 'https://images.unsplash.com/photo-1577942199497-cdd452f1852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDE3NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      distance: '1.2 km',
    },
  ];

  const roommateMatches = [
    {
      id: '1',
      name: 'Ananya Das',
      course: 'Economics',
      college: 'DU',
      compatibility: 87,
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      name: 'Sneha Reddy',
      course: 'Medicine',
      college: 'AIIMS',
      compatibility: 78,
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const monthlyExpenses = {
    total: 8000,
    breakdown: [
      { category: 'Rent', amount: 8500, color: '#14b8a6' },
      { category: 'Electricity', amount: 800, color: '#fbbf24' },
      { category: 'Water', amount: 267, color: '#60a5fa' },
      { category: 'Wi-Fi', amount: 400, color: '#f97316' },
      { category: 'Groceries', amount: 1200, color: '#a78bfa' },
    ],
  };

  const bookedServices = [
    {
      id: '1',
      type: 'laundry',
      name: 'QuickWash Laundry',
      date: '2025-11-28',
      status: 'Upcoming',
    },
    {
      id: '2',
      type: 'housekeeping',
      name: 'Lakshmi Devi - Cleaning',
      date: '2025-11-26',
      status: 'Today',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="relative">
              <ImageWithFallback
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Edit2 className="w-4 h-4 text-teal-600" />
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-white mb-2">{user.name}</h1>
              <p className="text-teal-100 mb-1">
                {user.course}, {user.year}
              </p>
              <p className="text-teal-100">{user.college}</p>
            </div>
            <Link
              to="/profile/settings"
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl transition-all backdrop-blur-sm"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Saved Properties</span>
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-3xl text-gray-900">{savedProperties.length}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Roommate Matches</span>
              <Users className="w-6 h-6 text-teal-500" />
            </div>
            <p className="text-3xl text-gray-900">{roommateMatches.length}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Monthly Expenses</span>
              <Receipt className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-3xl text-gray-900">₹{monthlyExpenses.total.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Booked Services</span>
              <Calendar className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-3xl text-gray-900">{bookedServices.length}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
              activeTab === 'saved'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Heart className="w-5 h-5" />
            <span>Saved Properties</span>
          </button>
          <button
            onClick={() => setActiveTab('matches')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
              activeTab === 'matches'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Roommate Matches</span>
          </button>
          <button
            onClick={() => setActiveTab('expenses')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
              activeTab === 'expenses'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Receipt className="w-5 h-5" />
            <span>Monthly Expenses</span>
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
              activeTab === 'services'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Booked Services</span>
          </button>
        </div>

        {/* Content */}
        <div className="pb-12">
          {/* Saved Properties */}
          {activeTab === 'saved' && (
            <div className="grid md:grid-cols-2 gap-6">
              {savedProperties.map((property) => (
                <Link
                  key={property.id}
                  to={`/property/${property.id}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex">
                    <div className="w-40 h-40 flex-shrink-0">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="text-gray-900 mb-2">{property.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 text-teal-500" />
                        <span>{property.address}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-700">{property.rating}</span>
                        </div>
                        <p className="text-teal-600">₹{property.rent.toLocaleString()}/mo</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Roommate Matches */}
          {activeTab === 'matches' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roommateMatches.map((match) => (
                <div key={match.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={match.image}
                      alt={match.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-teal-600">{match.compatibility}% Match</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-1">{match.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {match.course} • {match.college}
                    </p>
                    <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all">
                      Send Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Monthly Expenses */}
          {activeTab === 'expenses' && (
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-gray-900">November 2025</h2>
                  <p className="text-3xl text-gray-900">₹{monthlyExpenses.total.toLocaleString()}</p>
                </div>
                <p className="text-gray-600">Total monthly expenses</p>
              </div>

              <div className="space-y-4">
                {monthlyExpenses.breakdown.map((item) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-gray-700">{item.category}</span>
                      </div>
                      <span className="text-gray-900">₹{item.amount.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: item.color,
                          width: `${(item.amount / monthlyExpenses.total) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/bills"
                className="mt-8 w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                View Full Details
              </Link>
            </div>
          )}

          {/* Booked Services */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              {bookedServices.map((service) => (
                <div key={service.id} className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center">
                        {service.type === 'laundry' ? (
                          <Shirt className="w-6 h-6 text-teal-600" />
                        ) : (
                          <Utensils className="w-6 h-6 text-teal-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(service.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm ${
                        service.status === 'Today'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-teal-50 text-teal-700'
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

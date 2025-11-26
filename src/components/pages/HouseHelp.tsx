import { useState } from 'react';
import { Search, Star, MapPin, Clock, IndianRupee, CheckCircle, Filter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HouseHelper {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  services: string[];
  price: number;
  priceUnit: string;
  distance: string;
  verified: boolean;
  availability: string[];
  experience: string;
}

export function HouseHelp() {
  const [selectedService, setSelectedService] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { id: 'all', label: 'All Services', icon: '🏠' },
    { id: 'cleaning', label: 'Cleaning', icon: '🧹' },
    { id: 'cooking', label: 'Cooking', icon: '👨‍🍳' },
    { id: 'washing', label: 'Washing', icon: '🧺' },
    { id: 'deep-cleaning', label: 'Deep Cleaning', icon: '✨' },
  ];

  const helpers: HouseHelper[] = [
    {
      id: '1',
      name: 'Lakshmi Devi',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 156,
      services: ['Cleaning', 'Washing'],
      price: 3000,
      priceUnit: 'month',
      distance: '1.2 km away',
      verified: true,
      availability: ['Morning (8 AM - 12 PM)', 'Evening (4 PM - 7 PM)'],
      experience: '5+ years',
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 203,
      services: ['Cooking'],
      price: 4500,
      priceUnit: 'month',
      distance: '0.8 km away',
      verified: true,
      availability: ['Morning (6 AM - 10 AM)', 'Evening (5 PM - 8 PM)'],
      experience: '8+ years',
    },
    {
      id: '3',
      name: 'Sunita Sharma',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      reviews: 128,
      services: ['Cleaning', 'Washing', 'Deep Cleaning'],
      price: 3500,
      priceUnit: 'month',
      distance: '1.5 km away',
      verified: true,
      availability: ['Afternoon (1 PM - 5 PM)'],
      experience: '6+ years',
    },
    {
      id: '4',
      name: 'Meena Patel',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      reviews: 94,
      services: ['Cleaning'],
      price: 2500,
      priceUnit: 'month',
      distance: '2.0 km away',
      verified: true,
      availability: ['Morning (7 AM - 11 AM)'],
      experience: '4+ years',
    },
    {
      id: '5',
      name: 'Deep Clean Express',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 312,
      services: ['Deep Cleaning'],
      price: 1500,
      priceUnit: 'session',
      distance: '1.0 km away',
      verified: true,
      availability: ['Flexible - Book anytime'],
      experience: 'Professional service',
    },
  ];

  const filteredHelpers = helpers.filter((helper) => {
    const matchesService =
      selectedService === 'all' ||
      helper.services.some(
        (service) => service.toLowerCase() === selectedService.replace('-', ' ')
      );
    const matchesSearch =
      searchQuery === '' ||
      helper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      helper.services.some((service) =>
        service.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesService && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white mb-3">House Help Services</h1>
          <p className="text-teal-100 mb-6">
            Find verified and trusted house help for cleaning, cooking, and more
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or service"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-white focus:outline-none shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Service Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
                selectedService === service.id
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <span>{service.icon}</span>
              <span>{service.label}</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredHelpers.length} helper{filteredHelpers.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Helpers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHelpers.map((helper) => (
            <div
              key={helper.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={helper.image}
                  alt={helper.name}
                  className="w-full h-full object-cover"
                />
                {helper.verified && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-teal-500" />
                    <span className="text-xs text-teal-600">Verified</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-gray-900 mb-1">{helper.name}</h3>
                    <p className="text-sm text-gray-500">{helper.experience}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-700">{helper.rating}</span>
                    <span className="text-xs text-gray-500">({helper.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {helper.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{helper.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>{helper.availability[0]}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-gray-900">
                      ₹{helper.price.toLocaleString()}
                      <span className="text-sm text-gray-500">/{helper.priceUnit}</span>
                    </p>
                  </div>
                  <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHelpers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No helpers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

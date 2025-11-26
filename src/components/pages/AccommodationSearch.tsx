import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, Star, Heart, Shield, Wifi, AirVent, Utensils, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Property {
  id: string;
  title: string;
  type: string;
  rent: number;
  deposit: number;
  distance: string;
  gender: string;
  rating: number;
  reviews: number;
  image: string;
  verified: boolean;
  amenities: string[];
  address: string;
}

export function AccommodationSearch() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedProperties, setSavedProperties] = useState<Set<string>>(new Set());

  const [filters, setFilters] = useState({
    location: '',
    minBudget: 0,
    maxBudget: 20000,
    maxDistance: 5,
    gender: 'any',
    amenities: [] as string[],
  });

  const properties: Property[] = [
    {
      id: '1',
      title: 'Cozy Single Room in Modern PG',
      type: 'PG',
      rent: 8500,
      deposit: 8500,
      distance: '0.8 km from IIT Delhi',
      gender: 'Female',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbXxlbnwxfHx8fDE3NjQxNzQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry'],
      address: 'Hauz Khas, New Delhi',
    },
    {
      id: '2',
      title: 'Shared Apartment near Campus',
      type: 'Flat',
      rent: 6000,
      deposit: 12000,
      distance: '1.2 km from DU North Campus',
      gender: 'Male',
      rating: 4.5,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1577942199497-cdd452f1852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDE3NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      amenities: ['WiFi', 'Kitchen', 'Parking'],
      address: 'Mukherjee Nagar, Delhi',
    },
    {
      id: '3',
      title: 'Premium Hostel Room',
      type: 'Hostel',
      rent: 12000,
      deposit: 12000,
      distance: '0.5 km from AIIMS',
      gender: 'Any',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBhcGFydG1lbnQlMjByb29tfGVufDF8fHx8MTc2NDE0NTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      amenities: ['WiFi', 'AC', 'Gym', 'Meals', 'Security'],
      address: 'Ansari Nagar, New Delhi',
    },
    {
      id: '4',
      title: 'Budget-Friendly PG with Meals',
      type: 'PG',
      rent: 7500,
      deposit: 7500,
      distance: '2.0 km from Jamia Millia',
      gender: 'Female',
      rating: 4.6,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1618831352005-83a8a8b65c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbnxlbnwxfHx8fDE3NjQxNTY5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      amenities: ['WiFi', 'Meals', 'Laundry', 'Security'],
      address: 'Okhla, New Delhi',
    },
    {
      id: '5',
      title: 'Spacious 2BHK for Sharing',
      type: 'Flat',
      rent: 9000,
      deposit: 18000,
      distance: '1.5 km from DTU',
      gender: 'Male',
      rating: 4.7,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1703782498522-f9c2b9c1bc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjQxNTY1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      amenities: ['WiFi', 'AC', 'Kitchen', 'Parking'],
      address: 'Rohini, New Delhi',
    },
  ];

  const toggleSaved = (id: string) => {
    const newSaved = new Set(savedProperties);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedProperties(newSaved);
  };

  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'AC': AirVent,
    'Meals': Utensils,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, college, or area"
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-teal-400 focus:outline-none"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white transition-all"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>

            <div className="flex gap-2 bg-gray-100 rounded-2xl p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  viewMode === 'map' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-32">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden p-1 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      placeholder="Enter area or college"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-teal-400 focus:outline-none"
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Budget Range: ₹{filters.minBudget} - ₹{filters.maxBudget}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="30000"
                      step="1000"
                      value={filters.maxBudget}
                      onChange={(e) => setFilters({ ...filters, maxBudget: parseInt(e.target.value) })}
                      className="w-full accent-teal-500"
                    />
                  </div>

                  {/* Distance from College */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Max Distance: {filters.maxDistance} km
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.5"
                      value={filters.maxDistance}
                      onChange={(e) => setFilters({ ...filters, maxDistance: parseFloat(e.target.value) })}
                      className="w-full accent-teal-500"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Gender Preference</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Any', 'Male', 'Female'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFilters({ ...filters, gender: option.toLowerCase() })}
                          className={`py-2 px-3 rounded-xl text-sm transition-all ${
                            filters.gender === option.toLowerCase()
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Amenities</label>
                    <div className="space-y-2">
                      {['WiFi', 'AC', 'Meals', 'Laundry', 'Parking', 'Gym', 'Security'].map((amenity) => (
                        <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.amenities.includes(amenity)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters({ ...filters, amenities: [...filters.amenities, amenity] });
                              } else {
                                setFilters({
                                  ...filters,
                                  amenities: filters.amenities.filter((a) => a !== amenity),
                                });
                              }
                            }}
                            className="w-4 h-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                          />
                          <span className="text-sm text-gray-700">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'list' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">{properties.length} properties found</p>
                </div>

                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-80 h-64 md:h-auto relative flex-shrink-0">
                        <ImageWithFallback
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                        {property.verified && (
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <Shield className="w-4 h-4 text-teal-500" />
                            <span className="text-xs text-teal-600">Verified</span>
                          </div>
                        )}
                        <button
                          onClick={() => toggleSaved(property.id)}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              savedProperties.has(property.id)
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-600'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                                {property.type}
                              </span>
                              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">
                                {property.gender}
                              </span>
                            </div>
                            <h3 className="text-gray-900 mb-1">{property.title}</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="w-4 h-4" />
                              <span>{property.address}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-700">{property.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({property.reviews} reviews)</span>
                          <span className="text-sm text-teal-600">• {property.distance}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {property.amenities.slice(0, 4).map((amenity) => {
                            const Icon = amenityIcons[amenity];
                            return (
                              <div
                                key={amenity}
                                className="flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-600"
                              >
                                {Icon && <Icon className="w-3 h-3" />}
                                <span>{amenity}</span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <p className="text-sm text-gray-500">Starting from</p>
                            <p className="text-gray-900">
                              ₹{property.rent.toLocaleString()}<span className="text-sm text-gray-500">/month</span>
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <Link
                              to={`/property/${property.id}`}
                              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all"
                            >
                              View Details
                            </Link>
                            <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all">
                              Book Visit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl h-[calc(100vh-200px)] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Interactive Map View</p>
                    <p className="text-sm text-gray-500">Properties are marked on the map</p>
                  </div>
                </div>

                {/* Mock map pins with property cards */}
                {properties.slice(0, 3).map((property, index) => (
                  <div
                    key={property.id}
                    className="absolute"
                    style={{
                      top: `${20 + index * 25}%`,
                      left: `${20 + index * 30}%`,
                    }}
                  >
                    <div className="relative group">
                      <div className="w-10 h-10 bg-teal-500 rounded-full shadow-lg border-4 border-white cursor-pointer hover:scale-110 transition-transform"></div>
                      
                      {/* Hover card */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-white rounded-2xl shadow-xl p-3 w-64">
                          <ImageWithFallback
                            src={property.image}
                            alt={property.title}
                            className="w-full h-32 object-cover rounded-xl mb-2"
                          />
                          <p className="text-sm text-gray-900 mb-1">{property.title}</p>
                          <p className="text-xs text-gray-500 mb-2">{property.distance}</p>
                          <p className="text-teal-600">₹{property.rent.toLocaleString()}/mo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

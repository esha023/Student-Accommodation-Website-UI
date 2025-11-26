import { useState } from 'react';
import { Shirt, UtensilsCrossed, MapPin, Star, Clock, IndianRupee, Phone } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LaundryService {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  price: string;
  timings: string;
  services: string[];
}

interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  priceRange: string;
  cuisine: string;
  category: string;
  timings: string;
  studentFriendly: boolean;
}

export function NearbyServices() {
  const [activeTab, setActiveTab] = useState<'laundry' | 'food'>('laundry');
  const [foodCategory, setFoodCategory] = useState<string>('all');

  const laundryServices: LaundryService[] = [
    {
      id: '1',
      name: 'QuickWash Laundry',
      image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbXxlbnwxfHx8fDE3NjQxNzQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      reviews: 234,
      distance: '0.5 km',
      price: '₹80/kg',
      timings: '8 AM - 10 PM',
      services: ['Wash & Fold', 'Dry Cleaning', 'Iron Only'],
    },
    {
      id: '2',
      name: 'Fresh & Clean',
      image: 'https://images.unsplash.com/photo-1577942199497-cdd452f1852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDE3NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      reviews: 189,
      distance: '0.8 km',
      price: '₹70/kg',
      timings: '7 AM - 9 PM',
      services: ['Wash & Fold', 'Iron Only', 'Express Service'],
    },
    {
      id: '3',
      name: 'Campus Laundry Express',
      image: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBhcGFydG1lbnQlMjByb29tfGVufDF8fHx8MTc2NDE0NTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      reviews: 156,
      distance: '1.2 km',
      price: '₹75/kg',
      timings: '9 AM - 8 PM',
      services: ['Wash & Fold', 'Dry Cleaning', 'Pickup & Delivery'],
    },
  ];

  const restaurants: Restaurant[] = [
    {
      id: '1',
      name: 'Spice Garden',
      image: 'https://images.unsplash.com/photo-1618831352005-83a8a8b65c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbnxlbnwxfHx8fDE3NjQxNTY5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.4,
      reviews: 567,
      distance: '0.3 km',
      priceRange: '₹150-300',
      cuisine: 'North Indian',
      category: 'veg',
      timings: '11 AM - 11 PM',
      studentFriendly: true,
    },
    {
      id: '2',
      name: 'Burger Junction',
      image: 'https://images.unsplash.com/photo-1703782498522-f9c2b9c1bc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjQxNTY1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.2,
      reviews: 423,
      distance: '0.6 km',
      priceRange: '₹100-250',
      cuisine: 'Fast Food',
      category: 'non-veg',
      timings: '12 PM - 12 AM',
      studentFriendly: true,
    },
    {
      id: '3',
      name: 'Cafe Aroma',
      image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbXxlbnwxfHx8fDE3NjQxNzQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      reviews: 312,
      distance: '0.4 km',
      priceRange: '₹80-200',
      cuisine: 'Cafe & Snacks',
      category: 'cafe',
      timings: '8 AM - 10 PM',
      studentFriendly: true,
    },
    {
      id: '4',
      name: 'Tandoor House',
      image: 'https://images.unsplash.com/photo-1577942199497-cdd452f1852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDE3NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      reviews: 489,
      distance: '0.9 km',
      priceRange: '₹200-400',
      cuisine: 'Indian & Chinese',
      category: 'non-veg',
      timings: '12 PM - 11 PM',
      studentFriendly: true,
    },
    {
      id: '5',
      name: 'Green Bowl',
      image: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBhcGFydG1lbnQlMjByb29tfGVufDF8fHx8MTc2NDE0NTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.3,
      reviews: 234,
      distance: '0.7 km',
      priceRange: '₹120-250',
      cuisine: 'Healthy & Salads',
      category: 'veg',
      timings: '10 AM - 9 PM',
      studentFriendly: true,
    },
    {
      id: '6',
      name: 'Snack Attack',
      image: 'https://images.unsplash.com/photo-1618831352005-83a8a8b65c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbnxlbnwxfHx8fDE3NjQxNTY5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.1,
      reviews: 178,
      distance: '0.5 km',
      priceRange: '₹50-150',
      cuisine: 'Street Food & Snacks',
      category: 'snacks',
      timings: '2 PM - 10 PM',
      studentFriendly: true,
    },
  ];

  const foodCategories = [
    { id: 'all', label: 'All' },
    { id: 'veg', label: 'Vegetarian' },
    { id: 'non-veg', label: 'Non-Veg' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'cafe', label: 'Cafes' },
  ];

  const filteredRestaurants =
    foodCategory === 'all'
      ? restaurants
      : restaurants.filter((r) => r.category === foodCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4">
            <button
              onClick={() => setActiveTab('laundry')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all ${
                activeTab === 'laundry'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Shirt className="w-5 h-5" />
              <span>Laundry Services</span>
            </button>
            <button
              onClick={() => setActiveTab('food')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all ${
                activeTab === 'food'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>Food Places</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Laundry Services */}
        {activeTab === 'laundry' && (
          <div>
            <div className="mb-8">
              <h1 className="text-gray-900 mb-2">Laundry Services Near You</h1>
              <p className="text-gray-600">Professional laundry services at student-friendly prices</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laundryServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Shirt className="w-4 h-4 text-teal-500" />
                      <span className="text-xs text-teal-600">Laundry</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{service.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-700">{service.rating}</span>
                          <span className="text-xs text-gray-500">({service.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-teal-500" />
                        <span>{service.distance} away</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-teal-500" />
                        <span>{service.timings}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <IndianRupee className="w-4 h-4 text-teal-500" />
                        <span>{service.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.services.map((s) => (
                        <span key={s} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
                          {s}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Food Places */}
        {activeTab === 'food' && (
          <div>
            <div className="mb-8">
              <h1 className="text-gray-900 mb-2">Food Places Near You</h1>
              <p className="text-gray-600">Budget-friendly restaurants and cafes for students</p>
            </div>

            {/* Food Category Filters */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              {foodCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFoodCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
                    foodCategory === category.id
                      ? 'bg-teal-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    {restaurant.studentFriendly && (
                      <div className="absolute top-4 left-4 bg-yellow-400 px-3 py-1 rounded-full">
                        <span className="text-xs text-yellow-900">Student Friendly</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-700">{restaurant.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-gray-900 mb-1">{restaurant.name}</h3>
                      <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-teal-500" />
                        <span>{restaurant.distance} away</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-teal-500" />
                        <span>{restaurant.timings}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <IndianRupee className="w-4 h-4 text-teal-500" />
                        <span>{restaurant.priceRange} for two</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{restaurant.reviews} reviews</span>
                    </div>

                    <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all">
                      View Menu
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

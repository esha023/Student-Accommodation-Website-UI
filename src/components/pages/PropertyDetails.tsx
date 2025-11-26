import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Star, Heart, Share2, Shield, Wifi, AirVent, Utensils, Car, Dumbbell, Camera, CheckCircle, X, IndianRupee, Phone, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PropertyDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const property = {
    id: id || '1',
    title: 'Cozy Single Room in Modern PG',
    type: 'PG',
    rent: 8500,
    deposit: 8500,
    address: 'Hauz Khas, New Delhi',
    distance: '0.8 km from IIT Delhi',
    gender: 'Female',
    rating: 4.8,
    reviews: 124,
    verified: true,
    ownerName: 'Mrs. Sharma',
    ownerPhone: '+91-98765-43210',
    images: [
      'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbXxlbnwxfHx8fDE3NjQxNzQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0MTc1MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBraXRjaGVufGVufDF8fHx8MTc2NDE0NTY1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1704428381481-92bf396b24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjQxMDE2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [
      { icon: Wifi, name: 'High-Speed WiFi' },
      { icon: AirVent, name: 'Air Conditioning' },
      { icon: Utensils, name: '3 Meals/Day' },
      { icon: Car, name: 'Parking' },
      { icon: Dumbbell, name: 'Gym Access' },
      { icon: Camera, name: 'CCTV Security' },
    ],
    safetyFeatures: [
      'CCTV Surveillance',
      'Secure Entry',
      'Fire Safety Equipment',
      'Female Caretaker',
      '24/7 Security Guard',
    ],
    rules: [
      'No smoking',
      'No pets',
      'Visitors allowed till 8 PM',
      'Curfew: 10 PM for weekdays, 11 PM for weekends',
      'Keep common areas clean',
    ],
    description:
      'A well-maintained PG with modern amenities perfect for students. Located in a safe neighborhood with easy access to public transport. The room is spacious and well-ventilated with attached bathroom. Homely food is provided three times a day. The owner is very cooperative and maintains cleanliness standards.',
  };

  const reviews = [
    {
      id: '1',
      name: 'Priya K.',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'Excellent PG! Very clean and the food is homely. Mrs. Sharma is very caring and the location is perfect for college students.',
    },
    {
      id: '2',
      name: 'Ananya M.',
      rating: 4,
      date: '1 month ago',
      comment:
        'Good place to stay. Rooms are spacious and well-maintained. Only issue is the WiFi speed could be better.',
    },
    {
      id: '3',
      name: 'Sneha R.',
      rating: 5,
      date: '2 months ago',
      comment: 'Best PG in the area! Safe, clean, and very student-friendly. Highly recommend!',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[500px]">
            <ImageWithFallback
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Top Actions */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <Link
                to="/search"
                className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </Link>

              <div className="flex gap-2">
                <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isSaved ? 'fill-red-500 text-red-500' : 'text-gray-700'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Basic Info */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      {property.type}
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      {property.gender}
                    </span>
                    {property.verified && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        <Shield className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span>{property.address}</span>
                    </div>
                    <span className="text-teal-600">• {property.distance}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-900">{property.rating}</span>
                </div>
                <span className="text-gray-500">({property.reviews} reviews)</span>
              </div>

              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Amenities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Safety Features */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Safety Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {property.safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">House Rules</h2>
              <div className="space-y-2">
                {property.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                    <span className="text-gray-700">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Reviews ({property.reviews})</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white">
                          {review.name[0]}
                        </div>
                        <div>
                          <p className="text-gray-900">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl text-gray-900">₹{property.rent.toLocaleString()}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-600">Deposit: ₹{property.deposit.toLocaleString()}</p>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all">
                  Book a Visit
                </button>
                <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Owner
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-2">Owner Details</p>
                <p className="text-gray-900 mb-1">{property.ownerName}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-teal-500" />
                  <span>{property.ownerPhone}</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Location</h3>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-teal-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">Map View</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">{property.address}</p>
              <p className="text-sm text-teal-600 mt-1">{property.distance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

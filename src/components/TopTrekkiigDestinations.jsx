import React from "react";
import {
  MapPin,
  Clock,
  Mountain,
  Star,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";

const topDestinations = [
  {
    id: 1,
    name: "Everest Base Camp",
    location: "Nepal",
    difficulty: "Hard",
    duration: "14 days",
    altitude: "5,364m",
    rating: 4.9,
    reviews: 1847,
    price: "$2,499",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    description:
      "The ultimate trekking adventure to the base of the world's highest peak.",
    highlights: ["Sherpa Culture", "Stunning Views", "Iconic Trail"],
  },
  {
    id: 2,
    name: "Annapurna Circuit",
    location: "Nepal",
    difficulty: "Moderate",
    duration: "12 days",
    altitude: "5,416m",
    rating: 4.8,
    reviews: 2134,
    price: "$1,899",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description:
      "Classic circuit trek through diverse landscapes and cultures.",
    highlights: ["Diverse Terrain", "Tea Houses", "Mountain Views"],
  },
  {
    id: 3,
    name: "Ghorepani Poon Hill",
    location: "Nepal",
    difficulty: "Easy",
    duration: "4 days",
    altitude: "3,210m",
    rating: 4.6,
    reviews: 1280,
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
    description:
      "Short sunrise trek with panoramic views of Annapurna and Dhaulagiri ranges.",
    highlights: ["Sunrise View", "Short Hike", "Local Villages"],
  },
  {
    id: 4,
    name: "Langtang Valley",
    location: "Nepal",
    difficulty: "Moderate",
    duration: "8 days",
    altitude: "4,984m",
    rating: 4.7,
    reviews: 980,
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1601651472028-02fe4a164f17?w=400&h=300&fit=crop",
    description: "Trek through alpine meadows and Tamang heritage villages.",
    highlights: ["Tamang Culture", "Langtang Glacier", "Wildflowers"],
  },
  {
    id: 5,
    name: "Manaslu Circuit",
    location: "Nepal",
    difficulty: "Hard",
    duration: "16 days",
    altitude: "5,106m",
    rating: 4.8,
    reviews: 1102,
    price: "$2,199",
    image:
      "https://images.unsplash.com/photo-1552566626-52b14e6a4c03?w=400&h=300&fit=crop",
    description:
      "Off-the-beaten-path trek around the world's eighth highest peak.",
    highlights: ["Remote Trails", "Tibetan Culture", "Larkya La Pass"],
  },
  {
    id: 6,
    name: "Gokyo Lakes",
    location: "Nepal",
    difficulty: "Hard",
    duration: "13 days",
    altitude: "5,357m",
    rating: 4.7,
    reviews: 890,
    price: "$2,299",
    image:
      "https://images.unsplash.com/photo-1509644853926-84c1aa3792e2?w=400&h=300&fit=crop",
    description: "Trek to turquoise glacial lakes in the Everest region.",
    highlights: ["Gokyo Ri", "Glacial Lakes", "Less Crowded"],
  },
  {
    id: 7,
    name: "Upper Mustang",
    location: "Nepal",
    difficulty: "Moderate",
    duration: "14 days",
    altitude: "3,810m",
    rating: 4.6,
    reviews: 674,
    price: "$2,499",
    image:
      "https://images.unsplash.com/photo-1618225148798-8a9b4264e3b9?w=400&h=300&fit=crop",
    description:
      "Explore the hidden kingdom of Lo Manthang in the rain shadow region.",
    highlights: ["Tibetan Culture", "Desert Landscapes", "Ancient Caves"],
  },
  {
    id: 8,
    name: "Mardi Himal",
    location: "Nepal",
    difficulty: "Easy",
    duration: "5 days",
    altitude: "4,500m",
    rating: 4.6,
    reviews: 543,
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1613109036245-279c7c7464a1?w=400&h=300&fit=crop",
    description:
      "Short and scenic trek in the Annapurna region with fewer crowds.",
    highlights: ["Close-up Peaks", "Forest Trails", "High Camp"],
  },
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-800 border-green-200";
    case "Moderate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Hard":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const TopTrekkingDestinations = () => {
  return (
    <div className='bg-gradient-to-br from-emerald-50 to-green-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-emerald-900 mb-4'>
            Top Trekking Destinations in Nepal
          </h1>
          <p className='text-xl text-emerald-700 max-w-3xl mx-auto'>
            Handpicked popular trekking routes among adventurers & nature
            lovers.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {topDestinations.map((destination) => (
            <div
              key={destination.id}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100 hover:border-emerald-300'>
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute top-4 right-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                      destination.difficulty
                    )}`}>
                    {destination.difficulty}
                  </span>
                </div>
                <div className='absolute bottom-4 left-4'>
                  <span className='bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                    {destination.price}
                  </span>
                </div>
              </div>

              <div className='p-6'>
                <div className='flex items-center gap-2 mb-2'>
                  <MapPin className='w-4 h-4 text-emerald-600' />
                  <span className='text-sm font-medium text-emerald-700'>
                    {destination.location}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors'>
                  {destination.name}
                </h3>

                <p className='text-emerald-600 text-sm mb-4 line-clamp-2'>
                  {destination.description}
                </p>

                <div className='flex items-center justify-between mb-4 text-sm'>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-4 h-4 text-emerald-600' />
                    <span className='text-emerald-700'>
                      {destination.duration}
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Mountain className='w-4 h-4 text-emerald-600' />
                    <span className='text-emerald-700'>
                      {destination.altitude}
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-2 mb-4'>
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 text-yellow-400 fill-current' />
                    <span className='font-semibold text-emerald-900'>
                      {destination.rating}
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Users className='w-4 h-4 text-emerald-600' />
                    <span className='text-sm text-emerald-700'>
                      {destination.reviews} reviews
                    </span>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='flex flex-wrap gap-1'>
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className='bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium'>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button className='w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center gap-2 group'>
                  <Calendar className='w-4 h-4' />
                  <span>Book Now</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTrekkingDestinations;

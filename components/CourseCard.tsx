import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration?: string;
  level?: string;
  image?: string;
}

export default function CourseCard({ 
  title, 
  description, 
  price, 
  duration = '8 weeks',
  level = 'Beginner',
  image = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#F8B400] text-[#0A1E3D] px-3 py-1 rounded-full text-sm font-semibold">
          {level}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A1E3D] mb-2 hover:text-[#F8B400] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Course Meta */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-[#F8B400]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>4.8 (250+ reviews)</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#0A1E3D]">{price}</span>
            {price !== 'Free' && (
              <span className="text-gray-400 line-through ml-2 text-sm">₹14,999</span>
            )}
          </div>
          <Link 
            href="/contact"
            className="bg-[#0A1E3D] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#1a3a5f] transition-all hover:shadow-lg"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating,
  image = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=F8B400&color=0A1E3D&size=128'
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-gold' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>

      {/* Quote Icon */}
      <div className="mb-4">
        <svg className="w-10 h-10 text-gold opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-gold"
        />
        <div>
          <h4 className="font-semibold text-navy">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

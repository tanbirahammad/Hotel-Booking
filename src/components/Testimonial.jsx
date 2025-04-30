import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
        <Title
        title='What Our Guests Say'
        subtitle='Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accomodations aroud the world'

        
        />



<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-10 w-full max-w-6xl">
  {testimonials.map((testimonial) => (
    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
        <div>
          <p className="font-playfair text-xl">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.address}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-4">
        <StarRating />
      </div>
      <p className="text-gray-500 mt-4 text-sm">"{testimonial.review}"</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Testimonial
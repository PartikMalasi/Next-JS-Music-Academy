'use client'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'
const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    link: '/understanding-music-theory',
  },
  {
    title: 'The Art of Songwriting',
    description: 'Learn the craft of songwriting from experienced musicians and songwriters.',
    link: '/the-art-of-songwriting',
  },
  {
    title: 'Mastering Your Instrument',
    description: 'Advanced techniques to master your musical instrument of choice.',
    link: '/mastering-your-instrument',
  },
  {
    title: 'Music Production Essentials',
    description: 'Get started with music production with this comprehensive overview.',
    link: '/music-production-essentials',
  },
  {
    title: 'Live Performance Techniques',
    description: 'Enhance your live performance skills with expert tips and strategies.',
    link: '/live-performance-techniques',
  },
  {
    title: 'Digital Music Marketing',
    description: 'Learn how to promote your music effectively in the digital age.',
    link: '/digital-music-marketing',
  },
];

const UpcomingSeminar = () => {
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center "> <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINAR</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p></div>
            <div className="mt-10">
               <HoverEffect items={featuredWebinars} /> 
            </div>
            <div className="mt-10 text-center"> <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">View All Seminar</Link></div>
        </div>
    </div>
  )
}
export default UpcomingSeminar
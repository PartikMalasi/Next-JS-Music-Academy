'use client'
import CourseData from "../components/data/CourseData.json"
import Link from "next/link"
import Image from "next/image"
import { BackgroundGradient } from "./ui/background-gradient"
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image:string
}

const FeaturedCoureses = () => {
    const featuredCourses = CourseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div  className="py-12 bg-gray-900">
        <div>
           <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course) =>{
                    return <div key={course.id} className="flex justify-center h-full items-center "><BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full h-full">
        <Image
          src={course.image}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
 
        <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            {course.description}
        </p>
        <div className="flex items-center justify-center">
            <Link href={`/courses/${course.slug}`} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black w-auto mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Learn More</span>
    
        </Link>
        </div>
      </BackgroundGradient></div>
                })}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href="/courses" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">View All Courses</Link>
        </div>
    </div>
  )
}
export default FeaturedCoureses
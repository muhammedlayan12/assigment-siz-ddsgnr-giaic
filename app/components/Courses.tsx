


import Image from "next/image";
import img1 from '../../public/images/course1.svg';
import img2 from '../../public/images/course2.svg';
import img3 from '../../public/images/course3.svg';
import img4 from '../../public/images/course4.svg';
import img5 from '../../public/images/course5.svg';
import img6 from '../../public/images/course6.svg';
import img7 from '../../public/images/course7.svg';
import img8 from '../../public/images/course8.svg';
import img9 from '../../public/images/course9.svg';

function Course() {

  const courses = [
    {
      id: "course-web-design",
      img: img1,
      alt: "Web Design",
      title: "Web Design Basics",
      description: "50+ web design courses available",
    },
    {
      id: "course-ui-ux",
      img: img2,
      alt: "UI/UX Design",
      title: "UI/UX Design Mastery",
      description: "50+ UI/UX design courses available",
    },
    {
      id: "course-front-end",
      img: img3,
      alt: "Front-End Development",
      title: "Front-End Development",
      description: "50+ front-end courses available",
    },
    {
      id: "course-js",
      img: img4,
      alt: "JavaScript Programming",
      title: "JavaScript Fundamentals",
      description: "50+ JavaScript courses available",
    },
    {
      id: "course-react",
      img: img5,
      alt: "React Development",
      title: "React.js Development",
      description: "50+ React courses available",
    },
    {
      id: "course-backend",
      img: img6,
      alt: "Backend Development",
      title: "Back-End Development",
      description: "50+ back-end courses available",
    },
    {
      id: "course-mobile-app",
      img: img7,
      alt: "Mobile App Development",
      title: "Mobile App Development",
      description: "50+ mobile app courses available",
    },
    {
      id: "course-full-stack",
      img: img8,
      alt: "Web Development",
      title: "Full Stack Development",
      description: "50+ full-stack courses available",
    },
    {
      id: "course-graphic-design",
      img: img9,
      alt: "Graphic Design",
      title: "Graphic Design",
      description: "50+ graphic design courses available",
    },
  ];
  
  
  return (
   <div>
     <div className="flex flex-col justify-center m-auto text-center py-10 px-4 mt-24">
      <h1 className="sm:text-3xl text-xl font-semibold mb-2">Explore Courses by Category</h1>
      <span className="mb-14 sm:text-[0.95em] text-[0.8em]">Explore a variety of courses taught by expert mentors</span>
      
      <div className="m-auto grid lg:gap-6 xl:gap-24 gap-24 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center">




    {courses.map((course)=>(
      <div key={course.id} id={course.id} className="flex gap-5 text-start items-center">
      <Image src={course.img} alt={course.alt} className="sm:w-[70px] w-[45px] h-auto"/>
      <div className="content">
        <h3 className="sm:text-xl text-lg font-semibold">{course.title}</h3>
        <span className="sm:text-[0.95em] text-[0.85em] tracking-wide">{course.description}</span>
      </div>
    </div>
    ))}    
       

        

      </div>
      
     <div>
     <button className="my-20 mx-4 py-4 px-8 bg-transparent border border-black text-black transition-all duration-700 hover:bg-black hover:text-white">View All Courses</button>
     </div>
    </div>
   </div>
  );
}

export default Course;

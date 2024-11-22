import Image from "next/image";
import HeroImg from "../../public/images/hero.jpg";

function Hero() {
  return (
    <div>
        <section className="flex flex-col-reverse lg:flex-row py-4 sm:px-6 px-2 items-center justify-evenly">
            <div className="flex flex-col justify-center font-poppins gap-5 text-pretty lg:text-start text-center">
                <h2 className="font-semibold sm:text-[2em] text-[1.3em] font-poppins">Learn New Skills<br/>Online With Ease</h2>
                <p className="sm:text-[0.9em] text-[0.65em]">Discover a wide range of courses and tutorials to help you<br/>learn new skills and advance your career.</p>
                <div className="flex lg:justify-start justify-center flex-wrap text-center gap-7">
                <button className='py-2 rounded-lg px-8 bg-black border text-white border-black transition-all duration-[0.9s] hover:text-black hover:bg-transparent '>Explore Courses</button>
                <button className='py-2 rounded-lg px-8 bg-transparent border text-black border-black transition-all duration-[0.9s] hover:text-white hover:bg-black '>Join Now</button>
            </div>
            </div>
           <Image src={HeroImg} loading="lazy" className="xl:w-[27vw] lg:w-[40vw] md:w-[80%] sm:w-[80%] w-[88%] h-auto" alt="heroimage herosection"/>
        </section>
    </div>
  )
}

export default Hero;
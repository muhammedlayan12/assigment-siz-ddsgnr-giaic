function Achivement() {


return (
   <div>
    <div className="flex flex-col gap-5 justify-center text-center m-auto py-16 px-4">
        <h1 className="font-poppins font-semibold sm:text-[2em] text-[1.3em]">Our Achivement</h1>
        <p className="sm:text-[0.9em] text-[0.6em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,<br/> mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className="flex flex-wrap justify-center gap-[20vmin] items-center">


          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold sm:text-4xl text-2xl">+200k</h4>
            <span className="sm:text-xl text-lg text-[#838383]">Courses</span>
          </div>


          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold sm:text-4xl text-2xl">+50k</h4>
            <span className="sm:text-xl text-lg text-[#838383]">Mentors</span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold sm:text-4xl text-2xl">+10k</h4>
            <span className="sm:text-xl text-lg text-[#838383]">Student</span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold sm:text-4xl text-2xl">100+</h4>
            <span className="sm:text-xl text-lg text-[#838383]">Branch</span>
          </div>


        </div>
    </div>
   </div>
  );
}

export default Achivement;
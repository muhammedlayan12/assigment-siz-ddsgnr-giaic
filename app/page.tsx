import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Courses from "./components/Courses";
import Achivement from "./components/Achivement";
import CoursesInfo from "./components/CoursesInfo";
import Team from "./components/Team";
import Testimonials from "./components/testimonials";
import Footer from "./components/Footer";

function Home() {
  return (
  <div>
    <Header></Header>
    <Navbar></Navbar>
    <Hero></Hero>
    <Trusted></Trusted>
    <Courses></Courses>
    <Achivement></Achivement>
    <CoursesInfo></CoursesInfo>
    <Team></Team>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </div>
  );
}

export default Home;
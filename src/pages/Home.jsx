import Hero from "../component/home/Hero"
import HomeShowcaseSection from "../component/home/HomeShowcaseSection";
import HomeProcessAndFaqSection from "../component/home/HomeProcessAndFaqSection"


const Home = () => {

    return (

        <div>

           <Hero/>
          
           <HomeShowcaseSection />
              <HomeProcessAndFaqSection/>
          

        </div>
    )

    
}
export default Home

import TopBar from "./home-component/TopBar"
import Navbar from "./home-component/Navbar"
import Header1  from "./home-component/Header1";
import AboutSection  from "./home-component/AboutSection";
import ContactSection  from "./home-component/ContactSection";
import ServiceSection  from "./home-component/ServiceSection";
import AchivementsAndTestimonials  from "./home-component/AchivementsAndTestimonials";
import LatestProjects  from "./home-component/LatestProjects";
import BrandSection  from "./home-component/BrandSection";
import QuoteSection  from "./home-component/QuoteSection";
import ArticleSection  from "./home-component/ArticleSection";
export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Header1/>
      <AboutSection/>
      <ContactSection/>
      <ServiceSection/>
      <AchivementsAndTestimonials/>
      <LatestProjects/>
      <BrandSection/>
      <QuoteSection/>
      <ArticleSection/>
    </div>
  );
}

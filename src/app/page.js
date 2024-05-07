import Header from "./components/header/page";
import NavigationBar from "./components/navbar/page";
import About from "./pages/about/page";
import Footer from "./components/footer/page";
import ProjectCard from "./pages/projects/page";
import Contact from "./pages/contact/page";

export default function Home() {
  return (
    <main 
      className="px-4 md:px-8 lg:px-16 xl:px-72" 
      style={{ backgroundImage: `url(/assets/abstart.png)` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto">
          <Header />
          <NavigationBar />
          <div className="bg-white p-2 md:p-4 lg:p-8 xl:p-12 shadow-lg">
            <About />
            <ProjectCard />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

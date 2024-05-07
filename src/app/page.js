import Header from "./components/header/page";
import NavigationBar from "./components/navbar/page";
import About from "./pages/about/page";
import Footer from "./components/footer/page";
import ProjectCard from "./pages/projects/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <NavigationBar />
      <About />
      <ProjectCard />
      <Footer />
    </main>
  );
}

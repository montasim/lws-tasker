import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import TaskBoard from "./components/task/TaskBoard.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
      <>
          <Header/>

          <div className="flex flex-col items-center justify-center">
              <HeroSection/>

              <TaskBoard/>
          </div>

          <Footer/>
      </>
  )
}

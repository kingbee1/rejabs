import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobLisitngs from "./components/JobListings";
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobLisitngs />
      <ViewAllJobs />
    </>
  );
}

export default App

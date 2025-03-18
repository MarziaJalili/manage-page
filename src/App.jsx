// import Header from "./components/header/Header";
// import Hero from "./components/Hero";
// import Features from "./components/features/Features";
// // import Testimonials from "./components/Testimonials";
// import Cta from "./components/Cta";
// import Footer from "./components/footer/Footer";

// <Header darkMood={darkMood} setDarkMood={setDarkMood} />
// <Hero />
// <Features />
// {/* <Testimonials /> */}
// <Cta />
// <Footer darkMood={darkMood} />

import { useState } from "react";
const App = () => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <main className="font-be-vietnam-pro">
      <h1>You are shit?</h1>
    </main>
  );
};

export default App;

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Profile from "./Profile";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Contacts from "./Contacts";
import "bootstrap/dist/css/bootstrap.css";

interface ScrollRevealComponentProps {
  children: ReactNode;
}

function ScrollRevealComponent({ children }: ScrollRevealComponentProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ScrollRevealComponent>
      <Profile />
    </ScrollRevealComponent>
    <ScrollRevealComponent>
      <About />
    </ScrollRevealComponent>
    <ScrollRevealComponent>
      <Work />
    </ScrollRevealComponent>
    <ScrollRevealComponent>
      <Education />
    </ScrollRevealComponent>
    <ScrollRevealComponent>
      <Contacts />
    </ScrollRevealComponent>
  </React.StrictMode>
);

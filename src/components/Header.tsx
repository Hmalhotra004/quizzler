"use client";
import "@/styles/header.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="head">
      <motion.img
        src="/quiz-logo.png"
        alt="Quiz Logo"
      />
      <h1>Quizzler</h1>
    </header>
  );
};

export default Header;

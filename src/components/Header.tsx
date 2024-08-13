"use client";
import Styles from "@/styles/header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className={Styles.head}>
      <motion.img
        src="/quiz-logo.png"
        alt="Quiz Logo"
      />
      <h1>Quizzler</h1>
    </header>
  );
};

export default Header;

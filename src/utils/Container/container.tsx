import { useState } from "react";
import { Button, IconButton, useMediaQuery } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Icons
import Facebook from "../../Images/Icons/facebook.svg";
import Instagram from "../../Images/Icons/instagram.svg";
import Twitter from "../../Images/Icons/twitter.svg";
import LinkedIn from "../../Images/Icons/linkedIn.svg";
//Style
import styles from "./container.module.scss";

export default function Container(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();
  const matches = useMediaQuery("(max-width:650px)");
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <IconButton onClick={() => history.push("/")}>
          <img
            src='https://s2.svgbox.net/octicons.svg?ic=home&color=000'
            width='32'
            height='32'
            alt='home'
          />
        </IconButton>
        {matches ? (
          <IconButton
            aria-label='menu'
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src='https://s2.svgbox.net/hero-solid.svg?ic=menu-alt-3&color=000'
              width='32'
              height='32'
              alt='menu'
            />
          </IconButton>
        ) : (
          <div>
            <Link
              className={
                location.pathname === "/works" ? styles.activeLink : ""
              }
              to='/works'
              data-content='Works'
            >
              <span>Works</span>
            </Link>
            <Link
              to='blog'
              className={location.pathname === "/blog" ? styles.activeLink : ""}
              data-content='Blog'
            >
              <span>Blog</span>
            </Link>
            <Link
              to='contact'
              className={
                location.pathname === "/contact" ? styles.activeLink : ""
              }
              data-content='Contact'
            >
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          {isMobileMenuOpen && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{
                opacity: 0,
                height: 0,
                transition: { when: "afterChildren" },
              }}
              transition={{ duration: 0.5, staggerChildren: 0.3 }}
              className={styles.mobileMenu}
            >
              <Link
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className={
                  location.pathname === "/works" ? styles.activeLink : ""
                }
                to='/works'
                data-content='Works'
              >
                <AnimatePresence>
                  <motion.span
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Works
                  </motion.span>
                </AnimatePresence>
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                to='/blog'
                className={
                  location.pathname === "/blog" ? styles.activeLink : ""
                }
                data-content='Blog'
              >
                <AnimatePresence>
                  <motion.span
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Blog
                  </motion.span>
                </AnimatePresence>
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                to='/contact'
                className={
                  location.pathname === "/contact" ? styles.activeLink : ""
                }
                data-content='Contact'
              >
                <AnimatePresence>
                  <motion.span
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Contact
                  </motion.span>
                </AnimatePresence>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>

      <div className={styles.children}>{props.children}</div>

      <div className={styles.footer}>
        <div>
          {/* <IconButton aria-label='facebook'>
            <img src={Facebook} onClick={()=>(window.open('https://google.com'))} alt='social media' />
          </IconButton> */}
          <IconButton aria-label='instagram'>
            <img onClick={()=>(window.open('https://instagram.com/simonbb.eth'))} src={Instagram} alt='social media' />
          </IconButton>
          <IconButton aria-label='twitter'>
            <img onClick={()=>(window.open('https://twitter.com/simon_rice_'))} src={Twitter} alt='social media' />
          </IconButton>
          <IconButton aria-label='linkedIn'>
            <img onClick={()=>{window.open('https://www.linkedin.com/in/simon-boccara-8904ab17b')}} src={LinkedIn} alt='social media' />
          </IconButton>
        </div>
        <div>
          Copyright &copy;{new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </div>
  );
}

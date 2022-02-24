import React from "react";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import cx from "classnames";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WorkCard from "../../utils/Works Card/card";
import styles from "./landing.module.scss";
import slothImg from './simonSloth.jpg';

const postsCardData = [
  { heading: "Smart Contract Parameters", type: "Blockchain Development",
    text: "Smart Contracts are what permit a user to create various types of tokens on the Ethereum network. Popular token standards are ERC-20 (currencies) , ERC-1155 (in game NFTs), and ERC-721 (NFTs)."},


  {
    heading: "Integration with Web3",
    type: "Web3 Development",
    text: "Web3 refers to a website's interaction with the blockchain. We can create web apps that can recognize and authorize users through metamaks or various other crypto-wallets."
  },

];

const featureWorksData = [
  {
    heading: "Designing Dashboards",
    type: "Dashboard",
    img:
      "https://ipfs.io/ipfs/QmNqSS4ph4xqQEeYXJBEFVdmMk6LizzxpQhZg8Y4EEbBtr/1358.png",
  },
  {
    heading: "Vibrant Portraits of 2020",
    type: "Illustration",
    img:
      "https://ipfs.io/ipfs/QmNqSS4ph4xqQEeYXJBEFVdmMk6LizzxpQhZg8Y4EEbBtr/1358.png",
  },
  {
    heading: "36 Days of Kanji type",
    type: "Typography",
    img:
      "https://ipfs.io/ipfs/QmNqSS4ph4xqQEeYXJBEFVdmMk6LizzxpQhZg8Y4EEbBtr/1358.png",
  },
];

export default function Landing() {
  const devImg =
    "./simonSloth.jpg'";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.4, duration: 1 }}
    >
      <section className={cx(styles.section, styles.intro_Section)}>
        <div className={styles.headerContainer}>
          <div className={styles.headerTextImg}>
            <div className={styles.devImg_BelowTablet}>
              <img src={slothImg} alt='developer' />
            </div>
            <div className={styles.headerText}>
              <h4>
                Hi, I'm Simon Boccara
                <br /> {'Web3 & Blockchain Developer'}
              </h4>
              <p>
                
                <ul>
                  <li>Smart Contracts</li>
                  <li>Web 3 Integration</li>
                  <li>API Creation</li>
                  <li>2D and 3D Image Generation</li>
                  <li>Discord Structure</li>
                </ul>
              </p>
            </div>
            <div className={styles.devImg_UptoTablet}>
              <img src={'https://ipfs.io/ipfs/QmNqSS4ph4xqQEeYXJBEFVdmMk6LizzxpQhZg8Y4EEbBtr/1358.png'} alt='developer' />
            </div>
          </div>
          <div>
            <Button
              className={styles.downloadBtn}
              variant='contained'
              color='default'
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>
      <section className={cx(styles.section, styles.recentPost_Section)}>
        <Grid
          container
          justify='space-between'
          style={{ margin: 0, width: "100%" }}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant='h6'>Recent posts</Typography>
            <Typography>
              <Link
                style={{ color: "#00A8CC", textDecoration: "none" }}
                to='/blog'
              >
                View all
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={2}>
              {postsCardData.map((details) => (
                <Grid key={details.type} item xs={12} sm={12} md={6}>
                  <Card className={styles.postsCard} elevation={3}>
                    <span>{details.heading}</span>
                    <span>|| {details.type}</span>
                    <span>
                      {details.text}
                      
                    </span>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className={cx(styles.section, styles.featuredWork_Section)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h6' color='initial'>
              Feature Works
            </Typography>
          </Grid>
          {featureWorksData.map((work) => (
            <Grid
              key={work.type}
              item
              xs={12}
              sm={12}
              md={12}
              style={{ borderBottom: "1px solid #E0E0E0" }}
            >
              <WorkCard
                heading={work.heading}
                img={work.img}
                type={work.type}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </motion.div>
  );
}

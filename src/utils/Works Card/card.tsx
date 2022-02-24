import React from "react";
import { Card } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "./card.module.scss";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const imageVariant = {
  hover: { scale: 0.9 },
};

interface Props {
  img: string;
  heading: string;
  type: string;
  topics: Array<string>;


}
export default function WorkCard(props: any,) {
  return (
    <Card className={styles.card} style={{overflow:'auto'}} elevation={0}>
      <motion.img
        variants={imageVariant}
        transition={transition}
        whileHover='hover'
        src={props.img}
        alt='prop cover img'
      />
      <div>
        <span className={styles.heading}>{props.heading}</span>
        <div>
          <span>2021</span>
          <span>{props.type}</span>
        </div>
        <span>
          {props.text}
     
        </span>
        {props.topics && props.topics.map((topic : string)=>{console.log("props.topics=",props.topics); return(<ul><li>{topic}</li></ul>)})}
      </div>
    </Card>
  );
}

import React from "react";
import { feedback } from "../Review/assets/data";
import Review from "../Review";
import styles from "./reviewList.module.scss";

export default function ReviewList() {
  return (
    <div className={StyleSheet.list}>
      {feedback.map((data, index) => {
        const { img, author, role, comment } = data;
        return (
          <Review img={img} author={author} role={role} comment={comment} />
        );
      })}
    </div>
  );
}

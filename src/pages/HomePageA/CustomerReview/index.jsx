/* eslint-disable */
import Review from "./Review";
import { feedback } from "./Review/assets/data";
import styles from "./slide.module.scss";

function CustomerReview() {
  return (
    <div className={styles.customerFeed}>
      <svg
        className={styles.customerFeed__left}
        width="3.8rem"
        height="3.7rem"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="60" height="60" rx="30" fill="#0077FF" />
        <path
          d="M34.25 37.5L26.75 30L34.25 22.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="">
        {feedback.map((info, index)=>{
          const{img, author,role, comment} = info;
          return <Review key={index} img={img} author={author} role={role} comment={comment} />
        })}
        
      </div>
      <svg
        className={styles.customerFeed__right}
        width="3.8rem"
        height="3.7rem"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="60" height="60" rx="30" fill="#0077FF" />
        <path
          d="M34.25 37.5L26.75 30L34.25 22.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default CustomerReview;

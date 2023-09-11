import React from 'react';

import type IconType from 'types/icon';

const IconReceipt = ({ w, h, fill }: IconType) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${w} ${h}`}
    >
      <path
        d="M0 3.26367C0 2.60063 0.263392 1.96475 0.732233 1.4959C1.20107 1.02706 1.83696 0.763672 2.5 0.763672H12.9545C13.2829 0.763672 13.6079 0.828336 13.9113 0.953973C14.2146 1.07961 14.4902 1.26376 14.7223 1.4959C14.9545 1.72805 15.1386 2.00365 15.2642 2.30696C15.3899 2.61028 15.4545 2.93537 15.4545 3.26367V13.4909H20V17.3546C20 18.2587 19.6408 19.1258 19.0015 19.7652C18.3622 20.4045 17.4951 20.7637 16.5909 20.7637H3.40909C2.50494 20.7637 1.63783 20.4045 0.9985 19.7652C0.359171 19.1258 0 18.2587 0 17.3546V3.26367ZM15.4545 19.4H16.5909C17.1334 19.4 17.6537 19.1845 18.0373 18.8009C18.4209 18.4173 18.6364 17.8971 18.6364 17.3546V14.8546H15.4545V19.4ZM2.5 2.12731C1.87273 2.12731 1.36364 2.6364 1.36364 3.26367V17.3546C1.36364 17.8971 1.57914 18.4173 1.96274 18.8009C2.34633 19.1845 2.8666 19.4 3.40909 19.4H14.0909V3.26367C14.0909 2.6364 13.5818 2.12731 12.9545 2.12731H2.5ZM4.31818 5.30913C4.13735 5.30913 3.96393 5.38096 3.83606 5.50883C3.7082 5.63669 3.63636 5.81012 3.63636 5.99094C3.63636 6.17177 3.7082 6.3452 3.83606 6.47306C3.96393 6.60093 4.13735 6.67276 4.31818 6.67276H11.1364C11.3172 6.67276 11.4906 6.60093 11.6185 6.47306C11.7463 6.3452 11.8182 6.17177 11.8182 5.99094C11.8182 5.81012 11.7463 5.63669 11.6185 5.50883C11.4906 5.38096 11.3172 5.30913 11.1364 5.30913H4.31818ZM3.63636 10.5364C3.63636 10.3556 3.7082 10.1821 3.83606 10.0543C3.96393 9.92642 4.13735 9.85458 4.31818 9.85458H11.1364C11.3172 9.85458 11.4906 9.92642 11.6185 10.0543C11.7463 10.1821 11.8182 10.3556 11.8182 10.5364C11.8182 10.7172 11.7463 10.8907 11.6185 11.0185C11.4906 11.1464 11.3172 11.2182 11.1364 11.2182H4.31818C4.13735 11.2182 3.96393 11.1464 3.83606 11.0185C3.7082 10.8907 3.63636 10.7172 3.63636 10.5364ZM4.31818 14.4C4.13735 14.4 3.96393 14.4719 3.83606 14.5997C3.7082 14.7276 3.63636 14.901 3.63636 15.0819C3.63636 15.2627 3.7082 15.4361 3.83606 15.564C3.96393 15.6918 4.13735 15.7637 4.31818 15.7637H7.5C7.68083 15.7637 7.85425 15.6918 7.98212 15.564C8.10998 15.4361 8.18182 15.2627 8.18182 15.0819C8.18182 14.901 8.10998 14.7276 7.98212 14.5997C7.85425 14.4719 7.68083 14.4 7.5 14.4H4.31818Z"
        fill={fill ?? '#4E4F54'}
      />
    </svg>
  );
};

export default IconReceipt;

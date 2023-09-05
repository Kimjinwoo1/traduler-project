/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';

import type IconType from 'types/icon';

const IconCamera = ({ w, h, fill }: IconType) => {
  const width = `w-[${w as string}px]`;
  const height = `h-[${h as string}px]`;
  return (
    <svg
      width={w || '18'}
      height={h || '22'}
      viewBox={`0 -3 ${w || '21'} ${h || '18'}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={w !== undefined && h !== undefined ? `${width} ${height}` : ''}
    >
      <path
        d="M14.3878 3.91479L13.754 4.31589C13.7733 4.34632 13.7947 4.37532 13.8181 4.40267L14.3878 3.91479ZM13.2064 2.04823L13.8401 1.64713C13.8208 1.61654 13.7992 1.58739 13.7757 1.55992L13.2064 2.04823ZM7.17799 2.04823L6.60874 1.55992C6.58517 1.58739 6.56362 1.61654 6.54426 1.64713L7.17799 2.04823ZM5.99663 3.91479L6.56626 4.40267C6.58969 4.37532 6.61111 4.34632 6.63037 4.31589L5.99663 3.91479ZM0.961426 5.83728H0.211426H0.961426ZM0.961426 14.358H0.211426H0.961426ZM2.40077 3.48521C2.40077 3.89942 2.73656 4.23521 3.15077 4.23521C3.56499 4.23521 3.90077 3.89942 3.90077 3.48521H2.40077ZM3.15077 2.99704H3.90077C3.90077 2.58283 3.56499 2.24704 3.15077 2.24704V2.99704ZM2.61823 2.99704V2.24704C2.20402 2.24704 1.86823 2.58283 1.86823 2.99704H2.61823ZM1.86823 3.48521C1.86823 3.89942 2.20402 4.23521 2.61823 4.23521C3.03244 4.23521 3.36823 3.89942 3.36823 3.48521H1.86823ZM15.0215 3.5137L13.8401 1.64713L12.5727 2.44932L13.754 4.31589L15.0215 3.5137ZM13.7757 1.55992C13.4063 1.12937 12.8668 0.826923 12.2336 0.826923V2.32692C12.3655 2.32692 12.5085 2.38661 12.6371 2.53653L13.7757 1.55992ZM12.2336 0.826923H8.15077V2.32692H12.2336V0.826923ZM8.15077 0.826923C7.51754 0.826923 6.97806 1.12937 6.60874 1.55992L7.74725 2.53653C7.87586 2.38661 8.01892 2.32692 8.15077 2.32692V0.826923ZM6.54426 1.64713L5.3629 3.5137L6.63037 4.31589L7.81173 2.44932L6.54426 1.64713ZM5.42701 3.42691C5.25846 3.6237 5.12759 3.66716 5.04427 3.66716V5.16716C5.72603 5.16716 6.23688 4.78725 6.56626 4.40267L5.42701 3.42691ZM5.04427 3.66716H2.38154V5.16716H5.04427V3.66716ZM2.38154 3.66716C1.80599 3.66716 1.25401 3.8958 0.847039 4.30277L1.9077 5.36343C2.03337 5.23776 2.20382 5.16716 2.38154 5.16716V3.66716ZM0.847039 4.30277C0.440063 4.70975 0.211426 5.26173 0.211426 5.83728H1.71143C1.71143 5.65955 1.78203 5.4891 1.9077 5.36343L0.847039 4.30277ZM0.211426 5.83728V14.358H1.71143V5.83728H0.211426ZM0.211426 14.358C0.211426 14.9335 0.440063 15.4855 0.847039 15.8925L1.9077 14.8318C1.78203 14.7062 1.71143 14.5357 1.71143 14.358H0.211426ZM0.847039 15.8925C1.25401 16.2995 1.80599 16.5281 2.38154 16.5281V15.0281C2.20382 15.0281 2.03337 14.9575 1.9077 14.8318L0.847039 15.8925ZM2.38154 16.5281H18.0028V15.0281H2.38154V16.5281ZM18.0028 16.5281C18.5784 16.5281 19.1304 16.2995 19.5374 15.8925L18.4767 14.8318C18.351 14.9575 18.1806 15.0281 18.0028 15.0281V16.5281ZM19.5374 15.8925C19.9443 15.4855 20.173 14.9335 20.173 14.358H18.673C18.673 14.5357 18.6024 14.7062 18.4767 14.8318L19.5374 15.8925ZM20.173 14.358V5.83728H18.673V14.358H20.173ZM20.173 5.83728C20.173 5.26173 19.9443 4.70975 19.5374 4.30277L18.4767 5.36343C18.6024 5.48911 18.673 5.65955 18.673 5.83728H20.173ZM19.5374 4.30277C19.1304 3.8958 18.5784 3.66716 18.0028 3.66716V5.16716C18.1806 5.16716 18.351 5.23776 18.4767 5.36343L19.5374 4.30277ZM18.0028 3.66716H15.3845V5.16716H18.0028V3.66716ZM15.3845 3.66716C15.2737 3.66716 15.1032 3.59715 14.9574 3.42691L13.8181 4.40267C14.1703 4.8138 14.7276 5.16716 15.3845 5.16716V3.66716ZM12.9925 9.38757C12.9925 10.9341 11.7388 12.1879 10.1922 12.1879V13.6879C12.5672 13.6879 14.4925 11.7626 14.4925 9.38757H12.9925ZM10.1922 12.1879C8.64563 12.1879 7.3919 10.9341 7.3919 9.38757H5.8919C5.8919 11.7626 7.81721 13.6879 10.1922 13.6879V12.1879ZM7.3919 9.38757C7.3919 7.84101 8.64563 6.58728 10.1922 6.58728V5.08728C7.81721 5.08728 5.8919 7.01259 5.8919 9.38757H7.3919ZM10.1922 6.58728C11.7388 6.58728 12.9925 7.84101 12.9925 9.38757H14.4925C14.4925 7.01259 12.5672 5.08728 10.1922 5.08728V6.58728ZM3.90077 3.48521V2.99704H2.40077V3.48521H3.90077ZM3.15077 2.24704H2.61823V3.74704H3.15077V2.24704ZM1.86823 2.99704V3.48521H3.36823V2.99704H1.86823Z"
        fill={fill || 'black'}
      />
    </svg>
  );
};

export default IconCamera;

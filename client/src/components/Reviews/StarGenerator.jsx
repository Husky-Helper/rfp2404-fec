import React from 'react';

const Star = ({fillRating}) => {

return (
<>
{(fillRating === 1) ?

<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##bf873e" data-testid="full-filled-star">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M10 15.9706L5.70492 17.8855C5.00142 18.1991 4.22234 17.6331 4.30325 16.8671L4.79719 12.1905L1.64874 8.69737C1.13305 8.12523 1.43063 7.20937 2.18413 7.04961L6.78449 6.07423L9.13372 2.00044C9.5185 1.33319 10.4815 1.33319 10.8663 2.00044L13.2155 6.07423L17.8159 7.04961C18.5694 7.20937 18.8669 8.12523 18.3513 8.69737L15.2028 12.1905L15.6967 16.8671C15.7777 17.6331 14.9986 18.1991 14.2951 17.8855L10 15.9706Z" fill="#bf873e"/> </g>

</svg>
: null
}

{(fillRating < 0.25) ?

  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="nofill-outline-star">

    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

    <g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#bf873e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

  </svg>
: null
}

{(fillRating >= 0.5 && fillRating < 0.75) ?
  <svg width="20px" height="20px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" data-testid="half-fill-star">

    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

    <g id="SVGRepo_iconCarrier"> <path d="M14.8915 3.55766C14.7942 3.36044 14.6346 3.20082 14.4374 3.10349C13.9421 2.85906 13.3425 3.0624 13.0981 3.55766L10.1742 9.48206L3.63623 10.4321C3.41859 10.4637 3.21745 10.5662 3.06394 10.7237C2.67844 11.1192 2.68653 11.7523 3.08202 12.1378L7.81294 16.7493L6.69612 23.2608C6.65894 23.4776 6.69426 23.7006 6.7966 23.8952C7.0536 24.3841 7.65822 24.572 8.14707 24.315L13.9948 21.2407L19.8425 24.315C20.0372 24.4173 20.2602 24.4527 20.4769 24.4155C21.0213 24.3221 21.3868 23.8052 21.2935 23.2608L20.1767 16.7493L24.9076 12.1378C25.0651 11.9843 25.1676 11.7831 25.1992 11.5655C25.2786 11.0189 24.8999 10.5115 24.3534 10.4321L17.8154 9.48206L14.8915 3.55766ZM14 19.5487V5.14053L16.8193 10.8531L23.1351 11.7708L18.5649 16.2256L19.6438 22.5159L14 19.5487Z" fill="#bf873e"/> </g>

  </svg>
:null
}

{(fillRating >= 0.25 && fillRating < 0.5) ?

  <svg width="20px" height="20px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="one-quarter-fill-star">

    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

    <g id="SVGRepo_iconCarrier"> <path d="M14.8915 3.55766C14.7942 3.36044 14.6346 3.20082 14.4374 3.10349C13.9421 2.85906 13.3425 3.0624 13.0981 3.55766L10.1742 9.48206L3.63623 10.4321C3.41859 10.4637 3.21745 10.5662 3.06394 10.7237C2.67844 11.1192 2.68653 11.7523 3.08202 12.1378L7.81294 16.7493L6.69612 23.2608C6.65894 23.4776 6.69426 23.7006 6.7966 23.8952C7.0536 24.3841 7.65822 24.572 8.14707 24.315L13.9948 21.2407L19.8425 24.315C20.0372 24.4173 20.2602 24.4527 20.4769 24.4155C21.0213 24.3221 21.3868 23.8052 21.2935 23.2608L20.1767 16.7493L24.9076 12.1378C25.0651 11.9843 25.1676 11.7831 25.1992 11.5655C25.2786 11.0189 24.8999 10.5115 24.3534 10.4321L17.8154 9.48206L14.8915 3.55766ZM11 10.8778L11.1703 10.8531L13.9948 5.13L16.8193 10.8531L23.1351 11.7708L18.5649 16.2256L19.6438 22.5159L13.9948 19.546L11 21.1205V10.8778Z" fill="#bf873e"/> </g>

  </svg>
: null
}

{ (fillRating >= 0.75 && fillRating < 1) ?

  <svg width="20px" height="20px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="three-quarter-fill-star">

    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

    <g id="SVGRepo_iconCarrier"> <path d="M13.5524 3.10349C13.3552 3.20082 13.1955 3.36044 13.0982 3.55766L10.1743 9.48206L3.63637 10.4321C3.08983 10.5115 2.71113 11.0189 2.79055 11.5655C2.82218 11.7831 2.92466 11.9843 3.08215 12.1378L7.81306 16.7493L6.69625 23.2608C6.60289 23.8052 6.96847 24.3221 7.51281 24.4155C7.5399 24.4201 7.5671 24.4236 7.59432 24.426C7.78487 24.4428 7.97687 24.4046 8.1472 24.315L13.9949 21.2407L19.8427 24.315C19.9038 24.3471 19.9667 24.3723 20.0305 24.3908C20.4772 24.5203 20.9683 24.323 21.1931 23.8952C21.2059 23.8709 21.2177 23.8461 21.2284 23.821C21.3032 23.6449 21.3261 23.4505 21.2936 23.2609C21.2936 23.2608 21.2936 23.2609 21.2936 23.2609L20.1768 16.7493L24.9077 12.1378C24.9572 12.0896 25.0005 12.0375 25.0379 11.9826C25.2991 11.5977 25.2631 11.0697 24.9258 10.7237C24.7723 10.5662 24.5711 10.4637 24.3535 10.4321L17.8155 9.48206L14.8917 3.55766C14.7174 3.20459 14.3627 2.99989 13.9939 3C13.8454 3.00004 13.6946 3.03331 13.5524 3.10349ZM16.9897 21.1205V10.8778L23.1352 11.7708L18.5651 16.2256L19.644 22.5159L16.9897 21.1205Z" fill="#bf873e"/> </g>

  </svg>

:null
}

</>
);

};

export default Star;
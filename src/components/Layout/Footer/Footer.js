import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useSelector } from "react-redux";
// import { Navbar, Nav, NavDropdown, Dropdown, Button } from "react-bootstrap";

const Footer = (props) => {
  const classes = useStyles();
  const {
    footerMainDisplay,
    footerCopyRightDisplay,
    footerLinksSectionDisplay,
  } = useSelector((s) => s.layoutSettings);

  const footerDataMock = [
    {
      title: "About Us",
      items: [
        {
          title: "About",
          link: "/",
        },
        {
          title: "Careers",
          link: "/",
        },
        {
          title: "Business Contacts",
          link: "/",
        },
        {
          title: "Community",
          link: "/",
        },
        {
          title: "Binance Blog",
          link: "/",
        },
        {
          title: "Terms",
          link: "/",
        },
        {
          title: "Privacy",
          link: "/",
        },
        {
          title: "Risk Warning",
          link: "/",
        },
        {
          title: "Announcements",
          link: "/",
        },
        {
          title: "News",
          link: "/",
        },
        {
          title: "Notices",
          link: "/",
        },
        {
          title: "Cookie Preferences",
          link: "/",
        },
      ],
    },
    {
      title: "Products",
      items: [
        {
          title: "Exchange",
          link: "/",
        },
        {
          title: "Academy",
          link: "/",
        },
        {
          title: "3co Live",
          link: "/",
        },
        {
          title: "Charity",
          link: "/",
        },
        {
          title: "Card",
          link: "/",
        },
        {
          title: "Labs",
          link: "/",
        },
        {
          title: "Launchpad",
          link: "/",
        },
        {
          title: "Research",
          link: "/",
        },
        {
          title: "Trust Wallet",
          link: "/",
        },
        {
          title: "NFT",
          link: "/",
        },
        {
          title: "3co Pay",
          link: "/",
        },
        {
          title: "3co Gift Card",
          link: "/",
        },
      ],
    },
    {
      title: "Service",
      items: [
        {
          title: "Downloads",
          link: "/",
        },
        {
          title: "Desktop Applications",
          link: "/",
        },
        {
          title: "Buy Crypto",
          link: "/",
        },
        {
          title: "OTC Trading",
          link: "/",
        },
        {
          title: "Referral",
          link: "/",
        },
        {
          title: "Affiliate",
          link: "/",
        },
        {
          title: "BNB",
          link: "/",
        },
        {
          title: "Listing Application",
          link: "/",
        },
        {
          title: "Historical Market Data",
          link: "/",
        },
        {
          title: "Proof of Asset",
          link: "/",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "About",
          link: "/",
        },
        {
          title: "Careers",
          link: "/",
        },
        {
          title: "Business Contacts",
          link: "/",
        },
        {
          title: "Community",
          link: "/",
        },
        {
          title: "Binance Blog",
          link: "/",
        },
        {
          title: "Terms",
          link: "/",
        },
        {
          title: "Privacy",
          link: "/",
        },
        {
          title: "Risk Warning",
          link: "/",
        },
        {
          title: "Announcements",
          link: "/",
        },
        {
          title: "News",
          link: "/",
        },
        {
          title: "Notices",
          link: "/",
        },
        {
          title: "Cookie Preferences",
          link: "/",
        },
      ],
    },
    {
      title: "Learn",
      items: [
        {
          title: "Learn and Earn",
          link: "/",
        },
        {
          title: "Brows Crypto Prices",
          link: "/",
        },
        {
          title: "Buy BNB",
          link: "/",
        },
        {
          title: "Buy BUSD",
          link: "/",
        },
        {
          title: "Buy Bitcoin",
          link: "/",
        },
        {
          title: "Buy Ethereum",
          link: "/",
        },
        {
          title: "Buy Litecoin",
          link: "/",
        },
        {
          title: "Buy Ripple",
          link: "/",
        },
        {
          title: "Buy SHIB",
          link: "/",
        },
      ],
    },
  ];
  return (
    <>
      {footerMainDisplay ? (
        <footer className="text-gray-600 body-font">
          {footerLinksSectionDisplay ? (
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                {footerDataMock?.map((item) => {
                  return (
                    <div className="lg:w-1/5 md:w-1/2 w-full px-4 text-center">
                      <Typography
                        variant={"h4"}
                        color={"text.primary"}
                        className={"text-[20px] font-[700] mb-[30px]"}
                      >
                        {item?.title}
                      </Typography>
                      <nav className="list-none mb-10">
                        {item?.items?.map((child) => {
                          return (
                            <li className={"mb-[20px]"}>
                              <Link to={child?.link} className={classes.link}>
                                {child?.title}
                              </Link>
                            </li>
                          );
                        })}
                      </nav>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          {footerCopyRightDisplay ? (
            <div className="border-t border-gray-200">
              <div className="container justify-between px-5 py-8 flex flex-wrap mx-auto items-center">
                <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
                <div className="flex w-full lg:w-auto md:flex-nowrap flex-wrap justify-center items-end">
                  <a
                    href={"https://3co.net"}
                    target={"_blank"}
                    className="text-gray-500 text-sm text-center lg:text-left"
                  >
                    © 2023 Tree Co-Operation
                  </a>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </footer>
      ) : (
        ""
      )}
    </>
  );
};
export default Footer;

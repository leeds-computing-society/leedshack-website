"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderType = "leeds-hack-2025" | "leeds-hack-2026" | "leeds-hack-2027";

const HeaderTypeMap: { [key in HeaderType]: string } = {
  "leeds-hack-2025": "bg-brand-primary-500/50",
  "leeds-hack-2026": "bg-black/25",
  "leeds-hack-2027": "bg-leeds-hack-2027-primary-500/50",
};

type HeaderItemType =
  | "default"
  | "leeds-computing-society"
  | "leeds-hack-2025"
  | "leeds-hack-2026"
  | "leeds-hack-2027";

const HeaderItemTypeMap: { [key in HeaderItemType]: string } = {
  default: "link",
  "leeds-computing-society": "link link-leeds-computing-society",
  "leeds-hack-2025": "link link-leeds-hack-2025",
  "leeds-hack-2026": "link link-leeds-hack-2026",
  "leeds-hack-2027": "link link-leeds-hack-2027",
};

interface HeaderItem {
  text: string;
  link: string;
  type: HeaderItemType;
  divider?: boolean;
  children?: HeaderSubItem[];
}

interface HeaderSubItem {
  text: string;
  link: string;
}

const headerItems: HeaderItem[] = [
  {
    text: "LeedsHack 2027",
    link: "/",
    type: "leeds-hack-2027",
  },
  {
    text: "FAQ",
    link: "/faq",
    type: "leeds-hack-2027",
  },
  {
    text: "Committee",
    link: "/committee",
    type: "leeds-hack-2027",
  },
  {
    text: "Past Events",
    link: "",
    type: "leeds-hack-2026",
    divider: true,
    children: [
      {
        text: "2026",
        link: "/2026",
      },
      {
        text: "2025",
        link: "/2025",
      },
    ],
  },
  {
    text: "Leeds Computing Society",
    link: "https://luucompsoc.co.uk",
    type: "leeds-computing-society",
  },
  // {
  //     text: "Sponsors",
  //     link: "/sponsors",
  //     type: "leeds-hack-2026"
  // },
  // {
  //     text: "FAQ",
  //     link: "/questions",
  //     type: "leeds-hack-2026"
  // }
];

export const Header = () => {
  let pathname = usePathname();
  let router = useRouter();
  let [menuOpen, setMenuOpen] = useState<boolean>(false);
  let [pastEventsOpen, setPastEventsOpen] = useState<boolean>(false);
  let [mobilePastEventsOpen, setMobilePastEventsOpen] =
    useState<boolean>(false);
  let [headerType, setHeaderType] = useState<HeaderType>("leeds-hack-2026");

  let menuButtonClicked = () => {
    setMenuOpen(!menuOpen);
  };

  let navigationClicked = (route: string) => {
    setMenuOpen(false);
    router.push(route);
  };

  let handleResize = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (pathname === "/2025") setHeaderType("leeds-hack-2025");
    else if (pathname === "/2026") setHeaderType("leeds-hack-2026");
    else if (
      pathname === "/" ||
      pathname === "/faq" ||
      pathname === "/committee"
    )
      setHeaderType("leeds-hack-2027");
    else setHeaderType("leeds-hack-2026");

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div className="fixed h-14 w-full text-md z-50 text-white">
      <div
        style={{
          WebkitBackdropFilter: "blur(48px)",
          backdropFilter: "blur(48px)",
        }}
        className={`h-14 transition-header border-b border-white/50 ${HeaderTypeMap[headerType]}`}
      >
        <div className="h-full flex justify-center items-center gap-6 max-[68rem]:hidden">
          {headerItems.map((item, index) => {
            if (item.children) {
              return (
                <div
                  key={index}
                  className={`relative ${item.divider ? "divider" : ""}`}
                >
                  <button
                    onClick={() => setPastEventsOpen(!pastEventsOpen)}
                    className={`${HeaderItemTypeMap[item.type]} appearance-none border-none bg-transparent cursor-pointer`}
                  >
                    {item.text}
                  </button>
                  {pastEventsOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col border border-white/50 min-w-[10rem] bg-black/25 py-2"
                      style={{
                        WebkitBackdropFilter: "blur(24px)",
                        backdropFilter: "blur(24px)",
                      }}
                    >
                      {item.children.map((child, childIndex) => (
                        <div
                          key={childIndex}
                          className="flex flex-col items-center"
                        >
                          <Link
                            href={child.link}
                            onClick={() => setPastEventsOpen(false)}
                            className="px-6 py-3 text-center hover:bg-white/15 transition-colors duration-200 w-full"
                          >
                            {child.text}
                          </Link>
                          {childIndex !== item.children.length - 1 && (
                            <div className="w-24 h-px bg-white/50"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={item.link}
                className={`${HeaderItemTypeMap[item.type]} ${item.divider ? "divider" : ""}`}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
        <div className="h-full flex justify-start items-center min-[68rem]:hidden">
          <button
            aria-label="Navigation Menu Toggle"
            onClick={menuButtonClicked}
            className="p-4 cursor-pointer"
          >
            <svg
              className="stroke-white w-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 5H21"></path>
              <path d="M3 12H21"></path>
              <path d="M3 19H21"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        style={{
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(48px)",
        }}
        className={`transition-navigation border-dashed w-full text-md overflow-clip border-b border-transparent flex flex-col gap-3 items-center ${HeaderTypeMap[headerType]} ${menuOpen ? "h-auto border-white/50" : "h-0"}`}
      >
        {headerItems.map((item, index) => {
          if (item.children) {
            return (
              <div key={index} className="flex flex-col items-center w-full">
                <button
                  onClick={() => setMobilePastEventsOpen(!mobilePastEventsOpen)}
                  className={
                    HeaderItemTypeMap[item.type] +
                    (item.divider ? " divider" : "") +
                    " first:mt-6 last:mb-6 cursor-pointer appearance-none border-none bg-transparent"
                  }
                >
                  {item.text}
                </button>
                <div
                  className="transition-navigation overflow-clip flex flex-col items-center gap-3 w-full"
                  style={{ height: mobilePastEventsOpen ? "auto" : "0" }}
                >
                  {item.children.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      onClick={() => navigationClicked(child.link)}
                      className="link cursor-pointer text-white/70"
                    >
                      {child.text}
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <button
              key={index}
              onClick={() => navigationClicked(item.link)}
              className={
                HeaderItemTypeMap[item.type] +
                (item.divider ? " divider" : "") +
                " first:mt-6 last:mb-6 cursor-pointer"
              }
            >
              {item.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

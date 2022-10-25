export const config = {
  siteMeta: {
    title: "ピティナ／東音の記事サイト",
    teamName: "ptna/toon",
    description: "かみんぐすーん",
  },
  siteRoot: process.env.NODE_ENV === "production" ? "#" : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://www.piano.or.jp/",
    },
  ],
};

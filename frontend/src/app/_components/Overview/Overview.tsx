import Link from "next/link";
import styles from "./Overview.module.scss";

const Overview = () => {
  const organizations = [
    {
      name: "International Monetary Fund",
      shortName: "IMF",
      description:
        "Working to foster global monetary cooperation, secure financial stability, facilitate international trade.",
      link: "/imf",
      color: "#0051a2",
    },
    {
      name: "World Bank",
      shortName: "World Bank",
      description:
        "Providing financing, advice, and research to developing nations to help advance their economies.",
      link: "/world-bank",
      color: "#0070f3",
    },
    {
      name: "OECD",
      shortName: "OECD",
      description:
        "Organisation for Economic Co-operation and Development. Better policies for better lives.",
      link: "/oced",
      color: "#2e8b57",
    },
  ];

  return (
    <section id="overview" className={styles.overview}>
      <div className={styles.header}>
        <h2 className={styles.title}>Global Financial Insights</h2>
        <p className={styles.description}>
          We aggregate annual financial reports from prestigious financial
          institutions worldwide. Our goal is to help users gain an overview of
          the global financial situation through analytical tools and public
          data.
        </p>
      </div>

      <div className={styles.grid}>
        {organizations.map((org) => (
          <Link href={org.link} key={org.shortName} className={styles.card}>
            <div
              className={styles.cardHeader}
              style={{ backgroundColor: org.color }}>
              <h3>{org.shortName}</h3>
            </div>
            <div className={styles.cardBody}>
              <h4>{org.name}</h4>
              <p>{org.description}</p>
              <span className={styles.linkText}>View Reports &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Overview;

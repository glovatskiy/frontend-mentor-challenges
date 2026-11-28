import SocialCardLink from "./SocialCardLink";
import Avatar from "./assets/avatar-jessica.jpeg";
import "./App.css";

const SocialCard = () => {
  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  const styles = {
    card: {
      width: 384,
      backgroundColor: "#1F1F1F",
      borderRadius: 12,
      padding: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      gap: 24,
    },
    img: {
      borderRadius: 100,
      width: 88,
      height: 88,
      margin: 0,
      padding: 0,
    },
    linksContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
    },
    headingLocationContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    },
    cardHeading: {
      fontFamily: "Inter, sans-serif",
      color: "white",
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      padding: 0,
    },
    cardLocation: {
      color: "#C4F82A",
      fontFamily: "Inter, sans-serif",
      fontSize: 14,
      fontWeight: 800,
      margin: 0,
      padding: 0,
    },
      cardBio: {
          color: "white",
          fontFamily: "Inter, sans-serif",
          fontSize: 14,
          fontWeight: 500,
      margin: 0,
      padding: 0,
    },
  };
  return (
    <>
      <div style={styles.card}>
        <img style={styles.img} src={Avatar} />
        <div style={styles.headingLocationContainer}>
          <h2 style={styles.cardHeading}>Jessica Randall</h2>
          <p style={styles.cardLocation}>London, United Kingdom</p>
        </div>
        <p style={styles.cardBio}>"Front-end developer and avid reader."</p>
        <div style={styles.linksContainer}>
          {links.map((linkText) => (
            <SocialCardLink key={linkText} linkText={linkText} />
          ))}
        </div>
      </div>
    </>
  );
};
export default SocialCard;

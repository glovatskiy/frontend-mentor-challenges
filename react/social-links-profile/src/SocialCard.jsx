import SocialCardLink from "./SocialCardLink";
import Avatar from "./assets/avatar-jessica.jpeg";

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
      height: 611,
      backgroundColor: "#1F1F1F",
      borderRadius: 12,
      padding: 40,
      },
      img: {
          borderRadius: 100
      }
  };
  return (
    <>
      <div style={styles.card}>
              <img style={styles.img} src={ Avatar} />
        <div>
          <h2>Jessica Randall</h2>
          <p>London, United Kingdom</p>
        </div>
        <p>"Front-end developer and avid reader."</p>
        <div>
          {links.map((linkText) => (
            <SocialCardLink key={linkText} linkText={linkText} />
          ))}
        </div>
      </div>
    </>
  );
};
export default SocialCard;

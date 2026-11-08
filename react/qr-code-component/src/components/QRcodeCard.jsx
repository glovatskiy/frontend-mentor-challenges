import QRimage from "../assets/image-qr-code.png";

const QRcodeCard = () => {
  const styles = {
    container: {
      width: "320px",
      height: "499px",
      padding: "16px 16px 40px 16px",
      backgroundColor: "#FFFFFF",
      borderRadius: "20px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    image: {
      width: "280px",
      height: "280px",
      borderRadius: "10px",
    },
    textContainer: {
      padding: "16px",
      color: "#68778D",
        fontSize: "15px",
      fontFamily: "'Outfit', sans-serif"
    },
    heading: {
      color: "#1F314F",
      fontSize: "22px",
    },
  };

  return (
    <div style={styles.container}>
      <img src={QRimage} style={styles.image} />
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRcodeCard;

import './App.css'

const SocialCardLink = ({ linkText }) => {
    const styles = {
      link: {
        width: 304,
        height: 45,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#333333",
        margin: 0,
        padding: 0,
      },
      linkText: {
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        color: "#FFFFFF",
      },
    };
    return (
        <a href="#" style={styles.link}>
            <p style={styles.linkText}>{ linkText}</p>
        </a>
    )
}
export default SocialCardLink;
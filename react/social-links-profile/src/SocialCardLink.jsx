import './App.css'

const SocialCardLink = ({ linkText }) => {
    const styles = {
        link: {
            width: 304,
            height: 45,
            display: "flex",
            justifyContent: "center",
            alightItems: "center",
            borderRadius: 8,
            backgroundColor: "#333333"
        },
        linkText: {
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#FFFFFF"
        }
    }
    return (
        <div style={styles.link}>
            <p style={styles.linkText}>{ linkText}</p>
        </div>
    )
}
export default SocialCardLink;
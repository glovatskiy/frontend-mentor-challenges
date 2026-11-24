const SocialCardLink = ({ linkText }) => {
    const styles = {
        link: {
            width: 304,
            height: 45,
            display: "flex",
            justifyContent: center,
            alightItems: center,
            borderRadius: 8
        },
        linkText: {
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            fontWeight: 700
        }
    }
    return (
        <div className={styles.link}>
            <p className={styles.linkText}>{ linkText}</p>
        </div>
    )
}
export default SocialCardLink;
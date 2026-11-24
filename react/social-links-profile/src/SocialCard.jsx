import SocialCardLink from "../SocialCardLink";

const SocialCard = () => {
    const links = [
      "GitHub",
      "Frontend Mentor",
      "LinkedIn",
      "Twitter",
      "Instagram",
    ];
  return (
    <>
      <div>
        <img />
        <div>
          <h2>Jessica Randall</h2>
          <p>London, United Kingdom</p>
        </div>
              <p>"Front-end developer and avid reader."</p>
              <div>
                  {links.map((linkText) =>
                      (<SocialCardLink linkText={linkText}/>)
                )}
              </div>
      </div>
    </>
  );
};
export default SocialCard
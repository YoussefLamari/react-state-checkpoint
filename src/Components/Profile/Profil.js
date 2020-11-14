import "./Profil.css";

const Profil = (props) => {
  const { imgSrc, fullName, profession, bio } = props.persone;
  return (
    <div className="center">
      <div className="avatar">
        <img src={imgSrc} alt="profileimg" />
      </div>
      <div className="contente" style={{ padding: "20px" }}>
        <h1 style={{ color: "#259B9A" }}>{fullName}</h1>
        <h2 style={{ color: "#373A36" }}>{profession}</h2>
        <p style={{ color: "#808000" }}>{bio}</p>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};
export default Profil;

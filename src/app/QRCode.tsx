import QRImage from "../assets/image-qr-code.png";
const QRCode = () => {
  return (
    <div className="card-wrapper">
      <img src={QRImage} alt="QRCode" className="card-image" />
      <h3>Improve your front-end skills by building projects</h3>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCode;

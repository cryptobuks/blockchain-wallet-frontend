import Button from "./Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="balance-info">
          <img src="/zlogo.png" alt="" className="zlogo" />
          <div className="balance">
            <p className="zil">0 ZIL</p>
            <p className="usd">$0.00USD</p>
          </div>
        </div>
        <div className="buttons">
          <Button type={"buy"} />
          <Button type={"request"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

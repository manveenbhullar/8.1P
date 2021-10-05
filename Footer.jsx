import React from "react";
import { Button } from "semantic-ui-react";
import './Footer.css';
import icons from './icons';
import './icons_pic';
import icons_pic from "./icons_pic";


const Footer = () => {
    return (
        <div className="footer-div">
            <div className="footer-wrapper-left">
                <h2>NEWSLETTER SIGN</h2>
                <input className="input-email" type="email" placeholder="Enter your email" />
                <Button className="btn-sub" type="">Subscribe</Button>
                
            </div>
            <div className="footer-wrapper-right">
                <h2>Connect Us</h2>

                {icons_pic.map((icon) =>
                    <icons
                        borderColor={icon.borderColor}
                        borderWidth={icon.borderWidth}
                        borderStyle={icon.borderStyle}
                        icon={icon.icon}
                        iconColor={icon.iconColor}
                        backgroundColor={icon.backgroundColor}
                        iconSize={icon.iconSize}
                        roundness={icon.roundness}
                        url={icon.url}
                        size={icon.size}
                    />
                )}

            </div>

        </div>
    )
}

export default Footer;
import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Built on Solana • Fast • Secure • Decentralized</p>
                <img src="/logo.png" alt="Dreams Market logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2025 Dreams Market. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer

import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.png" alt="Dreams Market logo" />

        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button className="connect-wallet-btn">
            <span>Connect Wallet</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;

import { useCallback, useRef } from "react";

const highlightShots = [
  { label: "Spectre Mode", badge: "HDR 4K" },
  { label: "Garage Freecam", badge: "Unlocked" },
  { label: "Prize Vault Overlay", badge: "Live feed" },
];

const telemetry = [
  { label: "Session depth", value: "18 min" },
  { label: "Vehicles awarded", value: "12+ weekly" },
  { label: "Reward pool", value: "$2.5M" },
];

const CarLandingSection = () => {
  const iframeRef = useRef(null);

  const sendMessage = useCallback((type) => {
    const iframeWindow = iframeRef.current?.contentWindow;
    if (!iframeWindow) return;

    iframeWindow.postMessage({ type }, window.location.origin);
  }, []);

  const handleCarouselFocus = useCallback(() => {
    sendMessage("FOCUS_CAROUSEL");
  }, [sendMessage]);

  const handleOpenStandalone = useCallback(() => {
    window.open("/car-landing.html", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="immersive-stage" id="drive">
      <div className="immersive-stage__grid">
        <div className="immersive-stage__copy">
          <span className="eyebrow-chip">
            <span className="dot" />
            Immersive preview
          </span>
          <h2>Dreams Market prize garage in hyperreal clarity.</h2>
          <p>
            Explore the Solana-fueled reward studio rendered with cinematic
            lighting, volumetric fog, and live telemetry overlays. Toggle
            between hero shots, inspect prize vehicles, and watch on-chain
            events ripple across the scene in real time.
          </p>

          <div className="immersive-stage__chips">
            {highlightShots.map(({ label, badge }) => (
              <span key={label}>
                {label}
                <small>{badge}</small>
              </span>
            ))}
          </div>

          <ul className="immersive-stage__list">
            <li>Multi-camera orbit paths tuned for desktop, mobile, and VR.</li>
            <li>Animated HUD reveals trading tiers, prize odds, and NFT drops.</li>
            <li>Material palette calibrated for OLED and high-nit displays.</li>
          </ul>

          <div className="immersive-stage__actions">
            <button className="connect-wallet-btn" type="button" onClick={handleCarouselFocus}>
              <span>View reward carousel</span>
            </button>
            <button className="ghost-button" type="button" onClick={handleOpenStandalone}>
              Launch full experience
            </button>
          </div>
        </div>

        <div className="immersive-stage__media">
          <div className="immersive-stage__glow" />
          <div className="immersive-stage__frame">
            <iframe
              ref={iframeRef}
              src="/car-landing.html"
              title="Dreams Market immersive preview"
              scrolling="no"
              loading="lazy"
            />
          </div>
          <div className="immersive-stage__metrics">
            {telemetry.map(({ label, value }) => (
              <article key={label}>
                <p>{value}</p>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarLandingSection;


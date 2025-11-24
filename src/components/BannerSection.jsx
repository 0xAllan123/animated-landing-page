const BannerSection = () => {
  return (
    <section 
      className="banner-section"
      style={{
        width: '100%',
        height: '50vh',
        minHeight: '400px',
        backgroundImage: 'url(/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      />
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
        <h2 style={{ 
          color: 'white', 
          fontSize: 'clamp(2rem, 5vw, 4rem)', 
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Dreams Market
        </h2>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.9)', 
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Where Trading Dreams Become Reality on Solana
        </p>
      </div>
    </section>
  );
};

export default BannerSection;


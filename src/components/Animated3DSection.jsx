// CSS is loaded via public folder

const Animated3DSection = () => {
  const dragon1 = '/3d-images/dragon_1.jpg';
  const dragon2 = '/3d-images/dragon_2.jpg';
  const dragon3 = '/3d-images/dragon_3.jpg';
  const dragon4 = '/3d-images/dragon_4.jpg';
  const dragon5 = '/3d-images/dragon_5.jpg';
  const dragon6 = '/3d-images/dragon_6.jpg';
  const dragon7 = '/3d-images/dragon_7.jpg';
  const dragon8 = '/3d-images/dragon_8.jpg';
  const dragon9 = '/3d-images/dragon_9.jpg';
  const dragon10 = '/3d-images/dragon_10.jpg';
  const modelImg = '/3d-images/model.png';
  return (
    <section id="nft-collection" className="banner" style={{
      backgroundColor: '#d2d2d2',
      backgroundImage: `repeating-linear-gradient(
        to right,
        transparent 0 100px,
        #25283b22 100px 101px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0 100px,
        #25283b22 100px 101px
      )`,
      position: 'relative',
      minHeight: '100vh'
    }}>
      <div className="slider" style={{ '--quantity': '10' }}>
        <div className="item" style={{ '--position': '1' }}>
          <img src={dragon1} alt="" />
        </div>
        <div className="item" style={{ '--position': '2' }}>
          <img src={dragon2} alt="" />
        </div>
        <div className="item" style={{ '--position': '3' }}>
          <img src={dragon3} alt="" />
        </div>
        <div className="item" style={{ '--position': '4' }}>
          <img src={dragon4} alt="" />
        </div>
        <div className="item" style={{ '--position': '5' }}>
          <img src={dragon5} alt="" />
        </div>
        <div className="item" style={{ '--position': '6' }}>
          <img src={dragon6} alt="" />
        </div>
        <div className="item" style={{ '--position': '7' }}>
          <img src={dragon7} alt="" />
        </div>
        <div className="item" style={{ '--position': '8' }}>
          <img src={dragon8} alt="" />
        </div>
        <div className="item" style={{ '--position': '9' }}>
          <img src={dragon9} alt="" />
        </div>
        <div className="item" style={{ '--position': '10' }}>
          <img src={dragon10} alt="" />
        </div>
      </div>
      
      <div className="content">
        <h1 data-content="NFT COLLECTION">NFT</h1>
        <div className="author">
          <h2>DREAMS MARKET</h2>
          <p><b>NFT Collection</b></p>
          <p>Own exclusive Dreams Market NFTs that unlock special rewards and privileges</p>
        </div>
        <div className="model" style={{ backgroundImage: `url(${modelImg})` }}></div>
      </div>
    </section>
  );
};

export default Animated3DSection;


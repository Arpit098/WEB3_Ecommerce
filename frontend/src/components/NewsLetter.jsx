import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  newsletterContainer: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px'
  },
  flashcardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 280px))', // Fixed square size
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    background: '#f5f5f5',
    borderRadius: '20px' // Rounded container
  },
  flashcard: {
    background: '#ffffff',
    borderRadius: '20px', // More rounded corners
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    aspectRatio: '1', // Makes it square
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },
  cardContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
    borderRadius: '20px'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '10px'
  },
  cardDescription: {
    color: '#ffffff',
    marginBottom: '15px'
  },
  playButton: {
    background: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#2980b9'
    }
  }
};

const NewsLetter = () => {
  const navigate = useNavigate();

  const flashcards = [
    {
      id: 1,
      title: "Learn Web3",
      description: "Discover blockchain basics",
      videoUrl: "/video/web3-basics",
      backgroundImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a"
    },
    {
      id: 2,
      title: "Smart Contracts",
      description: "Understanding smart contracts",
      videoUrl: "/video/smart-contracts",
      backgroundImage: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
    },
    {
      id: 3,
      title: "DeFi Basics",
      description: "Introduction to DeFi",
      videoUrl: "/video/defi-intro",
      backgroundImage: "https://images.unsplash.com/photo-1639322537674-e8f5f08cc3d4"
    },
    // {
    //   id: 4,
    //   title: "NFT Creation",
    //   description: "Learn to create NFTs",
    //   videoUrl: "/video/nft-creation",
    //   backgroundImage: "https://images.unsplash.com/photo-1639322537194-7bb58778b61b"
    // }
  ];

  const handlePlayClick = (videoUrl) => {
    navigate(videoUrl);
  };

  return (
    <div style={styles.newsletterContainer}>
      <h2 style={styles.title}>Latest Web3 Learning Resources</h2>
      <div style={styles.flashcardsGrid}>
        {flashcards.map((card) => (
          <div 
            key={card.id} 
            style={{
              ...styles.flashcard,
              backgroundImage: `url(${card.backgroundImage})`
            }}
          >
            <div style={styles.cardOverlay}></div>
            <div style={styles.cardContent}>
              <div>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDescription}>{card.description}</p>
              </div>
              <button 
                style={styles.playButton}
                onClick={() => handlePlayClick(card.videoUrl)}
              >
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLetter;
import React from 'react';
import '../styles/shimmer.css';

const Shimmer = () => {
    const shimmerCards = Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text shimmer-text-title"></div>
            <div className="shimmer-text shimmer-text-subtitle"></div>
            <div className="shimmer-text shimmer-text-subtitle"></div>
            <div className="shimmer-text shimmer-text-small"></div>
        </div>
    ));

    return (
        <div className="shimmer-container">
            {shimmerCards}
        </div>
    );
};

export default Shimmer;
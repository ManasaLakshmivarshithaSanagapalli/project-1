import React, { useState } from 'react';
import axios from 'axios';
import './apii.css';

const AzureSentimentAnalysis = () => {
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null);
    const [error, setError] = useState('');

    const analyzeSentiment = async () => {
        try {
            const response = await axios.post(
                'http://localhost:4000/analyze-sentiment', // Use your server endpoint here
                { text }
            );
            console.log('Sentiment:', response.data);
            setSentiment(response.data.sentiment);
            setError('');
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
            setError('Failed to analyze sentiment. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Sentiment Analysis</h2>
            <textarea
                className="textarea"
                rows="4"
                cols="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text for sentiment analysis..."
            ></textarea>
            <br />
            <button className="button" onClick={analyzeSentiment}>
                Analyze Sentiment
            </button>
            {sentiment && (
                <div className="sentiment">
                    <h3>Sentiment: {sentiment}</h3>
                </div>
            )}
            {error && (
                <div className="error">
                    <h3>{error}</h3>
                </div>
            )}
        </div>
    );
};

export default AzureSentimentAnalysis;

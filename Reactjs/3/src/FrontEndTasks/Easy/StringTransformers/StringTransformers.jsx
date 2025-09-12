import React, { useState } from 'react';
import './StringTransformers.css';

const StringTransformers = () => {
    const [inputText, setInputText] = useState('hello world');
    const [transformedText, setTransformedText] = useState('hello world');
    const findWords = (text) => text.split(' ').filter(character => character !== '');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        setTransformedText(e.target.value); // Show original text by default
    };

    const toLowerCase = () => {
        setTransformedText(inputText.toLowerCase());
    };


    const toUpperCase = () => {
        setTransformedText(inputText.toUpperCase());
    };

    const operationOnArray = (words, type) => {
        let ans = '';
        words.map((word, index) => {
            switch (type) {
                case 'CAMEL':
                    if (index == 0) ans += word;
                    else ans += word.charAt(0).toUpperCase() + word.slice(1);
                    break;
                case 'PASCAL':
                    ans += word.charAt(0).toUpperCase() + word.slice(1);
                    break;
                case 'SNAKE':
                    if (index === words.length - 1) ans += word;
                    else ans += word + '_';
                    break;
                case 'KEBAB':
                    if (index === words.length - 1) ans += word;
                    else ans += word + '-';
                    break;
            }
        })
        return ans;
    }
    const toCamelCase = () => {
        const words = findWords(inputText);
        let ans = operationOnArray(words, 'CAMEL')
        setTransformedText(ans);
    };

    const toPascalCase = () => {
        const words = findWords(inputText);
        let ans = operationOnArray(words, 'PASCAL')
        setTransformedText(ans);
    };


    const toSnakeCase = () => {
        const words = findWords(inputText);
        let ans = operationOnArray(words, 'SNAKE')
        setTransformedText(ans);
    };

    const toKebabCase = () => {
        const words = findWords(inputText);
        let ans = operationOnArray(words, 'KEBAB')
        setTransformedText(ans);
    };

    const trimText = () => {
        setTransformedText(inputText.trim());
    };

    return (
        <div className="string-transformers">
            <h1>String transformers</h1>

            <textarea
                value={inputText}
                onChange={handleInputChange}
                rows="4"
                cols="50"
                className="input-textarea"
                placeholder="Enter text to transform..."
            />

            <div className="button-grid">
                <button onClick={toLowerCase}>Lower Case</button>
                <button onClick={toUpperCase}>Upper Case</button>
                <button onClick={toCamelCase}>Camel Case</button>
                <button onClick={toPascalCase}>Pascal Case</button>
                <button onClick={toSnakeCase}>Snake Case</button>
                <button onClick={toKebabCase}>Kebab Case</button>
                <button onClick={trimText} className="trim-btn">Trim</button>
            </div>

            <div className="result-section">
                <h2>Transformed String:</h2>
                <div className="result-text">{transformedText}</div>
            </div>
        </div>
    );
};

export default StringTransformers;

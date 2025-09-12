import React, { useState } from 'react';
import './PasswordStrength.css';

const PasswordStrength = () => {
    const [password, setPassword] = useState('');

    const checkCriteria = (password) => {
        return {
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
            length: password.length >= 8
        };
    };

    const calculateStrength = (password) => {
        if (password.length === 0) return { level: '', score: 0 };

        const criteria = checkCriteria(password);

        if (!criteria.length) return { level: 'Weak', score: 0 };

        const characterScore = [criteria.lowercase, criteria.uppercase, criteria.number, criteria.symbols]
            .filter(Boolean).length;

        // Clean mapping
        const strengthMap = {
            0: 'Weak', 1: 'Weak', 2: 'Weak',
            3: 'Medium',
            4: 'Strong'
        };

        return {
            level: strengthMap[characterScore],
            score: characterScore
        };
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const criteria = checkCriteria(password);
    const strength = calculateStrength(password);

    // Progress bar calculation
    const getProgressWidth = () => {
        if (password.length === 0) return 0;
        if (!criteria.length) return 20; // Show minimal progress for short passwords
        return (strength.score / 4) * 100;
    };

    return (
        <div className="password-strength">
            <h1>Password Strength</h1>

            <div className="input-container">
                <input
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}
                    className="password-input"
                    placeholder="Enter your password..."
                />
            </div>

            <div className="criteria-container">
                <div className={`criteria ${criteria.lowercase ? 'met' : ''}`}>
                    Lowercase
                </div>
                <div className={`criteria ${criteria.uppercase ? 'met' : ''}`}>
                    Uppercase
                </div>
                <div className={`criteria ${criteria.number ? 'met' : ''}`}>
                    Number
                </div>
                <div className={`criteria ${criteria.symbols ? 'met' : ''}`}>
                    Symbols
                </div>
            </div>

            <div className="progress-container">
                <div className="progress-bar">
                    <div
                        className={`progress-fill ${strength.level.toLowerCase()}`}
                        style={{ width: `${getProgressWidth()}%` }}
                    ></div>
                </div>
            </div>

            <div className="info-container">
                <p className="char-count">Password has {password.length} chars</p>
                {strength.level && (
                    <p className={`strength-level ${strength.level.toLowerCase()}`}>
                        Your password is {strength.level}
                    </p>
                )}
                {password.length > 0 && password.length < 8 && (
                    <p className="warning">⚠️ Password must be at least 8 characters</p>
                )}
            </div>
        </div>
    );
};

export default PasswordStrength;

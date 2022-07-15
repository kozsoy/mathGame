import React, { useContext } from 'react';
import styles from './Result.module.css';
import LineComp from '../assets/Line.js';
import EllipseComp from '../assets/Ellipse';
import { Link, useNavigate } from 'react-router-dom';
import True from '../assets/True';
import False from '../assets/False';
import { Context } from '../hooks/provider';

const Home = () => {
    // Context 
    const { resultQuestions, trueAnswerCount, questionsArr, score, setAllQuestion } = useContext(Context);

    // Oyuna başlamak için tıklandığında tüm soruları yükler
    const handleClick = () => {
        setAllQuestion();
    };

    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.header}>
                        <h1>Final</h1>
                        <LineComp
                            width='228'
                        />
                    </div>
                    <div className={styles.details}>
                        <h2>Point: {score}</h2>
                        <h2>Questions: {questionsArr.length}</h2>
                        <h2>Correct Answers: {trueAnswerCount}</h2>
                    </div>
                    <div className={styles.footer}>
                        <Link onClick={handleClick} to="/" >
                            <EllipseComp
                                x='150'
                                name="Restart"
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.header}>
                        <h1>All Question</h1>
                        <LineComp
                            width='430'
                        />
                    </div>
                    <ul className={styles.list}>
                        {resultQuestions && resultQuestions.map((question, index) => (
                            <li key={index} className={styles.listItem}>
                                <h4>{question.resultQuestionText}</h4>
                                {question.isAnswerTrue ? <True /> : <False />}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Home;
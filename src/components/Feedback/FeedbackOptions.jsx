// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
        return (
            <div className={s.container}>
                <h2 className={s.title}>Please leave feedback</h2>
                <div className={s.buttonBloc}>
                    <button type='button' name='good'>Good</button>
                    <button type='button' name='neutral'> Neutral</button>
                    <button type='button' name='bad'> Bad</button>
                </div>
          </div>  
        );
    }


// FeedbackOptions.propTypes = {
// options: PropTypes.shape({
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
// }).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions
import './SubmitButton.css'

const Button = ({ text, onClick }) => {
    return (
        <div className="form-button-container">
            <button type="button" className="form-button" onClick={onClick}>{text}</button>
        </div>
    );
};

Button.defaultProps = {
    text: 'Button Text',
    onClick: () => {}
};

export default Button;

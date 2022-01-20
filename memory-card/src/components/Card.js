import '../styles/Card.css'

export const Card = ({content, handleClick}) => {
    return (
        <div className="card" onClick={handleClick}>
            {content}
        </div>
    );
};
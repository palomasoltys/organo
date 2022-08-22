import './TextBody.css'

const TextBody = (props) => {
    return (
        <div className="text-body">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default TextBody
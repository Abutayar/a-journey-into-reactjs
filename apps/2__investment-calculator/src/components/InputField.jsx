export default function InputField({ label, ...props }) {
    return (
        <div>
            <label>{label}</label>
            <input type="number" {...props} />
        </div>
    )
}
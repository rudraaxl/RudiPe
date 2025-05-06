export function InputBox({ label, type, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col">
            <label className="text-slate-500 text-sm px-4 pt-4">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-slate-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-slate-400"
            />
        </div>
    );
}
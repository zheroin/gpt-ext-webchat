import { h } from "preact"

function Dropdown({ value, onChange, options }) {
    return (
        <select className="wcg-bg-[#343541] wcg-text-white wcg-text-sm wcg-block wcg-p-2.5 wcg-pr-2 wcg-border-0 focus:wcg-ring-0"
            value={value}
            onChange={onChange}
        >
            {options.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </select>
    )
}

export default Dropdown

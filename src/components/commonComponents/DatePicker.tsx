import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { MdDateRange } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

export default function DatePicker() {
    const [date, setDate] = useState<Date | undefined>();
    return (
        <>
            {/* <button popoverTarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" } as React.CSSProperties}>
                {date ? date.toLocaleDateString() : "--/--/----"};
            </button>
            <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
                <DayPicker
                    captionLayout="dropdown"
                    className="react-day-picker"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div> */}

            <fieldset className="fieldset">
                <legend className="fieldset-legend flex items-center p-2 text-black">
                    <span><CiCalendarDate /></span>Flight Date
                    <span className="text-red-500">*</span>
                </legend>
                <button popoverTarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" } as React.CSSProperties}>
                <MdDateRange />
                {date ? date.toLocaleDateString() : "--/--/----"}
            </button>
            <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
                <DayPicker
                    captionLayout="dropdown"
                    className="react-day-picker"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
                {/* <span className="label">Optional</span> */}
            </fieldset>
        </>
    );
}
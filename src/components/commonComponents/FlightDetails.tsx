import DatePicker from "./DatePicker"

const FlightDetails = () => {
    
  return (
    <>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <DatePicker />
            
            <fieldset className="fieldset w-full sm:w-auto">
                <legend className="fieldset-legend text-black">Name of Airline
                <span className="text-red-500">*</span></legend>
                <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Pick a browser</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                </select>
                {/* <span className="label">Optional</span> */}
            </fieldset>

            <fieldset className="fieldset w-full sm:w-auto">
                <legend className="fieldset-legend p-2 text-black">Airline ID</legend>
                <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Pick a browser</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                </select>
                {/* <span className="label">Optional</span> */}
            </fieldset>

            <fieldset className="fieldset w-full sm:w-auto">
                <legend className="fieldset-legend text-black">Flight Number
                <span className="text-red-500">*</span></legend>
                <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Pick a browser</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                </select>
                {/* <span className="label">Optional</span> */}
            </fieldset>

            <fieldset className="fieldset w-full sm:w-auto">
                <legend className="fieldset-legend text-black">Flight Time</legend>
                <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Pick a browser</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                </select>
                {/* <span className="label">Optional</span> */}
            </fieldset>
        </div>
        
    </>
  )
}

export default FlightDetails
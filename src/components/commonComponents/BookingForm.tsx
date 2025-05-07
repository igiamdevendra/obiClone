const BookingForm = () => {

  const maxAdult = 5; // You can set this dynamically
  const options = [];

  for (let i = 0; i <= maxAdult; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  
  return (
    <>
      <div className="flex gap-2">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Adult (13+)</legend>
          <select defaultValue="1" className="select select-sm">
            {options}
          </select>
          <span className="label">Optional</span>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Child (2-12) Years</legend>
          <select defaultValue="Pick a browser" className="select select-sm">
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
          <span className="label">Optional</span>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Infant (under 2)</legend>
          <select defaultValue="Pick a browser" className="select select-sm">
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
          <span className="label">Optional</span>
        </fieldset>

      </div>

      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Select Your Lounge*</legend>
          <select defaultValue="select" className="select">
            <option value="select" disabled={true}>Select</option>
            <option>Club Mobay</option>
            <option>Club Kingtson</option>
          </select>
          <span className="label">Optional</span>
        </fieldset>
      </div>
    </>
  )
}

export default BookingForm
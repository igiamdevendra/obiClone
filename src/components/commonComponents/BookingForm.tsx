import { MdFamilyRestroom } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { MdOutlineChildCare } from "react-icons/md";
import { GrLounge } from "react-icons/gr";
import FlightDetails from "./FlightDetails";
import Button from "./Button";
import { useForm } from "react-hook-form"

const BookingForm = () => {
  const fieldData = [
    {
      label: 'Adult (13+)',
      key: 'adult',
      max: 6,
      default: 1,
      icon: <FaPerson />
    },
    {
      label: 'Child (2-12) Years',
      key: 'child',
      max: 6,
      default: 0,
      icon: <FaChild />
    },
    {
      label: 'Infant (under 2)',
      key: 'infant',
      max: 6,
      default: 0,
      icon: <MdOutlineChildCare />
    },
  ];

  type FormValues = {
    lounge: string;
    adults: number;
    child: number;
    infants: number;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const renderOptions = (count: number) => {
    const options = [];
    for (let i = 0; i <= count; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      <h1 className="text-2xl text-center my-8 underline">MAKE AN ARRIVAL BOOKING</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-20">
          <div className="w-full border rounded shadow-xl space-y-6 p-6 bg-white">
            <div>
              <h3 className="text-lg flex items-center gap-2 text-black"><span><MdFamilyRestroom />
              </span>Number of Guests<span className="text-red-500">*</span></h3>

              <div className="flex flex-col sm:flex-row gap-4">
                {fieldData.map((field) => (
                  <fieldset key={field.key} className="fieldset w-full sm:w-auto">
                    <legend className="fieldset-legend text-md p-2 text-black"><span className="flex items-center">{field.icon}</span>{field.label}</legend>
                    <select {...register(field.key as keyof FormValues)} defaultValue={field.default} className="select select-md">
                      {renderOptions(field.max)}
                    </select>
                    {/* <span className="label">Optional</span> */}
                  </fieldset>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl text-black">ENTER ARRIVAL BOOKING INFORMATION</h3>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend p-2 text-black"><span><GrLounge /></span>Select Your Lounge<span className="text-red-500">*</span></legend>
                  <select {...register("lounge")} defaultValue="select" className="select">
                    <option value="select" disabled>
                      Select
                    </option>
                    <option>Club Mobay</option>
                    <option>Club Kingston</option>
                  </select>
                  {/* <span className="label">Optional</span> */}
                </fieldset>
              </div>
              <p className="bg-amber-100 text-black my-2 p-3 rounded">Please enter flight details based on your confirmed Airline Itinerary or Ticket.</p>
            </div>

            <div>
              <h3 className="text-xl text-black">Arrival Details</h3>
              <p className="bg-amber-100 text-black my-2 p-3 rounded">IMPORTANT NOTICE: To ensure your service is not compromised, FLIGHT CHANGES MUST be submitted 24 hours in advance to our Reservations Department. Same-Day Flight Changes may lead to a disruption in service provided.</p>
              <FlightDetails />
            </div>

            <div className="flex justify-end">
              <Button type="submit" title="Check Availability" />
            </div>

          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;

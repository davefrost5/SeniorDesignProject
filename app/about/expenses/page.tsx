import React from 'react';

// Define the type for table data
interface ExpenseItem {
  stuff: string;
  price: string;
  description: string;
  //link?: string;
  date?: string;
}

export default function ExpensesTable() {
  // Table data
  const expenses: ExpenseItem[] = [
    {
      stuff: "Finger Caps",
      price: "$8.00",
      description: "Used to attach fishing line to the tip of the finger to test pulling the fingers down and back using the motors",
      date: "12/08/2024"
    },
    {
      stuff: "Fishing Line",
      price: "$10.00",
      description: "String attached to the finger caps and the motor doing the pulling",
      date: "12/11/2024"
    },
    {
      stuff: "Micro HDMI to HDMI Adaptor",
      price: "$8.00",
      description: "Display of the Raspberry Pi",
      //link: "Link",
      date: "02/03/2025"
    },
    {
      stuff: "2 Servo Motors",
      price: "$15.00",
      description: "Used to pull the fishing line tight to pull the fingers in",
      date: "02/04/2025"
    },
    {
      stuff: "1/8-Inch Black Heavy Stretch",
      price: "$5.00",
      description: "Used to pull the fingers back into a stretched position",
      //link: "Link",
      date: "02/05/2025"
    },
    {
      stuff: "6 Pack Knit Gloves",
      price: "$15.00",
      description: "Encasement for the whole system of fishing line and Stretch",
      date: "02/14/2025"
    },
    {
      stuff: "Simple USBC Socket Breakout",
      price: "$8.00",
      description: "Components to plug into the raspberry pi to power it.",
      //link: "Link",
      date: "02/15/2025"
    },
    {
      stuff: "Silicone Rings",
      price: "$7.00",
      description: "Rings used to keep line along the fingers and in place",
      date: "12/11/2024"
    },
    {
      stuff: "Buck Boost Converter",
      price: "$30.00",
      description: "Used to boost the current up from power supply to power the raspberry pi.",
      //link: "Link"
    }
  ];

  // Calculate total
  const total = "$106.00";

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Expenses</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Item</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b">{item.stuff}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">{item.description}</td>
                <td className="py-2 px-4 border-b">{item.date || ""}</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="py-2 px-4 border-b">Total</td>
              <td className="py-2 px-4 border-b">{total}</td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
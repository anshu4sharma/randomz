const TransactionTable = () => {
  return (
    <div className="z-10 relative overflow-x-auto w-full max-w-3xl  p-4 transactiontable my-10 shadow-sm shadow-[#172147]">
      <table className="w-full text-sm text-left text-white ">
        <thead className="text-xs">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.no
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i, arr) => {
            return (
              <tr
                className={` ${
                  i !== arr.length -1 ? "border-b border-[#3D3C3C]" : " "
                }`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4 ">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

const TransactionTable = () => {
  return (
    <div className="z-10 relative overflow-x-auto w-full max-w-3xl  p-4 transactiontable my-10 shadow-sm shadow-[#172147]">
      <table className="w-full text-sm text-left text-white ">
        <thead className="text-base">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.no
            </th>
            <th scope="col" className="px-6 py-3">
            Purchase date
            </th>
            <th scope="col" className="px-6 py-3">
            Amount
            </th>
            <th scope="col" className="px-6 py-3">
            Referral
            </th>
            <th scope="col" className="px-6 py-3">
            Transaction hash
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => {
            return (
              <tr
                key={i}
                className={`border-t border-[#3D3C3C]`}
              >
                <td className="px-6 py-4 ">{i+1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                 20/02/2023
                </th>
                <td className="px-6 py-4 ">10000.00</td>
                <td className="px-6 py-4">E6211058</td>
                <td className="px-6 py-4">0x11jusdg654nf..</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

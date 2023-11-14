import React, { useEffect } from "react";


function App() {



  useEffect(() => {
   
        const props = {
          clientId: 'AV9AvQMihAye_0qZUtHa_rH_H4fzj45DS7tFxErjkiTyudXBHk_yHT2EQvAjsEFu2j-Pcqu0oMSjRJLY',
          clientSecret: 'EN6mkPsK3OAGxozeNiL3qpaffFMH4KHdJHpFrNXmMB0P8ktUqxZaTbeNT9lpqDaoV_TvXyJoLUAzMNDQ',
          environment: 'sandbox',
          amount: '1000',
        };
       window.PayLater.PayPal(props);
     
   
  }, []);

 



  return (
    <div className=" flex  h-[100vh] justify-center items-center  w-full ">
      <div className="flex flex-col  w-[450px]  bg-white p-4 border rounded shadow-sm  ">
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1689721106020-31688b258080?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[350px] object-cover gap-0 text-center font-medium rounded-lg border "></img>
          <p className="text-xl text-left font-thin underline-offset-8 underline text-black">
            NFT-01,Maradona:2345
          </p>
          <p className="text-xl font-semibold text-left text-black my-1">
            $ 1000.00
          </p>
        </div>

        <div className="flex flex-col">
        <div id="paypal-button-container"></div>
        {/* <Stripe 
         apiKey ='pk_test_51O9RDOSFv9oH1mq7y8thbvlObghnIbS0jFlnf5xHSE5WEmv0TQpUu8Ssl7eb9AH5NkYFgETmH6RgFveXeimqOLLd00BNVE0vfw'
         clientSecret='sk_test_51O9RDOSFv9oH1mq7jrQQqXdcMixfeRgxypMtwEj8Hxz95VIMKiyhHPVYEq5EHeGEmOYmJzFmcbtX2CEkJls98pWt003X8KUFAc'
         amount='1000'
         /> */}
         </div>
      </div>
    </div>
  );
}

export default App;

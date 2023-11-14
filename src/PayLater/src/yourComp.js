import { apiPOST } from "./apiHelper";

// Create a function that accepts options and props
export function PayPal(props) {
  window.paypal
    .Buttons({
      style: {
        shape: "rect",
        layout: "vertical",
      },
      async createOrder() {
        try {
          let payload = {
           amount: props.amount,
           clientId: props.clientId,
           clientSecret: props.clientSecret,
           environment: props.environment
          }

          
          const response = await apiPOST(`v1/paypal/create_order`,payload)

          const orderData = response.data.data;

          if (orderData) {
            return orderData?.id;
          } 
        } catch (error) {
          console.error(error);
         
        }
      },
      async onApprove(data, actions) {
        try {
          let payload = {
            clientId: props.clientId,
            clientSecret: props.clientSecret,
            environment:props.environment
           }
         const response=  await apiPOST(`v1/paypal/capture_order/${data.orderID}`,payload)

          const orderData = await response.data.data;

          const errorDetail = orderData?.details?.[0];

          if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
      
            return actions.restart();
          } else if (errorDetail) {
    
            throw new Error(
              `${errorDetail.description} (${orderData.debug_id})`,
            );
          } else {
            //  Successful transaction -> Show confirmation or thank you message
            // Or go to another URL:  actions.redirect('thank_you.html');
          
            
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2),
            );
          }
        } catch (error) {
          console.error(error);
          
        }
      },
    })
    .render("#paypal-button-container");
}



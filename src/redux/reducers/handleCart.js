const cart = [];

const handleCart = (state = cart, actio) => {

    const product = action.payload;

    switch (action.type) {
        case ADDITEM:
        const axist = state.find((x) => x.id === product.id);
         if(axist){
             return state.map((x) => x.id === product.id ?  {...x, qty: x.qty + 1 } : x );
         } else {
            const product = action.payload;
            return[
                ...state,
                {
                    ...product,
                    qty:1,

                }
            ]
         }
         break;

         case DELITEM:

            const axist1 = state.find((x) => x.id === product.id);
            if(axist1.qty === 1){
                return state.filter((x) => x.id !== axist1.id  );
            } else {
              

                return state.map((x) => x.id === product.id ?  {...x, qty: x.qty - 1 } : x );
            }

            break;


         default:
            break;

    }

}

export default handleCart;
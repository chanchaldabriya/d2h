import React from 'react';


const NumberInput = () => {
    const [subscriptionMonth, setSubscriptionMonth] = useState(0);

};
<input
            type="number"
            className="BasePack-Months subscribe-input"
            value={subscriptionMonth}
            onChange={(event) => {
              let newMonths = parseInt(event.target.value);
              newMonths >= 0 && setSubscriptionMonth(newMonths);
            }}
          />
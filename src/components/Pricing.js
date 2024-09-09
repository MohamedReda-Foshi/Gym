import Button from "./Button";

function Pricing(props) {
  return (
    <div className="border-solid border-white rounded  my-11 mx-11 max-w-96" >
      <div>
        <p className="text-3xl">{props.Tilprice}</p>
      </div>

      <div>
        <div>
            <h5>{props.level}</h5>
        </div>
        <div className="py-5">
          <h5 className="text-3xl">{props.price}$ per month</h5>
        </div>

        <div>
          <ul>
            <li>Personal trainer</li>
            <li>Personal trainer</li>
            <li>Personal trainer</li>
            <li>Personal trainer</li>
          </ul>
        </div>
      </div>

      <div>
        <Button button="join now" />
      </div>
    </div>
  );
}

export default Pricing;

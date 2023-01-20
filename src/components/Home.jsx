import bags from "../assets/bags.jpg";
import shop from "../assets/shop.jpg";
export const Home = () => {
  return (
    <div className="home">
      <div>
        <img src={bags} alt="" />
        <div>
          <h2>SHOP FROM US</h2>
          <p>
            Define your brand’s mobile future by innovating the shopping
            experience with text message. Novelty is sought by your Customers.
            Give them a text based engagement channel that creates high
            conversions, instant purchasing, and a streamlined path to your
            great products and brands.
          </p>
        </div>
      </div>

      <div>
        <div>
          <h2>OUR STORES</h2>
          <p>
            Let us help you bridge the gap between mobile usage and mobile
            conversions with an innovative and intuitive platform that removes
            all friction from the conversion path, delighting Customers and
            Merchants. The future is here. No need to drive expensive traffic to
            your product pages. Engage your Customers in conversational commerce
            with an easy on ramp. No tech team required.
          </p>
        </div>
        <img src={shop} alt="" />
      </div>
    </div>
  );
};

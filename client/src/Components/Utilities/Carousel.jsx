import Marquee from "react-fast-marquee";
import one from "../../img/tnpsite-logo/new/thermax.png";
import two from "../../img/tnpsite-logo/new/tiaa.png";
import three from "../../img/tnpsite-logo/new/tieto-evry.png";
import four from "../../img/tnpsite-logo/new/welspun.png";
import five from "../../img/tnpsite-logo/new/wipro.jpg";
import six from "../../img/tnpsite-logo/new/zensar.png";


export const Carousel = () => {
  return (
    // wrap it to controll css better

    <Marquee className="marquee" play={true} loop={0} pauseOnHover={false} speed={500}>
      <img src={one} alt="" />
      <img src={two} alt="" />
      <img src={three} alt="" />
      <img src={four} alt="" />
      <img src={five} alt="" />
      <img src={six} alt="" />
    </Marquee>
  );
}

/*
use it anywhere you need like this:

<Marquee>
  {this.state.items.map(function (item, key) {
    return (
      <div className={styles.rowStyle} key={key}>
        <div className={styles.CellStyle}>{item.Title}</div>
      </div>
    );
  })}
</Marquee>;
*/
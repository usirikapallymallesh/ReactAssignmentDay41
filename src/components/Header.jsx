import "./Header.css";
import Women from "../assets/Women.webp";
const Header = () => {
  return (
    <>
      <div className="logo">
        <h1>Family Wellness</h1>
        <p>MASSAGE THERAPHY</p>
      </div>

      <nav className="header">
        <ul className="headere_list ">
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div>
        <img src={Women} alt="" className="Image_background" />
      </div>

      <div className="text">
        <h1>Think Health.Think Massage</h1>
        <p>
          We are open 9am to 6pm. Monday throug Sunday. If you like to schedule
          an appointment with us contact
        </p>
        <button>Learn More About Us</button>
        <button>Contact Us</button>
      </div>

      <div>
        <p className="first_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias
          consectetur aut molestias necessitatibus, a, illum ducimus soluta
          blanditiis vero voluptate suscipit maxime maiores! Libero hic dolor
          repudiandae velit ducimus. Sit atque ad autem laborum porro earum,
          quod illum ducimus. Cupiditate soluta maiores numquam, dignissimos
          vero alias a delectus sed.
        </p>
        <p className="second_para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          ad amet repellendus sequi voluptatem exercitationem dignissimos alias
          quos fugiat cumque veniam fugit quibusdam voluptatibus dolores autem,
          eaque consequuntur minus. Nam.
        </p>
        <p className="third_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
          aliquam dolorum eveniet temporibus? Cupiditate voluptatem laborum a
          non perferendis accusantium, ducimus amet quibusdam omnis ut ex
          aliquid in obcaecati.
        </p>
      </div>

      <div className="footer_text">
        <h1>Family Wellness Massage Theraphy</h1>
        <p>9876 Main street,Swwet123,Hyderabad</p>
        <p>Phone No:9182161477</p>
      </div>

      <div className="copyright">
        <p>copyrightID. All Rights are reserved </p>
      </div>
    </>
  );
};
export default Header;

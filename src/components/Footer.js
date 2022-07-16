import React from "react";

export default function Footer(props) {
  return (
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="https://vrajpatel.w3spaces.com/"> Vraj Patel</a>
        </div>
      </footer>
    </div>
    /* <footer classNameName="page-footer font-small mdb-color pt-4">
        <div classNameName="container text-center text-md-left">
          <div classNameName="row text-center text-md-left mt-3 pb-3">
            <div classNameName="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 classNameName="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr classNameName="w-100 clearfix d-md-none" />

            <div classNameName="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 classNameName="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </div>

            <hr classNameName="w-100 clearfix d-md-none" />

            <div classNameName="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 classNameName="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <hr classNameName="w-100 clearfix d-md-none" />

            <div classNameName="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 classNameName="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i classNameName="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i classNameName="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i classNameName="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i classNameName="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>

          <hr />

          <div classNameName="row d-flex align-items-center">
            <div classNameName="col-md-7 col-lg-8">
              <p classNameName="text-center text-md-left">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/">
                  <strong> MDBootstrap.com</strong>
                </a>
              </p>
            </div>

            <div classNameName="col-md-5 col-lg-4 ml-lg-0">
              <div classNameName="text-center text-md-right">
                <ul classNameName="list-unstyled list-inline">
                  <li classNameName="list-inline-item">
                    <a classNameName="btn-floating btn-sm rgba-white-slight mx-1">
                      <i classNameName="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li classNameName="list-inline-item">
                    <a classNameName="btn-floating btn-sm rgba-white-slight mx-1">
                      <i classNameName="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li classNameName="list-inline-item">
                    <a classNameName="btn-floating btn-sm rgba-white-slight mx-1">
                      <i classNameName="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li classNameName="list-inline-item">
                    <a classNameName="btn-floating btn-sm rgba-white-slight mx-1">
                      <i classNameName="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> */
  );
}

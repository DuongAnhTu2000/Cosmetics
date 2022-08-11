import "./Categories.scss";

function Categories() {
  return (
    <div className="product--categories">
        <div className="product--categories__row">
          <div className="product--container__row__col">
            <a
              itemProp="url"
              href="https://sante.qodeinteractive.com/product-category/natural/"
              target="_self"
            >
              <div className="product--image">
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-banner-img-1.jpg" alt="" />
              </div>
              <div className="product--image__content">
                <h3>Organic</h3>
                <h4>Natural</h4>
              </div>
            </a>
          </div>
          <div className="product--container__col">
            <a
              itemProp="url"
              href="https://sante.qodeinteractive.com/product-category/body-care/"
              target="_self"
            >
              <div className="product--image">
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-banner-img-2.jpg" alt="" />
              </div>
              <div className="product--image__content">
                <h3>Scrub</h3>
                <h4>Body Care</h4>
              </div>
            </a>
          </div>
          <div className="product--container__col">
            <a
              itemProp="url"
              href="https://sante.qodeinteractive.com/product-category/selfcare/"
              target="_self"
            >
              <div className="product--image">
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-banner-img-3.jpg" alt="" />
              </div>
              <div className="product--image__content">
                <h3>Creamy</h3>
                <h4>Selfcare</h4>
              </div>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Categories;

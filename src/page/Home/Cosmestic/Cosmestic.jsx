import "./Cosmestic.scss";

function Cosmetic() {
  return (
    <div className="Cosmetic--article">
      <div className="Cosmetic--container">
        <div className="Cosmetic--container__row">
          <div className="Cosmetic--container__row--col">
            <img
              src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-1.jpg"
              alt=""
            />
            <div itemProp="dateCreated" className="tag--date">
              <a
                itemProp="url"
                href="https://sante.qodeinteractive.com/2020/10/"
              >
                <span className="tag--date__month">Oct</span>
                <span className="tag--date__date">9</span>
                <span className="tag--date__year">2020</span>
              </a>
            </div>
            <div className="Cosmetics--content">
              <div className="Cosmetics--content__categories">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://sante.qodeinteractive.com/category/cosmetics/"
                  rel="category tag"
                >
                  Cosmetics -
                </a>
              </div>
              <div className="Cosmetics--content__tags">
                <a
                  href="https://sante.qodeinteractive.com/tag/beauty/"
                  rel="tag"
                >
                  Beauty
                </a>
                <a
                  href="https://sante.qodeinteractive.com/tag/handmade/"
                  rel="tag"
                >
                  Handmade
                </a>
              </div>
            </div>
            <div className="Cosmetics--text">
              <h4>
                <a
                  style={{ textDecoration: "none" }}
                  itemProp="url"
                  href="https://sante.qodeinteractive.com/cleansing-scrub/"
                >
                  Cleansing scrub
                </a>
                <p>
                  Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                  expetendis in mei. Mei an pericula euripidis. hinc partem ei
                  estos ei
                </p>
              </h4>
            </div>
            <div className="Cosmetic--button">
              <div className="Cosmetic--button__readmore">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="Cosmetic--container__row--col">
            <img
              src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-2.jpg"
              alt=""
            />
            <div itemProp="dateCreated" className="tag--date">
              <a
                itemProp="url"
                href="https://sante.qodeinteractive.com/2020/10/"
              >
                <span className="tag--date__month">Oct</span>
                <span className="tag--date__date">9</span>
                <span className="tag--date__year">2020</span>
              </a>
            </div>
            <div className="Cosmetics--content">
              <div className="Cosmetics--content__categories">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://sante.qodeinteractive.com/category/cosmetics/"
                  rel="category tag"
                >
                  Cosmetics -
                </a>
              </div>
              <div className="Cosmetics--content__tags">
                <a
                  href="https://sante.qodeinteractive.com/tag/beauty/"
                  rel="tag"
                >
                  
                  Beauty
                </a>
                <a
                  href="https://sante.qodeinteractive.com/tag/handmade/"
                  rel="tag"
                >
                  Handmade
                </a>
              </div>
            </div>
            <div className="Cosmetics--text">
              <h4>
                <a
                  itemProp="url"
                  style={{ textDecoration: "none" }}
                  href="https://sante.qodeinteractive.com/nourish-organic/"
                >
                  Nourish organic
                </a>
                <p itemProp="description">
                  Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                  expetendis in mei. Mei an pericula euripidis. hinc partem ei
                  estos ei
                </p>
              </h4>
            </div>
            <div className="Cosmetic--button">
              <div className="Cosmetic--button__readmore">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="Cosmetic--container__row--col">
            <img
              src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-3.jpg"
              alt=""
            />
            <div itemProp="dateCreated" className="tag--date">
              <a
                itemProp="url"
                href="https://sante.qodeinteractive.com/2020/10/"
              >
                <span className="tag--date__month">Oct</span>
                <span className="tag--date__date">9</span>
                <span className="tag--date__year">2020</span>
              </a>
            </div>
            <div className="Cosmetics--content">
              <div className="Cosmetics--content__categories">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://sante.qodeinteractive.com/category/cosmetics/"
                  rel="category tag"
                >
                  Cosmetics -
                </a>
              </div>
              <div className="Cosmetics--content__tags">
                <a
                  href="https://sante.qodeinteractive.com/tag/beauty/"
                  rel="tag"
                >
                  Beauty
                </a>
                <a
                  href="https://sante.qodeinteractive.com/tag/handmade/"
                  rel="tag"
                >
                  Handmade
                </a>
              </div>
            </div>
            <div className="Cosmetics--text">
              <h4>
                <a
                  itemProp="url"
                  style={{ textDecoration: "none" }}
                  href="https://sante.qodeinteractive.com/true-botanicals/"
                >
                  True botanicals
                </a>
                <p itemProp="description">
                  Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                  expetendis in mei. Mei an pericula euripidis. hinc partem ei
                  estos ei
                </p>
              </h4>
            </div>
            <div className="Cosmetic--button ">
              <div className="Cosmetic--button__readmore ">
                <span>Read More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cosmetic;

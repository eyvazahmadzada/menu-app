import React from "react";

const MenuItem = (props) => {
  return (
    <div className="item-card">
      <div className="info">
        <img src="/meal.jpg" alt="meal" className="meal-img" />
        <div>
          <h5 className="title">{props.title}</h5>
          <span className="ingredients">{props.ingredients}</span>
        </div>
      </div>
      <h5 className="price">{props.price}m</h5>

      <style jsx>{`
        .item-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          background-color: #f5f5f5;
          height: 100px;
          padding: 0 0.7rem;
          margin: 0.5rem 0;
          box-shadow: 1px 1px 2px #ccc;
        }

        .info {
          display: flex;
          align-items: center;
        }

        .meal-img {
          width: 80px;
          height: 80px;
          border-radius: 5px;
          margin-right: 0.6rem;
        }

        .title,
        .price {
          font-weight: bold;
        }

        @media only screen and (max-width: 992px) {
          .meal-img {
            width: 70px;
            height: 70px;
          }
        }

        @media only screen and (max-width: 576px) {
          .meal-img {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuItem;

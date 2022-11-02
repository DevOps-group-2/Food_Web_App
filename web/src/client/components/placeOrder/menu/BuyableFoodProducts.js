import React, { useState, useEffect } from 'react';
import css from './Style.module.css';
import Layout from '../layout/Layout';
import FoodProduct from './FoodProduct';
import Food from './Food.json';

const BuyableFoodProducts = () => {
  const [Foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const loadFoodProducts = async() => {
      const response = await Food;
      console.log(Food);
      const foodProducts = await response;
      const fetchedFoodProducts = [];

        for (const key in foodProducts) {
          fetchedFoodProducts.push({
            id: key,
            menu: foodProducts[key].menu,
            info: foodProducts[key].info,
            time: foodProducts[key].time,
            price: foodProducts[key].price,
          });
        }
        setFoods(fetchedFoodProducts);
        setIsLoading(false);
      }
      loadFoodProducts();
    }, []);

    const listOfFood = Foods.map((val) => {
        return (
            <FoodProduct
                id={val.id}
                key={val.id}
                menu={val.menu}
                info={val.info}
                time={val.time}
                price={val.price}
            />
        );
    });

    return (
        <>
          <section className={css.foodproducts}>
            <Layout>
              {isLoading ? <div className={css.loading}><p>Loading...</p></div> : <ul>{listOfFood}</ul>}
            </Layout>
          </section>
        </>
    )
  }

export default BuyableFoodProducts;
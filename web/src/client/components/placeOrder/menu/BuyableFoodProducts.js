import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import FoodProduct from './FoodProduct';
import Food from './Food.json';

/*Foodlist fetched from JSON file*/
const BuyableFoodProducts = () => {
  const [Foods, setFoods] = useState([]);

  useEffect(() => {
      const loadFoodProducts = async() => {
          const response = await Food;
          console.log(Food);

          const foodProducts = await response;
          const fetchedFoodProducts = [];

          /*Following details about a menu (foodtype).*/
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
      }
      loadFoodProducts();
    }, []);

    const listOfFood = Foods.map((val) => {
        return (
            <>{"\u00a0"}
            <FoodProduct
                id={val.id}
                key={val.id}
                menu={val.menu}
                info={val.info}
                time={val.time}
                price={val.price}
            /></>
        );
    });

    return (
        <>
          <section>
            <Layout>
              <ul>{listOfFood}</ul>}
            </Layout>
          </section>
        </>
    )
  }

export default BuyableFoodProducts;
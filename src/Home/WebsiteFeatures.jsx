import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBowlFood } from 'react-icons/fa6';
import { GiFoodTruck, GiFruitBowl } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineEmojiFoodBeverage, MdOutlineFastfood,  } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';


const WebsiteFeatures = () => {
    const [t,i18n] = useTranslation("global")
    return (
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-thin mb-6">{t("home.community")}</h2>
            <p className="dark:text-gray-600 font-mono text-lg mt-6">{t("home.com-motto")}</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
                <GiFruitBowl  className='text-5xl text-lime-500' ></GiFruitBowl  >
                <h3 className="my-3 text-3xl font-semibold">{t("home.com-food1")}</h3>
                <div className="space-y-1 leading-tight">
                    <p>Apples, oranges, bananas</p>
                    <p>Tomatoes, cucumbers, lettuce</p>
                    <p>Herbs: basil, parsley, mint</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <GiFoodTruck  className='text-5xl text-lime-500' ></GiFoodTruck>
           
                <h3 className="my-3 text-3xl font-semibold">{t("home.com-food2")}</h3>
                <div className="space-y-1 leading-tight">
                    <p>Spaghetti with marinara sauce</p>
                    <p>Chicken curry with rice</p>
                    <p>Vegetable stir-fry with tofu</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <IoFastFoodOutline  className='text-5xl text-lime-500' > </IoFastFoodOutline >
                <h3 className="my-3 text-3xl font-semibold">{t("home.com-food3")}</h3>
                <div className="space-y-1 leading-tight">
                    <p>Parcel Fast Foods</p>
                    <p>Pasta and pasta sauce</p>
                    <p>Rice, quinoa, and couscous</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <PiBowlFoodLight  className='text-5xl text-lime-500' ></PiBowlFoodLight >
                <h3 className="my-3 text-3xl font-semibold">{t("home.com-food4")}</h3>
                <div className="space-y-1 leading-tight">
                    <p>Ramen noodles with vegetables</p>
                    <p>Roasted veggies, and avocado</p>
                    <p>Poke bowls with rice, raw fish</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <MdOutlineFastfood  className='text-5xl text-lime-500' ></MdOutlineFastfood >
                <h3 className="my-3 text-3xl font-semibold">{t("home.com-food5")}</h3>
                <div className="space-y-1 leading-tight">
                    <p>Cheeseburgers and fries</p>
                    <p>Chicken nuggets and onion rings</p>
                    <p>Veggie wraps and salads</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <MdOutlineEmojiFoodBeverage  className='text-5xl text-lime-500' ></MdOutlineEmojiFoodBeverage >
                <h3 className="my-3 text-3xl font-semibold">{t("home.com-food6")}</h3>
                <div className="space-y-1 leading-tight">
                    <p>Green tea bags</p>
                    <p>Bottled water</p>
                    <p>Fruit juice cartons</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default WebsiteFeatures;
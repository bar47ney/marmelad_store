import React from "react";

const Feedbacks = () => {
  const feedbacks = [
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Елена",
      text: "Большой выбор, классный товар, сайт очень красивый!",
      photo:
        "https://avatars.mds.yandex.net/i?id=ab7d0343282a9aac9d14d34aeb2c83a1-5239602-images-thumbs&n=13",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Елена",
      text: "Большой выбор, классный товар, сайт очень красивый!",
      photo:
        "https://avatars.mds.yandex.net/i?id=ab7d0343282a9aac9d14d34aeb2c83a1-5239602-images-thumbs&n=13",
    },
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
    {
      name: "Василий",
      text: "Классный магазин!",
      photo:
        "https://avatars.mds.yandex.net/i?id=692eda51b823186c235f99a762e37069-5687044-images-thumbs&n=13",
    },
    {
      name: "Женя",
      text: "Отличные цены!",
      photo:
        "https://vonderhaarlaw.com/wp-content/uploads/2017/05/misclassifying-employees-as-salaried-or-exempt.jpg",
    },
    {
      name: "Сергей",
      text: "Детям очень нравится! Класс!",
      photo:
        "https://www.kabelmag.ru/upload/iblock/685/685474467abd8085c7cf156927993142.jpg",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="text-center m-5">Отзывы</h1>
        <div className="row d-flex justify-content-center">
          {feedbacks.map((feedback, index) => {
            return (
              <div class="card m-3" style={{ width: "18rem" }}>
                <img src={feedback.photo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{feedback.name}</h5>
                  <p class="card-text">{feedback.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feedbacks;

import React from "react";
import { NavLink } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 className="mt-5">Контакты</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img
              src={`https://i2.wp.com/www.kooplog.com/wp-content/uploads/2020/11/Blog-11.jpg?w=1920&ssl=1`}
              className="card-img-top border border-primary border-1 rounded-top"
              alt="..."
              style={{ width: "60%" }}
            ></img>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col"></div>
          <div class="col text-center">
            <h3>
              Наш номер:{" "}
              <a className="btn btn-info" href="tel:80447177446">
                8044-7177-446
              </a>
            </h3>
            <h3>
              Наша почта:{" "}
              <a className="btn btn-info" href="mailto:bar47ney@gmail.com">
                bar47ney@gmail.com
              </a>
            </h3>
            <h3>
              Наш адрес:{" "}
              <p className="btn btn-info">
                г.Минск, ул. Деревьев, 44
              </p>
            </h3>
          </div>
          <div class="col"></div>
        </div>

        <h3 className="mt-5">Почему стоит есть мармелад?</h3>
        <div class="row">
          <div class="col">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Факт #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Процесс приготовления мармелада очень прост – фрукты варят с
                    сахаром до достижения желаемого результата. Появился этот
                    десерт в Малой Азии, откуда во время крестовых походов попал
                    в Западную Европу и долгое время не выходил за её пределы.
                    Сейчас он популярен по всему миру. Вероятнее всего, само
                    слово “мармелад” в переводе с одного из диалектов
                    французского языка означает “хорошо приготовленное яблочное
                    блюдо”.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Факт #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Несмотря не вышеупомянутую связь с яблоками, наиболее
                    популярны мармелады из цитрусовых фруктов. В англоговорящих
                    странах до сих пор этим словом означают только продукт,
                    приготовленный именно из цитрусов. Если в качестве сырья
                    использовались другие фрукты, десерт тоже называется иначе.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Факт #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Приготовленный из натуральных продуктов мармелад не только
                    вкусен, но и весьма питателен и полезен. В 100 граммах
                    содержится около около 10 мг кальция и по 4 мг фосфора и
                    магния. Поэтому в некоторых странах он не только продаётся в
                    качестве десерта, но и входит в состав армейских сухих
                    пайков для солдат и офицеров.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center m-3">
          <div class="col">
            <NavLink to="/" className="btn btn-primary">
              На главную
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

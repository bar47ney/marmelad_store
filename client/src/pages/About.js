import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 className="mt-5">О нас</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img
              src={`https://www.telemundo.com/sites/nbcutelemundo/files/images/gallery/2016/02/10/istock_000012762654medium.jpg`}
              className="card-img-top border border-primary border-1 rounded-top"
              alt="..."
              style={{ width: "60%" }}
            ></img>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col text-start">
            <p>
              Думаете, что знаете о нас все? Вот несколько
              фактов, которые вас удивят.
            </p>
            <h2>Многовековая история</h2>
            <p>
              Впервые мармелад появился на Ближнем Востоке и Восточном
              Средиземноморье, где крестьяне варили фрукты и ягоды, пока те не
              загустевали. В Европе первый мармелад появился только в XVI веке,
              когда французские повара догадались добавлять к фруктовому пюре
              агар-агар и желатин для желирования.
            </p>
            <h3>Что значит «мармелад»?</h3>
            <p>
              Некоторые считают, что название десерта произошло из французского
              языка и означает «варенье из айвы».
            </p>
            <p>
              Однако другая легенда гласит, что этот десерт был изобретен личным
              врачом Марии, королевы Шотландской, который использовал мармелад
              как средство от морской болезни. И соответственно, название
              образовано от фразы Marie est malade («Мария больна»).
            </p>
            <h3>Зачем добавляют сахар?</h3>
            <p>
              Сахар гигроскопичен, то есть обладает способностью извлекать
              лишнюю влагу. Его используют, чтобы ускорить высушивание
              мармелада. Также он применяется в декоративных целях: мармеладная
              корочка иногда выглядит не очень аппетитно (что не отражается на
              вкусе), а посыпка скрывает недочеты.
            </p>
            <h3>Мармелад в сухпайке</h3>
            <p>
              Этот десерт не только вкусен, но и питателен, поэтому во Франции
              он является обязательным элементом сухого пайка наряду с мюсли и
              молочными десертами.
            </p>
            <h3>Богатый состав</h3>
            <p>В 100 гр мармелада содержатся:</p>
            <ul>
              <li>10 мг кальция;</li>
              <li>4 мг магния;</li>
              <li>4 мг фосфора.</li>
            </ul>
            <h3>Мармеладный гигант</h3>
            <p>
              Самый большой мармелад в мире был изготовлен в Gummi Bear Factory.
              Рост этого «мишка Гамми» достигал 1,7 м, а вес превышал 600 кг.
            </p>
            <h4>Необычные рецепты мармелада</h4>
            <p>
              Когда-то мармелад готовили из яблок, айвы, абрикосов и апельсинов.
              Сегодня ассортимент шире, используются даже тыква, кока-кола и
              арбуз. Немало интересных рецептов вы можете найти и в нашем
              интернет-магазине. Например,{" "}
              мармелад с натуральными орехами{" "}
              или десерт с кофейными зернами, который заменит целую чашку
              крепкого кофе.
            </p>
          </div>
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

export default About;

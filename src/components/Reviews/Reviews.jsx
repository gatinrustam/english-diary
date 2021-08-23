import React from 'react';
import Masonry from 'react-masonry-css'
import './Reviews.css';

export function Reviews() {
    const breakpointColumnsObj = {
        default: 2,
        1100: 3,
        700: 2,
        500: 1
      };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="reviews"
            columnClassName="reviews__item">
            <h2>Отзывы</h2>
            <div className="reviews__item reviews__item--purple">
                <div className="reviews__text">
                    <p>Моему сыну 12 лет. Он уже два года занимается английским в вашей школе. Пришёл со знаниями первоклашки, а в этом году сдал уровень Кембридж А1 на самые высокие баллы. Очень нравится грамотная подача материала и высокие требования преподавателя. Дети занимаются по современным учебникам, изучают грамматику по удобным пособиям и учатся разговорному английскому в диалогах. Так же нравится индивидуальный подход преподавателя: лично прорабатываются ошибки каждого ребёнка.</p>
                    <p>Теперь мой сын - один из лучших учеников в классе в своей школе и без страха  участвует во всех олимпиадах по английскому языку. Ведь это и есть показатель качества обучения!</p>
                </div>
                <div className="reviews__author">
                    <p>Наталья Рахманина, мама Макара Рахманина (12 лет) </p>
                </div>
            </div>

            <div className="reviews__item reviews__item--green">
                <div className="reviews__text">
                    <p>Хотелось бы поблагодарить Люцию Раефовну за знания, за чуткость, за умение вовлечь ребёнка в процесс обучения новых материалов, различные викторины и тематические вечеринки!!! Хотим сказать, что очень рады, что когда-то попали в набор группы у Люции Раефовны и продолжаем с удовольствием изучать мир английского языка!❤</p>
                </div>
                <div className="reviews__author">
                    <p>Азалия Андреева, мама Арины Андреевой (10 лет)</p>
                </div>
            </div>

            <div className="reviews__item reviews__item--yellow">
                <div className="reviews__text">
                    <p>Добрый день! Хотелось бы оставить положительный отзыв о занятиях английским языком с Люцией Раефовной. Я вижу значительный прорыв в знаниях своего ребенка, дочка рассказывает, что уроки проходят очень интересно, общение все время только на английском. Люция Раефовна объясняет очень доходчиво, легко усваивается грамматика и  мне нравится произношение моей дочери. Раньше я и не представляла, что дочка сможет так говорить на английском и правильно излагать свои мысли. Преподавателей такого уровня найти очень сложно. Люция Раефовна - настоящий профессионал своего дела!️</p>
                </div>
                <div className="reviews__author">
                    <p>Анна Сапожникова, мама Олеси Сапожниковой (11 лет)</p>
                </div>
            </div>

            <div className="reviews__item reviews__item--red">
                <div className="reviews__text">
                    <p>Большое спасибо, Люция Раефовна, за ваш труд. Вы учитель от Бога!!! Вы очень отзывчивы и в тоже время вмеру строги. Мой сын с удовольствием ходит к вам на занятия и расстраивается, если приходится пропустить.</p>
                    <p>Мне было очень приятно, когда Саша не мог ходить на уроки и вы вели занятие онлайн.Спасибо вам огромное и дальнейшего процветания!!!!</p>
                </div>
                <div className="reviews__author">
                    <p>Анжелика Чубарова, мама Александра Теребинова (9 лет)</p>
                </div>
            </div>
        </Masonry>
    )
}
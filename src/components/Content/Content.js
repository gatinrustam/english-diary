import React from 'react';
import { Reviews } from '../Reviews/Reviews';
import './Content.css';
import { InView } from 'react-intersection-observer';
import Button from '../Button/Button';
// import Tilt from 'react-tilt';

export function Content() {
    // const [activeBlock, setActiveBlock] = useState('');

    return (
        <div className="content">
            <InView>
                {({ inView, ref, _ }) => (
                <div ref={ref} className="intro">
                    <div className={`intro__picture ${inView ? 'intro__picture-active' : ''} `}>
                        <img src="images/main_portrait.jpg" alt="" />
                        <div className="intro__picture-circle intro__picture-circle-dots"></div>
                        <div className="intro__picture-circle intro__picture-circle-purple"></div>
                    </div>
                    <div className="intro__text">
                        <p>Меня зовут Люция Галиуллина. Я&nbsp;основатель клуба изучения английского языка. Я&nbsp;работаю над каждым уроком, чтобы сделать его нескучным, &laquo;живым&raquo;, интерактивным и&nbsp;максимально эффективным.</p>
                        <p>На&nbsp;моих уроках дети не&nbsp;только изучают английский язык, но&nbsp;и&nbsp;расширяют кругозор, развивают критическое мышление, социальные ценности, умение работать в&nbsp;команде, а&nbsp;также приобретают навыки автономного изучения английского языка вне урока.</p>
                        <Button title="Какие преимущества ↓" />
                    </div>
                </div>
                )}
            </InView>

            <div className="blockquote">
                Способствовать успеху ваших детей, помочь им&nbsp;обрести знания и&nbsp;навыки, которые откроют перед ними невероятно широкие горизонты&nbsp;&mdash; вот цели, которые я&nbsp;ставлю перед собой.
            </div>

            <InView>
                {({ inView, ref, _ }) => (
                <div ref={ref} className="block">
                    <div className="benefits">
                        <div className="sertificates">
                            <div className={`sertificates__item ${inView ? 'sertificates__item--01' : ''}`}>
                                <img src="/images/sert_01.jpg" alt="" />
                                <div className="sertificates__block-green"></div>
                            </div>
                            <div className={`sertificates__item ${inView ? 'sertificates__item--02' : ''}`}>
                                <img src="/images/sert_02.jpg" alt="" />
                                <div className="sertificates__block-purple"></div>
                            </div>
                            <div className={`sertificates__item ${inView ? 'sertificates__item--03' : ''}`}>
                                <img src="/images/sert_03.jpg" alt="" />
                                <div className="sertificates__block-yellow"></div>
                            </div>
                            <div className={`sertificates__item ${inView ? 'sertificates__item--04' : ''}`}>
                                <img src="/images/sert_04.jpg" alt="" />
                                <div className="sertificates__block-red"></div>
                            </div>
                            <div className={`sertificates__item ${inView ? 'sertificates__item--05' : ''}`}>
                                <img src="/images/sert_05.jpg" alt="" />
                                <div className="sertificates__block-blue"></div>
                            </div>
                        </div>
                        <div className="path">
                            <img src="/images/path.svg" alt="" />
                            <div className="path__text path__text--01">
                                2003-2007гг - Национальный Университет Узбекистана (бывший Ташкентский Государственный Университет), специальность “Английский язык и литература”.
                            </div>
                            <div className="path__text path__text--02">
                                2019 гг - сдала экзамены и получила международные  Кембриджские Сертификаты TKT Module 1, TKT Module 2,  TKT Module3 (примеч: активные ссылки на сертификаты: имею ввиду, что нажав на эти слова люди увидят сертификат ). Данные Сертификаты подтверждают высокую квалификацию преподавателя, в частности свидетельствуют о том, что педагог владеет различными современными методиками преподавания, концепциями и терминологией, а также умеет грамотно планировать и проводить уроки.
                            </div>
                            <div className="path__text path__text--03">
                                2019-2020 гг  - с отличием окончила 120 часовой курс Кембриджского Университета и получила международный Сертификат CELT-P (активная ссылка на сертификат) (специфика обучения детей английскому языку в начальных классах), а также Сертификат TKT YL (активныя ссылка на сертификат) (высший балл за экзамен - Band 4).
                            </div>
                            <div className="path__text path__text--04">
                                2020-2021 гг - с отличием окончила 120 часовой курс Кембриджского Университета и получила международный Сертификат CELT-S (активная ссылка) (специфика обучения детей английскому языку в средних и старших классах).
                            </div>
                            <div className="path__text path__text--05">
                                2021 гг - проходит курс подготовки к экзамену DELTA Module 1.  DELTA (Diploma in Teaching English to Speakers of Other Languages)- широко известный и признанный по всему миру экзамен для преподавателей английского как иностранного языка, который позволяет работать старшим преподавателем, стать академическим директором, директором по обучению, и в целом уверенно конкурировать на международном рынке труда.
                            </div>
                        </div>
                        <div className="intro__text">
                            <h3 className="block__text">Кто будет учить моего ребенка?</h3>
                            <p>Я обожаю свою профессию и постоянно повышаю свою квалификацию, на сегодняшний день, имея профильное образование и большинство возможных международных Сертификатов Преподавателя Кембриджского университета (Великобритания).</p>
                            <p>я продолжаю работу над получением одного из самых престижных Дипломов Преподавателя английского языка DELTA (Кембриджский Универститет, Великобритания). Зачем?  Для того, чтобы максимально грамотно обучить Вашего ребенка ВЛАДЕТЬ английским языком. На</p>
                        </div>
                    </div>
                </div>
                )}
            </InView>

            <div className="block">
                <h2>Программы</h2>
                <div className="block__content">
                    <div className="intro__text">
                        <h3 className="block__text">Кто будет учить моего ребенка?</h3>
                        <p>Я обожаю свою профессию и постоянно повышаю свою квалификацию, на сегодняшний день, имея профильное образование и большинство возможных международных Сертификатов Преподавателя Кембриджского университета (Великобритания).</p>
                        <p>я продолжаю работу над получением одного из самых престижных Дипломов Преподавателя английского языка DELTA (Кембриджский Универститет, Великобритания). Зачем?  Для того, чтобы максимально грамотно обучить Вашего ребенка ВЛАДЕТЬ английским языком. На</p>
                    </div>
                    <div className="block__picture">
                        <img src="images/demo.png" alt="" />
                    </div>
                </div>
            </div>

            <Reviews />
        </div>
    )
}

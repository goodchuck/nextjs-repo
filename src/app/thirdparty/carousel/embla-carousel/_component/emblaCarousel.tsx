"use client"
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import styles from './cmblaCarousel.module.css';
import { faker } from "@faker-js/faker";
import AutoPlay from 'embla-carousel-autoplay'
import {
    DotButton, PrevButton, NextButton
} from './EmblaCarouselArrowsDotsButtons';


type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

export const EmblaCarousel = () => {
    // const slides: string[] = Array.from({ length: 5 }, () => faker.image.urlLoremFlickr());
    const [slides, setSlides] = useState<string[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({}, [AutoPlay()]);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(), [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    useEffect(() => {
        if (slides.length === 0) {
            let newSlides = Array.from({ length: 5 }, () => faker.image.urlLoremFlickr())
            setSlides([...slides, ...newSlides])
        }
    }, [slides])

    // useEffect(() => {
    //     if (emblaApi) {
    //         console.log(emblaApi.slideNodes()) // Access API
    //     }
    // }, [emblaApi]);

    return (
        <div className={styles.embla_all}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((val, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={styles.embla__slide__number}>
                                    <span>{index + 1}</span>
                                </div>
                                <img
                                    className={styles.embla__slide__img}
                                    src={val}
                                    alt="Your alt text"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.embla__buttons}>
                    <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                    <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
                </div>
            </div>
            <div className={styles.embla__dots}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>


    )
}
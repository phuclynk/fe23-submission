import React from "react";
import { Title } from "../title/Title";
import { Picture } from "../picture/Picture";
import { Text } from "../text/Text";
import { Word } from "../word/Word";
import { Footer } from "../footer/Footer";
import './style.css'

export function Card2() {
    return <div className="card">
        <Picture picture="https://mega.com.vn/media/product/15193_chuot_may_tinh_gaming_aoc_gm500.jpg" />
        <Title title='TECHNOLOGY' />
        <Text text='Why is the Tesla Cybertruck designed the way it is' />
        <Word word='An exploration into the trucks pollarising design' />
        <div>
            <Footer footer='https://i.pinimg.com/originals/1d/43/52/1d43527a6b45ba37f92584bcf209f6c3.jpg' />
        </div>
    </div>
}
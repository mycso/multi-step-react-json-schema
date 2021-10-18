/* eslint-disable react/no-danger */
import React, {useState} from 'react';
import MultiForm from '../components/multiForm';
import { MultiFormProvider } from '../components/multiFormContext';

export default function MultiFormPage({}) {
    const [style] = useState({
        customFontUrls: [
            "https://storage.googleapis.com/e4s-production-public-file-store/fonts/brice-bold/BriceBold.otf", 
            "https://storage.googleapis.com/e4s-production-public-file-store/fonts/lemon-milk/LemonMilkRegular.ttf"
        ],
        id: "5fd0e5560e3bc65a853bc5e2",
        logo: {
            height: "150", 
            url: "https://makinglifepeachy.com/app/uploads/2019/03/blog.jpg"},
            width: "240",
        style: "@font-face { font-family: BriceBold; src: url('https://storage.googleapis.com/e4s-production-public-file-store/fonts/brice-bold/BriceBold.otf'); },@font-face { font-family: LemonMilk; src: url('https://storage.googleapis.com/e4s-production-public-file-store/fonts/lemon-milk/LemonMilkRegular.ttf'); },.DayPickerInput{margin-left:10px!important},.form-group>fieldset>legend{font-family:BriceBold,serif;font-size:20px!important}.control-label,span{font-family:LemonMilk,sans-serif}.btn-info,.btn-text-purp,.btn.btn-secondary.btn-toggle,.button.is-primary{background-color:#050aed!important;color:#fff!important}.subtitle.is-3{font-family:BriceBold,serif!important;color:#231f20!important}.has-text-centered>p{font-family:LemonMilk,sans-serif!important}.upload-success.mt-2{background-color:#050aed!important;font-family:LemonMilk,sans-serif!important}.btn.btn-secondary.btn-toggle{margin-left:10px}}",
    });

    return (
        <MultiFormProvider>
            <MultiForm />
        </MultiFormProvider>
    );
}
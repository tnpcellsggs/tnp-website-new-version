import { useEffect } from "react";

// This is Google Translation API used to translate the contents of a web app
const Translate = () => {

    // google translate element initiator
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                // default page language is English
                pageLanguage: "en",
                autoDisplay: false,

                // Add the languages you want to include
                includedLanguages: "en,hi,mr",
            },
            "google_translate_element"
        );
    };
    useEffect(() => {

        // create a script child
        var addScript = document.createElement("script");

        // use the script to enable the JavaScript functionality after the rendering of DOM
        addScript.setAttribute(
            "src",
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);

        // googleTranslateElementInit is a callback function that initializes the Google Translate widget when the script from Google has loaded
        window.googleTranslateElementInit = googleTranslateElementInit;

        try {
            const intervalID = setInterval(function () {
                let divs = document.getElementsByClassName("skiptranslate")[0];
                if (divs !== undefined) {

                    let ele = document.getElementsByClassName("skiptranslate")[0];
                    ele.childNodes[1].nodeValue = "";

                    let select = document.getElementsByClassName("goog-te-combo")[0];
                    select.firstElementChild.innerText = "English";
                    clearInterval(intervalID);
                }
            }, 1000);
        }
        catch (err) {
            console.log(err);
        }

    }, []);

    // try {
    //     const intervalID = setInterval(function () {
    //         let divs = document.getElementsByClassName("skiptranslate")[0];
    //         console.log(divs);
    //         if (divs !== undefined) {
    //             divs.parentNode.removeChild(divs);

    //             cleanUps();
    //             document.body.style.top = "0px";
    //             clearInterval(intervalID);
    //         }
    //     }, 1000);
    // }
    // catch (err) {
    //     // console.log(err);
    // }

    // const cleanUps = () => {
    //     const intervalID = setInterval(function () {
    //         let google_translate_element = document.getElementById(":0.targetLanguage");
    //         if (google_translate_element !== null) {
    //             console.log(google_translate_element.nextSibling);
    //             google_translate_element.nextSibling.parentNode.removeChild(google_translate_element.nextSibling);
    //             clearInterval(intervalID);
    //         }
    //     }, 1000);
    // }

    return (
        <>
            <div id="google_translate_element"></div>
        </>
    );
};

export default Translate;
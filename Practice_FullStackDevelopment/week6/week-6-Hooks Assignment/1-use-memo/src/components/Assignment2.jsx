import React, { useEffect, useState , useMemo } from "react";

// 1.In this assignment, you will create a component that renders a large list of sentences
// and includes an input field for filtering these items. 
// 2.The goal is to use useMemo to optimize the filtering process, ensuring the list is only 
// re-calculated when necessary (e.g., when the filter criteria changes).
// 3.You will learn something new here, specifically how you have to pass
// more than one value in the dependency array


//Below is algo or way to seed sentences
//array od random sentences is created 

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 10;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) { // outer loop represents number of  lines
    let sentence = "";
    //inner loop will seed or create one random sentence for each line
    for (let j = 0; j < words.length; j++) {
        // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
        //Picking up any random word from 'words' array  
        //and adding it to sentence
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
        console.log(Math.floor(words.length * Math.random()));
    }
    //pushing sentence created to array 'ALL_WORDS' which is an array of sentences
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    //sentences initialized to ALL_WORDS that is with all sentences created
    const [sentences, setSentences] = useState(ALL_WORDS);
    //initially there is no filter
    const [filter, setFilter] = useState("");

    //after filtering ,filtered sentences are captured in 'filteredSentences' 
    const filteredSentences = useMemo(function() {
        //The includes() method returns true if a string contains a specified string.
        //The filter() method creates a new array filled with elements that pass a test provided by a function.
        return sentences.filter(x => x.includes(filter));
    }, [sentences, filter]) 

    return <div>
        {/* user input is taken as filter for sentences*/}
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {/* rendering every filtered sentence */}
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}
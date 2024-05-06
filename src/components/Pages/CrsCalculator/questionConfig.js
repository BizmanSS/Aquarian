// Configuration for all questions
const IELTSScore = [
    { value: "Default", label: "Select a value"},
    { value: "A", label: "Less than 3" },
    { value: "B", label: "3.5" },
    { value: "C", label: "4.0" },
    { value: "D", label: "4.5" },
    { value: "E", label: "5.0" },
    { value: "F", label: "5.5" },
    { value: "G", label: "6.0" },
    { value: "H", label: "6.5" },
    { value: "I", label: "7.0" },
    { value: "J", label: "7.5" },
    { value: "K", label: "8.0" },
    { value: "L", label: "8.5" },
    { value: "M", label: "9.0" }
]

const celpipValues = [
    { value: "Default", label: "Select a value"},
    { value: "10", label: "10" },
    { value: "9", label: "9" },
    { value: "8", label: "8" },
    { value: "7", label: "7" },
    { value: "6", label: "6" },
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "3", label: "3" }
];



const questionConfig = [
    {
        id: 1,
        text: "Your current relationaship status",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "M", label: "Married"},
            { value: "S", label: "Never Married/Single"},
            { value: "CL", label: "Common Law"},
            { value: "D", label: "Divorced/Seperated/ Widowed/Legally Seperated/Anulled Marriage"}
        ],
        condition: answers => true
    },
    {
        id: 2,
        text: "What is your age?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "17 years of age or less" },
            { value: "B", label: "18 years of age" },
            { value: "C", label: "19 years of age" },
            { value: "D", label: "20 to 29 years of age" },
            { value: "E", label: "30 years of age" },
            { value: "F", label: "31 years of age" },
            { value: "G", label: "32 years of age" },
            { value: "H", label: "33 years of age" },
            { value: "I", label: "34 years of age" },
            { value: "J", label: "35 years of age" },
            { value: "K", label: "36 years of age" },
            { value: "L", label: "37 years of age" },
            { value: "M", label: "38 years of age" },
            { value: "N", label: "39 years of age" },
            { value: "O", label: "40 years of age" },
            { value: "P", label: "41 years of age" },
            { value: "Q", label: "42 years of age" },
            { value: "R", label: "43 years of age" },
            { value: "S", label: "44 years of age" },
            { value: "T", label: "45 years of age or more" }
        ],
        condition: answers => answers[1]
    },
    {
        id: 3,
        text: "What is your qualification?",
        options: [
        { value: "Default", label: "Select a value"},
        { value: "A", label: "Less than secondary school (high school)" },
        { value: "B", label: "Secondary diploma (high school graduation)" },
        { value: "C", label: "One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute" },
        { value: "D", label: "Two-year program at a university, college, trade or technical school, or other institute" },
        { value: "E", label: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute" },
        { value: "F", label: "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years" },
        { value: "G", label: "Master's degree, OR professional degree needed to practice in a licensed profession" },
        { value: "H", label: "Doctoral level university degree (Ph.D.)" }
        ],
        condition: answers => answers[2]
    },
    {
        id: 3.1,
        text: "Have you completed a Degree, Diploma, or Certificate from a Canadian Institute?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[3]
    },
    {
        id: 3.2,
        text: "The level of education you completed fom the Canadian Institute",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "Secondary High School or less" },
            { value: "B", label: "1 or 2 year Diploma or Certificate" },
            { value: "C", label: "Degree/Diploma/certificate of 3 years or more" },
            { value: "D", label: "Masters/Professional/Doctoral Degree of at least 1 year" }
        ],
        condition: answers => answers[3.1] && answers[3.1] === "yes"
    },
    {
        id: 4,
        text: "Is your spouse a permanent resident or Citizen of Canada?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[3.1] && (answers[1] === "M" || answers[1] ==="CL")
    },
    {
        id: 5,
        text: "Will your spouse or Common law partner come with you to Canada?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[4] && answers[4] === "no"
    },
    {
        id: 6,
        text: "Language Profiency: Have you taken any of the following Langauge Exams (in the last two years)",
        options: [
            { value: "Default", label: "Select an exam type"},
            { value: "PTE", label: "PTE" },
            { value: "CEL", label: "CELPIP-G" },
            { value: "NA", label: "Not Applicable" }
        ],
        condition: answers => answers[5] || (answers[4] && answers[4] === "yes") || (answers[3.1] && !(answers[1] === "M" || answers[1] ==="CL"))
    },
    {
        id: 6.11,
        text: "IELTS - Reading",
        options: IELTSScore,
        condition: answers => answers[6] === "IELTS"
    },
    {
        id: 6.12,
        text: "IELTS - Writing",
        options: IELTSScore,
        condition: answers => answers[6] === "IELTS"
    },
    {
        id: 6.13,
        text: "IELTS - Listening",
        options: IELTSScore,
        condition: answers => answers[6] === "IELTS"
    },
    {
        id: 6.14,
        text: "IELTS - Speaking",
        options: IELTSScore,
        condition: answers => answers[6] === "IELTS"
    },
    {
        id: 6.21,
        text: "PTE - Reading",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "88-90" },
            { value: "B", label: "78-87" },
            { value: "C", label: "69-77" },
            { value: "D", label: "60-68" },
            { value: "E", label: "51-59" },
            { value: "F", label: "42-50" },
            { value: "G", label: "33-41" },
            { value: "H", label: "0 - 32" }
        ],
        condition: answers => answers[6] === "PTE"
    },
    {
        id: 6.22,
        text: "PTE - Writing",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "90" },
            { value: "B", label: "88-89" },
            { value: "C", label: "79-87" },
            { value: "D", label: "69-78" },
            { value: "E", label: "60-68" },
            { value: "F", label: "51-59" },
            { value: "G", label: "41-50" },
            { value: "H", label: "0 - 41" }
        ],
        condition: answers => answers[6] === "PTE"
    },
    {
        id: 6.23,
        text: "PTE - Listening",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "89-90" },
            { value: "B", label: "82-88" },
            { value: "C", label: "71-81" },
            { value: "D", label: "60-70" },
            { value: "E", label: "50-59" },
            { value: "F", label: "39-49" },
            { value: "G", label: "28-38" },
            { value: "H", label: "0 - 27" }
        ],
        condition: answers => answers[6] === "PTE"
    },
    {
        id: 6.24,
        text: "PTE - Speaking",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "89-90" },
            { value: "B", label: "84-88" },
            { value: "C", label: "76-83" },
            { value: "D", label: "68-75" },
            { value: "E", label: "59-67" },
            { value: "F", label: "51-58" },
            { value: "G", label: "42-50" },
            { value: "H", label: "0 - 41" }
        ],
        condition: answers => answers[6] === "PTE"
    },
    {
        id: 6.31,
        text: "Celpip-G - Reading",
        options: celpipValues,
        condition: answers => answers[6] === "CEL"
    },
    {
        id: 6.32,
        text: "Celpip-G - Writing",
        options: celpipValues,
        condition: answers => answers[6] === "CEL"
    },
    {
        id: 6.33,
        text: "Celpip-G - Listening",
        options: celpipValues,
        condition: answers => answers[6] === "CEL"
    },
    {
        id: 6.34,
        text: "Celpip-G - Speaking",
        options: celpipValues,
        condition: answers => answers[6] === "CEL"
    },
    {
        id: 7,
        text: "Language Profiency: Have you taken any of the following Langauge Exams (in the last two years)",
        options: [
            { value: "Default", label: "Select an exam type"},
            { value: "TEF", label: "TEF Canada" },
            { value: "TCF", label: "TCF Canada" },
            { value: "NA", label: "Not Applicable" }
        ],
        condition: answers => answers[6]
    },
    {
        id: 7.11,
        text: "TEF - Reading",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "263 - 300" },
            { value: "B", label: "248 - 262" },
            { value: "C", label: "233 - 247" },
            { value: "D", label: "207 - 232" },
            { value: "E", label: "181 - 206" },
            { value: "F", label: "151 - 180" },
            { value: "G", label: "121 - 150" },
            { value: "H", label: "0 - 120" }
        ],
        condition: answers => answers[7] === "TEF"
    },
    {
        id: 7.12,
        text: "TEF - Writing",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "393 - 450" },
            { value: "B", label: "371 - 392" },
            { value: "C", label: "349 - 370" },
            { value: "D", label: "310 - 348" },
            { value: "E", label: "271 - 309" },
            { value: "F", label: "226 - 270" },
            { value: "G", label: "181 - 225" },
            { value: "H", label: "0 - 180" }
        ],
        condition: answers => answers[7] === "TEF"
    },
    {
        id: 7.13,
        text: "TEF - Listening",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "316 - 360" },
            { value: "B", label: "298 - 315" },
            { value: "C", label: "280 - 297" },
            { value: "D", label: "249 - 279" },
            { value: "E", label: "217 - 248" },
            { value: "F", label: "181 - 216" },
            { value: "G", label: "145 - 180" },
            { value: "H", label: "0 - 144" }
        ],
        condition: answers => answers[7] === "TEF"
    },
    {
        id: 7.14,
        text: "TEF - Speaking",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "393 - 450" },
            { value: "B", label: "371 - 392" },
            { value: "C", label: "349 - 370" },
            { value: "D", label: "310 - 348" },
            { value: "E", label: "271 - 309" },
            { value: "F", label: "226 - 270" },
            { value: "G", label: "181 - 225" },
            { value: "H", label: "0 - 180" }
        ],
        condition: answers => answers[7] === "TEF"
    },
    {
        id: 7.21,
        text: "TCF - Reading",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "549 - 699" },
            { value: "B", label: "524 - 548" },
            { value: "C", label: "499 - 523" },
            { value: "D", label: "453 - 498" },
            { value: "E", label: "406 - 452" },
            { value: "F", label: "375 - 405" },
            { value: "G", label: "342 - 374" },
            { value: "H", label: "0 - 341" }
        ],
        condition: answers => answers[7] === "TCF"
    },
    {
        id: 7.22,
        text: "TCF - Writing",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "16 - 20" },
            { value: "B", label: "14 - 15" },
            { value: "C", label: "12 - 13" },
            { value: "D", label: "10 - 11" },
            { value: "E", label: "7 - 9" },
            { value: "F", label: "6 - 6" },
            { value: "G", label: "4 - 5" },
            { value: "H", label: "0 - 3" }
        ],
        condition: answers => answers[7] === "TCF"
    },
    {
        id: 7.23,
        text: "TCF - Listening",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "549 - 699" },
            { value: "B", label: "523 - 548" },
            { value: "C", label: "503 - 522" },
            { value: "D", label: "458 - 502" },
            { value: "E", label: "398 - 457" },
            { value: "F", label: "369 - 397" },
            { value: "G", label: "331 - 368" },
            { value: "H", label: "0 - 330" }
        ],
        condition: answers => answers[7] === "TCF"
    },
    {
        id: 7.24,
        text: "TCF - Speaking",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "16 - 20" },
            { value: "B", label: "14 - 15" },
            { value: "C", label: "12 - 13" },
            { value: "D", label: "10 - 11" },
            { value: "E", label: "7 - 9" },
            { value: "F", label: "6 - 6" },
            { value: "G", label: "4 - 5" },
            { value: "H", label: "0 - 3" }
        ],
        condition: answers => answers[7] === "TCF"
    },
    {
        id: 8,
        text: "How many years of skilled work expereince do you have in Canada in the last 10 years?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "None or less than a year" },
            { value: "B", label: "1 year" },
            { value: "C", label: "2 years" },
            { value: "D", label: "3 years" },
            { value: "E", label: "4 years" },
            { value: "F", label: "5 years or more" }
        ],
        condition: answers => answers[7]
    },
    {
        id: 9,
        text: "what is your Spouse’s or common-law partner’s level of education?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "Less than secondary school (high school)" },
            { value: "B", label: "Secondary school (high school graduation)" },
            { value: "C", label: "One-year program at a university, college, trade or technical school, or other institute" },
            { value: "D", label: "Two-year program at a university, college, trade or technical school, or other institute" },
            { value: "E", label: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute" },
            { value: "F", label: "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years" },
            { value: "G", label: "Master's degree, or professional degree needed to practice in a licensed profession" },
            { value: "H", label: "Doctoral level university degree (PhD)" }
        ],
        condition: answers => answers[8] && (answers[1] === "M" || answers[1] ==="CL") && answers[5] === "yes"
    },
    {
        id: 10,
        text: "Has your spouse taken any of the following Language Profiency Exam in the last two years",
        options: [
            { value: "Default", label: "Select an exam type"},
            { value: "PTE", label: "PTE" },
            { value: "CEL", label: "CELPIP-G" },
            { value: "TEF", label: "TEF Canada" },
            { value: "TCF", label: "TCF Canada" },
            { value: "NA", label: "Not Applicable" }
        ],
        condition: answers => answers[9]
    },
    {
        id: 10.11,
        text: "IELTS - Reading",
        options: IELTSScore,
        condition: answers => answers[10] === "IELTS"
    },
    {
        id: 10.12,
        text: "IELTS - Writing",
        options: IELTSScore,
        condition: answers => answers[10] === "IELTS"
    },
    {
        id: 10.13,
        text: "IELTS - Listening",
        options: IELTSScore,
        condition: answers => answers[10] === "IELTS"
    },
    {
        id: 10.14,
        text: "IELTS - Speaking",
        options: IELTSScore,
        condition: answers => answers[10] === "IELTS"
    },
    {
        id: 10.21,
        text: "PTE - Reading",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "88-90" },
            { value: "B", label: "78-87" },
            { value: "C", label: "69-77" },
            { value: "D", label: "60-68" },
            { value: "E", label: "51-59" },
            { value: "F", label: "42-50" },
            { value: "G", label: "33-41" },
            { value: "H", label: "0 - 32" }
        ],
        condition: answers => answers[10] === "PTE"
    },
    {
        id: 10.22,
        text: "PTE - Writing",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "90" },
            { value: "B", label: "88-89" },
            { value: "C", label: "79-87" },
            { value: "D", label: "69-78" },
            { value: "E", label: "60-68" },
            { value: "F", label: "51-59" },
            { value: "G", label: "41-50" },
            { value: "H", label: "0 - 41" }
        ],
        condition: answers => answers[10] === "PTE"
    },
    {
        id: 10.23,
        text: "PTE - Listening",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "89-90" },
            { value: "B", label: "82-88" },
            { value: "C", label: "71-81" },
            { value: "D", label: "60-70" },
            { value: "E", label: "50-59" },
            { value: "F", label: "39-49" },
            { value: "G", label: "28-38" },
            { value: "H", label: "0 - 27" }
        ],
        condition: answers => answers[10] === "PTE"
    },
    {
        id: 10.24,
        text: "PTE - Speaking",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "89-90" },
            { value: "B", label: "84-88" },
            { value: "C", label: "76-83" },
            { value: "D", label: "68-75" },
            { value: "E", label: "59-67" },
            { value: "F", label: "51-58" },
            { value: "G", label: "42-50" },
            { value: "H", label: "0 - 41" }
        ],
        condition: answers => answers[10] === "PTE"
    },
    {
        id: 10.31,
        text: "Celpip-G - Reading",
        options: celpipValues,
        condition: answers => answers[10] === "CEL"
    },
    {
        id: 10.32,
        text: "Celpip-G - Writing",
        options: celpipValues,
        condition: answers => answers[10] === "CEL"
    },
    {
        id: 10.33,
        text: "Celpip-G - Listening",
        options: celpipValues,
        condition: answers => answers[10] === "CEL"
    },
    {
        id: 10.34,
        text: "Celpip-G - Speaking",
        options: celpipValues,
        condition: answers => answers[10] === "CEL"
    },
    {
        id: 10.41,
        text: "TEF - Reading",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "263 - 300" },
            { value: "B", label: "248 - 262" },
            { value: "C", label: "233 - 247" },
            { value: "D", label: "207 - 232" },
            { value: "E", label: "181 - 206" },
            { value: "F", label: "151 - 180" },
            { value: "G", label: "121 - 150" },
            { value: "H", label: "0 - 120" }
        ],
        condition: answers => answers[10] === "TEF"
    },
    {
        id: 10.42,
        text: "TEF - Writing",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "393 - 450" },
            { value: "B", label: "371 - 392" },
            { value: "C", label: "349 - 370" },
            { value: "D", label: "310 - 348" },
            { value: "E", label: "271 - 309" },
            { value: "F", label: "226 - 270" },
            { value: "G", label: "181 - 225" },
            { value: "H", label: "0 - 180" }
        ],
        condition: answers => answers[10] === "TEF"
    },
    {
        id: 10.43,
        text: "TEF - Listening",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "316 - 360" },
            { value: "B", label: "298 - 315" },
            { value: "C", label: "280 - 297" },
            { value: "D", label: "249 - 279" },
            { value: "E", label: "217 - 248" },
            { value: "F", label: "181 - 216" },
            { value: "G", label: "145 - 180" },
            { value: "H", label: "0 - 144" }
        ],
        condition: answers => answers[10] === "TEF"
    },
    {
        id: 10.44,
        text: "TEF - Speaking",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "393 - 450" },
            { value: "B", label: "371 - 392" },
            { value: "C", label: "349 - 370" },
            { value: "D", label: "310 - 348" },
            { value: "E", label: "271 - 309" },
            { value: "F", label: "226 - 270" },
            { value: "G", label: "181 - 225" },
            { value: "H", label: "0 - 180" }
        ],
        condition: answers => answers[10] === "TEF"
    },
    {
        id: 10.51,
        text: "TCF - Reading",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "549 - 699" },
            { value: "B", label: "524 - 548" },
            { value: "C", label: "499 - 523" },
            { value: "D", label: "453 - 498" },
            { value: "E", label: "406 - 452" },
            { value: "F", label: "375 - 405" },
            { value: "G", label: "342 - 374" },
            { value: "H", label: "0 - 341" }
        ],
        condition: answers => answers[10] === "TCF"
    },
    {
        id: 10.52,
        text: "TCF - Writing",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "16 - 20" },
            { value: "B", label: "14 - 15" },
            { value: "C", label: "12 - 13" },
            { value: "D", label: "10 - 11" },
            { value: "E", label: "7 - 9" },
            { value: "F", label: "6 - 6" },
            { value: "G", label: "4 - 5" },
            { value: "H", label: "0 - 3" }
        ],
        condition: answers => answers[10] === "TCF"
    },
    {
        id: 10.53,
        text: "TCF - Listening",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "549 - 699" },
            { value: "B", label: "523 - 548" },
            { value: "C", label: "503 - 522" },
            { value: "D", label: "458 - 502" },
            { value: "E", label: "398 - 457" },
            { value: "F", label: "369 - 397" },
            { value: "G", label: "331 - 368" },
            { value: "H", label: "0 - 330" }
        ],
        condition: answers => answers[10] === "TCF"
    },
    {
        id: 10.54,
        text: "TCF - Speaking",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "16 - 20" },
            { value: "B", label: "14 - 15" },
            { value: "C", label: "12 - 13" },
            { value: "D", label: "10 - 11" },
            { value: "E", label: "7 - 9" },
            { value: "F", label: "6 - 6" },
            { value: "G", label: "4 - 5" },
            { value: "H", label: "0 - 3" }
        ],
        condition: answers => answers[10] === "TCF"
    },
    {
        id: 11,
        text: "Does your spouse or common-law partner have any work experince in Canada in the last 10 years?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "None or less than a year" },
            { value: "B", label: "1 year" },
            { value: "C", label: "2 years" },
            { value: "D", label: "3 years" },
            { value: "E", label: "4 years" },
            { value: "F", label: "5 years or more" }
        ],
        condition: answers => answers[10]
    },
    {
        id: 12,
        text: "How many years of skilled work experience in Foreign Country (other than Canada) do you have, in the last 10 years? ",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "None or less than a year" },
            { value: "B", label: "1 year" },
            { value: "C", label: "2 years" },
            { value: "D", label: "3 years or more" },
        ],
        condition: answers => answers[11] || (answers[8] && !((answers[1] === "M" || answers[1] ==="CL") && answers[5] === "yes"))
    },
    {
        id: 13,
        text: "Do you hold any Trade qualification Certificate from Canada?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[12]
    },
    {
        id: 14,
        text: "Do you have a Job offer with LMIA from a Canadian employer?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[13]
    },
    {
        id: 15,
        text: "Which NOC Teer is the job offer?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "A", label: "NOC Teer 0 Major Group 00"},
            { value: "B", label: "NOC TEER 1 or 2 or 3, or NOC TEER 0 other than Major group 00"},
            { value: "C", label: "NOC Teer 4 or 5"}
        ],
        condition: answers => answers[14] === "yes"
    },
    {
        id: 16,
        text: "Do you have a nomination Certificate from a Province in Canada?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[15] || answers[14] === "no"
    },    
    {
        id: 17,
        text: "Do you or your spouse or common law partner (if they will come with you to Canada) have at least one brother or sister living in Canada who is a citizen or permanent resident?",
        options: [
            { value: "Default", label: "Select a value"},
            { value: "yes", label: "Yes"},
            { value: "no", label: "No"}
        ],
        condition: answers => answers[16]
    },
];

export default questionConfig;

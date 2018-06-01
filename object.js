const HaddonMotors = Object.create({}, {
    business: {
        value: "HaddonMotors"
    },
    employmentStart: {
        value: "04-22-05"
    },
    employmentEnd: {
        value: "01-01-2014"
    },
    Enjoyments: {
        value: "Family owned and operated."
    },
    Dislikes: {
        value: "Very hard work sometimes."
    }
})

const AnimalShelter = Object.create({}, {
    business: {
        value: "AnimalShelter"
    },
    employmentStart: {
        value: "01-22-2014"
    },
    employmentEnd: {
        value: "05-20-2018"
    },
    Enjoyments: {
        value: "Helping abused and abandoned animals. "
    },
    Dislikes: {
        value: "Having to sometimes put animals to sleep."
    }
})

const Programming = (company,employmentStart, employmentEnd)   => {  
    let newJob = Object.create({}, {
        business: {
            value: company
        },
        StartDate: {
            value: employmentStart
        }
    });

    return newJob;
}

const Low = Programming ("NSS", "02-77-22", "99-22-22")

console.log(Low);

const jobArray = [HaddonMotors,AnimalShelter,Low]

for (let i = 0; i < jobArray.length; i++) {

    const article = document.createElement('article');
    article.setAttribute('id', jobArray[i].business);
    document.querySelector('#contain').appendChild(article);
    console.log(jobArray[i])
}
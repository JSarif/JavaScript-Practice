const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

function pAequorFactory(num, array) {
    return {
        specimenNum: num,
        dna: array,
        mutate() {
            let randomIndex = Math.floor(Math.random() * 15);
            let selectedIndex = this.dna[randomIndex];
            let newBase = returnRandBase();
            while (selectedIndex === newBase) {
                newBase = returnRandBase();
            }
            this.dna[randomIndex] = newBase;
            return this.dna;
        },
        compareDNA(newSpecimen) {
            let matchedDNACount = 0;
            for (let i = 0; i < this.dna.length; i++) {
                let specimenIndex = this.dna[i];
                if (specimenIndex === newSpecimen.dna[i]) {
                    matchedDNACount++;
                }
            }
            let percentage = (matchedDNACount / this.dna.length) * 100;
            // console.log(`specimen #${this.specimenNum} and specimen #${newSpecimen.specimenNum} have ${percentage}% DNA in common`)
            return percentage;
        },
        willLikelySurvive() {
            let countCorG = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] == "C" || this.dna[i] == "G") {
                    countCorG++;
                }
            }
            let percentage = (countCorG / this.dna.length) * 100;
            if (percentage > 60) {
                return true;
            } else {
                return false;
            }
        },
        complementStrand() {
            let complementStrand = [];
            for (let i = 0; i < this.dna.length; i++) {
                switch (this.dna[i]) {
                    case "A":
                        complementStrand.push("T");
                        break;
                    case "T":
                        complementStrand.push("A");
                        break;
                    case "G":
                        complementStrand.push("C");
                        break;
                    case "C":
                        complementStrand.push("G");
                        break;
                }
            }
            return complementStrand;
        },
    };
}

const studyArray = [];

function createLivingPAequor(num) {
    const newPAequor = pAequorFactory(num, mockUpStrand());
    if (newPAequor.willLikelySurvive()) {
        return studyArray.push(newPAequor);
    }
}

let i = 0;
while (studyArray.length < 30) {
    createLivingPAequor(i + 1);
    i++;
}

function findMostCommonPAequors(pAequorArray) {
    let highestPercentage = 0;
    let mostRelatedPair = [];

    for (let i = 0; i < pAequorArray.length - 1; i++) {
        for (let j = i + 1; j < pAequorArray.length; j++) {
            let percentage = pAequorArray[i].compareDNA(pAequorArray[j]);
            if (percentage > highestPercentage) {
                highestPercentage = percentage;
                mostRelatedPair = [pAequorArray[i], pAequorArray[j]];
            }
        }
    }

    return mostRelatedPair;
}

// Test this method by creating an instance of pAequor and running the different methods
const pAequor = pAequorFactory(1, mockUpStrand());
// console.log(pAequor.dna);
// console.log(pAequor.mutate());
// console.log(pAequor.willLikelySurvive());
// console.log(pAequor.compareDNA(pAequorFactory(2, mockUpStrand())));

// console.log(studyArray);
// console.log(studyArray.length);
// console.log(pAequor.dna);
// console.log(pAequor.complementStrand());
// console.log(findMostCommonPAequors(studyArray));

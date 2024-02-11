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
            return `specimen #${this.specimenNum} and specimen #${newSpecimen.specimenNum} have ${percentage}% DNA in common`;
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

// Test this method by creating an instance of pAequor and running the different methods
const pAequor = pAequorFactory(1, mockUpStrand());
// console.log(pAequor.dna);
// console.log(pAequor.mutate());
// console.log(pAequor.willLikelySurvive());
// console.log(pAequor.compareDNA(pAequorFactory(2, mockUpStrand())));

console.log(studyArray);
console.log(studyArray.length);

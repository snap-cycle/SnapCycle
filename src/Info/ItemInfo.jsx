import PlasticBottleBackground from "../assets/Result/MainBackground1.svg";
import PlasticBottle from "../assets/Result/PlasticBottle.svg";
import RecyclingBin from "../assets/Result/RecyclingBin.svg";
import BottleAndArrow from "../assets/Result/BottleAndArrow.svg";
import WaterBottleCrushed from "../assets/Result/PlasticBottleCrushed.svg";
import PlasticTypes from "../assets/Result/PlasticTypes.svg";
import Years from "../assets/Result/Years.svg";

export const ItemInfo = {
    "Plastic Bottle": {
        "name": "Plastic Bottle",
        "background": PlasticBottleBackground,
        "dispsal": {
            1: {
                "text": "Empty and rinse",
                "image": PlasticBottle
            },
            2: {
                "text": "Recycling bin",
                "image": RecyclingBin
            },
            3: {
                "text": "Keep caps on",
                "image": BottleAndArrow
            },
            4: {
                "text": "Do not crush",
                "image": WaterBottleCrushed
            }
        },
        "info": "this is plastic lol",
        'additionalInfo': {
            '1': {
                type: 'text',
                text: 'Plastic bottles are ubiquitous in our modern world, and their composition can vary widely based on the specific needs of the product they contain and environmental considerations. These bottles can be crafted from an assortment of plastic materials, each possessing distinct characteristics and properties. Commonly, plastic bottles are made from polyethylene terephthalate (PET), known for its lightweight, durable, and recyclable nature, making it a popular choice for beverage containers.'
            },
            '2': {
                type: 'image',
                text: '',
                src: PlasticTypes,
                alt: "plastic types"
            },
            '3': {
                type: 'image',
                text: '',
                src: Years,
                alt: "years to decompose"
            },
            '4': {
                type: 'text',
                text: 'Recycling plastic is of paramount importance due to its incredibly slow decomposition rate and the severe adverse effects it imposes on the global environment. Plastic materials can take hundreds of years to break down, accumulating in landfills, oceans, and ecosystems, where they persist as persistent pollutants. These non-biodegradable plastics pose a significant threat to wildlife, marine life, and terrestrial ecosystems, often causing entanglement, ingestion, and habitat destruction.'
            }
        }
    }
}
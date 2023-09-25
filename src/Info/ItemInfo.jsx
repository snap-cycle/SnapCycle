import PlasticBottleBackground1 from "../assets/Result/MainBackground1.svg";
import PlasticBottleBackground2 from "../assets/Result/MainBackground2.svg";
import PlasticBottleBackground3 from "../assets/Result/MainBackground3.svg";
import PlasticBottleBackground4 from "../assets/Result/MainBackground4.svg";
import MetalCanBackground1 from "../assets/Result/MainBackground1MetalCan.svg";
import MetalCanBackground2 from "../assets/Result/MainBackground2MetalCan.svg";
import MetalCanBackground3 from "../assets/Result/MainBackground3MetalCan.svg";
import MetalCanBackground4 from "../assets/Result/MainBackground4MetalCan.svg";
import GlassBottleBackground1 from "../assets/Result/MainBackground1GlassBottle.svg";
import GlassBottleBackground2 from "../assets/Result/MainBackground2GlassBottle.svg";
import GlassBottleBackground3 from "../assets/Result/MainBackground3GlassBottle.svg";
import GlassBottleBackground4 from "../assets/Result/MainBackground4GlassBottle.svg";
import PlasticBottle from "../assets/Result/PlasticBottle.svg";
import RecyclingBin from "../assets/Result/RecyclingBin.svg";
import BottleAndArrow from "../assets/Result/BottleAndArrow.svg";
import WaterBottleCrushed from "../assets/Result/PlasticBottleCrushed.svg";
import PlasticTypes from "../assets/Result/PlasticTypes.svg";
import Years from "../assets/Result/Years.svg";

export const ItemInfo = {
    "PlasticBottle": {
        "disposalMethod": "Recycle",
        "name": "Plastic Bottle",
        "backgrounds": {
            1: {
                "image": PlasticBottleBackground1,
            },
            2: {
                "image": PlasticBottleBackground2,
            },
            3: {
                "image": PlasticBottleBackground3,
            },
            4: {
                "image": PlasticBottleBackground4,
            },
        },
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
        },
    },
    "MetalCan": {
        "name": "Metal Can",
        "disposalMethod": "Recycle",
        "backgrounds": {
            1: {
                "image": MetalCanBackground1,
            },
            2: {
                "image": MetalCanBackground2,
            },
            3: {
                "image": MetalCanBackground3,
            },
            4: {
                "image": MetalCanBackground4,
            },
        },
        "dispsal": {
            1: {
                "text": "Empty and rinse",
                "image": ""
            },
            2: {
                "text": "Recycling bin",
                "image": ""
            },
            3: {
                "text": "Keep caps on",
                "image": ""
            },
            4: {
                "text": "Do not crush",
                "image": ""
            },
        },
        "info": "this is metal lol",
        'additionalInfo': {
            '1': {
                type: 'text',
                text: 'Metal cans are a staple of the modern world, used to contain a wide variety of products, including food, beverages, and aerosols. These cans are typically made from aluminum or steel, both of which are recyclable materials. Aluminum cans are lightweight, durable, and corrosion-resistant, making them a popular choice for beverage containers. Steel cans are also lightweight and durable, but they are more resistant to corrosion and less expensive to produce than aluminum cans.'
            },
            '2': {
                type: 'image',
                text: '',
                src: "",
                alt: "garbage conveyor belt"
            },
            '3': {
                type: 'image',
                text: '',
                src: "",
                alt: "collection of empty metal cans"
            },
            '4': {
                type: 'text',
                text: 'Recycling metal is of paramount importance due to its incredibly slow decomposition rate and the severe adverse effects it imposes on the global environment. Metal materials can take hundreds of years to break down, accumulating in landfills, oceans, and ecosystems, where they persist as persistent pollutants. These non-biodegradable metals pose a significant threat to wildlife, marine life, and terrestrial ecosystems, often causing entanglement, ingestion, and habitat destruction.'
            },
        },
    },
    "GlassBottle": {
        "name": "Glass Bottle",
        "disposalMethod": "Recycle",
        "backgrounds": {
            1: {
                "image": GlassBottleBackground1,
            },
            2: {
                "image": GlassBottleBackground2,
            },
            3: {
                "image": GlassBottleBackground3,
            },
            4: {
                "image": GlassBottleBackground4,
            }
        },
        "dispsal": {
            1: {
                "text": "Empty and rinse",
                "image": ""
            },
            2: {
                "text": "Recycling bin",
                "image": ""
            },
            3: {
                "text": "Keep caps on",
                "image": ""
            },
            4: {
                "text": "Do not crush",
                "image": ""
            }
        },
        "info": "this is glass lol",
        'additionalInfo': {
            '1': {
                type: 'text',
                text: 'Glass bottles are a staple of the modern world, used to contain a wide variety of products, including food, beverages, and cosmetics. These bottles are typically made from silica, a naturally occurring compound found in sand, which is heated to high temperatures to form a liquid. This liquid is then molded into the desired shape and allowed to cool, forming a solid glass bottle. Glass bottles are durable, nonporous, and impermeable, making them a popular choice for beverage containers.'
            },
            '2': {
                type: 'image',
                text: '',
                src: "",
                alt: "Glass in hand"
            },
            '3': {
                type: 'image',
                text: '',
                src: "",
                alt: "Glass bottle in bin"
            },
            '4': {
                type: 'text',
                text: 'Recycling glass is of paramount importance due to its incredibly slow decomposition rate and the severe adverse effects it imposes on the global environment. Glass materials can take hundreds of years to break down, accumulating in landfills, oceans, and ecosystems, where they persist as persistent pollutants. These non-biodegradable glasses pose a significant threat to wildlife, marine life, and terrestrial ecosystems, often causing entanglement, ingestion, and habitat destruction.'
            },
        },
    },
}

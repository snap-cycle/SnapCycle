import PlasticBottleBackground from "../assets/Result/MainBackground1.svg";
import PlasticBottle from "../assets/Result/PlasticBottle.svg";
import RecyclingBin from "../assets/Result/RecyclingBin.svg";
import BottleAndArrow from "../assets/Result/BottleAndArrow.svg";
import WaterBottleCrushed from "../assets/Result/PlasticBottleCrushed.svg";

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
        'additionalAssets': {

        }
    }
}
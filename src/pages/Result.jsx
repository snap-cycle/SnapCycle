import React from 'react';

const Result = () => {
    let item = "Plastic Bottle"
    switch (item) {
        case "Plastic Bottle":
            return (
                <div>
                    <h1>Plastic Bottle</h1>
                    <h2>Recycle</h2>
                    <h3>Recycle this item in your blue bin!</h3>
                    <h4>Why?</h4>
                </div>
            )
    }
}

export default Result;

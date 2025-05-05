const data = {
"status": 200,
"data": {
    "hash": "910f804f64a8290ff8c86f3001d78e012254ec99",
    "date": "2025-04-28T00:00:00Z",
    "vbuckIcon": "https://fortnite-api.com/images/vbuck.png",
    "entries": [
    {
        "regularPrice": 4800,
        "finalPrice": 3000,
        "devName": "[VIRTUAL]1 x Camille, 1 x Heartzattak, 1 x Deca-Flail, 1 x Rackpack, 1 x Hatchling, 1 x Sharky, 1 x Feel It, 1 x TBD (SID_Placeholder_566) for -1 MtxCurrency",
        "offerId": "v2:/e40a033357ea225c20678f6d174e9596f563074373f7d896dd405c30c8aaaca9",
        "inDate": "2025-04-25T00:00:00Z",
        "outDate": "2025-05-01T23:59:59.999Z",
        "bundle": {
            "name": "d4vd's Locker Bundle",
            "info": "Bundle",
            "image": "https://fortnite-api.com/images/cosmetics/br/newdisplayassets/1d89065655a180ca/renderimage_0.png"
        },
        "banner": {
            "value": "1800 V-Bucks Off",
            "intensity": "Low",
            "backendValue": "AmountOff"
        },
        "giftable": true,
        "refundable": true,
        "sortPriority": -1,
        "layoutId": "D4VDLocker.99",
        "layout": {
            "id": "D4VDLocker",
            "name": "D4VD's Locker",
            "category": "Locker Bundles",
            "index": 14,
            "rank": 185,
            "showIneligibleOffers": "always",
            "useWidePreview": false,
            "displayType": "tileGrid"
        }
    }
    ]
}
};

//vytáhni, zda lze předmět darovat
console.log(data.data.entries[0].giftable)

//vytáhni z jsonu obrázek bundlu
console.log(data.data.entries[0].bundle.image)

//vytáhni z jsonu název bundlu 
console.log(data.data.entries[0].bundle.name)

//vytáhní slevu
console.log(data.data.entries[0].banner.value)

//vytáhni normální cenu
console.log(data.data.entries[0].regularPrice)

//vytáhni cenu po slevě
console.log(data.data.entries[0].finalPrice)


const products = [
{
  id: 1,
  category: "Fresh Vegetables",
  name_en: "Desi Cauliflower",
  name_bn: "দেশি ফুলকপি",
  unit: "1 KG",
  price: ""
},
{
  id: 2,
  category: "Fresh Vegetables",
  name_en: "Bitter Gourd (Ucche)",
  name_bn: "উচ্ছে",
  unit: "1 KG",
  price: ""
},
{
  id: 3,
  category: "Fresh Vegetables",
  name_en: "Desi Pointed Gourd",
  name_bn: "দেশি পটল",
  unit: "1 KG",
  price: ""
},
{
  id: 4,
  category: "Fresh Vegetables",
  name_en: "Green Chilli",
  name_bn: "কাঁচা লঙ্কা",
  unit: "100 GM",
  price: ""
},
{
  id: 5,
  category: "Fresh Vegetables",
  name_en: "Tomato",
  name_bn: "টমেটো",
  unit: "1 KG",
  price: ""
},
{
  id: 6,
  category: "Fresh Vegetables",
  name_en: "Cabbage",
  name_bn: "বাঁধাকপি",
  unit: "1 KG",
  price: ""
},
{
  id: 7,
  category: "Fresh Vegetables",
  name_en: "Capsicum",
  name_bn: "ক্যাপসিকাম",
  unit: "100 GM",
  price: ""
},
{
  id: 8,
  category: "Fresh Vegetables",
  name_en: "Ginger",
  name_bn: "আদা",
  unit: "100 GM",
  price: ""
},
{
  id: 9,
  category: "Fresh Vegetables",
  name_en: "Garlic",
  name_bn: "রসুন",
  unit: "100 GM",
  price: ""
},
{
  id: 10,
  category: "Fresh Vegetables",
  name_en: "Chandramukhi Potato",
  name_bn: "চন্দ্রমুখী আলু",
  unit: "1 KG",
  price: ""
}
,
{
  id: 11,
  category: "Fresh Vegetables",
  name_en: "Drumstick",
  name_bn: "সজনে ডাঁটা",
  unit: "100 GM",
  price: ""
},
{
  id: 12,
  category: "Fresh Vegetables",
  name_en: "Sweet Potato",
  name_bn: "মিষ্টি আলু",
  unit: "1 KG",
  price: ""
},
{
  id: 13,
  category: "Fresh Vegetables",
  name_en: "Elephant Foot Yam",
  name_bn: "ওল কচু",
  unit: "1 KG",
  price: ""
},
{
  id: 14,
  category: "Fresh Vegetables",
  name_en: "Raw Banana",
  name_bn: "কাঁচা কলা",
  unit: "1 PCS",
  price: ""
},
{
  id: 15,
  category: "Fresh Vegetables",
  name_en: "Brinjal",
  name_bn: "বেগুন",
  unit: "1 KG",
  price: ""
},
{
  id: 16,
  category: "Fresh Vegetables",
  name_en: "Bottle Gourd",
  name_bn: "লাউ",
  unit: "1 PCS",
  price: ""
},
{
  id: 17,
  category: "Fresh Vegetables",
  name_en: "Ridge Gourd",
  name_bn: "ঝিঙে",
  unit: "1 KG",
  price: ""
},
{
  id: 18,
  category: "Fresh Vegetables",
  name_en: "Bitter Gourd (Korola)",
  name_bn: "করলা",
  unit: "1 KG",
  price: ""
},
{
  id: 19,
  category: "Fresh Vegetables",
  name_en: "Ash Gourd",
  name_bn: "চাল কুমড়ো",
  unit: "1 PCS",
  price: ""
},
{
  id: 20,
  category: "Fresh Vegetables",
  name_en: "Pumpkin",
  name_bn: "মিষ্টি কুমড়ো",
  unit: "1 KG",
  price: ""
}
  ,
{
  id: 21,
  category: "Fresh Vegetables",
  name_en: "Raw Papaya",
  name_bn: "কাঁচা পেঁপে",
  unit: "1 KG",
  price: ""
},
{
  id: 22,
  category: "Fresh Vegetables",
  name_en: "Lady Finger",
  name_bn: "ঢেঁড়স",
  unit: "1 KG",
  price: ""
},
{
  id: 23,
  category: "Fresh Vegetables",
  name_en: "Ivy Gourd",
  name_bn: "কুন্দরি",
  unit: "1 KG",
  price: ""
},
{
  id: 24,
  category: "Fresh Vegetables",
  name_en: "Banana Blossom",
  name_bn: "মোচা",
  unit: "1 PCS",
  price: ""
},
{
  id: 25,
  category: "Ready-to-Cook",
  name_en: "Cut Banana Blossom",
  name_bn: "কাটা মোচা",
  unit: "1 Packet",
  price: ""
},
{
  id: 26,
  category: "Mushroom",
  name_en: "Local Mushroom",
  name_bn: "লোকাল মাশরুম",
  unit: "1 Pack",
  price: ""
},
{
  id: 27,
  category: "Mushroom",
  name_en: "Kolkata Mushroom",
  name_bn: "কলকাতা মাশরুম",
  unit: "1 Pack",
  price: ""
},
{
  id: 28,
  category: "Fresh Vegetables",
  name_en: "Onion",
  name_bn: "পেঁয়াজ",
  unit: "1 KG",
  price: ""
},
{
  id: 29,
  category: "Leaf & Greens",
  name_en: "Spinach",
  name_bn: "পালং শাক",
  unit: "1 KG",
  price: ""
},
{
  id: 30,
  category: "Fresh Vegetables",
  name_en: "Beans",
  name_bn: "বিনস",
  unit: "100 GM",
  price: ""
}
  ,
{
  id: 31,
  category: "Leaf & Greens",
  name_en: "Malabar Spinach",
  name_bn: "পুঁই শাক",
  unit: "1 KG",
  price: ""
},
{
  id: 32,
  category: "Leaf & Greens",
  name_en: "Coriander Leaves",
  name_bn: "ধনেপাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 33,
  category: "Fresh Vegetables",
  name_en: "Snake Gourd",
  name_bn: "চিচিঙ্গা",
  unit: "1 KG",
  price: ""
},
{
  id: 34,
  category: "Fresh Vegetables",
  name_en: "Yard Long Beans",
  name_bn: "বরবটি",
  unit: "1 KG",
  price: ""
},
{
  id: 35,
  category: "Leaf & Greens",
  name_en: "Taro Stem",
  name_bn: "কচুর লতি",
  unit: "1 KG",
  price: ""
},
{
  id: 36,
  category: "Ready-to-Cook",
  name_en: "Cut Taro Stem",
  name_bn: "কাটা কচুর লতি",
  unit: "1 Packet",
  price: ""
},
{
  id: 37,
  category: "Fresh Vegetables",
  name_en: "Spiny Gourd",
  name_bn: "কাকরোল",
  unit: "1 KG",
  price: ""
},
{
  id: 38,
  category: "Fresh Vegetables",
  name_en: "Taro Root",
  name_bn: "মান কচু",
  unit: "1 KG",
  price: ""
},
{
  id: 39,
  category: "Fresh Vegetables",
  name_en: "Carrot",
  name_bn: "গাজর",
  unit: "1 KG",
  price: ""
},
{
  id: 40,
  category: "Ready-to-Cook",
  name_en: "Cut Raw Jackfruit",
  name_bn: "কাটা এঁচোড়",
  unit: "1 Packet",
  price: ""
}
  ,
{
  id: 41,
  category: "Fresh Vegetables",
  name_en: "Beetroot",
  name_bn: "বিটরুট",
  unit: "1 KG",
  price: ""
},
{
  id: 42,
  category: "Fresh Vegetables",
  name_en: "Old Onion",
  name_bn: "পুরোনো পেঁয়াজ",
  unit: "1 KG",
  price: ""
},
{
  id: 43,
  category: "Fresh Vegetables",
  name_en: "Indian Gooseberry",
  name_bn: "আমলকি",
  unit: "1 KG",
  price: ""
},
{
  id: 44,
  category: "Leaf & Greens",
  name_en: "Lettuce",
  name_bn: "লেটুস পাতা",
  unit: "1 KG",
  price: ""
},
{
  id: 45,
  category: "Fresh Vegetables",
  name_en: "Red Bell Pepper",
  name_bn: "লাল সিমলা মরিচ",
  unit: "1 KG",
  price: ""
},
{
  id: 46,
  category: "Fresh Vegetables",
  name_en: "Yellow Bell Pepper",
  name_bn: "হলুদ সিমলা মরিচ",
  unit: "1 KG",
  price: ""
},
{
  id: 47,
  category: "Fresh Vegetables",
  name_en: "Single Clove Garlic",
  name_bn: "এক কোয়া রসুন",
  unit: "1 KG",
  price: ""
},
{
  id: 48,
  category: "Leaf & Greens",
  name_en: "Spring Onion",
  name_bn: "স্প্রিং অনিয়ন",
  unit: "1 KG",
  price: ""
},
{
  id: 49,
  category: "Fresh Vegetables",
  name_en: "Desi Cucumber",
  name_bn: "দেশি শসা",
  unit: "1 KG",
  price: ""
},
{
  id: 50,
  category: "Fresh Vegetables",
  name_en: "Chennai Pumpkin",
  name_bn: "চেন্নাই কুমড়ো",
  unit: "1 KG",
  price: ""
}
  ,
{
  id: 51,
  category: "Fresh Vegetables",
  name_en: "Coconut",
  name_bn: "নারকেল",
  unit: "1 PCS",
  price: ""
},
{
  id: 52,
  category: "Fresh Vegetables",
  name_en: "Raw Mango",
  name_bn: "কাঁচা আম",
  unit: "1 KG",
  price: ""
},
{
  id: 53,
  category: "Fresh Vegetables",
  name_en: "Jyoti Potato",
  name_bn: "জ্যোতি আলু",
  unit: "1 KG",
  price: ""
},
{
  id: 54,
  category: "Fresh Vegetables",
  name_en: "Big Size Garlic",
  name_bn: "বড় রসুন",
  unit: "100 GM",
  price: ""
},
{
  id: 55,
  category: "Ready-to-Cook",
  name_en: "Cut Shola Kochu",
  name_bn: "কাটা শোলা কচু",
  unit: "1 KG",
  price: ""
},
{
  id: 56,
  category: "Fresh Vegetables",
  name_en: "White Gati Kochu",
  name_bn: "সাদা গাঁটি কচু",
  unit: "1 KG",
  price: ""
},
{
  id: 57,
  category: "Ready-to-Cook",
  name_en: "Cut Kochur Saag",
  name_bn: "কাটা কচুর শাক",
  unit: "1 Packet",
  price: ""
},
{
  id: 58,
  category: "Ready-to-Cook",
  name_en: "Cut Cabbage",
  name_bn: "কাটা বাঁধাকপি",
  unit: "1 KG",
  price: ""
},
{
  id: 59,
  category: "Fresh Vegetables",
  name_en: "Makra Brinjal",
  name_bn: "মাকড়া বেগুন",
  unit: "1 KG",
  price: ""
},
{
  id: 60,
  category: "Ready-to-Cook",
  name_en: "Cut Banana Stem",
  name_bn: "কাটা কলার থোর",
  unit: "1 Packet",
  price: ""
}
  ,
{
  id: 61,
  category: "Leaf & Greens",
  name_en: "Mint Leaves",
  name_bn: "পুদিনা পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 62,
  category: "Leaf & Greens",
  name_en: "Curry Leaves",
  name_bn: "কারি পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 63,
  category: "Leaf & Greens",
  name_en: "Holy Basil",
  name_bn: "তুলসি পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 64,
  category: "Medicinal Leaves",
  name_en: "Thankuni Leaves",
  name_bn: "থানকুনি পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 65,
  category: "Leaf & Greens",
  name_en: "Brahmi Greens",
  name_bn: "ব্রাহ্মী শাক",
  unit: "100 GM",
  price: ""
},
{
  
,
{
  id: 66,
  category: "Leaf & Greens",
  name_en: "Helencha Greens",
  name_bn: "হেলেঞ্চা শাক",
  unit: "100 GM",
  price: ""
},
{
  id: 67,
  category: "Medicinal Leaves",
  name_en: "Kulekhara Leaves",
  name_bn: "কুলেখাড়া পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 68,
  category: "Medicinal Leaves",
  name_en: "Khanman Leaves",
  name_bn: "খানমান পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 69,
  category: "Medicinal Leaves",
  name_en: "Neem Leaves",
  name_bn: "নিমপাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 70,
  category: "Leaf & Greens",
  name_en: "Water Lily",
  name_bn: "শাপলা",
  unit: "1 KG",
  price: ""
}
  ,
{
  id: 71,
  category: "Ready-to-Cook",
  name_en: "Cut Water Lily",
  name_bn: "কাটা শাপলা",
  unit: "1 Packet",
  price: ""
},
{
  id: 72,
  category: "Fresh Vegetables",
  name_en: "Fig",
  name_bn: "ডুমুর",
  unit: "1 KG",
  price: ""
},
{
  id: 73,
  category: "Ready-to-Cook",
  name_en: "Cut Fig",
  name_bn: "কাটা ডুমুর",
  unit: "1 Packet",
  price: ""
},
{
  id: 74,
  category: "Fresh Vegetables",
  name_en: "Green Bell Pepper",
  name_bn: "সবুজ সিমলা মরিচ",
  unit: "1 KG",
  price: ""
},
{
  id: 75,
  category: "Fresh Vegetables",
  name_en: "Palm Fruit",
  name_bn: "তাল",
  unit: "1 PCS",
  price: ""
}
  ,
{
  id: 76,
  category: "Ready-to-Cook",
  name_en: "Palm Puree",
  name_bn: "তালের পিউরি",
  unit: "1 Packet",
  price: ""
},
{
  id: 77,
  category: "Medicinal Leaves",
  name_en: "Basak Leaves",
  name_bn: "বাসক পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 78,
  category: "Medicinal Leaves",
  name_en: "Kalmegh Leaves",
  name_bn: "কালমেঘ পাতা",
  unit: "100 GM",
  price: ""
},
{
  id: 79,
  category: "Leaf & Greens",
  name_en: "Red Spinach",
  name_bn: "লাল শাক",
  unit: "1 KG",
  price: ""
},
{
  id: 80,
  category: "Ready-to-Cook",
  name_en: "Cut Red Spinach",
  name_bn: "কাটা লাল শাক",
  unit: "1 Packet",
  price: ""
}

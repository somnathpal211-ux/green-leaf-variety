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
  

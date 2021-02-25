const TEST_DATABASE = {
  "Total Cholesterol": {
    displayName: {
      en: "Total Cholesterol",
      ar: "الكولسترول الكلي",
      hindi:'hindi Cholesterol'
    },
    sliderType: "NHH",
    boderline: 200,
    highThreshold: 240,
    unit: "mg/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "HDL Cholesterol": {
    displayName: {
      en: "HDL Cholesterol",
    },
    sliderType: "LNH",
    lowThreshold: 35,
    highThreshold: 79.5,
    unit: "mg/dL",
    text: {
      en: "Friendly cholesterol HDL reduces your chances of heart disease by removing harmful bad cholesterol.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "LDL Cholesterol": {
    displayName: {
      en: "LDL Cholesterol",
    },
    sliderType: "NHHHH",
    nearOptimal: 100,
    boderline: 130,
    high: 160,
    highThreshold: 190,
    unit: "mg/dL",
    text: {
      en: 'LDL <em>(Low Density Lipoprotein)</em> is "bad" cholesterol because it deposits fat around your blood vessels to cause heart disease.',
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "HDL : LDL ratio": {
    displayName: {
      en: "HDL : LDL ratio",
    },
    sliderType: "LN",
    lowThreshold: 0.33,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "LDL : HDL ratio": {
    displayName: {
      en: "LDL : HDL ratio",
    },
    sliderType: "NH",
    highThreshold: 3,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "APO B : APO A Ratio": {
    displayName: {
      en: "APO B : APO A Ratio",
    },
    sliderType: "NH",
    highThreshold: 0.8,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "APO A : APO B Ratio": {
    displayName: {
      en: "APO A : APO B Ratio",
    },
    sliderType: "NH",
    highThreshold: 1.25,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Apo A": {
    displayName: {
      en: "Apo A",
    },
    sliderType: "LNH",
    lowThreshold: 107,
    highThreshold: 205,
    unit: "mg/dL",
    text: {
      en: "This is the main protein component of HDL Cholestrol.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Triglycerides: {
    displayName: {
      en: "Triglycerides",
      ar: "الدهون الثلاثية",
    },
    sliderType: "NHHH",
    boderline: 150,
    high: 200,
    highThreshold: 500,
    unit: "mg/dL",
    text: {
      en: "The most common type of fat stored in your body, triglycerides rise up in your blood after you have a meal - as your body converts energy which is not needed right away - into fat.",
      ar: "أكثر أنواع الدهون المخزنة شيوعًا في جسمك ، ترتفع الدهون الثلاثية في دمك بعد تناول وجبة - حيث يحول جسمك الطاقة التي لا تحتاج إليها على الفور - إلى دهون.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  VLDL: {
    displayName: {
      en: "VLDL",
    },
    sliderType: "NH",
    highThreshold: 22,
    unit: "mg/dL",
    text: {
      en: "VLDL is made by your liver and is used to carry triglycerides to your tissues.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Apo B": {
    displayName: {
      en: "Apo B",
    },
    sliderType: "LNH",
    lowThreshold: 52,
    highThreshold: 129,
    unit: "mg/dL",
    text: {
      en: "This is the main protein component of VLDL and LDL.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Creatine-Kinase": {
    displayName: {
      en: "Creatine-Kinase",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "U/L",
    text: {
      en: "Creatine Kinase is present in muscle tissues of heart, brain and skeletal muscles. Its lrevel rises when any of the muscles in these tissues are damaged.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Non - HDL Cholesterol": {
    displayName: {
      en: "Non - HDL Cholesterol",
    },
    sliderType: "NH",
    highThreshold: 130,
    unit: "mg/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Total Cholesterol : HDL ratio": {
    displayName: {
      en: "Total Cholesterol : HDL ratio",
    },
    sliderType: "NHH",
    boderline: 3.5,
    highThreshold: 5,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Total Bilirubin": {
    displayName: {
      en: "Total Bilirubin",
    },
    sliderType: "NH",
    highThreshold: 1.2,
    unit: "mg/dL",
    text: {
      en: "Bilirubin is released as a waste product when enzymes in your liver break down old RBCs. It is of two types - <i>indirect</i> and <i>direct</i>.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Direct Bilirubin": {
    displayName: {
      en: "Direct Bilirubin",
    },
    sliderType: "NH",
    highThreshold: 0.3,
    unit: "mg/dL",
    text: {
      en: "Your liver converts indirect bilirubin to direct bilirubin and then sends it to your small intestine. Too much direct bilirubin is also a sign of an unhealthy liver.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Indirect Bilirubin": {
    displayName: {
      en: "Indirect Bilirubin",
    },
    sliderType: "NH",
    highThreshold: 1,
    unit: "mg/dL",
    text: {
      en: "Bilirubin present in your blood is called <em>indirect bilirubin</em>. Too much of it is a sign of an unhealthy liver.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bilirubin (Total)": {
    displayName: {
      en: "Bilirubin (Total)",
    },
    sliderType: "NH",
    highThreshold: 1.2,
    unit: "mg/dL",
    text: {
      en: "Bilirubin is released as a waste product when enzymes in your liver break down old RBCs. It is of two types - <i>indirect</i> and <i>direct</i>.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bilirubin (Direct)": {
    displayName: {
      en: "Bilirubin (Direct)",
    },
    sliderType: "NH",
    highThreshold: 0.3,
    unit: "mg/dL",
    text: {
      en: "Your liver converts indirect bilirubin to direct bilirubin and then sends it to your small intestine. Too much direct bilirubin is also a sign of an unhealthy liver.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bilirubin (Indirect)": {
    displayName: {
      en: "Bilirubin (Indirect)",
    },
    sliderType: "NH",
    highThreshold: 1,
    unit: "mg/dL",
    text: {
      en: "Bilirubin present in your blood is called <em>indirect bilirubin</em>. Too much of it is a sign of an unhealthy liver.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "SGOT (AST)": {
    displayName: {
      en: "SGOT (AST)",
    },
    sliderType: "NHH",
    boderline: 15,
    highThreshold: 37,
    unit: "IU/L",
    text: {
      en: "SGOT is normally present in your heart, liver, muscles, brain and kidneys. It's released into the blood whenever any of those tissues are damaged.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "SGPT (ALT)": {
    displayName: {
      en: "SGPT (ALT)",
    },
    sliderType: "NH",
    highThreshold: 49,
    unit: "IU/L",
    text: {
      en: "SGPT is mostly concentrated in your liver and is a vital indicator of your liver's health.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  GGT: {
    displayName: {
      en: "GGT",
    },
    sliderType: "NH",
    highThreshold: 0,
    unit: "IU/L",
    text: {
      en: "GGT <i>(Gamma-Glutamyl Transferase)</i> is the most sensitive enzyme of your liver. It rises whenever there is an obstruction in the passage between your liver and intestine. Regular alcohol drinking increases GGT levels.",
    },
    tips: {
      tipsHeader: {
        en: "Some causes for a high GGT level",
      },
      tipsSvg: ["alcohol-grey.svg", "pills-grey.svg"],
      tipsSvgText: {
        en: ["Alcohol, Smoking", "Certain medicines - ask your doctor"],
      },
    },
  },
  ALP: {
    displayName: {
      en: "ALP",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "IU/L",
    text: {
      en: "ALP rises both in case of liver and bone diseases. Your doctor can tell if it's because of damaged tissues in your bone or those in your liver.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  LDH: {
    displayName: {
      en: "LDH",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "U/L",
    text: {
      en: "This enzyme is found in many organs, including liver. It is mainly responsible for converting sugar into energy.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Protein (Total)": {
    displayName: {
      en: "Protein (Total)",
    },
    sliderType: "LNH",
    lowThreshold: 5.7,
    highThreshold: 8.2,
    unit: "g/dL",
    text: {
      en: "Proteins help in your overall growth and development, and also transport important substances through your blood.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Albumin: {
    displayName: {
      en: "Albumin",
    },
    sliderType: "LNH",
    lowThreshold: 3.2,
    highThreshold: 4.6,
    unit: "g/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Globulin: {
    displayName: {
      en: "Globulin",
    },
    sliderType: "LNH",
    lowThreshold: 2.3,
    highThreshold: 3.5,
    unit: "g/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Albumin : Globulin ratio": {
    displayName: {
      en: "Albumin : Globulin ratio",
    },
    sliderType: "LNH",
    lowThreshold: 1.1,
    highThreshold: 2.2,
    unit: "",
    text: {
      en: "Sometimes abbreviated as <i>A/G ratio</i>, this is simply the amount of albumin <em>divided by</em> the amount of globulin.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Serum Creatinine": {
    displayName: {
      en: "Serum Creatinine",
    },
    sliderType: "LNH",
    lowThreshold: 0.5,
    highThreshold: 1.1,
    unit: "mg/dL",
    text: {
      en: "Creatinine is a waste product that your kidneys regularly remove from your body. A high level of creatinine in your blood simply means your kidneys are not functioning properly.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Uric Acid": {
    displayName: {
      en: "Uric Acid",
    },
    sliderType: "LNH",
    lowThreshold: 2.6,
    highThreshold: 6,
    unit: "mg/dL",
    text: {
      en: "Uric Acid is another waste product in your body. High levels of uric acid can lead to problems like gout (a form of arthritis that causes intense pain in joints) and kidney stones.",
    },
    tips: {
      tipsHeader: {
        en: "Some causes for a high uric acid level",
      },
      tipsSvg: ["alcohol-grey.svg", "lose-weight.svg", "pills-grey.svg"],
      tipsSvgText: {
        en: ["Alcohol, high-fat dairy, fast foods", '"Crash diets", over-fasting', "Certain medicines - ask your doctor"],
      },
    },
  },
  "Blood Urea": {
    displayName: {
      en: "Blood Urea",
    },
    sliderType: "LNH",
    lowThreshold: 13,
    highThreshold: 43,
    unit: "mg/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  BUN: {
    displayName: {
      en: "BUN",
    },
    sliderType: "LNH",
    lowThreshold: 6,
    highThreshold: 20,
    unit: "mg/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Urea : Creatinine ratio": {
    displayName: {
      en: "Urea : Creatinine ratio",
    },
    sliderType: "LNH",
    lowThreshold: 20,
    highThreshold: 35,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "BUN : Creatinine ratio": {
    displayName: {
      en: "BUN : Creatinine ratio",
    },
    sliderType: "LNH",
    lowThreshold: 10,
    highThreshold: 20,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  TSH: {
    displayName: {
      en: "TSH",
    },
    sliderType: "LNH",
    lowThreshold: 0.35,
    highThreshold: 5.5,
    unit: "μIU/mL",
    text: {
      en: "TSH <em>(Thyroid Stimulating Hormone)</em> checks the level of T3 and T4 - two hormones made by the thyroid gland. TSH ensures that both of these are present in your body in the right amounts.<br><br> When T3 and T4 become too less &rarr; TSH is <em>activated</em> to secrete more T3 and T4 <br> When T3 and T4 become too high &rarr; TSH is <em>deactivated</em> to stop secretion of T3 and T4",
      hi: "TSH (थायरॉइड स्टिमुलेटिंग हार्मोन) T3 और T4 के स्तर की जांच करता है - थायरॉयड ग्रंथि द्वारा बनाए गए दो हार्मोन। टीएसएच सुनिश्चित करता है कि ये दोनों आपके शरीर में सही मात्रा में मौजूद हैं। <br/><br/> जब T3 और T4 बहुत कम हो जाते हैं &rarr; TSH  सक्रिय  अधिक T3 और T4 स्रावित करने के लिए <br/> जब T3 और T4 बहुत अधिक हो जाते हैं &rarr; टीएस 3 और टी 4 के स्राव को रोकने के लिए टीएसएच निष्क्रिय है",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "T3 (Triiodothyronine)": {
    displayName: {
      en: "T3 (Triiodothyronine)",
      hi: "T3 ( ट्राईआयोडोथायरोनिन )",
    },
    sliderType: "LNH",
    lowThreshold: 0.8,
    highThreshold: 2,
    unit: "ng/mL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "T4 (Thyroxine)": {
    displayName: {
      en: "T4 (Thyroxine)",
      hi: "T4 ( थाइरॉक्सिन )",
    },
    sliderType: "LNH",
    lowThreshold: 3.2,
    highThreshold: 12.6,
    unit: "μg/dL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Blood Sugar (Fasting)": {
    displayName: {
      en: "Blood Sugar (Fasting)",
    },
    sliderType: "LNH",
    lowThreshold: 60,
    highThreshold: 110,
    unit: "mg/dL",
    text: {
      en: "The amount of glucose in your blood continuously changes - it sometimes goes up and sometimes comes down. But that depends on a lot of things. For example, your food timings affect the amount of glucose. That is why fasting is required for this test.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Amylase: {
    displayName: {
      en: "Amylase",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 80,
    unit: "U/L",
    text: {
      en: "Amylase is a chemical in your saliva that helps in the digestion of some foods (like corn, potatoes and other starchy foods). That's how it affects your body's metabolism.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Blood Sugar (Postprandial)": {
    displayName: {
      en: "Blood Sugar (Postprandial)",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "mg/dL",
    text: {
      en: "Post prandial measure your blood sugar level just after you eat, preferably after <i>2 hours</i>. If you have consistenly high blood glucose on 2 separate occassions, it might indicate diabetes.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Blood Sugar (Random)": {
    displayName: {
      en: "Blood Sugar (Random)",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "mg/dL",
    text: {
      en: "This refers to the amount of glucose in your blood at any random time of the day and has no relation with what time you ate your last meal. If the levels are high, your doctor may order follow-up tests like <i>Blood Sugar (fasting), Glucose Tolerance Test</i>.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Insulin (Fasting)": {
    displayName: {
      en: "Insulin (Fasting)",
    },
    sliderType: "LNH",
    lowThreshold: 60,
    highThreshold: 110,
    unit: "mg/dL",
    text: {
      en: "The amount of insulin in your blood continuously changes - it sometimes goes up and sometimes comes down. But that depends on a lot of things. For example, your food timings affect the amount of insulin. That is why fasting is required for this test.",
    },
    tips: {
      tipsHeader: {
        en: "Meal Suggestions",
      },
      tipsSvg: ["potatoes.svg", "apple.svg", "lose-weight.svg"],
      tipsSvgText: {
        en: ["Low carb diet- avoid potato, white rice and fried food ", "Choose from high fiber food like apple, cauliflower ", "Watch portion size- do not eat a heavy meal at once "],
      },
    },
  },
  "Insulin (Postprandial)": {
    displayName: {
      en: "Insulin (Postprandial)",
    },
    sliderType: "LNH",
    lowThreshold: 123,
    highThreshold: 234,
    unit: "mg/dL",
    text: {
      en: "Post prandial measure your insulin just after you eat, preferably after <i>2 hours</i>.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  CRP: {
    displayName: {
      en: "CRP",
    },
    sliderType: "NH",
    highThreshold: 6,
    unit: "mg/L",
    text: {
      en: "CRP <em>(C-Reactive Protein)</em> is a very sensitive test, as it rises rapidly (within minutes) when there's a sudden injury in your tissues.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "RA factor (quantitative)": {
    displayName: {
      en: "RA factor (quantitative)",
    },
    sliderType: "NH",
    highThreshold: 20,
    unit: "IU/mL",
    text: {
      en: "Some proteins produced in your body mistakenly attack perfectly healthy tissues in your own body. This test measures the amount of such protein in your body. Out of all patients who have Rheumatoid Arthritis, 80% of them have high levels of RA factor.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "ASO (quantitative)": {
    displayName: {
      en: "ASO (quantitative)",
    },
    sliderType: "NH",
    highThreshold: 200,
    unit: "IU/mL",
    text: {
      en: "ASO <i>(Antistreptolysin O)</i> is an antibody which rises when there is an infection in your joints.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Haemoglobin: {
    displayName: {
      en: "Haemoglobin",
    },
    sliderType: "LNH",
    lowThreshold: 11.5,
    highThreshold: 16.5,
    unit: "g/dL",
    text: {
      en: "This is the protein found in your RBCs. It gives blood its red color.",
    },
    tips: {
      tipsHeader: {
        en: "Foods that help increasing haemoglobin",
      },
      tipsSvg: ["spinach.svg", "citrus-fruits-grey.svg", "sweet-potato.svg"],
      tipsSvgText: {
        en: ["Spinach, Broccoli, Green Beans", "Orange, Lemon, Kiwifruit", "Sweet Potatoes, Carrots"],
      },
    },
  },
  Iron: {
    displayName: {
      en: "Iron",
    },
    sliderType: "LNH",
    lowThreshold: 50,
    highThreshold: 170,
    unit: "ug/dL",
    text: {
      en: "Iron in haemoglobin is responsible for carrying oxygen throughout your body. Symptoms of iron deficiency (most common being <i>tiredness</i>) are not seen for years and may go unnoticed.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  TIBC: {
    displayName: {
      en: "TIBC",
    },
    sliderType: "LNH",
    lowThreshold: 228,
    highThreshold: 428,
    unit: "μg/dL",
    text: {
      en: "TIBC <em>(Total Iron-Binding Capacity)</em> is the total amount of iron that can be bound by proteins in your blood.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  UIBC: {
    displayName: {
      en: "UIBC",
    },
    sliderType: "LNH",
    lowThreshold: 110,
    highThreshold: 370,
    unit: "μg/dL",
    text: {
      en: "UIBC <em>(Unsaturated Iron Binding Capacity)</em> is the measure of reserve iron binding capacity.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Ferritin: {
    displayName: {
      en: "Ferritin",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "ng/mL",
    text: {
      en: "Ferritin isn’t the same thing as iron in your body. Instead, ferritin is a protein that stores iron, releasing it when your body needs it. Ferritin usually lives in your body’s cells, with very little actually circulating in your blood.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Transferrin Serum": {
    displayName: {
      en: "Transferrin Serum",
    },
    sliderType: "LNH",
    lowThreshold: 215,
    highThreshold: 365,
    unit: "mg/dL",
    text: {
      en: "Iron is present in the plasma primarily bound to transferrin. The level of transferrin depends on liver function and nutrition.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "% Saturation Transferrin": {
    displayName: {
      en: "% Saturation Transferrin",
    },
    sliderType: "LNH",
    lowThreshold: 16,
    highThreshold: 50,
    unit: "%",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "RBC count": {
    displayName: {
      en: "RBC count",
    },
    sliderType: "LNH",
    lowThreshold: 3.5,
    highThreshold: 5.5,
    unit: "million cells/μL",
    text: {
      en: "The number of <i>red blood cells</i> in 1 microlitre of your blood.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Haematocrit: {
    displayName: {
      en: "Haematocrit",
    },
    sliderType: "LNH",
    lowThreshold: 35,
    highThreshold: 45,
    unit: "%",
    text: {
      en: "Haematocrit means <em>how much of your blood is made up of RBCs</em>. Haematocrit is sometimes also called <em>PCV (Packed Cell Volume).</em>",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  MCV: {
    displayName: {
      en: "MCV",
    },
    sliderType: "LNH",
    lowThreshold: 80,
    highThreshold: 100,
    unit: "fL",
    text: {
      en: "MCV <i>(Mean Corpuscular Volume)</i> is the <em>size</em> of your RBCs.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  MCH: {
    displayName: {
      en: "MCH",
    },
    sliderType: "LNH",
    lowThreshold: 27,
    highThreshold: 31,
    unit: "pg",
    text: {
      en: "MCH <i>(Mean Corpuscular Haemoglobin)</i> is the amount of haemoglobin per RBC.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  MCHC: {
    displayName: {
      en: "MCHC",
    },
    sliderType: "LNH",
    lowThreshold: 33,
    highThreshold: 37,
    unit: "g/dL",
    text: {
      en: "MCHC <i>(Mean Corpuscular Haemoglobin Concentration)</i> is the amount of haemoglobin relative to the size of the cell (haemoglobin concentration) per RBC.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Content Haemoglobin (CH)": {
    displayName: {
      en: "Content Haemoglobin (CH)",
    },
    sliderType: "LNH",
    lowThreshold: 22,
    highThreshold: 33,
    unit: "fL",
    text: {
      en: "pg",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Total Leukocyte Count": {
    displayName: {
      en: "Total Leukocyte Count",
    },
    sliderType: "LNH",
    lowThreshold: 4,
    highThreshold: 10,
    unit: "x10^9 cells/L",
    text: {
      en: "<i>Leukocyte</i> is another name for <i>WBC (white blood cell).</i> WBCs are your body's 'defense department' -  they respond immediately to infections by visiting the affected site(s) in your body. Too many WBCs might be because of some infection and too few WBCs also indicates some other problems in your body.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Platelet Count": {
    displayName: {
      en: "Platelet Count",
    },
    sliderType: "LNH",
    lowThreshold: 150,
    highThreshold: 400,
    unit: "10^3 cells/mm³",
    text: {
      en: "Platelets are tiny plate-like cells in your blood that try to stop bleeding. Whenever you get a cut or bleed, platelets rush to that place and stick together - this stops more blood from flowing out. This is <em>clotting</em>.",
    },
    tips: {
      tipsHeader: {
        en: "Foods that help increasing platelet count",
      },
      tipsSvg: ["spinach.svg", "fish.svg", "citrus-fruits-grey.svg"],
      tipsSvgText: {
        en: ["Spinach, dark-green leafy vegetables", "Fish, eggs, poultry", "Orange, Lemon, Kiwifruit"],
      },
    },
  },
  "Mean Platelet Component (MPC)": {
    displayName: {
      en: "Mean Platelet Component (MPC)",
    },
    sliderType: "NH",
    highThreshold: 40,
    unit: "g/dl",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Mean Platelet Mass (MPM)": {
    displayName: {
      en: "Mean Platelet Mass (MPM)",
    },
    sliderType: "LNH",
    lowThreshold: 7.5,
    highThreshold: 11.5,
    unit: "fl",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  MPV: {
    displayName: {
      en: "MPV",
    },
    sliderType: "LNH",
    lowThreshold: 6,
    highThreshold: 11,
    unit: "fL",
    text: {
      en: "MPV <i>(Mean Platelet Volume)</i> shows the average size of your platelets.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  PDW: {
    displayName: {
      en: "PDW",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "%",
    text: {
      en: "PDW <i>(Platelet Distribution Width)</i> test measures variation in the size of your platelets.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "PDW - SD": {
    displayName: {
      en: "PDW - SD",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "fL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Large Unstained Cell": {
    displayName: {
      en: "Large Unstained Cell",
    },
    sliderType: "NH",
    highThreshold: 4,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Absolute Large Unstained Cell": {
    displayName: {
      en: "Absolute Large Unstained Cell",
    },
    sliderType: "NH",
    highThreshold: 0.4,
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  PCT: {
    displayName: {
      en: "PCT",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "%",
    text: {
      en: "PCT <i>(Plateletcrit)</i> tells you what percentage of your blood is made up of platelets.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Specific Gravity": {
    displayName: {
      en: "Specific Gravity",
    },
    sliderType: "LNH",
    lowThreshold: 1.01,
    highThreshold: 1.025,
    unit: "",
    text: {
      en: "This test compares the density of water to the density of your urine. This helps in checking how well your kidneys are diluting urine. A high value in this test means your urine is too concentrated.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  pH: {
    displayName: {
      en: "pH",
    },
    sliderType: "LNH",
    lowThreshold: 5.5,
    highThreshold: 6.5,
    unit: "",
    text: {
      en: "pH checks the acidity or alkalinity of your urine. Many diseases, diets and medicines change the pH of urine. A high or low pH might indicate kidney stones (a condition where small masses of mineral accumulate in the kidneys). Diet changes are best to take care of pH.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Urinary Calcium": {
    displayName: {
      en: "Urinary Calcium",
    },
    sliderType: "LNH",
    lowThreshold: 1.5,
    highThreshold: 9,
    unit: "mmol/L",
    text: {
      en: "This test is used to check how much calcium is passed out of the body through urine. Body releases calcium in the urine when the calcium gets too high. High calcium can also lead to kidney stones.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  B12: {
    displayName: {
      en: "B12",
      hindi: "बी 12",
    },
    sliderType: "LNH",
    lowThreshold: 211,
    highThreshold: 911,
    unit: "pg/mL",
    text: {
      en: "Vitamin B12 is required for making RBCs and it also helps your brain work well. Your body can store it in your liver for up to 4 years.",
      hindi: "लाल रक्त कोशिका बनाने के लिए विटामिन बी 12 की आवश्यकता होती है और यह आपके मस्तिष्क को अच्छी तरह से काम करने में भी मदद करता है। आपका शरीर इसे अपने जिगर में 4 साल तक संग्रहीत कर सकता है।",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in vitamin B12",
        hindi: "विटामिन बी 12 से भरपूर खाद्य पदार्थ",
      },
      tipsSvg: ["milk-products.svg", "fish.svg", "two-eggs.svg"],
      tipsSvgText: {
        en: ["Milk, Cheese, Ghee, Curd, Paneer, Butter", "Fish, Shellfish, Chicken", "Eggs, Poultry"],
        hindi: ["दूध, पनीर, घी, दही, पनीर, मक्खन", "मछली, शंख, चिकन", "अंडा, मुर्गी पालन"],
      },
    },
  },
  Sodium: {
    displayName: {
      en: "Sodium",
    },
    sliderType: "LNH",
    lowThreshold: 135,
    highThreshold: 150,
    unit: "mmol/L",
    text: {
      en: "Excess sodium causes high blood pressure. During athletic activity, your body loses sodium through your sweat.",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in sodium",
      },
      tipsSvg: ["spoon-grey.svg", "cheese.svg"],
      tipsSvgText: {
        en: ["Salt", "Cheese"],
      },
    },
  },
  Potassium: {
    displayName: {
      en: "Potassium",
    },
    sliderType: "LNH",
    lowThreshold: 3.5,
    highThreshold: 5,
    unit: "mmol/L",
    text: {
      en: "Eating potassium-rich foods removes excess sodium, ensuring your blood pressure doesn't become too high.",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in potassium",
      },
      tipsSvg: ["milk-products.svg"],
      tipsSvgText: {
        en: ["Milk Products"],
      },
    },
  },
  Chloride: {
    displayName: {
      en: "Chloride",
    },
    sliderType: "LNH",
    lowThreshold: 94,
    highThreshold: 110,
    unit: "mmol/L",
    text: {
      en: "Chloride helps move fluids in and out of your body cells. It's also an essential component of digestive juices.",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in chloride",
      },
      tipsSvg: ["spoon-grey.svg", "tomato.svg"],
      tipsSvgText: {
        en: ["Salt", "Tomatoes"],
      },
    },
  },
  Calcium: {
    displayName: {
      en: "Calcium",
    },
    sliderType: "LNH",
    lowThreshold: 8.6,
    highThreshold: 10.2,
    unit: "mg/dL",
    text: {
      en: "Low levels of calcium can lead to problems in blood clotting and osteoarthritis.",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in calcium",
      },
      tipsSvg: ["milk-products.svg", "cabbage.svg"],
      tipsSvgText: {
        en: ["Milk Products", "Cabbage"],
      },
    },
  },
  "Ionized Calcium": {
    displayName: {
      en: "Ionized Calcium",
    },
    sliderType: "LNH",
    lowThreshold: 4.4,
    highThreshold: 5.4,
    unit: "mg/dL",
    text: {
      en: "Ionized calcium is calcium in your blood that is not attached to proteins. It is also called free calcium. Among the different forms of calcium in your body, it is the most actively utilised in your bodily functions.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Non Ionized Calcium": {
    displayName: {
      en: "Non Ionized Calcium",
    },
    sliderType: "LNH",
    lowThreshold: 4.4,
    highThreshold: 5.4,
    unit: "mg/dL",
    text: {
      en: "This is the other form of calcium in your body, which is bound to various proteins. It is not as actively used in bodily functions as ionized calcium.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Phosphorus: {
    displayName: {
      en: "Phosphorus",
    },
    sliderType: "LNH",
    lowThreshold: 2.5,
    highThreshold: 4.5,
    unit: "mg/dL",
    text: {
      en: "Symptoms of phosphorus deficiency are seen only in case of low levels.",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in phosphorus",
      },
      tipsSvg: ["bananas.svg", "almond.svg"],
      tipsSvgText: {
        en: ["Bananas", "Almonds"],
      },
    },
  },
  Magnesium: {
    displayName: {
      en: "Magnesium",
    },
    sliderType: "LNH",
    lowThreshold: 1.6,
    highThreshold: 2.6,
    unit: "mg/dL",
    text: {
      en: "The symptoms of low magnesium show only when the levels are severely low.",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in magnesium",
      },
      tipsSvg: ["spinach.svg", "peanut.svg"],
      tipsSvgText: {
        en: ["Spinach", "Peanuts"],
      },
    },
  },
  "HbA1c (Glycosylated Haemoglobin)": {
    displayName: {
      en: "HbA1c (Glycosylated Haemoglobin)",
    },
    sliderType: "NHH",
    boderline: 6,
    highThreshold: 7,
    unit: "%",
    text: {
      en: 'The most common test in this panel is HbA1c - <em>"Hb"</em> stands for haemoglobin and <em>"A1c"</em> is one of the different forms of haemoglobin. This test tells you how much glucose there was in your blood in the last 2-3 months.',
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: ["apple.svg", "cabbage.svg"],
      tipsSvgText: {
        en: ["Apples", "Cabbage"],
      },
    },
  },
  "eAG (Estimated Average Glucose)": {
    displayName: {
      en: "eAG (Estimated Average Glucose)",
    },
    sliderType: "NHH",
    boderline: 125.5,
    highThreshold: 154.2,
    unit: "ng/mL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: ["apple.svg", "cabbage.svg"],
      tipsSvgText: {
        en: ["Apples", "Cabbage"],
      },
    },
  },
  Neutrophils: {
    displayName: {
      en: "Neutrophils",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 75,
    unit: "%",
    text: {
      en: "Neutrophils are the most abundant WBCs. They get to the injury site within minutes, making up much of the pus.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Abs. Neutrophil Count": {
    displayName: {
      en: "Abs. Neutrophil Count",
    },
    sliderType: "LNH",
    lowThreshold: 2000,
    highThreshold: 7000,
    unit: "cells/uL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Eosinophils: {
    displayName: {
      en: "Eosinophils",
    },
    sliderType: "LNH",
    lowThreshold: 1,
    highThreshold: 6,
    unit: "%",
    text: {
      en: "Eosinophils are involved in allergic reactions and can attack multicellular parasites, such as worms.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Abs. Eosinophil Count": {
    displayName: {
      en: "Abs. Eosinophil Count",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/uL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Absolute Eosinophil Count": {
    displayName: {
      en: "Absolute Eosinophil Count",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/uL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Basophils: {
    displayName: {
      en: "Basophils",
    },
    sliderType: "NH",
    highThreshold: 1.5,
    unit: "%",
    text: {
      en: "Basophils are also involved in allergic reactions and prevent blood from clotting.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Abs. Basophil Count": {
    displayName: {
      en: "Abs. Basophil Count",
    },
    sliderType: "NH",
    highThreshold: 100,
    unit: "cells/mL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Abs. Lymphocyte Count": {
    displayName: {
      en: "Abs. Lymphocyte Count",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/μL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Abs. Monocyte Count": {
    displayName: {
      en: "Abs. Monocyte Count",
    },
    sliderType: "LNH",
    lowThreshold: 200,
    highThreshold: 1000,
    unit: "cells/μL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Lymphocytes: {
    displayName: {
      en: "Lymphocytes",
    },
    sliderType: "LNH",
    lowThreshold: 20,
    highThreshold: 40,
    unit: "%",
    text: {
      en: "Lymphocytes play a major role in your immune system. A temporary increase may be harmless and due to a small infection.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Monocytes: {
    displayName: {
      en: "Monocytes",
    },
    sliderType: "LNH",
    lowThreshold: 2,
    highThreshold: 10,
    unit: "%",
    text: {
      en: "Monocytes are the largest WBCs. They're increased by the body as the second line of defence (first being physical barriers like skin, saliva).",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "RDW-CV": {
    displayName: {
      en: "RDW-CV",
    },
    sliderType: "LNH",
    lowThreshold: 11.6,
    highThreshold: 14.6,
    unit: "%",
    text: {
      en: "RDW <i>(Red cell Distribution Width)</i> indicates the size differences in RBCs. A high RDW could mean vitamin or mineral deficiencies.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "RDW-SD": {
    displayName: {
      en: "RDW-SD",
    },
    sliderType: "LNH",
    lowThreshold: 39,
    highThreshold: 46,
    unit: "fL",
    text: {
      en: "RDW - SD <i>(Red cell Distribution Width - Standard Deviation)</i> is used in predicting anemia early as it rises before other RBC parameters change significantly.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  ESR: {
    displayName: {
      en: "ESR",
    },
    sliderType: "NH",
    highThreshold: 20,
    unit: "mm/1sthr",
    text: {
      en: "ESR <em>(Erythrocyte Sedimentation Rate)</em> is the speed at which red blood cells settle down at the bottom of the test tube. Increased concentration means inflammation in the body, though not specific to arthritis.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Microalbumin: {
    displayName: {
      en: "Microalbumin",
    },
    sliderType: "POSITIVE_NEGETIVE_UNIQUE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
      hindi:'text in hindi'
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Glucose in Urine": {
    displayName: {
      en: "Glucose in Urine",
    },
    sliderType: "POSITIVE_NEGETIVE_UNIQUE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Urine Colour": {
    displayName: {
      en: "Urine Colour",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["yellow", "pale yellow", "colourless"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Appearance: {
    displayName: {
      en: "Appearance",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["clear"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  VOLUME: {
    displayName: {
      en: "VOLUME",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Pus: {
    displayName: {
      en: "Pus",
    },
    sliderType: "NH",
    highThreshold: 5,
    unit: "",
    text: {
      en: "Presence of pus cells might indicate urinary tract infection and a doctor should be consulted.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Epithelial: {
    displayName: {
      en: "Epithelial",
    },
    sliderType: "NH",
    highThreshold: 5,
    unit: "",
    text: {
      en: "Presence of epithelial cells might indicate urinary tract infection or other kidney problems.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Urobilinogen: {
    displayName: {
      en: "Urobilinogen",
    },
    sliderType: "POSITIVE_NEGETIVE_UNIQUE",
    normalValue: "positive",
    unit: "",
    text: {
      en: "Urobilinogen is formed from the reduction of bilirubin. If there is little or no urobilinogen, your liver might not be working properly. Too high urobilinogen could mean hepatitis.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Protein: {
    displayName: {
      en: "Protein",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Ketone: {
    displayName: {
      en: "Ketone",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bile Salts": {
    displayName: {
      en: "Bile Salts",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bile Pigments": {
    displayName: {
      en: "Bile Pigments",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Blood: {
    displayName: {
      en: "Blood",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Nitrite: {
    displayName: {
      en: "Nitrite",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Casts: {
    displayName: {
      en: "Casts",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Crystals: {
    displayName: {
      en: "Crystals",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bacteria ": {
    displayName: {
      en: "Bacteria ",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Yeast cells": {
    displayName: {
      en: "Yeast cells",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Bile Pigment": {
    displayName: {
      en: "Bile Pigment",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Bilirubin: {
    displayName: {
      en: "Bilirubin",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Absorbic Acid": {
    displayName: {
      en: "Absorbic Acid",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  RBC: {
    displayName: {
      en: "RBC",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Bacteria: {
    displayName: {
      en: "Bacteria",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Leukocytes: {
    displayName: {
      en: "Leukocytes",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Sugar in Urine": {
    displayName: {
      en: "Sugar in Urine",
    },
    sliderType: "POSITIVE_NEGETIVE_UNIQUE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Other compounds in Urine": {
    displayName: {
      en: "Other compounds in Urine",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Candida in Urine": {
    displayName: {
      en: "Candida in Urine",
    },
    sliderType: "POSITIVE_NEGETIVE",
    normalValue: "negetive",
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Vitamin D (25-Hydroxy)": {
    displayName: {
      en: "Vitamin D (25-Hydroxy)",
    },
    sliderType: "LLNH",
    lowThreshold: 20,
    boderline: 40,
    highThreshold: 100,
    unit: "ng/mL",
    text: {
      en: 'Known as the "sunshine vitamin", Vitamin D is produced by your skin when exposed to sunlight. Vitamin D is essential for strong bones - it helps your body use calcium from the diet. Thus, low vitamin D increases the chances of fracture and may also increase the chances of diabetes and heart disease. Women above the age of 50 should specifically come out of a Vitamin D deficiency because the chances of osteoporosis are very high for such women',
    },
    tips: {
      tipsHeader: {
        en: "Vitamin-D Tips",
      },
      tipsSvg: ["sunGrey.svg", "pills-grey.svg"],
      tipsSvgText: {
        en: ["<u>Get some sun</u>: Expose your skin to the sun for a limited time. Sunlight creates Vitamin D in our body but the process depends on several factors.", "<u>Consider supplements</u>: Ask your doctor if Vitamin D supplements or eating foods fortified with Vitamin D are right for you."],
      },
    },
  },
  "VITAMIN D 25, HYDROXY": {
    displayName: {
      en: "VITAMIN D 25, HYDROXY",
    },
    sliderType: "LLNH",
    lowThreshold: 25,
    boderline: 75,
    highThreshold: 250,
    text: {
      en: 'Known as the "sunshine vitamin", Vitamin D is produced by your skin when exposed to sunlight. Vitamin D is essential for strong bones - it helps your body use calcium from the diet. Thus, low vitamin D increases the chances of fracture and may also increase the chances of diabetes and heart disease. Women above the age of 50 should specifically come out of a Vitamin D deficiency because the chances of osteoporosis are very high for such women',
    },
    tips: {
      tipsHeader: {
        en: "Vitamin-D Tips",
      },
      tipsSvg: ["sunGrey.svg", "pills-grey.svg"],
      tipsSvgText: {
        en: ["<u>Get some sun</u>: Expose your skin to the sun for a limited time. Sunlight creates Vitamin D in our body but the process depends on several factors.", "<u>Consider supplements</u>: Ask your doctor if Vitamin D supplements or eating foods fortified with Vitamin D are right for you."],
      },
    },
  },
  B9: {
    displayName: {
      en: "B9",
      hi: "बी 9",
    },
    sliderType: "LLN",
    lowThreshold: 3.38,
    boderline: 5.38,
    unit: "ng/mL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "Foods rich in Vitamin B9",
        hi: "विटामिन बी 9 से भरपूर खाद्य पदार्थ",
      },
      tipsSvg: ["spinach.svg", "papaya.svg"],
      tipsSvgText: {
        en: ["Spinach, Cabbage, Cauliflower, Lettuce", "Papaya, Orange, Grapefruit, Guava"],
        hi: ["पालक, गोभी, फूलगोभी, लेट्यूस", "पपीता, अंगूर, अमरूद"],
      },
    },
  },
  "Glomerular Filtration Rate": {
    displayName: {
      en: "Glomerular Filtration Rate",
    },
    sliderType: "LLLLN",
    lowThreshold: 15,
    tooLow: 30,
    low: 60,
    boderline: 90,
    unit: "mL / min / 1.73 m²",
    text: {
      en: "GFR <em>(Glomerular Filtration Rate)</em> is the best test to check how quickly your kidneys are removing waste from your body.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "P-LCR": {
    displayName: {
      en: "P-LCR",
    },
    sliderType: "LNH",
    lowThreshold: 15,
    highThreshold: 35,
    unit: "%",
    text: {
      en: "P-LCR <i>(Platelet Large Cell Ratio)</i> is the percentage of platelets that are bigger than normal (normal volume is 12 fL).",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "P-LCC": {
    displayName: {
      en: "P-LCC",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Immature Granulocytes": {
    displayName: {
      en: "Immature Granulocytes",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Abs. Immature Granulocytes": {
    displayName: {
      en: "Abs. Immature Granulocytes",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Urinary Creatinine": {
    displayName: {
      en: "Urinary Creatinine",
    },
    sliderType: "LNH",
    lowThreshold: 0,
    highThreshold: 0,
    unit: "mmol/L",
    text: {
      en: "A healthy kidney removes creatinine from your blood and it leaves through your urine. Abnormal levels of creatinine in the urine might indicate issues with your kidneys.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Blood Group": {
    displayName: {
      en: "Blood Group",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Rh Factor": {
    displayName: {
      en: "Rh Factor",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Serum PSA Total": {
    displayName: {
      en: "Serum PSA Total",
    },
    sliderType: "NH",
    highThreshold: 4,
    unit: "ng/mL",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "PT TEST": {
    displayName: {
      en: "PT TEST",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "PT (Control)": {
    displayName: {
      en: "PT (Control)",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "PT-INR": {
    displayName: {
      en: "PT-INR",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "PT ratio": {
    displayName: {
      en: "PT ratio",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  ISI: {
    displayName: {
      en: "ISI",
    },
    sliderType: "NORMAL_VALUES",
    normalValue: ["any"],
    unit: "",
    text: {
      en: "",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "CA 19-9": {
    displayName: {
      en: "CA 19-9",
    },
    sliderType: "NH",
    highThreshold: 6,
    unit: "mg/L",
    text: {
      en: "This test measures the amount of a protein called CA 19-9 in the blood.Presence of this CA 19-9 protein in high quantities can indicate the presence of pancreatic cancer.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "CA 125": {
    displayName: {
      en: "CA 125",
    },
    sliderType: "NH",
    highThreshold: 6,
    unit: "mg/L",
    text: {
      en: "This test measures the amount of a protein called CA-125 (cancer antigen 125) in the blood.CA-125 levels are high in many women with ovarian cancer. ",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "CA 15-3": {
    displayName: {
      en: "CA 15-3",
    },
    sliderType: "NH",
    highThreshold: 6,
    unit: "mg/L",
    text: {
      en: "This test measures the amount of protein called Cancer antigen 15-3 (CA 15-3), which is produced by normal breast cells. In many people with cancerous breast tumors, there is an increased production of CA 15-3.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  Testosterone: {
    displayName: {
      en: "Testosterone",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/uL",
    text: {
      en: "<strong>Testosterone</strong> is a sex hormone and is involved in variety of functions in males like regulation of sex drive, sperm production, fat distribution, bone & muscles mass and strength. Low levels might lead to depression, low sex drive, moodiness decreased overall energy.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },

  Prolactin: {
    displayName: {
      en: "Prolactin",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/uL",
    text: {
      en: "<strong>Prolactin</strong> also known as 'milk hormone', is responsible for secretion of milk after pregnancy. This also has role in immune function and other behaviours in humans. ",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Leutinizing Harmone": {
    displayName: {
      en: "Leutinizing Harmone",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/uL",
    text: {
      en: "This hormones control function of reproductive organs <br/><strong>Ovaries in females </strong>: responsible for production of egg, regulation of menstrual cycle,<br/> <strong>Testes in males</strong>:responsible for secretion pf testosterone (male hormone) required for sperrm production.<br/> Both too little and too high level of LH can lead to reduced fertility in males and females.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
  "Beta HCG": {
    displayName: {
      en: "Beta HCG",
    },
    sliderType: "LNH",
    lowThreshold: 40,
    highThreshold: 440,
    unit: "cells/uL",
    text: {
      en: "HCG is a hormone produced by placenta (provides nutrients and oxygen to growing baby in a pregnant woman). This test confirms pregnancy, as its level rises rapidly each week of pregnancy. If the rate rises slower than usual, it might indicate some issues-- consult your doctor if so. <br/> False positive and negative might be due to too dilute urine or certain drugs. Ask your doctor.",
    },
    tips: {
      tipsHeader: {
        en: "",
      },
      tipsSvg: [],
      tipsSvgText: {
        en: [],
      },
    },
  },
};

//what changes for each client
const TEST_DATABASE_MAPPING = {
  "TOTAL CHOLESTEROL SERUM": "Total Cholesterol",
  "Total Cholesterol": "Total Cholesterol",
  "TOTAL CHOLESTEROL - SERUM": "Total Cholesterol",
  CHOLESTEROL: "Total Cholesterol",
  Cholesterol: "Total Cholesterol",
  "High Density Lipoprotein Good Cholesterol": "HDL Cholesterol",
  HDL: "HDL Cholesterol",
  "HDL CHOLESTEROL": "HDL Cholesterol",
  "HDL Cholesterol": "HDL Cholesterol",
  "Low Density Lipoprotein Bad Cholesterol": "LDL Cholesterol",
  "LDL Cholesterol": "LDL Cholesterol",
  "LDL CHOLESTEROL": "LDL Cholesterol",
  "HDL/LDL Cholesterol Ratio": "HDL : LDL ratio",
  "HDL : LDL ratio": "HDL : LDL ratio",
  "LDL / HDL Cholesterol Ratio": "LDL : HDL ratio",
  "LDL : HDL ratio": "LDL : HDL ratio",
  "LDL/HDL Ratio": "LDL : HDL ratio",
  "LDL / HDL RATIO": "LDL : HDL ratio",
  "LDL HDL RATIO": "LDL : HDL ratio",
  "APO B : APO A Ratio": "APO B : APO A Ratio",
  "APO B : APO A ratio": "APO B : APO A Ratio",
  "APO A : APO B Ratio": "APO A : APO B Ratio",
  "APO A : APO B ratio": "APO A : APO B Ratio",
  "APO A": "Apo A",
  "Apo A": "Apo A",
  "TRIGLYCERIDES SERUM": "Triglycerides",
  Triglycerides: "Triglycerides",
  "Total Triglycerides": "Triglycerides",
  TRIGLYCERIDES: "Triglycerides",
  Triglyceride: "Triglycerides",
  "Very Low Density Lipoprotein VLDL": "VLDL",
  VLDL: "VLDL",
  "APO B": "Apo B",
  "Apo B": "Apo B",
  "VLDL CHOLESTEROL": "VLDL",
  "VLDL Cholesterol": "VLDL",
  "Creatine-Kinase": "Creatine-Kinase",
  "Non - HDL Cholesterol": "Non - HDL Cholesterol",
  "Total Cholesterol / HDL Cholesterol": "Total Cholesterol : HDL ratio",
  "Total Cholesterol : HDL ratio": "Total Cholesterol : HDL ratio",
  "Total Cholesterol/HDL Ratio": "Total Cholesterol : HDL ratio",
  "Chol / HDL Ratio": "Total Cholesterol : HDL ratio",
  "CHOLESTEROL/HDL RATIO": "Total Cholesterol : HDL ratio",
  "CHOL / HDL Cholesterol Ratio": "Total Cholesterol : HDL ratio",
  "TC/HDL CHOLESTROL RATIO": "Total Cholesterol : HDL ratio",
  "Total Bilirubin": "Total Bilirubin",
  "Bilirubin Total": "Total Bilirubin",
  "Direct Bilirubin": "Direct Bilirubin",
  "Indirect Bilirubin": "Indirect Bilirubin",
  "Bilirubin Indirect - Unconjugated": "Indirect Bilirubin",
  "Bilirubin Direct - Conjucated": "Direct Bilirubin",
  "Bilirubin (Total)": "Bilirubin (Total)",
  "BILIRUBIN-TOTAL": "Bilirubin (Total)",
  "Bilirubin - Direct": "Bilirubin (Direct)",
  "Bilirubin (Direct)": "Bilirubin (Direct)",
  "Bilirubin, (Indirect)": "Bilirubin (Indirect)",
  "Bilirubin (Indirect)": "Bilirubin (Indirect)",
  "BILIRUBIN-DIRECT": "Bilirubin (Direct)",
  "BILIRUBIN-INDIRECT": "Bilirubin (Indirect)",
  "SGOT / AST": "SGOT (AST)",
  "SGOT (AST)": "SGOT (AST)",
  "SGPT / ALT": "SGPT (ALT)",
  "SGPT (ALT)": "SGPT (ALT)",
  "Serum AST/SGOT": "SGOT (AST)",
  "Serum ALT/SGPT": "SGPT (ALT)",
  "AST/SGOT": "SGOT (AST)",
  "ALT/SGPT": "SGPT (ALT)",
  "SGOT/AST": "SGOT (AST)",
  "SGPT/ALT": "SGPT (ALT)",
  "GAMMA GT": "GGT",
  GGT: "GGT",
  "GAMMA GLUTAMYL TRANSFERASE (GGT)": "GGT",
  "Alkaline Phosphatase (ALP)": "ALP",
  ALP: "ALP",
  "ALKALINE PHOSPHATE": "ALP",
  "Alkaline Phosphatse": "ALP",
  "Alkaline Phosphatase": "ALP",
  "LDH Serum": "LDH",
  LDH: "LDH",
  "Protein Total Serum": "Protein (Total)",
  "Protein (Total)": "Protein (Total)",
  "Protein, Total": "Protein (Total)",
  "PROTEIN, TOTAL": "Protein (Total)",
  "TOTAL PROTEIN": "Protein (Total)",
  "Total Protein": "Protein (Total)",
  "Albumin Serum": "Albumin",
  Albumin: "Albumin",
  "Globulin Serum": "Globulin",
  Globulin: "Globulin",
  ALBUMIN: "Albumin",
  GLOBULIN: "Globulin",
  "Albumin / Globulin Ratio": "Albumin : Globulin ratio",
  "Albumin : Globulin ratio": "Albumin : Globulin ratio",
  "A/G Ratio": "Albumin : Globulin ratio",
  "A/G RATIO": "Albumin : Globulin ratio",
  Creatinine: "Serum Creatinine",
  "Serum Creatinine": "Serum Creatinine",
  "Creatine Serum": "Serum Creatinine",
  CREATININE: "Serum Creatinine",
  "Serum Uric Acid": "Uric Acid",
  "Uric Acid": "Uric Acid",
  "URIC ACID": "Uric Acid",
  "Uric acid": "Uric Acid",
  "Blood Urea": "Blood Urea",
  UREA: "Blood Urea",
  Urea: "Blood Urea",
  "Blood Urea Nitrogen (BUN)": "BUN",
  BUN: "BUN",
  "Blood Urea Nitrogen": "BUN",
  "Urea / Creatinine Ratio": "Urea : Creatinine ratio",
  "Urea : Creatinine ratio": "Urea : Creatinine ratio",
  "Urea/Creatinine Ratio": "Urea : Creatinine ratio",
  "BUN / Creatinine Ratio": "BUN : Creatinine ratio",
  "BUN : Creatinine ratio": "BUN : Creatinine ratio",
  "BUN/Crea Ratio": "BUN : Creatinine ratio",
  "BUN/CREATININE RATIO": "BUN : Creatinine ratio",
  "Thyroid Stimulating Hormone (TSH)": "TSH",
  TSH: "TSH",
  "Thyroid Stimulating Hormone - TSH": "TSH",
  "TSH (THYROID STIMULATING HORMONE)": "TSH",
  "TSH (Thyroid Stimulating Hormone)": "TSH",
  "TSH (3rd Gen. Ultrasensitive)": "TSH",
  "TriIodothyronine Free (FT3)": "T3 (Triiodothyronine)",
  "T3 (Triiodothyronine)": "T3 (Triiodothyronine)",
  "Thyroxine - Free (FT4)": "T4 (Thyroxine)",
  "T4 (Thyroxine)": "T4 (Thyroxine)",
  "Triiodothyronine - T3": "T3 (Triiodothyronine)",
  "FT4(Free T4)": "T4 (Thyroxine)",
  "FT3(Free T3)": "T3 (Triiodothyronine)",
  "Thyroxine - T4": "T4 (Thyroxine)",
  "T3, TOTAL": "T3 (Triiodothyronine)",
  "T4, TOTAL": "T4 (Thyroxine)",
  "TriIodothyronine Total (TT3)": "T3 (Triiodothyronine)",
  "Thyroxine (TT4)": "T4 (Thyroxine)",
  "Blood Sugar Fasting": "Blood Sugar (Fasting)",
  "Blood Sugar (Fasting)": "Blood Sugar (Fasting)",
  "GLUCOSE (F)": "Blood Sugar (Fasting)",
  "Glucose (F)": "Blood Sugar (Fasting)",
  "Fasting Glucose": "Blood Sugar (Fasting)",
  "AMYLASE SERUM": "Amylase",
  Amylase: "Amylase",
  "Blood Sugar Post Prandial": "Blood Sugar (Postprandial)",
  "Blood Sugar (Postprandial)": "Blood Sugar (Postprandial)",
  "GLUCOSE (PP)": "Blood Sugar (Postprandial)",
  "Post Prandial Glucose": "Blood Sugar (Postprandial)",
  "Blood Sugar Random": "Blood Sugar (Random)",
  "Blood Sugar (Random)": "Blood Sugar (Random)",
  "GLUCOSE- RANDOM": "Blood Sugar (Random)",
  "Random Glucose": "Blood Sugar (Random)",
  "Insulin (Fasting)": "Insulin (Fasting)",
  "Insulin (Postprandial)": "Insulin (Postprandial)",
  CRP: "CRP",
  "CRP (QUANTITATIVE)": "CRP",
  "C-REACTIVE PROTEIN  (QUANTITATIVE)": "CRP",
  "C-Reactive Protein  (Quantitative)": "CRP",
  "RA - FACTOR (Quantitative)": "RA factor (quantitative)",
  "RA factor (quantitative)": "RA factor (quantitative)",
  "RA FACTOR": "RA factor (quantitative)",
  "A.S.O. (QUANTITATIVE)": "ASO (quantitative)",
  "ASO (quantitative)": "ASO (quantitative)",
  "ASO Titre": "ASO (quantitative)",
  "Hemoglobin (Hb)": "Haemoglobin",
  Haemoglobin: "Haemoglobin",
  HAEMOGLOBIN: "Haemoglobin",
  "Haemoglobin (HB)": "Haemoglobin",
  "Iron (fe)": "Iron",
  Iron: "Iron",
  "Iron Serum": "Iron",
  TIBC: "TIBC",
  "Total Iron Binding Capacity": "TIBC",
  UIBC: "UIBC",
  Ferritin: "Ferritin",
  Transferrin: "Transferrin Serum",
  "Transferrin Serum": "Transferrin Serum",
  "TRANSFERRIN SERUM": "Transferrin Serum",
  "% Saturation Transferrin": "% Saturation Transferrin",
  "Transferrin Saturation%": "% Saturation Transferrin",
  "Red Blood Cell Count (RBC)": "RBC count",
  "RBC count": "RBC count",
  "RBC COUNT": "RBC count",
  "RBC Count": "RBC count",
  "Packed Cell Volume(PCV)": "Haematocrit",
  Haematocrit: "Haematocrit",
  "Haematocrit / PCV / HCT": "Haematocrit",
  HAEMATOCRIT: "Haematocrit",
  "Hematocrit (PCV)": "Haematocrit",
  "Mean Corp Volume (MCV)": "MCV",
  MCV: "MCV",
  "PACKED CELL VOLUME (PCV) - HEMATOCRIT": "Haematocrit",
  "Mean Corpuscular Volume (MCV)": "MCV",
  "Mean Corpuscular Volume(MCV)": "MCV",
  "Mean Corpuscular Haemoglobin (MCH)": "MCH",
  MCH: "MCH",
  "Mean Corp Hb (MCH)": "MCH",
  "Mean Corpuscular Hb. (MCH)": "MCH",
  "Mean Corpuscular Hb Concentration(MCHC)": "MCHC",
  MCHC: "MCHC",
  "Mean Corp Hb Conc (MCHC)": "MCHC",
  "Mean Corpuscular Hb. Concentration(MCHC)": "MCHC",
  "Content Haemoglobin (CH)": "Content Haemoglobin (CH)",
  "Total Leucocyte Count (TLC)": "Total Leukocyte Count",
  "Total Leukocyte Count": "Total Leukocyte Count",
  "TOTAL LEUCOCYTE COUNT": "Total Leukocyte Count",
  "Total WBC count": "Total Leukocyte Count",
  "Platelet Count": "Platelet Count",
  "PLATELET COUNT": "Platelet Count",
  "Mean Platelet Component (MPC)": "Mean Platelet Component (MPC)",
  "Mean Platelet Mass (MPM)": "Mean Platelet Mass (MPM)",
  "Platelet Count(PLT)": "Platelet Count",
  MPV: "MPV",
  PDW: "PDW",
  "PDW - SD": "PDW - SD",
  "Large Unstained Cell (LUC)": "Large Unstained Cell",
  "Large Unstained Cell": "Large Unstained Cell",
  "Absolute Large Unstained Cell (ALUC)": "Absolute Large Unstained Cell",
  "Absolute Large Unstained Cell": "Absolute Large Unstained Cell",
  PCT: "PCT",
  "SPECIFIC GRAVITY": "Specific Gravity",
  "Specific Gravity": "Specific Gravity",
  "SP. GRAVITY": "Specific Gravity",
  pH: "pH",
  Ph: "pH",
  PH: "pH",
  "URINARY CALCIUM": "Urinary Calcium",
  "Urinary Calcium": "Urinary Calcium",
  "Serum Vitamin B12": "B12",
  B12: "B12",
  "VITAMIN B12": "B12",
  "Vitamin - B12": "B12",
  "Sodium (Na+)": "Sodium",
  Sodium: "Sodium",
  "Potassium (K+)": "Potassium",
  Potassium: "Potassium",
  "Sodium ( Na+  )": "Sodium",
  "Potassium (K+ )": "Potassium",
  "Chloride (Cl-)": "Chloride",
  Chloride: "Chloride",
  SODIUM: "Sodium",
  POTASSIUM: "Potassium",
  CHLORIDE: "Chloride",
  "Calcium (Ca) Serum": "Calcium",
  Calcium: "Calcium",
  CALCIUM: "Calcium",
  "Calcium Serum": "Calcium",
  "IONIZED CALCIUM": "Ionized Calcium",
  "Ionized Calcium": "Ionized Calcium",
  "NON IONIZED CALCIUM": "Non Ionized Calcium",
  "Non Ionized Calcium": "Non Ionized Calcium",
  "INORGANIC PHOSPHORUS": "Phosphorus",
  Phosphorus: "Phosphorus",
  "Serum Phosphorus": "Phosphorus",
  "PHOSPHORUS Inorganic": "Phosphorus",
  Phosphorous: "Phosphorus",
  MAGNESIUM: "Magnesium",
  Magnesium: "Magnesium",
  MAGNISIUM: "Magnesium",
  "MAGNESIUM SERUM": "Magnesium",
  "HbA1C (Glycosylated haemoglobin)": "HbA1c (Glycosylated Haemoglobin)",
  "HbA1c (Glycosylated Haemoglobin)": "HbA1c (Glycosylated Haemoglobin)",
  HbA1c: "HbA1c (Glycosylated Haemoglobin)",
  HBA1C: "HbA1c (Glycosylated Haemoglobin)",
  "Glycosylated Haemoglobin HbA1c": "HbA1c (Glycosylated Haemoglobin)",
  "Hba1c (Glycosylated Hemoglobin)": "HbA1c (Glycosylated Haemoglobin)",
  "Approximate mean plasma glucose": "eAG (Estimated Average Glucose)",
  "eAG (Estimated Average Glucose)": "eAG (Estimated Average Glucose)",
  "Estimated Average Plasma Glucose": "eAG (Estimated Average Glucose)",
  "Estimated average glucose, (eAG)": "eAG (Estimated Average Glucose)",
  "Estimated Average Blood Glucose": "eAG (Estimated Average Glucose)",
  NEUTROPHIL: "Neutrophils",
  Neutrophils: "Neutrophils",
  NEUTROPHILS: "Neutrophils",
  "ABSOLUTE NEUTROPHIL COUNT(ANC)": "Abs. Neutrophil Count",
  "Abs. Neutrophil Count": "Abs. Neutrophil Count",
  EOSINOPHIL: "Eosinophils",
  Eosinophils: "Eosinophils",
  EOSINOPHILS: "Eosinophils",
  "ABSOLUTE EOSINOPHIL COUNT (AEC)": "Abs. Eosinophil Count",
  "Abs. Eosinophil Count": "Abs. Eosinophil Count",
  "Absolute Neutrophil Count": "Abs. Neutrophil Count",
  "Absolute Eosinophil Count": "Absolute Eosinophil Count",
  "Absolute Eosinophil Count (AEC)": "Absolute Eosinophil Count",
  BASOPHIL: "Basophils",
  Basophils: "Basophils",
  BASOPHILS: "Basophils",
  "ABSOLUTE BASOPHIL COUNT": "Abs. Basophil Count",
  "Abs. Basophil Count": "Abs. Basophil Count",
  "Absolute Basophils Count": "Abs. Basophil Count",
  "Absolute Lymphocyte Count": "Abs. Lymphocyte Count",
  "Abs. Lymphocyte Count": "Abs. Lymphocyte Count",
  "Absolute Monocyte Count": "Abs. Monocyte Count",
  "Abs. Monocyte Count": "Abs. Monocyte Count",
  LYMPHOCYTE: "Lymphocytes",
  Lymphocytes: "Lymphocytes",
  LYMPHOCYTES: "Lymphocytes",
  "ABSOLUTE LYMPHOCYTE COUNT (ALC)": "Abs. Lymphocyte Count",
  MONOCYTE: "Monocytes",
  Monocytes: "Monocytes",
  MONOCYTES: "Monocytes",
  "ABSOLUTE MONOCYTE COUNT(AMC)": "Abs. Monocyte Count",
  "RBC Distribution Width (RDW-CV)": "RDW-CV",
  "RDW-CV": "RDW-CV",
  "Red Cell Distribution width ( RDW )": "RDW-CV",
  "RBC Distribution Width (RDW-SD)": "RDW-SD",
  "RDW-SD": "RDW-SD",
  RDWcv: "RDW-CV",
  "R.D.W CV": "RDW-CV",
  "RDW SD": "RDW-SD",
  "Erythrocyte Sedimentation Rate (ESR)": "ESR",
  ESR: "ESR",
  "ERYTHROCYTE SEDIMENTATION RATE (ESR)": "ESR",
  "Microalbumin Screening": "Microalbumin",
  Microalbumin: "Microalbumin",
  "GLUCOSE IN URINE": "Glucose in Urine",
  "Glucose in Urine": "Glucose in Urine",
  "Glucose Urine": "Glucose in Urine",
  COLOUR: "Urine Colour",
  "Urine Colour": "Urine Colour",
  APPEARANCE: "Appearance",
  Appearance: "Appearance",
  Colour: "Urine Colour",
  VOLUME: "VOLUME",
  "Pus Cells(Leucocytes)": "Pus",
  Pus: "Pus",
  "Epithelial Cells": "Epithelial",
  Epithelial: "Epithelial",
  "PUS CELLS": "Pus",
  "EPITHELIAL CELLS": "Epithelial",
  Urobilinogen: "Urobilinogen",
  UROBILIOGEN: "Urobilinogen",
  UROBILINOGEN: "Urobilinogen",
  "Albumin Urine/ Protein Urine": "Protein",
  Protein: "Protein",
  "Ketone Bodies": "Ketone",
  Ketone: "Ketone",
  "Bile Salts": "Bile Salts",
  "Bile Pigments": "Bile Pigments",
  Blood: "Blood",
  Nitrite: "Nitrite",
  Casts: "Casts",
  Crystals: "Crystals",
  Bacteria: "Bacteria",
  "Bacteria ": "Bacteria ",
  "Budding Yeast Cells": "Yeast cells",
  "Yeast cells": "Yeast cells",
  "BILE SALT": "Bile Salts",
  "BILE PIGMENT": "Bile Pigment",
  "Bile Pigment": "Bile Pigment",
  BILIRUBIN: "Bilirubin",
  Bilirubin: "Bilirubin",
  KETONE: "Ketone",
  KETONES: "Ketone",
  BLOOD: "Blood",
  PROTEIN: "Protein",
  NITRITE: "Nitrite",
  "ASCORBIC ACID": "Absorbic Acid",
  "Absorbic Acid": "Absorbic Acid",
  RBC: "RBC",
  RBCs: "RBC",
  CASTS: "Casts",
  CRYSTALS: "Crystals",
  BACTERIA: "Bacteria",
  LEUKOCYTES: "Leukocytes",
  Leukocytes: "Leukocytes",
  GLUCOSE: "Glucose in Urine",
  "URINE SUGAR": "Sugar in Urine",
  "Sugar in Urine": "Sugar in Urine",
  "URINE ALBUMIN": "Protein",
  "URINE BILIRUBIN": "Bilirubin",
  OTHERS: "Other compounds in Urine",
  "Other compounds in Urine": "Other compounds in Urine",
  Others: "Other compounds in Urine",
  Candida: "Candida in Urine",
  "Candida in Urine": "Candida in Urine",
  "YEAST CELLS": "Yeast cells",
  "25 (OH) Vitamin-D": "Vitamin D (25-Hydroxy)",
  "Vitamin D (25-Hydroxy)": "Vitamin D (25-Hydroxy)",
  "VITAMIN D 25 HYDROXY": "Vitamin D (25-Hydroxy)",
  "VITAMIN D 25, HYDROXY": "VITAMIN D 25, HYDROXY",
  "VITAMIN D (25 Hydroxy)": "Vitamin D (25-Hydroxy)",
  "VITAMIN D TOTAL": "Vitamin D (25-Hydroxy)",
  "Vitamin B9 (Folate/Folic Acid) Serum": "B9",
  B9: "B9",
  "Vitamin B9 (Folic Acid)": "B9",
  "Folic Acid (Vitamin B9/ Folate)": "B9",
  "Glomerular Filtration Rate GFR": "Glomerular Filtration Rate",
  "Glomerular Filtration Rate": "Glomerular Filtration Rate",
  "Glomerular Filtration Rate (eGFR)": "Glomerular Filtration Rate",
  "Gfr By Mdrd Formula": "Glomerular Filtration Rate",
  "Gfr By Ckd-EPI": "Glomerular Filtration Rate",
  "P-LCR": "P-LCR",
  "PLATELET LARGER CELL RATIO(p-lcr)": "P-LCR",
  "P-LCC": "P-LCC",
  "IMMATURE GRANULOCYTE": "Immature Granulocytes",
  "Immature Granulocytes": "Immature Granulocytes",
  "Absolute immature granulocyte": "Abs. Immature Granulocytes",
  "Abs. Immature Granulocytes": "Abs. Immature Granulocytes",
  "URINARY CREATININE": "Urinary Creatinine",
  "Urinary Creatinine": "Urinary Creatinine",
  "Blood Group": "Blood Group",
  "Rh Factor": "Rh Factor",
  ABO: "Blood Group",
  "Rh FACTOR": "Rh Factor",
  "BLOOD GROUP": "Blood Group",
  "Rh Type": "Rh Factor",
  "Serum PSA Total": "Serum PSA Total",
  "PSA TOTAL": "Serum PSA Total",
  "Prothrombin Time Test": "PT TEST",
  "PT TEST": "PT TEST",
  "Prothrombin time control": "PT (Control)",
  "PT (Control)": "PT (Control)",
  "Prothrombin time INR": "PT-INR",
  "PT-INR": "PT-INR",
  "On Patients Blood": "PT TEST",
  "Mean Normal Prothrombin Time": "PT (Control)",
  "Prothrombin Ratio": "PT ratio",
  "PT ratio": "PT ratio",
  "International Normalized Ratio (INR)": "PT-INR",
  "MNPT/CONTROL PT": "PT (Control)",
  ISI: "ISI",
  "CA 19-9": "CA 19-9",
  "CA 125": "CA 125",
  "CA 15-3": "CA 15-3",
  Testosterone: "Testosterone",
  Prolactin: "Prolactin",
  "Leutinizing Harmone": "Leutinizing Harmone",
  "Beta HCG": "Beta HCG",
};

const DIC = {
  "Total Cholesterol": "Lipid Profile",
  "HDL Cholesterol": "Lipid Profile",
  "LDL Cholesterol": "Lipid Profile",
  "HDL : LDL ratio": "Lipid Profile",
  "LDL : HDL ratio": "Lipid Profile",
  "APO B : APO A Ratio": "Lipid Profile",
  "APO A : APO B Ratio": "Lipid Profile",
  "Apo A": "Lipid Profile",
  Triglycerides: "Lipid Profile",
  VLDL: "Lipid Profile",
  "Apo B": "Lipid Profile",
  "Creatine-Kinase": "Lipid Profile",
  "Non - HDL Cholesterol": "Lipid Profile",
  "Total Cholesterol : HDL ratio": "Lipid Profile",
  "Total Bilirubin": "Liver Profile",
  "Direct Bilirubin": "Liver Profile",
  "Indirect Bilirubin": "Liver Profile",
  "Bilirubin (Total)": "Liver Profile",
  "Bilirubin (Direct)": "Liver Profile",
  "Bilirubin (Indirect)": "Liver Profile",
  "SGOT (AST)": "Liver Profile",
  "SGPT (ALT)": "Liver Profile",
  GGT: "Liver Profile",
  ALP: "Liver Profile",
  LDH: "Liver Profile",
  "Protein (Total)": "Liver Profile",
  Albumin: "Liver Profile",
  Globulin: "Liver Profile",
  "Albumin : Globulin ratio": "Liver Profile",
  "Serum Creatinine": "Kidney Profile",
  "Uric Acid": "Kidney Profile",
  "Blood Urea": "Kidney Profile",
  BUN: "Kidney Profile",
  "Urea : Creatinine ratio": "Kidney Profile",
  "BUN : Creatinine ratio": "Kidney Profile",
  TSH: "Thyroid Profile",
  "T3 (Triiodothyronine)": "Thyroid Profile",
  "T4 (Thyroxine)": "Thyroid Profile",
  "Blood Sugar (Fasting)": "Diabetes Monitoring",
  Amylase: "Diabetes Monitoring",
  "Blood Sugar (Postprandial)": "Diabetes Monitoring",
  "Blood Sugar (Random)": "Diabetes Monitoring",
  "Insulin (Fasting)": "Diabetes Monitoring",
  "Insulin (Postprandial)": "Diabetes Monitoring",
  CRP: "Arthritis Screening",
  "RA factor (quantitative)": "Arthritis Screening",
  "ASO (quantitative)": "Arthritis Screening",
  Haemoglobin: "Anemia Studies",
  Iron: "Anemia Studies",
  TIBC: "Anemia Studies",
  UIBC: "Anemia Studies",
  Ferritin: "Anemia Studies",
  "Transferrin Serum": "Anemia Studies",
  "% Saturation Transferrin": "Anemia Studies",
  "RBC count": "Anemia Studies",
  Haematocrit: "Anemia Studies",
  MCV: "Anemia Studies",
  MCH: "Anemia Studies",
  MCHC: "Anemia Studies",
  "Content Haemoglobin (CH)": "Anemia Studies",
  "Total Leukocyte Count": "Blood Counts",
  "Platelet Count": "Blood Counts",
  "Mean Platelet Component (MPC)": "Blood Counts",
  "Mean Platelet Mass (MPM)": "Blood Counts",
  MPV: "Blood Counts",
  PDW: "Blood Counts",
  "PDW - SD": "Blood Counts",
  "Large Unstained Cell": "Blood Counts",
  "Absolute Large Unstained Cell": "Blood Counts",
  PCT: "Blood Counts",
  "Specific Gravity": "Urinalysis",
  pH: "Urinalysis",
  "Urinary Calcium": "Urinalysis",
  B12: "Vitamin Profile",
  Sodium: "Electrolyte Profile",
  Potassium: "Electrolyte Profile",
  Chloride: "Electrolyte Profile",
  Calcium: "Arthritis Screening",
  "Ionized Calcium": "Arthritis Screening",
  "Non Ionized Calcium": "Arthritis Screening",
  Phosphorus: "Arthritis Screening",
  Magnesium: "Arthritis Screening",
  "HbA1c (Glycosylated Haemoglobin)": "Diabetes Monitoring",
  "eAG (Estimated Average Glucose)": "Diabetes Monitoring",
  Neutrophils: "Blood Counts",
  "Abs. Neutrophil Count": "Blood Counts",
  Eosinophils: "Blood Counts",
  "Abs. Eosinophil Count": "Blood Counts",
  "Absolute Eosinophil Count": "Blood Counts",
  Basophils: "Blood Counts",
  "Abs. Basophil Count": "Blood Counts",
  "Abs. Lymphocyte Count": "Blood Counts",
  "Abs. Monocyte Count": "Blood Counts",
  Lymphocytes: "Blood Counts",
  Monocytes: "Blood Counts",
  "RDW-CV": "Anemia Studies",
  "RDW-SD": "Anemia Studies",
  ESR: "Arthritis Screening",
  Microalbumin: "Diabetes Monitoring",
  "Glucose in Urine": "Urinalysis",
  "Urine Colour": "Urinalysis",
  Appearance: "Urinalysis",
  VOLUME: "Urinalysis",
  Pus: "Urinalysis",
  Epithelial: "Urinalysis",
  Urobilinogen: "Urinalysis",
  Protein: "Urinalysis",
  Ketone: "Urinalysis",
  "Bile Salts": "Urinalysis",
  "Bile Pigments": "Urinalysis",
  Blood: "Urinalysis",
  Nitrite: "Urinalysis",
  Casts: "Urinalysis",
  Crystals: "Urinalysis",
  "Bacteria ": "Urinalysis",
  "Yeast cells": "Urinalysis",
  "Bile Pigment": "Urinalysis",
  Bilirubin: "Urinalysis",
  "Absorbic Acid": "Urinalysis",
  RBC: "Urinalysis",
  Bacteria: "Urinalysis",
  Leukocytes: "Urinalysis",
  "Sugar in Urine": "Urinalysis",
  "Other compounds in Urine": "Urinalysis",
  "Candida in Urine": "Urinalysis",
  "Vitamin D (25-Hydroxy)": "Vitamin Profile",
  "VITAMIN D 25, HYDROXY": "Vitamin Profile",
  B9: "Vitamin Profile",
  "Glomerular Filtration Rate": "Kidney Profile",
  "P-LCR": "Blood Counts",
  "P-LCC": "Blood Counts",
  "Immature Granulocytes": "Blood Counts",
  "Abs. Immature Granulocytes": "Blood Counts",
  "Urinary Creatinine": "Urinalysis",
  "Blood Group": "Blood Group",
  "Rh Factor": "Blood Group",
  "Serum PSA Total": "PSA",
  "PT TEST": "Prothrombin Time",
  "PT (Control)": "Prothrombin Time",
  "PT-INR": "Prothrombin Time",
  "PT ratio": "Prothrombin Time",
  ISI: "Prothrombin Time",
  "CA 19-9": "Cancer Profile",
  "CA 125": "Cancer Profile",
  "CA 15-3": "Cancer Profile",
  Testosterone: "Harmones",
  Prolactin: "Harmones",
  "Leutinizing Harmone": "Harmones",
  "Beta HCG": "Harmones",
};

export { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC };

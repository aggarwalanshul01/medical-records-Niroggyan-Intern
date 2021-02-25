tests = {
  "Vitamin D About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Vitamin D About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="vitaminD_about">Vitamin D</a></h2>

          <p>
          Known as the <i>"sunshine vitamin"</i>, Vitamin D is produced by your skin when exposed to sunlight. Vitamin D is essential for strong bones - it helps your body use calcium from the diet. Thus, low vitamin D increases the chances of fracture
          and may also increase the chances of diabetes and heart disease.
          </p>

          <h2 style="margin-top: 16px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Vitamin Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Vitamin Profile About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="vitamin_about">About Vitamin Profile</a></h2>

          <p>
          As the building blocks of a healthy body, all the <b>B</b> Vitamins are water-soluble. Your body doesn't store them permanently and they're excreted through urine.<p></p>
          So regular intake of food such as fresh fruits, dark green leafy vegetables or seafood is recommended.
          </p>

          <h2 style="margin-top: 16px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Lipid Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Lipid Profile About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="lipid_about">About Lipid Profile</a></h2>
          <p>
          This panel measures the amount of <em>lipoprotein ("lipid" + "protein")</em> - a type of fat in the body. Fat is required to produce energy in your body. It is found in liver, tissues and blood. Too much fat restricts oxygen flow to your heart,
          which may lead to heart disease.
          </p>

          <h2 style="margin-top: 16px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Liver Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Liver Profile About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="liver_about">About Liver Profile</a></h2>
          <p>
          Liver is a very important organ in your body as it performs a variety of functions. One of the main functions of the liver is to make proteins that are secreted in your blood. It also makes enzymes which convert food into energy, and processes old muscles
          and cells. When your liver is damaged, enzymes leak into your blood and appear in the blood test.
          </p>

          <h2 style="margin-top: 16px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Vitamin D Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Vitamin D Tips"),
      1
    );
    const tips = `
          <div>
              <div style="display: inline-block; width: 32%; margin-right: 64px;">
                  <h2>A common problem</h2>
                  <object data="{{commonProblemSvg}}" type="image/svg+xml" style="width: 100px; max-height: 300px; display: block; margin-left: auto; margin-right: auto; margin-bottom: 8px;"></object>
                  <p style="margin-left: auto; margin-right: auto; text-align: center;">Roughly, only 3 out of 10 Indians have normal levels of Vitamin D.</p>
              </div>
              <div style="display: inline-block; vertical-align: top; width: 55%;">
                  <h2>Reasons for low values</h2>
                  <p>In modern times, many people turn out to be deficient in Vitamin D.</p>
                  <ul>
                      <li style="margin-top: 8px;"><b>Longer amount of time spent indoors:</b> This includes people who mainly work or study inside</li>
                      <li style="margin-top: 8px;"><b>Sunscreen use:</b> SPF 15 may reduce Vitamin D production in the skin by 99%</li>
                      <li style="margin-top: 8px;"><b>Diet:</b> There are only a few dietary sources of Vitamin D (like fortified milk, oily fish), which many don't or can't include in their diet</li>
                  </ul>
              </div>
          </div>

          <div style="break-inside: avoid;">
              <h2>Tips</h2>
              <ul>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}sun.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Get some sun:</strong> Expose your skin to the sun for a limited time. Sunlight creates Vitamin D in our body but the process depends on several factors.</p>
                  </li>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}pills.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Consider supplements:</strong> Ask your doctor if Vitamin D supplements or eating foods fortified with Vitamin D are right for you.</p>
                  </li>
              </ul>
          </div>
      `;

    return {
      testsUpdated: tests,
      colored: tips.replace(/{{commonProblemSvg}}/, `${assetPath}vitamin-d-common-problem.svg`),
      grayscaled: tips.replace(/{{commonProblemSvg}}/, `${assetPath}vitamin-d-common-problem-grey.svg`),
    };
  },
  "Lipid Profile Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Lipid Profile Tips"),
      1
    );
    const tips = `
          <div style="break-inside: avoid;">
              <h2 style="margin-top: 8px; margin-bottom: 0;">Risk Factors</h2>
              <p>Heart diseases are the leading cause of death in India. It's vital to take preventive measures and get your lipid profile checked regularly.</p>
              <p>What are the chances that you might get heart disease? The answer depends on something called <em>risk factors</em>. More risk factors means more chances of heart disease. Some risk factors are outside your control and some are in your control.</p>

              <span class="hech3" style="display: inline-block; color: #F5F5F5; font-size: 1.3em; font-weight: bold; margin-top: 16px; padding: 0 4px;">Factors outside your control</span>

              <ul style="margin-top: 16px;">
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}old-couple.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>People older than age 65</strong> are more prone to heart diseases. Additionally, men are more prone than women.</p>
                  </li>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}dna.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>If your family has heart disease, </strong> you are also at risk. Indians have a genetic tendency to accumulate fat in the belly.</p>
                  </li>
              </ul>

              <span class="hech3" style="display: inline-block; color: #F5F5F5; font-size: 1.3em; font-weight: bold; margin-top: 32px; padding: 0 4px;">Factors in your control</span>

              <ul style="margin-top: 16px;">
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}blood-pressure.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>High BP (blood pressure)</strong> increases the load on your heart. BP can be controlled to reduce the risk.</p>
                  </li>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}stretching-exercises.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Regular exercise</strong> keeps the heart healthy. It should be moderate to vigorous physical activity.</p>
                  </li>
                  <li style="display: inline-block; margin-top: 32px; width: 48%;">
                      <object data="${assetPath}overweight.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>In case you are overweight,</strong> reducing your weight helps reduce your cholesterol.</p>
                  </li>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}accu-check.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Diabetes patients</strong> also risk having heart disease because high blood glucose over a long period of time damages the blood vessels and nerves in your body.</p>
                  </li>
              </ul>
          </div>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips };
  },
  "Liver Profile Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Liver Profile Tips"),
      1
    );
    const tips = `
          <div style="break-inside: avoid; padding-bottom: 28px;">
              <h2>Tips</h2>
              <ul>
                  <li style="display: inline-block; width: 33%;">
                      <object data="${assetPath}stretching-exercises.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Exercising regularly</strong> uses triglycerides as fuel and keeps your liver healthy.</p>
                  </li>
                  <li style="display: inline-block; width: 33%;">
                      <object data="${assetPath}alcohol.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Avoid excess alcohol</strong> <br /> Alcoholic beverages destroy and scar your liver cells.</p>
                  </li>
                  <li style="display: inline-block; width: 33%;">
                      <object data="${assetPath}olive-oil.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; width: 65%; vertical-align: top;"><strong>Olive oil</strong> is an excellent choice. It accumulates less fat in your liver.</p>
                  </li>
              </ul>
          </div>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips };
  },
  "Kidney Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Kidney Profile About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="kidney_about">About Kidney Profile</a></h2>
          <p>This panel is used to check healthy functioning of your kidneys. Kidneys filter blood in your body to remove waste products - these waste products are produced when breakdown of proteins (present in food, muscles and other cells) occurs in the body to generate energy.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Kidney Profile Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Kidney Profile Tips"),
      1
    );
    const tips = `
          <div style="break-inside: avoid;">
              <h2>Tips</h2>
              <ul>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}happy-man.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%;"><strong>Your kidneys can be ill even if you're fine.</strong> Your kidneys can have a disease but your body might not show any effects of that.</p>
                  </li>
                  <li style="display: inline-block; width: 48%;">
                      <object data="${assetPath}blood-pressure.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                      <p style="display: inline-block; width: 65%;"><strong>Your BP (blood pressure)</strong> is an important factor for the health of your kidneys. Your doctor may check your BP - high BP for a long time can damage your kidneys.</p>
                  </li>
              </ul>
          </div>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips };
  },
  "Electrolyte Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Electrolyte Profile About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="electrolyte_about">About Electrolyte Profile</a></h2>
          <p>Electrolytes are electrically charged minerals in your body's blood and cells. They control the amount of water in your body and maintain the fluid balance between the cells. They also regulate the pH of your blood, help conduct nerve impulses and allow proper muscle function.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Electrolyte Profile Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Electrolyte Profile Tips"),
      1
    );
    const tips = `
          <h2>Tips</h2>
          <ul>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}spoon.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>About one-fourth of a teaspoon of salt (per day)</strong> is enough to give your body the sodium and chloride it needs.</p>
              </li>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}take-away.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>Instant, boxed meals and processed foods</strong> contain too much sodium - much more than your body requires. Prefer home-cooked food instead.</p>
              </li>
          </ul>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips, height: 1 };
  },
  "Thyroid Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Thyroid Profile About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="thyroid_about">About Thyroid Profile</a></h2>
          <p>This panel is used to check the imbalance in your thyroid gland. (Glands are organs in your body that secrete chemical substances that regulate various functions for healthy working of the body.) A healthy thyroid gland is very important for metabolism, i.e how your body uses energy. It's also important for controlling body temperature, regulation of mood, muscle strength and regulation of body weight.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Thyroid Disorders": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Thyroid Disorders"),
      1
    );
    const disorders = `
          <h2 style="margin-bottom: 0;">Thyroid disorders</h2>
          <p><strong>Hypothyroidism:</strong> Caused by too less production of thyroid hormones in your body, this leads to unintentional weight gain, fatigue, slow heart rate.</p>
          <p><strong>Hyperthyroidism:</strong> Caused by too much production of thyroid hormones in your body, this leads to unintentional weight loss, nervousness, rapid heart rate.</p>
      `;

    return { testsUpdated: tests, colored: disorders, grayscaled: disorders, height: 1 };
  },
  "Thyroid Profile Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Thyroid Profile Tips"),
      1
    );
    const tips = `
          <div style="display: inline-block; width: 50%; margin-right: 64px;">
              <h2>Risk Factors</h2>
              <ul>
                  <li>
                      <object data="${assetPath}dna.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; vertical-align: top;"><b>Genetic:</b> If your family has thyroid disease, you are also at risk. Additionally, patients of auto-immune diseases -- like Type-1 diabetes -- are also at risk.</p>
                  </li>
                  <li style="margin-top: 32px;">
                      <object data="${assetPath}pregnant-woman.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; vertical-align: top;"><strong>Gender:</strong> Women are more prone to thyroid diseases as compared to men. Additionally, pregnant women are at a slightly higher risk.</p>
                  </li>
              </ul>
          </div>
          <div style="display: inline-block; width: 40%; vertical-align: top;">
              <h2>Tips</h2>

              <!-- following div is a hack JUST so that its content doesn't flow inline from where the above h2 ends - 'cz of the h2 being inline-block -->
              <div style="margin-top: 16px; margin-bottom: 16px;">
                  <object data="${assetPath}citrus-fruits.svg" type="image/svg+xml" style="margin-right: 32px;"></object>
                  <object data="${assetPath}sleep.svg" type="image/svg+xml" style="margin-right: 32px;"></object>
                  <object data="${assetPath}buddhist-yoga-pose.svg" type="image/svg+xml" style="margin-right: 32px;"></object>
              </div>
              <p>Eat more vitamin and mineral-rich foods like <b>fruits</b> and <b>nuts</b>. Over-stressing slows down your thyroid function and is unhealthy. Get enough <b>sleep</b> and try <b>yoga</b> or breathing techniques. <b>Meditation</b>, in particular, is very simple to get started.</p>
          </div>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips, height: 2 };
  },
  "Diabetes Monitoring About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Diabetes Monitoring About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="diabetes_about">About Diabetes Panel</a></h2>
          <p>This panel is used to check how much glucose/sugar there is in your blood. Too much blood glucose might indicate diabetes.</p>
          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Diabetes Monitoring Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Diabetes Monitoring Tips"),
      1
    );
    const tips = `
          <div>
              <div style="display: inline-block; width: 33%; margin-right: 64px;">
                  <h2>Importance of test</h2>
                  <object data="{{diabetesImportanceSvg}}" type="image/svg+xml" style="display: block; margin-left: auto; margin-right: auto; margin-bottom: 8px;"></object>
                  <p style="margin-left: auto; margin-right: auto; text-align: center;">Out of 10 Indians who already have diabetes, 5 of them <em>don't even know</em> that they have diabetes.</p>
              </div>
              <div style="display: inline-block; vertical-align: top; width: 55%;">
                  <h2>Diabetes Myths</h2>
                  <ul>
                      <li>
                          <object data="${assetPath}spoon.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                          <p style="display: inline-block;"><strong>Does diabetes happen ONLY because of sugar?</strong> <br /> No. If you don't eat sugar or sweets, but still eat a lot of unhealthy foods, you can gain too much weight. That can also lead to diabetes.</p>
                      </li>
                      <li style="margin-top: 32px;">
                          <object data="${assetPath}ghee.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                          <p style="display: inline-block;"><strong>Is it okay for a diabetic person to eat ghee?</strong> <br /> Yes. After eating, your blood glucose levels can go up and down too much (that's unhealthy). Eating ghee helps to control that.</p>
                      </li>
                  </ul>
              </div>
          </div>
      `;

    return {
      testsUpdated: tests,
      colored: tips.replace(/{{diabetesImportanceSvg}}/, `${assetPath}diabetes-importance.svg`),
      grayscaled: tips.replace(/{{diabetesImportanceSvg}}/, `${assetPath}diabetes-importance-grey.svg`),
      height: 2,
    };
  },
  "Arthritis Screening About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Arthritis Screening About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="arthritis_about">About Arthritis Panel</a></h2>
          <p>
          Joints are places in your body where your bones connect, such as wrists, knees, hips. Arthritis is the inflammation (swelling) of joints. Symptoms include pain in joints, along with stiffness.
          </p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Anemia Studies About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Anemia Studies About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="anemia_about">About Anemia Panel</a></h2>
          <p><i>Anemia</i> is the condition where your body has less RBCs (red blood cells) or the RBCs don't have enough haemoglobin. Haemoglobin is the protein present in RBCs that help carry oxygen to your body's tissues.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Blood Counts About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Blood Counts About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="blood_count_about">Constituents of your blood</a></h2>
          <p>Blood is a specialized bodily fluid that supplies essential substances like sugars, oxygen, hormones - around the body and also removes waste from the cells.</p>
          <p><b>Solid part of your blood (roughly 45%):</b> RBCs (red blood cells), WBCs (white blood cells) and platelets</p>
          <p><b>Liquid part of your blood (roughly 55%, usually called <i>plasma</i>):</b> Water, Salts and Proteins</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Urinalysis About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Urinalysis About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="urinalysis_about">About Complete Urine Examination</a></h2>
          <p>The <em>urinalysis</em>, as it's sometimes called, is a set of tests conducted on your urine - these tests measure specific properties of urine and also find out if there are any unwanted chemicals in your urine. If your results in these tests are abnormal, your doctor can correlate them clinically. Sometimes, abnormal urine results are because of kidney disease, liver disease or diabetes.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Urinalysis Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Urinalysis Tips"),
      1
    );
    const tips = `
          <h2 style="margin-top: 2px;"">Tips</h2>
          <ul>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}water.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>Drink water when thirsty</strong> <br /> This removes waste products from your system and keeps your urinary pattern stable.</p>
              </li>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}toilet.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>Don't wait too long to use the bathroom</strong> Otherwise, it pressurizes your urinary bladder too much - that can lead to infection.</p>
              </li>
          </ul>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips, height: 1 };
  },
  "Blood Group About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Blood Group About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;">Importance</h2>

          <p>It is very important for you to know your blood group - both when you <i>donate</i> blood, and when you are a patient to <i>receive</i> someone else's blood. In an emergency, it's better to save time if you already <i>remember</i> your blood group (instead of testing it then). Mismatched blood transfusions might kill the patient.</p>

          <p>The major blood groups are A+, A-, B+, B-, AB+, AB-, O+, O-.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Blood Group Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Blood Group Tips"),
      1
    );
    const tips = `
          <h2 style="margin-bottom: 0;">Did you know?</h2>
          <p>A person with blood type O can donate blood to anybody and a person with blood type AB can <em>receive</em> blood from anybody.</p>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips, height: 0 };
  },
  "Prothrombin Time About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Prothrombin Time About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="prothrombin_time_about">What is this test?</a></h2>

          <p>Whenever you get a cut, your body quickly sends important proteins to that place to cover the wound - so that you don't lose more blood. This process is called <i>clotting</i>. The <em>Prothrombin Time (PT)</em> is how much time it takes for your blood to <i>clot</i> whenever you get a cut. If the result of this test is high, it means your blood is not able to clot fast - it's taking more time than normal.</p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Prothrombin Time Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Prothrombin Time Tips"),
      1
    );
    const tips = `
          <h2>High PT</h2>
          <span style="display: block; margin-bottom: 8px;">Two common reasons for a high PT:</span>
          <ul>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}liver-small.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>Liver disease</strong> <br /> A damaged liver may not be able to produce enough protein that is required for blood clotting.</p>
              </li>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}k.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>Low Vitamin K</strong> <br /> Foods rich in Vitamin K - cabbage, spinach, green tea, milk. Supplements can be taken after doctor's approval.</p>
              </li>
          </ul>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips, height: 0 /* for now */ };
  },
  "PSA About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "PSA About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="PSA_about">About this test</a></h2>

          <p>The PSA test measures the amount of a substance called <em>prostate-specific antigen</em> (PSA) in your blood. It's used to calculate the chances of your having prostate cancer.</p>

          <p>If your PSA is high, it might indicate prostate cancer -- HOWEVER, that's not necessary -- sometimes, PSA is high but there's no prostate cancer. That's why, your doctor will look at your other tests too. This is not a <i>final, definitive</i> test.
          </p>

          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "PSA Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "PSA Tips"),
      1
    );
    const tips = `
          <h2>What now?</h2>
          <ul>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}calendar.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>Get your PSA test done minimum once a year.</strong> Symptoms of prostate cancer may show in your body many years after you got the cancer. <i>(www.pcf.org)</i></p>
              </li>
              <li style="display: inline-block; width: 48%;">
                  <object data="${assetPath}biopsy.svg" type="image/svg+xml" style="margin-right: 16px;"></object>
                  <p style="display: inline-block; width: 65%;"><strong>If your PSA level (or some other test) is abnormal,</strong> your doctor might order a more detailed test like biopsy - which detects cancer better.</p>
              </li>
          </ul>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips };
  },
  "Cancer Profile About": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Diabetes Monitoring About"),
      1
    );
    const about = `
          <h2 style="margin-top: 8px; margin-bottom: 0;"><a id="diabetes_about">About Cancer</a></h2>
          <p>Cancer cells grow and divide in an uncontrolled manner forming a tumor (lump), invading normal tissues and organs and eventually spreading throughout the body.Cancer cells kills by invading important organs and interferes with the body functions that are necessary to live.</p>
          <div style="font-weight: bold;margin:15px 0px;width:100%;">How Cancer Formation Takes Place</div>
          <ul class="font-small" style="display:flex;justify-content:space-around;align-items:center;text-transform: uppercase;color: #8C8C8C; font-weight: bold;width:100%;">
          <li style="width:24%;">
          <span style="display:flex;align-items:center;flex-flow:column nowrap;">
          <img style="width:125px;display:block;" src="normalCells.svg"/>
          <span style="margin:4px 3px;">Normal Cells</span>
          </span>
          </li>
          <li style="width:24%;">
          <span style="display:flex;align-items:center;flex-flow:column nowrap;">
          <img style="width:125px;display:block;" src="geneMutation.svg"/>
          <span style="margin:4px 3px;">Gene Mutation Takes<br/>Place in the Cells</span>
          </span>
          </li>
          <li style="width:24%;">
          <span style="display:flex;align-items:center;flex-flow:column nowrap;">
          <img style="width:125px;display:block;" src="abnormalCellGrowth.svg"/>
          <span style="margin:4px 3px;">Abnormal Cell Growth of<br/>the Mutated Cell</span>
          </span>
          </li>
          <li style="width:24%;">
          <span style="display:flex;align-items:center;flex-flow:column nowrap;">
          <img style="width:125px;display:block;" src="tumorFormation.svg"/>
          <span style="margin:4px 3px;">Tumor Formation takes </span>
          </span>
          </li>
          </ul>
          </div>
          <h2 style="margin-top: 8px; margin-bottom: 0;">Your Results</h2>
      `;

    return { testsUpdated: tests, colored: about, grayscaled: about, height: 1 };
  },
  "Cancer Profile Tips": tests => {
    tests.splice(
      tests.findIndex(t => t.TestName === "Thyroid Profile Tips"),
      1
    );
    const tips = `
          <div style="display: inline-block; width: 50%; margin-right: 64px;">
              <h2>Tips</h2>
              <ul>
                  <li>
                      <object data="${assetPath}stretching-exercises.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; vertical-align: top;"><b>Exercise:</b> Maintaining a healthy diet and regular exercise can lower the risk of cancer</p>
                  </li>
                  <li style="margin-top: 32px;">
                      <object data="${assetPath}pregnant-woman.svg" type="image/svg+xml" style="margin-right: 8px;"></object>
                      <p style="display: inline-block; vertical-align: top;"><strong>Regular Checkup:</strong> Women aged 50-74 are advised to get a mammography screening done once in every two years.A breast self-exam can also be done by the woman at home to look for changes or lumps in the breast tissue.</p>
                  </li>
              </ul>
          </div>
          <div style="display: inline-block; width: 40%; vertical-align: top;">
              <h2>Risk Factors</h2>

              <!-- following div is a hack JUST so that its content doesn't flow inline from where the above h2 ends - 'cz of the h2 being inline-block -->
              <div style="margin-top: 16px; margin-bottom: 16px;">
                <object data="${assetPath}pesticide.svg" type="image/svg+xml" style="margin-right: 32px;width:50px;"></object>
                  <object data="${assetPath}citrus-fruits.svg" type="image/svg+xml" style="margin-right: 32px;width:50px;"></object>
                  <object data="${assetPath}clean.svg" type="image/svg+xml" style="margin-right: 32px;width:50px;"></object>
              </div>
              <p>Many pesticides used in farming today have cancer causing properties. Hence vegetables, fruits and Green leaves must be thoroughly washed (and if possible the skin must be peeled) before consumption to reduce this risk.</p>
          </div>
      `;

    return { testsUpdated: tests, colored: tips, grayscaled: tips, height: 2 };
  },
}
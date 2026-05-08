import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const spineData = [
  { nerve: "C1", bodyPart: "Brain, Head", symptoms: ["Headache/Migraines", "Dizziness", "Insomnia", "Blood Pressure"] },
  { nerve: "C2", bodyPart: "Eyes, Sinuses, Ears", symptoms: ["Vision problems", "Sinus congestion", "Eye pain", "Earaches"] },
  { nerve: "C3", bodyPart: "Face, Jaw, Ears", symptoms: ["Facial numbness", "TMJ issues", "Tinnitus", "Hearing loss"] },
  { nerve: "C4", bodyPart: "Neck, Shoulders", symptoms: ["Neck pain", "Stiff neck", "Shoulder pain"] },
  { nerve: "C5", bodyPart: "Arms, Elbows, Hands", symptoms: ["Arm weakness", "Tennis elbow", "Carpal tunnel syndrome"] },
  { nerve: "C6", bodyPart: "Arms, Hands, Throat", symptoms: ["Numbness in arms/hands", "Chronic cough", "Difficulty swallowing"] },
  { nerve: "C7", bodyPart: "Shoulders, Arms, Hands", symptoms: ["Shoulder bursitis", "Elbow pain", "Finger numbness"] },
  { nerve: "T1", bodyPart: "Lungs, Chest", symptoms: ["Asthma", "Difficulty breathing", "Chest pain"] },
  { nerve: "T2", bodyPart: "Heart", symptoms: ["Heart conditions", "Palpitations", "Fatigue"] },
  { nerve: "T3", bodyPart: "Lungs, Sinuses", symptoms: ["Bronchitis", "Upper respiratory issues", "Congestion"] },
  { nerve: "T4", bodyPart: "Gallbladder, Liver", symptoms: ["Gallbladder problems", "Jaundice", "Digestive issues"] },
  { nerve: "T5", bodyPart: "Liver, Pancreas", symptoms: ["Liver conditions", "Blood sugar issues"] },
  { nerve: "T6", bodyPart: "Stomach, Esophagus", symptoms: ["Stomach problems", "Indigestion", "Acid reflux"] },
  { nerve: "T7", bodyPart: "Stomach, Pancreas", symptoms: ["Ulcers", "Gastritis", "Diabetes"] },
  { nerve: "T8", bodyPart: "Spleen", symptoms: ["Spleen problems", "Lowered immunity"] },
  { nerve: "T9", bodyPart: "Skin, Bladder", symptoms: ["Allergies", "Hives", "Bladder control issues"] },
  { nerve: "T10", bodyPart: "Kidneys, Adrenal Glands", symptoms: ["Kidney problems", "Adrenal issues", "Fatigue"] },
  { nerve: "T11", bodyPart: "Bladder, Skin", symptoms: ["Urinary problems", "Skin conditions"] },
  { nerve: "T12", bodyPart: "Intestines, Sex Organs", symptoms: ["Small intestine issues", "Reproductive problems"] },
  { nerve: "L1", bodyPart: "Large Intestine", symptoms: ["Constipation", "Colitis", "Diarrhea"] },
  { nerve: "L2", bodyPart: "Legs, Stomach", symptoms: ["Cramping", "Leg pain", "Acid reflux"] },
  { nerve: "L3", bodyPart: "Knees, Bladder, Sex Organs", symptoms: ["Knee pain", "Menstrual irregularities", "Bladder dysfunction"] },
  { nerve: "L4", bodyPart: "Lower Back, Feet", symptoms: ["Sciatica", "Foot cramps", "Low back pain"] },
  { nerve: "L5", bodyPart: "Legs, Ankles, Feet", symptoms: ["Leg numbness", "Weak ankles", "Swollen feet"] },
  { nerve: "Sacrum", bodyPart: "Hips, Circulatory System", symptoms: ["Hip pain", "Sacroiliac pain", "Poor circulation in legs"] },
  { nerve: "Coccyx", bodyPart: "Tailbone, Rectum", symptoms: ["Hemorrhoids", "Tailbone pain", "Bowel control issues"] },
];

const HealthStartsHere = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, string[]>>({});
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleCheck = (nerve: string, symptom: string, checked: boolean) => {
    setSelectedSymptoms((prev) => {
      const current = prev[nerve] || [];
      if (checked) {
        return { ...prev, [nerve]: [...current, symptom] };
      } else {
        const updated = current.filter((s) => s !== symptom);
        if (updated.length === 0) {
          const { [nerve]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [nerve]: updated };
      }
    });
  };

  const affectedNerves = Object.keys(selectedSymptoms).sort((a, b) => {
    const order = spineData.map((d) => d.nerve);
    return order.indexOf(a) - order.indexOf(b);
  });

  const hasSelections = affectedNerves.length > 0;

  // Row colors matching the original site - alternating warm tones
  const getRowBg = (i: number) => {
    const nerve = spineData[i].nerve;
    if (nerve.startsWith("C")) return i % 2 === 0 ? "bg-[#d6e6f0]" : "bg-[#c8dce8]";
    if (nerve.startsWith("T")) return i % 2 === 0 ? "bg-[#e8d8c0]" : "bg-[#dfd0b8]";
    if (nerve.startsWith("L")) return i % 2 === 0 ? "bg-[#d6e6f0]" : "bg-[#c8dce8]";
    return "bg-[#e8d8c0]";
  };

  // Body part label colors matching original
  const getBodyPartBg = (nerve: string) => {
    if (nerve.startsWith("C")) return "bg-[#7ab0d4] text-white";
    if (nerve.startsWith("T")) return "bg-[#c9a96e] text-white";
    if (nerve.startsWith("L")) return "bg-[#7ab0d4] text-white";
    if (nerve === "Sacrum") return "bg-[#c9a96e] text-white";
    return "bg-[#c9a96e] text-white";
  };

  const getNerveBg = (nerve: string) => {
    if (nerve === "C6" || nerve === "T6") return "bg-[#c9a96e] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold text-sm";
    return "font-bold text-sm text-secondary";
  };

  const getSymptomBg = () => "bg-[#c9a96e]/80 text-white";

  return (
    <Layout>
      {/* SEO */}
      <title>Health Starts Here | Well Adjusted Chiropractic</title>

      <section className="py-12 bg-background">
        <h1 className="font-heading text-4xl md:text-5xl text-primary text-center mb-2">
          HEALTH STARTS HERE
        </h1>
        <p className="text-center text-muted-foreground font-body text-lg mb-10">
          Choose all symptoms that are affecting you
        </p>

        <div className="max-w-[1200px] mx-auto px-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/30">
                <th className="text-left py-3 px-4 font-heading text-base text-secondary/70 italic">Corresponding Body Part</th>
                <th className="text-center py-3 px-4 font-heading text-base text-secondary/70 italic">Spinal Nerve</th>
                <th className="text-left py-3 px-4 font-heading text-base text-secondary/70 italic">Your Symptoms (Check All That Apply)</th>
              </tr>
            </thead>
            <tbody>
              {spineData.map((row, i) => {
                const isHovered = hoveredRow === i;
                return (
                  <tr
                    key={row.nerve}
                    className={`transition-all duration-200 ${getRowBg(i)} ${isHovered ? "!bg-primary/20 shadow-md" : ""}`}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="py-3 px-4">
                      <span className={`inline-block text-sm font-body px-4 py-1.5 rounded ${getBodyPartBg(row.nerve)}`}>
                        {row.bodyPart}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={getNerveBg(row.nerve)}>
                        {row.nerve}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-2">
                        {row.symptoms.map((symptom) => (
                          <label
                            key={symptom}
                            className={`flex items-center gap-1.5 ${getSymptomBg()} px-3 py-1 rounded text-sm font-body cursor-pointer hover:opacity-90 transition-opacity`}
                          >
                            <input
                              type="checkbox"
                              className="accent-white"
                              checked={selectedSymptoms[row.nerve]?.includes(symptom) || false}
                              onChange={(e) => handleCheck(row.nerve, symptom, e.target.checked)}
                            />
                            {symptom}
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Dynamic summary box - only appears when symptoms are selected */}
        {hasSelections && (
          <div className="max-w-[1200px] mx-auto px-4 mt-10">
            <div className="bg-[#fdf6ee] border border-[#c9a96e]/30 rounded-lg p-8 text-center">
              <h2 className="font-heading text-2xl text-red-700 mb-4 flex items-center justify-center gap-2">
                <span className="text-3xl">⚠️</span> POSSIBLE NERVE PRESSURE DETECTED!
              </h2>
              <p className="text-muted-foreground font-body mb-2">
                Based on the symptoms you selected, you may have pressure on the following nerve pathways:
              </p>
              <p className="font-heading text-xl text-primary mb-4">
                {affectedNerves.join(" , ")}
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-2">
                When nerves are under pressure, it can lead to chronic pain, reduced mobility, and long-term health complications.
                The longer nerve interference persists, the worse the problem can become.
              </p>
              <p className="text-foreground font-body font-semibold text-sm mb-2">
                If these nerves are affected, it's critical to get examined as soon as possible to prevent further damage and start corrective care.
              </p>
              <p className="font-heading text-lg text-foreground mb-6">
                <u className="font-bold">Don't wait!</u> Your health depends on it.
              </p>
              <button
                onClick={() => navigate("/special")}
                className="bg-[#c9a96e] hover:bg-[#b8975c] text-white font-heading text-lg px-12 py-4 rounded-full transition-colors"
              >
                NEXT STEP
              </button>
            </div>
          </div>
        )}

        {/* Gray's Anatomy quote */}
        <div className="max-w-[1000px] mx-auto px-4 mt-10">
          <blockquote className="text-center text-muted-foreground font-body text-sm italic leading-relaxed">
            "The nervous system controls and coordinates all organs and structures of the human body." (Gray's Anatomy, 29th Ed., page 4)
            Misalignments (subluxations) of spinal vertebrae and disk may cause irritation to the nervous system which could affect the structures, organs, and functions listed under "areas" and the "possible symptoms" that are associated with malfunctions of the areas noted.
          </blockquote>
        </div>
      </section>

      {/* Google Maps + Locations */}
      <section className="py-12 bg-muted">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&femb=1&ll=36.705912089674364%2C-101.1439669&z=6"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Well Adjusted Chiropractic Locations"
              />
            </div>

            {/* Location cards */}
            <div className="space-y-4">
              {[
                { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 238-0625" },
                { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 669-7620" },
                { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 353-0337" },
                { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 493-0611" },
                { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "303-323-9931" },
              ].map((loc) => (
                <div key={loc.name} className="bg-[#c9a96e] rounded-lg p-5 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold mb-1">{loc.name}</h3>
                      <p className="text-xs opacity-90">{loc.address}</p>
                      <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="text-sm font-bold text-yellow-300 hover:underline">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthStartsHere;

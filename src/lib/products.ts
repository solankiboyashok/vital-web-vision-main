export type ProductCategory = {
  slug: string;
  name: string;
  blurb: string;
  items: string[];
};

export const categories: ProductCategory[] = [
  {
    slug: "gauze-swabs",
    name: "Gauze Swabs",
    blurb:
      "Sterile and non-sterile gauze swabs in multiple plies and sizes — gamma sterile, ETO sterile, X-ray detectable.",
    items: [
      "Gauze Swab 5×5 cm — 8 ply / 16 ply (Gamma & ETO Sterile)",
      "Gauze Swab 7.5×7.5 cm — 8 ply / 16 ply (Gamma & ETO Sterile)",
      "Gauze Swab 10×10 cm — 8 ply / 16 ply (Gamma & ETO Sterile)",
      "Type 13 Non-Sterile Swabs (100 nos packs)",
      "X-Ray Detectable Swabs — 8 ply & 12 ply",
      "20×20 cm Type 17 Non-Sterile Swab",
    ],
  },
  {
    slug: "abdominal-pads",
    name: "Abdominal Pads & MOPs",
    blurb:
      "X-ray detectable abdominal pads (MOP) in Gamma, ETO and Non-sterile variants — Type 13, 17 and 20.",
    items: [
      "MOP 25×25 cm × 8 ply (Type 13/17/20)",
      "MOP 25×30 cm × 8/12 ply",
      "MOP 25×40 cm × 8 ply",
      "MOP 30×30 cm & 40×40 cm × 8 ply",
      "Combine Dressing Surgical Pad 10×10 cm & 10×20 cm",
      "Eye Pad Pouch Pack 6×8 cm (Gamma / ETO)",
    ],
  },
  {
    slug: "bandages",
    name: "Bandages & Tapes",
    blurb:
      "Cotton crepe bandages, gauze ribbon, elastic adhesive bandages, ortho cast padding and adhesive tape USP.",
    items: [
      "Cotton Crepe Bandage Premium — 6/8/10/15 cm × 4 m",
      "Cotton Crepe Bandage Regular — 6/8/10/15 cm × 4 m",
      "Gauze Ribbon (Gamma Sterile) — 2.5 cm × 2 m, 5 cm × 2 m, 2.5 cm × 100 m",
      "Elastic Adhesive Bandage — 10 cm × 1 m / 4 m / 6 m",
      "Ortho Roll Cast Padding — 10/15 cm × 3 m",
      "Adhesive Tape USP — 1 / 2.5 / 5 / 7 cm × 9.1 m",
    ],
  },
  {
    slug: "specialty-dressings",
    name: "Specialty Dressings",
    blurb: "Chlorhexidine and paraffin gauze dressings, gamjee rolls and other surgical dressings.",
    items: [
      "Chlorhexidine Gauze Dressing 10×10, 10×30",
      "Paraffin Gauze Dressing 10×10 × 20 nos",
      "Gamjee Roll 10 cm / 15 cm × 2 / 2.75 / 3 m",
    ],
  },
  {
    slug: "ppe-apparel",
    name: "PPE & Apparel",
    blurb:
      "Complete personal protective range — PPE kits, aprons, masks, gloves, face shields, drapes and covers.",
    items: [
      "PPE Kit",
      "Plastic Apron — single & individual pack",
      "Medical Apron — full & half sleeve",
      "Famcare N95 Mask, Swasa N95 Mask, 3 Ply Face Mask",
      "Latex & Nitrile Examination Gloves — 20s / 100s",
      "Famcare Face Shield",
      "Drapes 2×150 / 2×210 cm, Covers, Bed Sheet + Pillow Cover Set",
    ],
  },
  {
    slug: "respiratory",
    name: "Respiratory Care",
    blurb: "Oxygen masks, nebulizer kits, cannulas, ambu bags, suction sets and laryngoscope kits.",
    items: [
      "Nebulizer Mask Kit — Adult / Child",
      "Oxygen Mask Kit — Adult / Child",
      "Oxygen Cannula — Infant / Child / Adult",
      "Ambu Bag — Infant / Child / Adult",
      "Yankauer Suction Set",
      "Laryngoscope Set — Blade 0, 1, 2, 3",
      "Endotracheal Tube — Cuffed / Uncuffed",
    ],
  },
  {
    slug: "iv-catheters",
    name: "IV, Catheters & Tubing",
    blurb:
      "IV sets, foley catheters, pressure monitoring lines, three-way extensions and infusion accessories.",
    items: [
      "IV Set",
      "Infusion Cap (Inffen Cap)",
      "Foley Catheter 2-Way — 6FR to 24FR",
      "Pressure Monitoring Line — 10 cm",
      "3 Way Extension Line",
      "Iprep Disposable Skin Razor Blade",
    ],
  },
  {
    slug: "ortho-supports",
    name: "Orthopedic Supports",
    blurb:
      "Famcare branded knee caps, shoulder immobilizers, sling pouch, wrist & elbow binders and back supports.",
    items: [
      "Famcare Lumbo Sacral Support",
      "Famcare Premium Knee Cap",
      "Famcare Open Patella Hinged Knee Support — S/M/L/XL",
      "Famcare Shoulder Immobilizer — S/M/L/XL",
      "Famcare Tennis Elbow Stepper — S/M/L/XL",
      "Famcare Sling Pouch — S/M/L/XL",
      "Famcare Thumb Wrist Binder — S/M/L/XL",
      "Famcare Wrist Binder +1, Elbow Support — S/M/L/XL",
    ],
  },
  {
    slug: "mobility-aids",
    name: "Mobility & Daily Aids",
    blurb: "Wheelchairs, walking sticks, hot water bottles and home-care daily essentials.",
    items: [
      "Wheel Chair",
      "Walking Sticks — Single & Four Leg",
      "Hot Water Bottle",
      "Insulicool Insulin Vial Cooling Storage (2–8 °C)",
      "Bed Sheet Roll 24×100",
    ],
  },
  {
    slug: "diagnostic-firstaid",
    name: "Diagnostic & First Aid",
    blurb:
      "Thermometers, first aid kits, lancets, alcohol swabs, cooling gel patches and pill reminders.",
    items: [
      "Digital Thermometer",
      "First Aid Kit — empty box & customizable contents",
      "Famcare Lancet — Round / Flat",
      "Alcohol Swabs",
      "Coolit Cooling Gel Patch — Pediatric / Adult",
      "Pill Reminder Digital Box",
      "Wooden Tongue Depressor — Sterile / Non-sterile",
      "X-Ray View Box — Single / Double Film",
      "Electrosurgical Pencil",
      "Tweezer (Disposable)",
      "Ball Spirometer, Waste Bag",
    ],
  },
];

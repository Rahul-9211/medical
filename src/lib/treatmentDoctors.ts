/**
 * Each treatment page slug maps to exact doctor `specialty` values only.
 * Matching is strict (slug equality or prefix) so short tokens like "ent"
 * do not match gastroenterology, replacement, interventional, etc.
 */
export const TREATMENT_SPECIALTY_MAP: Record<string, string[]> = {
  "heart-surgery-cardiology": [
    "cardiology",
    "cardiac-surgery",
    "cardiac-sciences",
    "cardiothoracic-surgery",
    "cardiothoracic-vascular-surgery",
    "cardiothoracic-and-vascular-surgery",
    "interventional-cardiology",
    "paediatric-cardiac-surgery",
    "cardiac-surgery-ctvs",
  ],
  "orthopedic-surgery-joint-replacements": [
    "orthopaedics",
    "orthopaedics-joint-replacement",
    "ortho-spine-surgery",
  ],
  "neurosurgery-spine-treatments": [
    "neurosurgery",
    "neurology",
    "spine-surgery",
    "neurology-and-spinal-surgery",
    "neurointerventional-surgery",
    "neurosurgery-and-cns-radiosurgery",
  ],
  "cancer-treatment-oncology": [
    "surgical-oncology",
    "medical-oncology",
    "oncology",
    "oncology-services",
    "haemato-oncology-bmt",
    "pediatric-hematology-oncology-bmt",
    "surgical-oncology-head-and-neck",
    "urology-urologic-oncology-and-robotic-surgery",
  ],
  "liver-kidney-transplant": [
    "liver-transplant",
    "kidney-transplant",
    "nephrology",
    "nephrology-renal-transplant",
    "hepatology-liver-transplant",
    "liver-transplant-hpb-surgery",
    "liver-transplant-hepatobiliary-sciences",
    "liver-transplant-biliary-sciences",
    "liver-transplantation-gi-and-hpb-surgery",
    "hepato-pancreato-biliary-surgery",
  ],
  "general-laparoscopic-surgery": [
    "surgical-gastroenterology",
    "gi-surgery",
    "gastrointestinal-surgery",
    "gastroenterology",
    "gastroenterology-hepatology",
    "general-thoracic-surgery",
    "paediatric-surgery",
  ],
  "bariatric-weight-loss-surgery": [
    "bariatric-surgery",
    "gastrointestinal-bariatric-surgery",
    "general-and-bariatric-surgery",
    "general-laparoscopic-bariatric-surgery",
    "laparoscopic-bariatric-surgery",
  ],
  "urology-prostate-care": [
    "urology",
    "kidney-transplant-and-uro-oncology",
  ],
  "ivf-fertility-treatments": [
    "obstetrics-and-gynaecology",
    "gynaecology",
  ],
  "ent-surgeries": [
    "ent",
    "ent-and-head-neck-surgery",
  ],
  "plastic-cosmetic-surgery": [
    "plastic-surgery",
    "plastic-cosmetic-surgery",
  ],
  "dental-implants-oral-care": ["dental", "oral-surgery", "dentistry"],
  "eye-treatment-lasik-surgery": ["ophthalmology", "eye-care"],
  "lung-respiratory-disease-care": [
    "general-thoracic-surgery",
    "pulmonology",
    "respiratory-medicine",
  ],
  "skin-dermatology-treatments": ["dermatology", "skin-care"],
  "pediatric-surgery-neonatal-care": ["paediatric-surgery", "pediatric-surgery"],
  "autoimmune-rheumatology-treatments": ["rheumatology", "immunology"],
  "diabetes-thyroid-hormonal-care": [
    "endocrinology",
    "diabetology",
    "thyroid",
  ],
  "mental-health-psychiatry-support": ["psychiatry", "mental-health"],
  "blood-disorders-hematology-care": [
    "haemato-oncology-bmt",
    "pediatric-hematology-oncology-bmt",
    "hematology",
  ],
};

export interface TreatmentDoctor {
  id: string;
  name: string;
  designation?: string;
  specialty?: string;
  hospital?: string;
  experienceYears?: number;
  expertise?: string[];
  treatments?: string[];
  specialities?: string[];
  media?: { images?: { url: string; visible?: boolean }[] };
}

export interface TreatmentSpecialist {
  id?: string;
  name: string;
  specialization: string;
  experience: string;
  affiliation: string;
  expertise: string;
  consultation_link: string;
  photoUrl?: string;
  image?: string;
  avatar?: string;
  media?: { images?: { url: string; visible?: boolean }[] };
}

/** Normalize specialty text to a comparable slug: "ENT & Head-Neck" → "ent-and-head-neck" */
export function normalizeSpecialtySlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Strict match: equal slug, or specialty slug starts with pattern slug + "-".
 * Short patterns (≤4 chars, e.g. "ent") never use substring/includes matching.
 */
function specialtySlugMatches(pattern: string, specialtySlug: string): boolean {
  const patternSlug = normalizeSpecialtySlug(pattern);
  if (!patternSlug || !specialtySlug) return false;

  if (specialtySlug === patternSlug) return true;
  if (specialtySlug.startsWith(`${patternSlug}-`)) return true;

  return false;
}

export function doctorMatchesTreatmentSlug(
  doctor: TreatmentDoctor,
  slug: string
): boolean {
  const patterns = TREATMENT_SPECIALTY_MAP[slug];
  if (!patterns?.length || !doctor.specialty?.trim()) return false;

  const specialtySlug = normalizeSpecialtySlug(doctor.specialty);
  return patterns.some((pattern) => specialtySlugMatches(pattern, specialtySlug));
}

function formatExperience(doctor: TreatmentDoctor): string {
  if (typeof doctor.experienceYears === "number" && doctor.experienceYears > 0) {
    return `${doctor.experienceYears}+ years of experience`;
  }
  return "";
}

function formatExpertise(doctor: TreatmentDoctor): string {
  const fromTreatments = (doctor.treatments ?? [])
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 4);
  if (fromTreatments.length > 0) return fromTreatments.join(", ");

  const fromExpertise = (doctor.expertise ?? [])
    .map((e) => e.trim())
    .filter(Boolean)
    .slice(0, 4);
  if (fromExpertise.length > 0) return fromExpertise.join(", ");

  const fromSpecialities = (doctor.specialities ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 3);
  if (fromSpecialities.length > 0) return fromSpecialities.join(", ");

  return doctor.specialty?.replace(/-/g, " ") ?? "";
}

export function doctorToTreatmentSpecialist(
  doctor: TreatmentDoctor
): TreatmentSpecialist {
  const image =
    doctor.media?.images?.find((img) => img.visible)?.url ??
    doctor.media?.images?.[0]?.url;

  return {
    id: doctor.id,
    name: doctor.name,
    specialization:
      doctor.designation?.trim() || doctor.specialty?.replace(/-/g, " ") || "",
    experience: formatExperience(doctor),
    affiliation: doctor.hospital?.trim() || "",
    expertise: formatExpertise(doctor),
    consultation_link: `/doctors/${doctor.id}`,
    photoUrl: image,
    media: doctor.media,
  };
}

export function getDoctorsForTreatment(
  doctors: TreatmentDoctor[],
  slug: string
): TreatmentSpecialist[] {
  return doctors
    .filter((doc) => doctorMatchesTreatmentSlug(doc, slug))
    .sort((a, b) => {
      const aHasTreatments = (a.treatments?.length ?? 0) > 0 ? 1 : 0;
      const bHasTreatments = (b.treatments?.length ?? 0) > 0 ? 1 : 0;
      if (bHasTreatments !== aHasTreatments) return bHasTreatments - aHasTreatments;
      return (b.experienceYears ?? 0) - (a.experienceYears ?? 0);
    })
    .map(doctorToTreatmentSpecialist);
}

export function mergeTreatmentSpecialists(
  fromDoctors: TreatmentSpecialist[],
  fromTreatmentJson: TreatmentSpecialist[] = []
): TreatmentSpecialist[] {
  if (fromDoctors.length === 0) return fromTreatmentJson;

  const seen = new Set(fromDoctors.map((d) => d.id ?? d.name.toLowerCase()));
  const extras = fromTreatmentJson.filter((spec) => {
    const key = spec.consultation_link?.split("/").pop() ?? spec.name.toLowerCase();
    return !seen.has(key);
  });

  return [...fromDoctors, ...extras];
}

// WebMCP: exposes site actions as tools to AI agents running in the browser.
// Spec: https://webmachinelearning.github.io/webmcp/

type Loc = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  url: string;
};

const LOCATIONS: Loc[] = [
  { id: "erie-co", name: "Erie, CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607", hours: "Mon 9-12 / 3-6, Tue 3-6, Wed 9-12 / 3-6, Thu 9-12 / 3-6, Fri 9-12:30", url: "https://staywelladjusted.com/chiropractor-erie-co" },
  { id: "loveland-co", name: "Loveland, CO", address: "3850 N Grant Ave STE 100, Loveland, CO 80538", phone: "(970) 427-2543", hours: "Mon-Fri 8-12 / 3-6", url: "https://staywelladjusted.com/chiropractor-loveland-co" },
  { id: "greeley-co", name: "Greeley, CO", address: "6200 W 9th St #2A, Greeley, CO 80634", phone: "(970) 888-7097", hours: "Mon-Wed & Fri 8-12 / 2-6, Thu 7-12 / 2-7", url: "https://staywelladjusted.com/chiropractor-greeley-co" },
  { id: "fort-collins-co", name: "Fort Collins, CO", address: "1075 W Horsetooth Rd, Fort Collins, CO 80526", phone: "(970) 714-2207", hours: "Mon 8-12 / 3-6, Tue 3-6, Wed 8-12, Thu 8-12 / 3-6", url: "https://staywelladjusted.com/chiropractor-fort-collins-co" },
  { id: "arlington-tx", name: "Arlington, TX", address: "5717 SW Green Oaks Blvd, Arlington, TX 76017", phone: "(682) 277-1966", hours: "Mon-Thu 8-12 / 3-6", url: "https://staywelladjusted.com/chiropractor-arlington-tx" },
];

const SERVICES = [
  { name: "Chiropractic Care", url: "https://staywelladjusted.com/chiropractic-care", description: "Spinal adjustments for back pain, neck pain, headaches and posture." },
  { name: "Spinal Decompression", url: "https://staywelladjusted.com/spinal-decompression", description: "Non-surgical traction therapy for disc herniation and sciatica." },
  { name: "Massage Therapy", url: "https://staywelladjusted.com/massage-therapy", description: "Therapeutic massage, offered at the Erie, CO office." },
  { name: "Dual Shockwave Therapy", url: "https://staywelladjusted.com/dual-shockwave", description: "Acoustic wave therapy for chronic soft-tissue pain." },
  { name: "Custom Foot Orthotics", url: "https://staywelladjusted.com/custom-foot-orthotics", description: "3D-scanned orthotics for foot, knee, hip and back alignment." },
  { name: "Sports Physicals", url: "https://staywelladjusted.com/sports-physicals", description: "Pre-participation physical exams for student athletes." },
  { name: "Workplace Wellness", url: "https://staywelladjusted.com/workplace-wellness", description: "On-site corporate wellness programs and events." },
];

const text = (value: unknown) => ({
  content: [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }],
});

const tools = [
  {
    name: "list_locations",
    description: "List all Well Adjusted Chiropractic clinic locations with address, phone number and office hours.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    async execute() {
      return text(LOCATIONS);
    },
  },
  {
    name: "find_location",
    description: "Find a Well Adjusted Chiropractic clinic by city or state.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "City or state, e.g. 'Erie', 'Colorado', 'TX'." } },
      required: ["query"],
      additionalProperties: false,
    },
    async execute({ query }: { query: string }) {
      const q = String(query || "").toLowerCase();
      const found = LOCATIONS.filter((l) => `${l.name} ${l.address}`.toLowerCase().includes(q));
      return text(found.length ? found : { message: "No matching clinic. All locations:", locations: LOCATIONS });
    },
  },
  {
    name: "list_services",
    description: "List the chiropractic and wellness services offered by Well Adjusted Chiropractic.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    async execute() {
      return text(SERVICES);
    },
  },
  {
    name: "get_booking_link",
    description: "Get the correct online scheduling link for a patient type and location.",
    inputSchema: {
      type: "object",
      properties: {
        patient_type: { type: "string", enum: ["new", "existing"], description: "Whether the user is a new or existing patient." },
        service: { type: "string", enum: ["chiropractic", "massage"], description: "Service to book." },
        location: { type: "string", description: "Clinic city, e.g. 'Erie'." },
      },
      required: ["patient_type"],
      additionalProperties: false,
    },
    async execute({ patient_type, service }: { patient_type: string; service?: string }) {
      if (service === "massage") {
        return text({ url: "https://staywelladjusted.com/massage-therapy-schedule-erie", note: "Massage therapy is available at the Erie, CO office only." });
      }
      if (patient_type === "existing") {
        return text({ url: "https://staywelladjusted.com/schedule-existing-patients-erie-co", note: "Online rescheduling is available for Erie, CO. For other clinics, call the location directly.", locations: LOCATIONS.map((l) => ({ name: l.name, phone: l.phone })) });
      }
      return text({ url: "https://staywelladjusted.com/schedule-an-appointment-new-patient-special-offer", note: "New patient special: $79." });
    },
  },
];

export function registerWebMCP() {
  const nav = navigator as Navigator & {
    modelContext?: { provideContext?: (ctx: { tools: unknown[] }) => void };
  };
  try {
    nav.modelContext?.provideContext?.({ tools });
  } catch {
    // WebMCP not supported in this browser — safe to ignore.
  }
}

import React from "react";

const roles = [
  {
    company: "North West Carrying Company LLP",
    role: "Supply Chain Analyst — Student Intern",
    location: "Delhi, India",
    dates: "May 2024 – Sept 2024",
    bullets: [
      "Worked within the company ERP (SAP/Oracle) to collect and analyze data across inventory levels, shipment tracking, supplier performance, and delivery times.",
      "Prepared KPI reports (e.g., on-time delivery, lead times, inventory turns) and summarized findings for stakeholders.",
      "Identified process bottlenecks and proposed improvements to streamline reporting and reduce manual handoffs.",
      "Collaborated with operations and procurement to validate data quality and align on next-step actions.",
    ],
    tech: ["SAP/Oracle ERP", "SQL", "Excel", "Data Analysis"],
  },
  {
    company: "GAOTek Inc.",
    role: "Software Development — Student Intern",
    location: "Delhi, India",
    dates: "Jan 2022 – Mar 2022",
    bullets: [
      "Gained hands-on experience with Python, JavaScript, and Java while contributing to feature enhancements.",
      "Collaborated within Agile/Scrum teams to design and improve native software based on requirements, UX designs, and architectural guidelines.",
      "Communicated with cross-functional teammates to clarify scope, break down tasks, and share progress.",
    ],
    tech: ["Python", "JavaScript", "Java", "Agile/Scrum", "Git"],
  },
  {
    company: "OnActuate",
    role: "Student Summer Intern",
    location: "Delhi, India",
    dates: "Jun 2018 – Aug 2018",
    bullets: [
      "Worked with stakeholders to improve performance of web application components and participated in functional testing.",
      "Supported data entry and data cleaning by writing SQL queries for reports and ad-hoc analyses.",
      "Shadowed Product Managers and Software Developers to troubleshoot defects and document findings for client engagements.",
      "Used Agile practices and collaboration tools for sprint communication and status tracking.",
    ],
    tech: ["SQL", "Jira", "Confluence", "Slack", "Web Testing"],
  },
  {
    company: "UBCO Girls in Tech (Student Club)",
    role: "Treasurer",
    location: "University of British Columbia Okanagan, Canada",
    dates: "Term Role",
    bullets: [
      "Owned budgeting, expense tracking, and reimbursements; coordinated with the executive team on event funding and sponsorships.",
      "Maintained transparent financial records and prepared simple summaries for meetings and year-end reporting.",
      "Collaborated on event planning, ensuring vendor payments and approvals were completed on time.",
    ],
    tech: ["Budgeting", "Excel", "Organization", "Communication"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Experience
      </h2>

      {/* Changed grid to single column */}
      <div className="grid grid-cols-1 gap-8">
        {roles.map((r, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg ring-1 ring-gray-700 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-green-500/10 via-transparent to-transparent" />

            <header className="mb-3">
              <h3 className="text-xl font-semibold text-white">
                {r.role}
              </h3>
              <p className="text-gray-300">
                <span className="font-medium text-gray-200">{r.company}</span>{" "}
                • {r.location} • {r.dates}
              </p>
            </header>

            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              {r.bullets.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {r.tech.map((t, i) => (
                <li
                  key={i}
                  className="text-xs uppercase tracking-wide bg-gray-700/60 text-gray-200 px-3 py-1 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

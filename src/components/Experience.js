// components/Experience.js
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="px-8 py-20 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Experience
      </h2>

      {/* Timeline Style */}
      <div className="space-y-12 text-gray-300 leading-relaxed">

        {/* North West Carrying Company */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Supply Chain Analyst Intern – North West Carrying Company LLP
          </h3>
          <p className="text-sm italic mb-3">Delhi, India | May 2024 – Sept 2024</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Leveraged <strong>SAP/Oracle ERP</strong> tools to collect and analyze supply chain data.</li>
            <li>Conducted <strong>KPI analysis</strong> (inventory turnover, delivery lead time).</li>
            <li>Collaborated with senior analysts to improve vendor performance tracking.</li>
            <li>Automated data cleaning tasks using <strong>SQL queries</strong>.</li>
          </ul>
        </div>

        {/* GAOTek */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Software Development Intern – GAOTek Inc.
          </h3>
          <p className="text-sm italic mb-3">Delhi, India | Jan 2022 – Mar 2022</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Worked with <strong>Python, Java, and JavaScript</strong> to develop small features.</li>
            <li>Contributed to <strong>Agile Scrum sprints</strong> and wrote unit tests.</li>
            <li>Helped QA team fix 20+ defects aligned with UX guidelines.</li>
            <li>Created a small <strong>automation tool</strong> to reduce reporting time.</li>
          </ul>
        </div>

        {/* OnActuate */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Student Summer Intern – OnActuate
          </h3>
          <p className="text-sm italic mb-3">Delhi, India | Jun 2018 – Aug 2018</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supported <strong>ERP/CRM application performance</strong> enhancements.</li>
            <li>Wrote <strong>SQL queries</strong> for data cleaning and validation.</li>
            <li>Documented findings in <strong>Confluence</strong> for team use.</li>
            <li>Participated in Agile ceremonies and learned project lifecycle management.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;

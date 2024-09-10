import React from 'react';


const skills = {
  languages: ['C','C++', 'JavaScript', 'Java', 'Python','SQL'],
  technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'MySQL','HTML','CSS','TailwindCSS'],
  tools: ['Git', 'Appwrite', 'VS Code', 'Postman'],
};

const SkillCard = ({ title, items }) => {
  return (
    <div className="bg-gray-800 text-white border border-gray-700 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition-colors duration-300">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 text-center border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            style={{ display: 'inline-flex', flexShrink: 0 }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};



const Skills = () => {
  return (
    <section id="whatiknow" className="flex flex-col items-center justify-center min-h-screen w-full p-5">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-[#E48A57] mb-8">What I Know</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
          <div className="flex-1">
            <SkillCard title="Languages" items={skills.languages} />
          </div>
          <div className="flex-1">
            <SkillCard title="Technologies" items={skills.technologies} />
          </div>
          <div className="flex-1">
            <SkillCard title="Tools" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;

const axios = require('axios');

async function getChatResponse(prompt) {
  const API_URL = 'https://api.together.xyz/v1/chat/completions';
  const API_KEY = process.env.LLM_API_KEY;

  const structuredPrompt = `
    You are a chatbot designed to answer queries about a user's resume. The resume data is as follows:

Personal Information:
- Name: Aniket Kumar
- Contact:
  - Phone: +91-8271824498
  - Email: kumaraniket.3658@gmail.com
  - Alternate Email: aniketk.ug21.cs@nitp.ac.in
  - LinkedIn: https://www.linkedin.com/in/aniket-kumar-99b591234/
  - GitHub: https://github.com/aniket-4971
  - LeetCode: https://leetcode.com/aniket_4971/
  - Coding Ninjas: https://www.codingninjas.com/studio/profile/5d365980-9fdd-449b-865a-5a6e4df071b5
  - GeeksForGeeks: https://auth.geeksforgeeks.org/user/kumaraniket3658

Education:
1. National Institute of Technology, Patna
   - Degree: B.Tech in Computer Science Engineering (2021-2025)
   - CGPA: 8.91
2. Jeewan Public School
   - Intermediate (CBSE, Bihar, 2019-2021)
   - Percentage: 87.2
3. CS DAV Public School
   - Matriculation (CBSE, Bihar, 2018-2019)
   - Percentage: 93

Experience:
- Software Development Intern at Texas Instruments Bangalore (05/2024 - 07/2024)
  - Responsibilities:
    1. Attended brainstorming sessions to optimize PDC operations.
    2. Created dashboards and visualizations using Spotfire.
    3. Assisted in data collection and preprocessing using Denodo.

Projects:
1. **SynQ Analytics**
   - Tools: SQL, Spotfire, Denodo
   - Description: Optimized various subsystems in Product Distribution Centers (PDCs).
   - Duration: 05/2024 - 07/2024
2. **WarrantBuddy: Digital Warrant Management System**
   - Tools: MERN, Google Maps API, Chatbot
   - Description: Streamlined warrant management and arrest processes with transparency.
   - Duration: 04/2024
3. **Inshorts-Clone**
   - Tools: MERN, Material-UI
   - Description: Built a full-stack news aggregator similar to Inshorts.
   - Duration: 08/2024

Skills:
- Programming Languages: C, C++, HTML, CSS, Java, SQL, JavaScript
- Developer Tools: Git, MySQL, VS Code, GitHub, Jupyter Notebook, Spotfire, Denodo, Postman
- Frameworks: ReactJS, ExpressJS, NodeJS
- Cloud Databases: MySQL, MongoDB, SQL Server Management Studio
- Soft Skills: Public Speaking, Writing, Team Work, Communication, Adaptability
- Coursework: Data Structures and Algorithms, Operating Systems, DBMS, OOP, Computer Networks
- Areas of Interest: Software Development, Web Development, Competitive Programming, Data Analysis

Positions of Responsibility:
1. Training and Placement Coordinator, CSE Department (2024-present)
2. President, Expresso Club NIT Patna (2024-present)
3. Class Representative, CSE(2021-25) Section 2 (2022-2023)
4. Senior Executive Member (Public Relations), Entrepreneurship Cell NIT Patna (2023-present)

Achievements:
1. Solved 1000+ DSA questions across coding platforms.
2. LeetCode Global Rank: 72,517.
3. Specialist Badges in DSA on Coding Ninjas.
4. GeeksforGeeks Coding Score: 1792 (500+ questions solved).
5. Bihar State Topper: Smart Kid General Knowledge Olympiad (2018).

You should provide detailed answers based on this resume. Answer questions related to personal information, education, work experience, skills, projects, achievements, or positions of responsibility. If the question is unrelated to the resume, politely guide the user back to relevant topics.
  Question: ${prompt}
  `;

  const body = {
    messages: [
      {
        role: 'system',
        content: 'The following is a resume of Aniket Kumar. Only answer queries based on this information.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
    response_format: {
      type: 'json_object',
      schema: {
        properties: {
          title: {
            description: 'A title for the response',
            title: 'Title',
            type: 'string'
          },
          summary: {
            description: 'A short summary of the answer.',
            title: 'Summary',
            type: 'string'
          },
          actionItems: {
            description: 'Actionable items or key information derived from the resume.',
            items: { type: 'string' },
            title: 'Actionitems',
            type: 'array'
          }
        },
        required: ['title', 'summary', 'actionItems'],
        title: 'Resume Information',
        type: 'object'
      }
    }
  };

  try {
    const response = await axios.post(
      API_URL,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const aiResponse = JSON.parse(response.data.choices[0].message.content);
      return aiResponse;
    } else {
      throw new Error('Invalid response from Together AI API.');
    }
  } catch (error) {
    console.error('Error calling Together AI API:', error.message);
    throw new Error('Unable to fetch response from AI API.');
  }
}

module.exports = { getChatResponse };

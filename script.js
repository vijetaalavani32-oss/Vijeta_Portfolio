
// Portfolio Projects
const projects = [
    {
        title: "AI-Based Crop Advisory System",

        description: "An AI-powered agricultural advisory system combining machine learning-based crop recommendation and deep learning-based plant disease detection, with farmer-friendly guidance.",

        problemStatement: "Farmers often face challenges in selecting suitable crops and identifying plant diseases early. This project combines machine learning and computer vision to provide accessible agricultural guidance.",

        highlights: [
            "Developed a machine learning-based crop recommendation system using Random Forest.",
            "Implemented plant disease detection using MobileNetV2.",
            "Integrated farmer-friendly guidance through a Flask application.",
            "Added Kannada text and voice support for accessibility."
        ],
        results: [
            "Crop recommendation model achieved 96.36% accuracy.",
            "Combined machine learning and deep learning for agricultural guidance.",
            "Designed the system to support farmer-friendly interaction."
       ],
       workflow: [
            "Farmer Input",
            "Crop Recommendation (Random Forest)",
            "Plant Disease Detection (MobileNetV2)",
            "Farmer-Friendly Advisory"
      ],

        technologies: [
            "Python",
            "Scikit-learn",
            "Random Forest",
            "MobileNetV2",
            "Flask",
            "Machine Learning"
        ],

        category: "Artificial Intelligence",
        image: "assets/projects/crop.svg",
        link: "https://github.com/vijetaalavani32-oss"
    },

    // Keep your remaining three project objects below this line
    {
    title: "DNA Splice Site Classification using CNN",

    description: "An individual deep learning project that uses Convolutional Neural Networks to classify DNA sequences and identify splice sites.",

    category: "Deep Learning",
    image: "assets/projects/dna.svg",

    projectType: "Individual Project",

    problemStatement: "Identifying splice sites in DNA sequences is an important task in computational biology. This project explores how deep learning can classify DNA sequence patterns.",

    highlights: [
        "Worked with the UCI Splice dataset.",
        "Applied DNA sequence preprocessing for model training.",
        "Developed a CNN architecture using Conv1D layers.",
        "Used dropout regularization to help reduce overfitting."
    ],
    workflow: [
    "DNA Sequence Input",
    "Sequence Preprocessing",
    "CNN Feature Extraction",
    "Splice Site Classification"
    ],
    results: [
    "Applied a CNN-based approach to DNA splice site classification.",
    "Used Conv1D layers to learn patterns from DNA sequences.",
    "Applied dropout regularization during model training.",
    "Explored deep learning for computational biology."
  ],

    technologies: [
        "Python",
        "Deep Learning",
        "CNN",
        "Conv1D",
        "Bioinformatics"
    ],

    link: "https://github.com/vijetaalavani32-oss/DNA-Splice-Site-Classification-CNN"
    },


    {
        title: "Smart Energy Monitoring",
        description: "A smart energy monitoring project focused on household electricity consumption, data preprocessing and distributed data processing.",

        category: "Data Engineering",
        image: "assets/projects/energy.svg",
        technologies: ["Python", "Pandas", "Apache Kafka", "Apache Spark"],
        workflow: [
             "Energy Consumption Data",
             "Data Preprocessing",
             "Kafka & Spark Processing",
             "Energy Analytics Dashboard"
            ],
        results: [
             "Processed household electricity consumption data.",
             "Explored distributed data processing using Kafka and Apache Spark.",
             "Organized energy data for monitoring and dashboard visualization."
    ],
        link: "https://github.com/vijetaalavani32-oss/smart-energy-monitoring"
    },
    {
        title: "MLflow, Prometheus & Grafana Monitoring",
        description: "An MLOps project exploring machine learning experiment tracking and model monitoring.",
        category: "MLOps",
        image: "assets/projects/mlops.svg",
        technologies: ["MLflow", "Prometheus", "Grafana", "Docker"],
        workflow: [
              "Machine Learning Experiment",
              "MLflow Experiment Tracking",
              "FastAPI Model Serving",
              "Prometheus & Grafana Monitoring"
          ],
          results: [
              "Explored machine learning experiment tracking using MLflow.",
              "Integrated Prometheus and Grafana for monitoring and visualization.",
              "Used Docker to support the project environment.",
              "Explored model serving through FastAPI."
     ],
        link: "https://github.com/vijetaalavani32-oss/MLflow-Prometheus-Grafana-Monitoring"
    },
    
{
    title: "Real-Time Lab Resource Tracking System",

    description: "A real-time data engineering system that tracks laboratory equipment bookings and usage events, processes streaming data and identifies unusual resource usage patterns.",

    category: "Data Engineering",

    image: "assets/projects/lab.svg",

    problemStatement: "Laboratory administrators need better visibility into equipment usage, booking patterns and unusual resource activity across departments.",

    highlights: [
        "Implemented event streaming using Apache Kafka.",
        "Processed equipment usage events with Spark Structured Streaming.",
        "Applied Isolation Forest for anomaly detection.",
        "Stored processed sessions using Parquet.",
        "Visualized resource activity through a Streamlit dashboard."
    ],

    technologies: [
        "Python",
        "Apache Kafka",
        "Apache Spark",
        "Isolation Forest",
        "Streamlit",
        "Parquet"
    ],

    workflow: [
        "Lab Equipment Booking Events",
        "Kafka Event Streaming",
        "Spark Structured Streaming",
        "Isolation Forest Anomaly Detection",
        "Streamlit Dashboard"
    ],

    results: [
        "Generated and processed synthetic laboratory equipment usage events.",
        "Identified unusual usage patterns such as off-hours bookings and unusually long sessions.",
        "Visualized processed sessions and flagged anomalies through a live dashboard."
    ],

    link: "https://github.com/vijetaalavani32-oss/lab-resource-tracking"
},


{
    title: "Indian Crime Data Analysis",

    description: "A data science project exploring crime patterns across Indian cities through data preprocessing, exploratory analysis, visualization and machine learning.",

    category: "Data Science",

    image: "assets/projects/crime.svg",

    problemStatement: "Understanding crime patterns across cities, crime categories and victim demographics can help uncover meaningful trends in crime data.",

    highlights: [
        "Analyzed a dataset containing 40,160 crime records.",
        "Performed data cleaning, preprocessing and feature engineering.",
        "Explored crime distribution across 29 Indian cities.",
        "Visualized crime trends and frequently reported crime types.",
        "Implemented Decision Tree Regression for victim-age prediction.",
        "Evaluated model performance using R² Score and Mean Absolute Error."
    ],

    technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Machine Learning"
    ],

    workflow: [
        "Indian Crime Dataset",
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis",
        "Crime Pattern Visualization",
        "Decision Tree Regression",
        "Model Evaluation"
    ],

    results: [
        "Analyzed 40,160 crime records across 29 cities.",
        "Identified crime distribution and frequently reported crime categories.",
        "Evaluated the regression model with an R² score of -0.198 and MAE of 18.494 years."
    ],

    link: "https://github.com/vijetaalavani32-oss/crimedata"
},


];

// Find the project container
const projectContainer = document.getElementById("project-container");

// Display project cards
projects.forEach(function(project) {

    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        ${project.image ? `
            <img src="${project.image}"
                 alt="${project.title}"
                 class="project-image">
        ` : ""}

        <span class="project-category">${project.category}</span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>
                ${project.workflow ? `
            <div class="case-study">
                <h4>Project Workflow</h4>
                <div class="workflow-container">
                    ${project.workflow.map((step, index) => `
                        <div class="workflow-step">
                            ${step}
                        </div>
                        ${index < project.workflow.length - 1
                            ? '<div class="workflow-arrow">↓</div>'
                            : ''}
                    `).join("")}
                </div>
            </div>
        ` : ""}
                ${project.results ? `
            <div class="case-study">
                <h4>Project Results & Impact</h4>
                <ul>
                    ${project.results.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>
        ` : ""}

        <div class="project-technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
        </div>

        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
            View on GitHub →
        </a>
    `;

    projectContainer.appendChild(card);
});

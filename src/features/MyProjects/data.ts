import { Project } from "./models.ts";

const projects: Project[] = [
    {
        name: 'projects.expensesManager.title',
        description: "projects.expensesManager.description",
        demoLink: 'https://64e64a5f5cfd9306430d3c2b--effulgent-quokka-a09c58.netlify.app/',
        github: 'https://github.com/Yousef-Hegazy/Expenses-Manager-Front',
        images: [
            '/img/projects/expenses_manager/expense-adding.png',
            '/img/projects/expenses_manager/expense-home.png',
            '/img/projects/expenses_manager/expense-statistics.png',
            '/img/projects/expenses_manager/expense-numeric-stats.png',
        ],
        techStack: {
            frontend: ["ReactJS", "Zustand", "React Query", "MaterialUI", "TypeScript"],
            backend: [".Net 7.0", "PostgresSql"],
        }
    },
    {
        name: 'projects.eKhadamat.title',
        description: "projects.eKhadamat.description",
        demoLink: 'https://e-khadamat.syadtech.com:2102/#/home',
        images: [
            '/img/projects/e_khadamat/khadamat-dead.png',
            '/img/projects/e_khadamat/khadamat-env.png',
            '/img/projects/e_khadamat/khadamat-initiators.png',
            '/img/projects/e_khadamat/khadamat-volunt.png',
        ],
        techStack: {
            frontend: ["ReactJS", "Redux TK", "MaterialUI", "JavaScript", "Cypress (Testing)"],
            backend: [".Net Core", "SqlServer"],
        }
    },
    {
        name: 'projects.iscopeDownloader.title',
        description: "projects.iscopeDownloader.description",
        github: 'https://github.com/Yousef-Hegazy/iscope_downloader/tree/multi_source',
        images: [
            '/img/projects/i_scope_tool/iscope_downloader-database.png',
            '/img/projects/i_scope_tool/iscope_downloader-done.png',
            '/img/projects/i_scope_tool/iscope_downloader-excel.png',
            '/img/projects/i_scope_tool/iscope_downloader-processing.png',
        ],
        techStack: {
            frontend: ["Flutter", "Riverpod"],
            backend: [".Net 7.0", "SqlServer"],
        }
    },
];

export default projects;
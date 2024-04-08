declare const CONFIG: {
    github: {
        username: string;
    };
    /**
     * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
     * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
     * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
     */
    base: string;
    projects: {
        github: {
            display: boolean;
            header: string;
            mode: string;
            automatic: {
                sortBy: string;
                limit: number;
                exclude: {
                    forks: boolean;
                    projects: any[];
                };
            };
            manual: {
                projects: string[];
            };
        };
        external: {
            header: string;
            projects: {
                title: string;
                description: string;
                imageUrl: string;
                link: string;
            }[];
        };
    };
    seo: {
        title: string;
        description: string;
        imageURL: string;
    };
    social: {
        linkedin: string;
        website: string;
        email: string;
    };
    resume: {
        fileUrl: string;
    };
    skills: string[];
    experiences: {
        company: string;
        position: string;
        from: string;
        to: string;
        companyLink: string;
    }[];
    certifications: any[];
    educations: {
        institution: string;
        degree: string;
        from: string;
        to: string;
    }[];
    publications: {
        title: string;
        conferenceName: string;
        journalName: string;
        authors: string;
        link: string;
        description: string;
    }[];
    blog: {
        source: string;
        username: string;
        limit: number;
    };
    googleAnalytics: {
        id: string;
    };
    hotjar: {
        id: string;
        snippetVersion: number;
    };
    themeConfig: {
        defaultTheme: string;
        disableSwitch: boolean;
        respectPrefersColorScheme: boolean;
        displayAvatarRing: boolean;
        themes: string[];
        customTheme: {
            primary: string;
            secondary: string;
            accent: string;
            neutral: string;
            'base-100': string;
            '--rounded-box': string;
            '--rounded-btn': string;
        };
    };
    footer: string;
    enablePWA: boolean;
    experience_mod: {
        title: string;
        company: string;
        date: string;
        location: string;
        description: string[];
        link: string;
        image: string;
        tags: string[];
    }[];
};
export default CONFIG;

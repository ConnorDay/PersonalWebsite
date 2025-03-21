import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "routes/projects/projects.tsx"),
    route("experience", "routes/experience/experience.tsx"),
    route("resume", "routes/resume/resume.tsx"),
] satisfies RouteConfig;

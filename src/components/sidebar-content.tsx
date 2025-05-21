import { LucideIcon } from "lucide-react";
import { ReactNode, SVGProps } from "react";
import { Icons } from "./icons";

interface Content {
  title: string;
  href?: string;
  Icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
  isNew?: boolean;
  list: {
    title: string;
    href: string;
    icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
    group?: boolean;
    isNew?: boolean;
  }[];
}

export const contents: Content[] = [
  {
    title: "Get Started",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm1 0V8l5 4z"
        />
      </svg>
    ),
    list: [
      {
        title: "Introduction",
        href: "/docs",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M232 48h-64a32 32 0 0 0-32 32v87.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V80a32 32 0 0 0-32-32H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 23.94a7.9 7.9 0 0 0 5.12 7.55A8 8 0 0 0 136 232a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-24 120h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53"
            />
          </svg>
        ),
      },
      {
        title: "Getting Started",
        href: "/docs/getting-started",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M232 48h-64a32 32 0 0 0-32 32v87.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V80a32 32 0 0 0-32-32H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 23.94a7.9 7.9 0 0 0 5.12 7.55A8 8 0 0 0 136 232a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-24 120h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Models",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          className="fill-foreground"
          fillRule="evenodd"
          d="M10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
          clipRule="evenodd"
        />
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/models/overview",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "SUTRA R0 Guide",
        href: "/docs/models/sutra-r0-guide",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "SUTRA V2 Guide",
        href: "/docs/models/sutra-v2-guide",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Integrations",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 48 48"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM40 6H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"
        ></path>
      </svg>
    ),
    list: [
      // {
      // 	group: true,
      // 	title: "Full Stack",
      // 	href: "/docs/integrations",
      // 	icon: LucideAArrowDown,
      // },
      {
        title: "Langchain",
        icon: Icons.langchain,
        href: "/docs/integrations/langchain",
      },

      {
        title: "LiteLLM",
        icon: Icons.liteLLM,
        href: "/docs/integrations/litellm",
      },
      {
        title: "Portkey",
        icon: Icons.portkey,
        href: "/docs/integrations/portkey",
      },
      {
        title: "LlamaIndex",
        icon: Icons.llamaIndex,
        href: "/docs/integrations/llamaindex",
      },
    ],
  },
];

export const cookbooks: Content[] = [
  {
    title: "Cookbooks",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks",
        icon: Icons.book,
      },
      {
        title: "Starter Guide",
        href: "/docs/cookbooks/starter-guide",
        icon: Icons.book,
      },
      {
        title: "Sutra with Agno",
        href: "/docs/cookbooks/sutra-with-agno",
        icon: Icons.book,
      },
      {
        title: "Sutra with LangChain",
        href: "/docs/cookbooks/sutra-with-langchain",
        icon: Icons.book,
      },
      {
        title: "Sutra with LlamaIndex",
        href: "/docs/cookbooks/sutra-with-llamaindex",
        icon: Icons.book,
      },
    ],
  },
];

---
title: 'Projects - Merlin Alex'
projects:
  VS Code:
    - name: 'What is Node Version ?'
      link: 'https://github.com/merlinalex1028/what-is-node-verison'
      desc: "Don't get lost in the Node.js version maze."
      icon: 'i-akar-icons:node-fill'
  Starter Templates:
    - name: 'Starter TypeScript'
      link: 'https://github.com/merlinalex1028/starter-ts'
      desc: 'My TypeScript Library Starter'
      icon: 'i-hugeicons:typescript-01'
    - name: 'Starter VS Code'
      link: 'https://github.com/merlinalex1028/starter-vscode'
      desc: 'My VS Code Extension Starter'
      icon: 'i-tabler:brand-vscode'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />

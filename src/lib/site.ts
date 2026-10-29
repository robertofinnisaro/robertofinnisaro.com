export const owner = {
  name: 'Robert Finnis',
  orcid: '0009-0001-4380-0062',
  github: 'robertofinnisaro',
  linkedin: 'https://www.linkedin.com/in/rob-finnis-meng-afhea-59356b235/',
  scholar: '7AspQegAAAAJ',
  researchgate: 'https://www.researchgate.net/profile/Robert-Finnis',
  openalex: 'A5119672889',
};

export const education = [
  {
    degree: 'MEng (Hons) Mechatronics and Robotic Engineering',
    classification: 'First Class Honours',
    institution: 'University of Hull',
  },
];

export const profiles = [
  { label: 'ORCID', detail: owner.orcid, href: `https://orcid.org/${owner.orcid}` },
  { label: 'Google Scholar', detail: 'Robert Finnis', href: `https://scholar.google.com/citations?user=${owner.scholar}&hl=en` },
  { label: 'ResearchGate', detail: 'Robert Finnis', href: owner.researchgate },
  { label: 'LinkedIn', detail: 'Rob Finnis', href: owner.linkedin },
  { label: 'GitHub', detail: owner.github, href: `https://github.com/${owner.github}` },
];

// Drop the PDF at public/cv/robert-finnis-cv.pdf and the CV link goes live;
// until then pages show a placeholder instead of a broken link.
export const cvPath = '/cv/robert-finnis-cv.pdf';
// The glob is resolved at build time and lists only files that exist; nothing is imported.
export const cvAvailable = Object.keys(import.meta.glob('/public/cv/*.pdf')).includes(`/public${cvPath}`);

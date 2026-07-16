---
title: "Exploring Imagined Movement for Brain–Computer Interface Control: An fNIRS and EEG Review"

description: "A review of EEG, fNIRS and hybrid neuroimaging approaches for decoding imagined movement in brain–computer-interface systems."

abstract: "Brain–Computer Interfaces offer a non-invasive pathway for restoring motor function, particularly for individuals with limb loss. This review explores the effectiveness of electroencephalography and functional near-infrared spectroscopy for decoding Motor Imagery movements in offline and online BCI systems. EEG provides high temporal resolution and accessibility but remains susceptible to electrical noise and motion artifacts. fNIRS offers improved robustness to electrical and movement-related interference, although its haemodynamic response introduces a physiological delay. The review categorises experimental approaches by modality, paradigm and study type, examining signal acquisition, feature extraction and classification methods. Offline studies generally achieve higher accuracy, while advances in machine learning and deep learning are improving online decoding. Hybrid EEG–fNIRS systems combine the temporal precision of EEG with the spatial specificity of fNIRS. The review concludes that online imagined-movement prediction is feasible but remains less reliable than motor execution."

published: 2025-09-19

updated: 2025-09-19

authors:
  - "Robert Finnis"
  - "Adeel Mehmood"
  - "Henning Holle"
  - "Jamshed Iqbal"

publicationType: "Journal Article"

venue: "Brain Sciences"
publisher: "MDPI"
volume: "15"
issue: "9"
pages: "1013"

doi: "10.3390/brainsci15091013"
url: "https://doi.org/10.3390/brainsci15091013"

citation: "Finnis, R.; Mehmood, A.; Holle, H.; Iqbal, J. Exploring Imagined Movement for Brain–Computer Interface Control: An fNIRS and EEG Review. Brain Sciences 2025, 15, 1013. https://doi.org/10.3390/brainsci15091013"

bibtex: |
  @article{finnis2025imaginedmovement,
    author = {Finnis, Robert and Mehmood, Adeel and Holle, Henning and Iqbal, Jamshed},
    title = {Exploring Imagined Movement for Brain--Computer Interface Control: An fNIRS and EEG Review},
    journal = {Brain Sciences},
    year = {2025},
    volume = {15},
    number = {9},
    pages = {1013},
    publisher = {MDPI},
    doi = {10.3390/brainsci15091013},
    url = {https://doi.org/10.3390/brainsci15091013}
  }

tags:
  - "Brain–Computer Interfaces"
  - "Motor Imagery"
  - "EEG"
  - "fNIRS"
  - "Neuroimaging"
  - "Neuroprosthetics"
  - "Machine Learning"
  - "Deep Learning"
  - "Systematic Review"

featured: true
draft: false
---

## Overview

Brain–Computer Interfaces can translate patterns of brain activity into commands
for external devices.

For people with limb loss, this technology may provide a more direct and
intuitive method of controlling a prosthetic limb.

This review examines the ability of two non-invasive neuroimaging modalities to
identify imagined movement:

- Electroencephalography
- Functional near-infrared spectroscopy

It also considers hybrid systems that combine both modalities.

## Research objective

The review investigates how effectively EEG and fNIRS can predict Motor Imagery
movements in offline and online BCI applications.

Motor Imagery describes the mental simulation of a movement without physically
executing it.

This is particularly relevant to prosthetic control because an amputee may be
unable to perform the physical movement that the system is intended to detect.

## Literature search

A two-stage literature search was conducted using:

- PubMed
- Web of Science
- References from relevant selected studies

The database search covered peer-reviewed research published between January
2017 and September 2024.

The search initially identified 604 studies:

- 213 from PubMed
- 391 from Web of Science

After removing duplicates and excluding studies outside the review criteria,
105 articles remained.

## EEG-based BCI systems

EEG records electrical activity using electrodes positioned on the scalp.

Its principal benefits include:

- High temporal resolution
- Relatively accessible equipment
- Established signal-processing methods
- Suitability for real-time experimentation

However, EEG signals are sensitive to:

- Electrical noise
- Motion artifacts
- Eye movements
- Muscle activity
- Electrode placement
- Electrode–scalp impedance
- Environmental interference

Common EEG feature-extraction and classification approaches identified in the
review include:

- Movement-related cortical potentials
- Independent Component Analysis
- Common Spatial Patterns
- Linear Discriminant Analysis
- Support Vector Machines
- Convolutional Neural Networks
- Long Short-Term Memory networks

## fNIRS-based BCI systems

fNIRS measures changes in oxygenated and deoxygenated haemoglobin associated
with cortical activity.

Its primary strengths include:

- Resistance to electromagnetic interference
- Better spatial localisation than EEG
- Suitability for portable systems
- Greater tolerance of some movement artifacts
- Potential use in less controlled environments

The principal disadvantage is the haemodynamic delay. Changes in blood
oxygenation occur more slowly than the electrical activity measured by EEG.

Common fNIRS features include:

- Signal mean
- Signal slope
- Signal variance
- Skewness
- Kurtosis
- Signal peaks
- Changes in oxygenated haemoglobin
- Changes in deoxygenated haemoglobin

## Motor imagery and motor execution

Motor execution generally produces clearer and more repeatable cortical
activation than Motor Imagery.

As a result, systems trained on executed movements frequently produce higher
classification accuracy.

However, Motor Imagery is essential for users who cannot physically perform the
target movement.

MI-based systems face several challenges:

- Individual differences in imagery ability
- Weaker cortical activation
- Longer training requirements
- Lower classification accuracy
- Difficulty identifying fine wrist and finger movements
- Variability between sessions

## Offline experiments

Offline experiments collect brain signals before processing and classifying the
data after the recording session.

This allows researchers to use computationally demanding approaches and perform
more extensive signal analysis.

Offline experiments generally provide:

- Higher classification accuracy
- More extensive preprocessing
- Better algorithm comparison
- More opportunities for model optimisation
- Controlled validation of feature-extraction methods

## Online experiments

Online experiments process signals in real time and use the resulting
classification to provide feedback or control an external device.

These systems must balance:

- Classification accuracy
- Computational latency
- Robustness to noise
- Real-time responsiveness
- Adaptation to unexpected signals

Lightweight classifiers such as Linear Discriminant Analysis remain useful for
online systems because of their relatively low computational requirements.

## Machine learning and deep learning

Recent machine-learning and deep-learning approaches reduce the need for manual
feature engineering.

The review identifies increasing use of:

- Convolutional Neural Networks
- Recurrent Neural Networks
- Long Short-Term Memory models
- Weightless neural networks
- Multimodal feature fusion
- Self-attention mechanisms

Deep-learning systems have improved movement classification in several offline
studies and may increasingly support real-time applications as computational
requirements are reduced.

## Hybrid EEG–fNIRS systems

EEG and fNIRS provide complementary information.

EEG contributes:

- High temporal resolution
- Rapid detection of neural activity

fNIRS contributes:

- Improved spatial specificity
- Greater robustness to electrical interference
- Haemodynamic information
- Increased resistance to some motion artifacts

Hybrid systems can improve classification by combining these complementary
signals.

However, they also introduce:

- More complex sensor arrangements
- Greater computational requirements
- Longer setup times
- More complex signal synchronisation
- Additional processing requirements

## Principal findings

The review concludes that:

1. EEG remains the dominant modality in BCI research.
2. fNIRS is increasingly viable for portable and real-world systems.
3. Motor execution is generally easier to classify than Motor Imagery.
4. Offline experiments continue to outperform online systems.
5. Machine learning is improving the feasibility of online MI decoding.
6. Hybrid EEG–fNIRS systems can improve classification reliability.
7. Online imagined-movement prediction is feasible but remains less reliable
   than executed-movement prediction.

## Future research

Future research should investigate:

- Portable hybrid EEG–fNIRS systems
- Reduced sensor configurations
- Real-time multimodal processing
- Long-term system usability
- More diverse participant groups
- Clinical trials involving amputees
- Improved classification of fine motor intentions
- Reduced training requirements
- Adaptive online machine-learning models

## Conclusion

fNIRS should not be considered only as an alternative to EEG.

Its spatial specificity and resistance to electrical interference make it a
valuable complementary modality in hybrid BCI systems.

Combining EEG and fNIRS offers a promising path towards more reliable,
responsive and practical neuroprosthetic control.

[Read the full paper](/pdfs/exploring-imagined-movement-bci-control.pdf)

[View the publisher page](https://doi.org/10.3390/brainsci15091013)
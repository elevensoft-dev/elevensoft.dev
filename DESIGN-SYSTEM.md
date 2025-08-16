# Elevensoft Design System - Title Hierarchy & Gradient System

## Overview

This document outlines the comprehensive title hierarchy and gradient system implemented across the Elevensoft website. The system provides consistent, scalable, and visually appealing typography that maintains brand identity while ensuring excellent readability and user experience.

## Table of Contents

1. [Title Hierarchy System](#title-hierarchy-system)
2. [Gradient System](#gradient-system)
3. [Contextual Styles](#contextual-styles)
4. [Responsive Utilities](#responsive-utilities)
5. [Animation Utilities](#animation-utilities)
6. [Implementation Guidelines](#implementation-guidelines)
7. [Migration Guide](#migration-guide)
8. [Examples](#examples)

---

## Title Hierarchy System

### Core Principles

- **Clear Visual Hierarchy**: Each title level has distinct styling and purpose
- **Consistent Spacing**: Standardized margins and padding across all levels
- **Responsive Design**: Titles scale appropriately across different screen sizes
- **Accessibility**: High contrast and readable typography for all users

### Title Levels

#### 1. Primary Page Titles (H1)
```css
.title-primary
```
- **Purpose**: Main page headlines, hero sections
- **Size**: 4xl → 5xl → 6xl (responsive)
- **Color**: White (#FFFFFF)
- **Weight**: Bold
- **Margin**: 1.5rem bottom

**Usage Example:**
```tsx
<h1 className="title-primary">
  Recupere sua Soberania Digital
</h1>
```

#### 2. Section Titles (H2)
```css
.title-section
```
- **Purpose**: Major content sections, product features
- **Size**: 3xl → 4xl → 5xl (responsive)
- **Color**: White (#FFFFFF)
- **Weight**: Bold
- **Margin**: 2rem bottom

**Usage Example:**
```tsx
<h2 className="title-section">
  A Jornada da Soberania Digital
</h2>
```

#### 3. Subsection Titles (H3)
```css
.title-subsection
```
- **Purpose**: Content subsections, feature details
- **Size**: 2xl → 3xl (responsive)
- **Color**: White (#FFFFFF)
- **Weight**: Semibold
- **Margin**: 1.5rem bottom

**Usage Example:**
```tsx
<h3 className="title-subsection">
  Execução Guiada e à Prova de Erros
</h3>
```

#### 4. Feature Titles (H4)
```css
.title-feature
```
- **Purpose**: Individual features, component titles
- **Size**: xl → 2xl (responsive)
- **Color**: White (#FFFFFF)
- **Weight**: Semibold
- **Margin**: 1rem bottom

**Usage Example:**
```tsx
<h4 className="title-feature">
  Autenticação Multifator Integrada
</h4>
```

#### 5. Card Titles (H3-H4)
```css
.title-card
```
- **Purpose**: Titles within cards or components
- **Size**: lg (responsive)
- **Color**: White (#FFFFFF)
- **Weight**: Semibold
- **Margin**: 0.75rem bottom

**Usage Example:**
```tsx
<h3 className="title-card">
  Plano Básico
</h3>
```

---

## Gradient System

### Overview

The gradient system provides visual emphasis and brand consistency across different content types. Each gradient variation serves a specific purpose and context.

### Gradient Variations

#### 1. Hero Gradient
```css
.gradient-text-hero
```
- **Purpose**: Main page headlines, hero sections
- **Colors**: White → Orange → Yellow
- **Direction**: 135deg
- **Usage**: Primary brand messaging

**Colors:**
- 0%: rgb(255 255 255) - White
- 50%: rgb(255 138 41) - Orange
- 100%: rgb(255 193 7) - Yellow

#### 2. Primary Gradient
```css
.gradient-text-primary
```
- **Purpose**: Product highlights, main features
- **Colors**: Orange → Yellow
- **Direction**: 135deg
- **Usage**: Product names, key features

**Colors:**
- 0%: rgb(255 138 41) - Orange
- 100%: rgb(255 193 7) - Yellow

#### 3. Secondary Gradient
```css
.gradient-text-secondary
```
- **Purpose**: Supporting content, secondary features
- **Colors**: Yellow → Orange
- **Direction**: 135deg
- **Usage**: Supporting text, secondary highlights

**Colors:**
- 0%: rgb(255 193 7) - Yellow
- 100%: rgb(255 138 41) - Orange

#### 4. Tech Gradient
```css
.gradient-text-tech
```
- **Purpose**: Technology content, innovation features
- **Colors**: Blue → Orange → Yellow
- **Direction**: 135deg
- **Usage**: Technical features, innovation content

**Colors:**
- 0%: rgb(59 130 246) - Blue
- 50%: rgb(255 138 41) - Orange
- 100%: rgb(255 193 7) - Yellow

#### 5. Success Gradient
```css
.gradient-text-success
```
- **Purpose**: Positive outcomes, achievements
- **Colors**: Green → Yellow
- **Direction**: 135deg
- **Usage**: Success messages, achievements

**Colors:**
- 0%: rgb(34 197 94) - Green
- 100%: rgb(255 193 7) - Yellow

#### 6. Warning Gradient
```css
.gradient-text-warning
```
- **Purpose**: Important notices, alerts
- **Colors**: Warning → Orange
- **Direction**: 135deg
- **Usage**: Important notices, alerts

**Colors:**
- 0%: rgb(245 158 11) - Warning
- 100%: rgb(255 138 41) - Orange

### Complete Title Gradients

For titles that should have the entire text in gradient:

#### Hero Title with Full Gradient
```css
.title-gradient-hero
```
- **Usage**: Main page headlines
- **Gradient**: Hero gradient (White → Orange → Yellow)

#### Section Title with Primary Gradient
```css
.title-gradient-section
```
- **Usage**: Section headlines
- **Gradient**: Primary gradient (Orange → Yellow)

#### Subsection Title with Secondary Gradient
```css
.title-gradient-subsection
```
- **Usage**: Subsection headlines
- **Gradient**: Secondary gradient (Yellow → Orange)

#### Feature Title with Tech Gradient
```css
.title-gradient-feature
```
- **Usage**: Feature headlines
- **Gradient**: Tech gradient (Blue → Orange → Yellow)

---

## Contextual Styles

### Product Page Titles
```css
.title-product-hero      /* Hero titles for product pages */
.title-product-section   /* Section titles for product pages */
.title-product-feature   /* Feature titles for product pages */
```

### Landing Page Titles
```css
.title-landing-hero      /* Hero titles for landing pages */
.title-landing-section   /* Section titles for landing pages */
.title-landing-subsection /* Subsection titles for landing pages */
```

### Component Titles
```css
.title-component-main    /* Main titles within components */
.title-component-sub     /* Sub titles within components */
.title-component-feature /* Feature titles within components */
```

---

## Responsive Utilities

### Responsive Title Sizing
```css
.title-responsive-xs     /* 2xl → 3xl → 4xl */
.title-responsive-sm     /* 3xl → 4xl → 5xl */
.title-responsive-md     /* 4xl → 5xl → 6xl */
.title-responsive-lg     /* 5xl → 6xl → 7xl */
.title-responsive-xl     /* 6xl → 7xl → 8xl */
```

### Responsive Behavior
- **Mobile (≤640px)**: Smaller sizes for better mobile experience
- **Tablet (641px-1023px)**: Medium sizes
- **Desktop (≥1024px)**: Full sizes

---

## Animation Utilities

### Animation Classes
```css
.title-animate-fade      /* Fade in/out transitions */
.title-animate-slide-up  /* Slide up animations */
.title-animate-scale     /* Scale on hover */
.title-animate-glow      /* Glow effect on hover */
```

### Usage Example
```tsx
<h1 className="title-primary title-animate-fade title-animate-scale">
  Animated Title
</h1>
```

---

## Implementation Guidelines

### 1. Title Hierarchy Rules

- **Always use semantic HTML**: `<h1>`, `<h2>`, `<h3>`, `<h4>`
- **One H1 per page**: Only one primary title per page
- **Logical nesting**: H1 → H2 → H3 → H4 (no skipping levels)
- **Consistent spacing**: Use the predefined margin classes

### 2. Gradient Application Rules

- **Hero content**: Use `.gradient-text-hero` or `.title-gradient-hero`
- **Product features**: Use `.gradient-text-primary` or `.title-gradient-section`
- **Technology content**: Use `.gradient-text-tech` or `.title-gradient-feature`
- **Supporting text**: Use `.gradient-text-secondary`

### 3. Responsive Considerations

- **Mobile first**: Design for mobile, enhance for larger screens
- **Readability**: Ensure text remains readable at all sizes
- **Touch targets**: Consider touch-friendly sizing on mobile

### 4. Accessibility Guidelines

- **Color contrast**: Ensure sufficient contrast with backgrounds
- **Font sizing**: Maintain readable sizes across all devices
- **Semantic structure**: Use proper heading hierarchy for screen readers

---

## Migration Guide

### From Old System to New System

#### Before (Legacy)
```tsx
<h1 className="mb-6 text-4xl font-bold lg:text-5xl xl:text-6xl">
  Título Principal
</h1>
<h2 className="text-3xl font-bold text-white mb-8">
  Título de Seção
</h2>
```

#### After (New System)
```tsx
<h1 className="title-primary">
  Título Principal
</h1>
<h2 className="title-section">
  Título de Seção
</h2>
```

### Legacy Class Support

The following legacy classes are maintained for backward compatibility:
- `.gradient-text` → Maps to `.gradient-text-hero`
- `.gradient-text-primary` → Maintains existing functionality
- `.gradient-text-tech` → Maintains existing functionality

**Note**: Legacy classes will be deprecated in future versions. Migrate to new system when possible.

---

## Examples

### Complete Page Structure
```tsx
// Hero Section
<h1 className="title-gradient-hero">
  Recupere sua Soberania Digital
</h1>

// Main Section
<h2 className="title-gradient-section">
  A Jornada da Soberania Digital
</h2>

// Subsection
<h3 className="title-gradient-subsection">
  Execução Segura, Erro Zero
</h3>

// Feature
<h4 className="title-gradient-feature">
  Autenticação Multifator Integrada
</h4>
```

### Product Page Example
```tsx
// Product Hero
<h1 className="title-product-hero">
  Execução Segura, Erro Zero
</h1>

// Product Section
<h2 className="title-product-section">
  O Problema: Execução Manual = Desastre Garantido
</h2>

// Product Feature
<h3 className="title-product-feature">
  Execução Guiada e à Prova de Erros
</h3>
```

### Component Example
```tsx
// Component Main Title
<h2 className="title-component-main">
  Os Pilares da Soberania Digital
</h2>

// Component Sub Title
<h3 className="title-component-sub">
  Por que a Elevensoft é Superior?
</h3>

// Component Feature
<h4 className="title-component-feature">
  Unificação Real
</h4>
```

---

## Best Practices

### 1. Consistency
- Use the same title class for similar content types
- Maintain consistent spacing across similar sections
- Apply gradients consistently within the same context

### 2. Performance
- Avoid overusing gradients on mobile devices
- Use appropriate font weights for different screen sizes
- Optimize animations for smooth performance

### 3. Maintenance
- Document any custom title variations
- Use semantic class names for easy identification
- Test across different devices and screen sizes

### 4. Brand Alignment
- Ensure all titles align with brand guidelines
- Use gradients strategically to reinforce brand identity
- Maintain visual hierarchy that supports brand messaging

---

## Support and Updates

### Current Version
- **Version**: 2.0.0
- **Last Updated**: December 2024
- **Compatibility**: All modern browsers, mobile responsive

### Future Updates
- Additional gradient variations
- Enhanced animation options
- Improved responsive utilities
- Accessibility enhancements

### Contact
For questions or suggestions about the design system, contact the development team or refer to the component documentation.

---

*This document is part of the Elevensoft Design System and should be updated as the system evolves.* 